Template.chat.onCreated(function bodyOnCreated() {
  console.log("oncreated in chat.js  " + Session.get('roomid'));
});

Tracker.autorun(function(){
  Meteor.subscribe('messages', Session.get('roomid'));
  Meteor.subscribe('chatrooms');
})

Template.chat.helpers({
  //I am returning all usernames here, which is not a problem since they are public anyway
  'name': function(){
    return Meteor.users.find().username;
  }
});

Template.input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) { 
      console.log(Session.get('roomid'));
        //In event of newroom this does net get executed
        if (Meteor.user() && Session.get('roomid'))
        {
              var name    = Meteor.user().username;
              var message = document.getElementById('message').value;
    
              if (message !== '') {
                var roomId = Session.get('roomid');
                console.log("roomid "+ roomId);

                Meteor.call('msg.insert',roomId, message, function(err, result){
                  //console.log(err);
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