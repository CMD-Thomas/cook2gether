Router.configure({
  // the default layout
  layoutTemplate: 'nav'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('user/:_id', function(){
	var ingredients = Ingredients.find({createdBy: this.params._id});
	var user = Meteor.users.findOne({_id: this.params._id});
	var params = this.params._id;
	if(params === Meteor.user()._id){
		params = true;
	} else {
		params = false;
	}
	this.render('user',{
		data: {
			user: user,
			ing: ingredients,
			params: params
		}
	});
});

Router.route('/chat', function(){
    var messages = Messages.find({roomid: Session.get('roomId')});
    console.log(messages)
	this.render('chat', {
		data: {
			messages: messages
		}
	});
// this.render('chat');
});

//bertje:  5WnaYLgWY5EcpazNq
//Bertje2: SWdShXmDSmWFQCSST
//Zelf:    5WnaYLgWY5EcpazNq