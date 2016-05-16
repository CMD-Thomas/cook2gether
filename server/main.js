Meteor.startup(() => {
	//Meteor fixes this
	Meteor.publish("users", function () {
		return Meteor.users.find({}, {fields:{username: 1, _id: 1}});
	});
	//Ingredients are allowed to be seen by all and thus public available even on client
	Meteor.publish("ingredients", function(){
		return Ingredients.find();
	});
	//Chatrooms should be only visible when when currentUser is one of the chatIds
	//The client has access to all chatrooms where he/she is part off
	Meteor.publish("chatrooms",function(){
		return ChatRooms.find({
			$or: [
	    		{chatIds: this.userId},
	    	],
		});
	});
	//Messages should be visible when your usedId is in a roomId
	Meteor.publish("messages", function(roomId){
	  return Messages.find({roomId : roomId});
	});
});
