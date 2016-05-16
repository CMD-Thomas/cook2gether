Template.ingredients.onCreated(function bodyOnCreated() {
	Meteor.subscribe('ingredients');
    Meteor.subscribe('messages');
    Meteor.subscribe('chatrooms');
});

 
Template.ingredients.helpers({
	isCreatedby() {
    	return this.createdBy === Meteor.userId();
  	}
});


Template.user.events({
	'submit form' : function(event){
		event.preventDefault();
		console.log("test")
		ingredientName = document.querySelector('#ingredientInput').value;

		Meteor.call('ing.insert', ingredientName, function(err, result){
        });

		document.querySelector('#ingredientInput').value = '';
	},
	'click .deleteIng' : function(event){
		console.log('delt')
		event.preventDefault();
		var ingId = this._id;
		Meteor.call('ing.remove', ingId)
	},
    'click .cook2gether':function(){
        Session.set('currentId',this.user._id);
        //Check whether we can find a chatroom with both currentuser and other user
        var res=ChatRooms.findOne({chatIds:{$all:[this.user._id,Meteor.userId()]}});

        //If we have a result there is already a chatroom, so we can use that one
        if(res)
        {
            //Tmrobotix2 room "9fAnjsnugJi9Fyc99"

            console.log(res._id)
            //already room exists 9fAnjsnugJi9Fyc99
            console.log("room exists")
            Session.set("roomid", res._id);
            console.log("user.js " + Session.get('roomid'))
        }
        else{
            //no room exists
            console.log("newroom")
            // //Grab both chatids 
            var chatIds = [this.user._id, Meteor.userId()];
            // console.log(chatIds);
            //insert them in chatroom to make a new one
            Meteor.call('cRoom.insert', chatIds, function(err, result){
            });
            // //After pushing it to db pick it up
            var res=ChatRooms.findOne({chatIds:{$all:[this.user._id,Meteor.userId()]}});
            Session.set("roomid", res._id);
            console.log("newroom user.js " + Session.get('roomid'))
        }
    }
})

