Template.users.helpers({
	'user': function(){
		return Meteor.users.find();
	}
});

Template.users.onCreated(function bodyOnCreated() {
	Meteor.subscribe('users');
});


Accounts.ui.config({
  requestPermissions: {
    facebook: ['user_likes'],
    github: ['user', 'repo']
  },
  requestOfflineToken: {
    google: true
  },
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});
