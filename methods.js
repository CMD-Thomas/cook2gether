import { Meteor } from 'meteor/meteor';

Ingredients = new Mongo.Collection('ingredients');
ChatRooms   = new Meteor.Collection('chatrooms');
Messages    = new Meteor.Collection('messages');

Meteor.methods({
  'ing.insert': function(name){
    check(name, String);
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Ingredients.insert({
      name: name,
      createdBy: Meteor.userId(),
    }) 
  },
  'ing.remove': function(ingId){
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Ingredients.remove(ingId);
  },
  'cRoom.insert': function(chatIds){
    check(chatIds, [String])
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    ChatRooms.insert({
      chatIds: chatIds
    })
  },
  'msg.insert': function(roomId, messages){
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Messages.insert({
      roomId : roomId,
      messages: messages,
      name: Meteor.user().username
    })
  },
});

