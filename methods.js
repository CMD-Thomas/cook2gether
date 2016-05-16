import { Meteor } from 'meteor/meteor';

Ingredients = new Mongo.Collection('ingredients');
ChatRooms   = new Meteor.Collection('chatrooms');
Markers     = new Meteor.Collection('markers');
Messages    = new Meteor.Collection('messages');

Meteor.methods({
  'ing.insert'(name){
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Ingredients.insert({
      name: name,
      createdBy: Meteor.userId(),
    }) 
  },
  'ing.remove'(ingId){
    Ingredients.remove(ingId);
  },
  'cRoom.insert'(chatIds){
    ChatRooms.insert({
      chatIds: chatIds
    })
  },
  'msg.insert'(roomId, messages){
    Messages.insert({
      roomId : roomId,
      messages: messages,
      name: Meteor.user().username,
      userId: Meteor.user()._id
    })
  },
});

