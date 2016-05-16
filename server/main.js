Meteor.startup(() => {
	//Meteor fixes this
	Meteor.publish("users", function () {
		return Meteor.users.find();
	});
	//Ingredients are allowed to be seen by all and thus public available even on client
	Meteor.publish("ingredients", function(){
		return Ingredients.find();
	});
	//Chatrooms should be only visible when when currentUser is one of the chatIds
	// Meteor.publish("chatrooms",function(){
	// 	return ChatRooms.find();
	// });
	Meteor.publish("chatrooms",function(){
		return ChatRooms.find({
			$or: [
	    		{chatIds: this.userId},
	    	],
		});
	});
	//Messages should be visible when your usedId is in a roomId
	Meteor.publish("messages", function(roomId){
	  return Messages.find({
	  	$or: [
	  		{roomId : roomId},
	  	],
	  });
	});

	// Meteor.publish("roomAndMessages", function () {
	//   return [
	//     ChatRooms.find({

	//     }),
	//     Messages.find({
	//     	$or: [
	//     		{roomId: roomId},
	//     	],
	//     })
	//   ];
	// });


//14 ChatRooms met $or
	// Meteor.publish("roomAndMessages", function (roomId) {
	//   return [
	//     ChatRooms.find({$or: [{chatIds: this.userId}],
	//     }),
	//     //Find messages who are coupled to the room
	//     Messages.find(),
	//   ];
	// });

});


//Autopublish - subscribe id 
//Polling 
//Deploy