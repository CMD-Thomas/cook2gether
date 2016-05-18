Tracker.autorun(function(){
  console.log("Autorun  " + Session.get('roomid'));
  Meteor.subscribe('messages', Session.get('roomid'));
  Meteor.subscribe('chatrooms');
});

Template.chat.helpers({
  //I am returning all usernames here, which is not a problem since they are public anyway
  'name': function(){
    return Meteor.users.find().username;
  }
});

Template.input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) { 
      if (Meteor.user() && Session.get('roomid'))
      {
        var name    = Meteor.user().username;
        var message = document.getElementById('message').value;

        if (message !== '') {
          var roomId = Session.get('roomid');

          Meteor.call('msg.insert',roomId, message, function(err, result){
          });
          document.getElementById('message').value = '';
          message.value = '';
        }
      }
      else
      {
         alert("login to chat");
      } 
    }
  }
}