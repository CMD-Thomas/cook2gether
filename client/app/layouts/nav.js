Template.nav.events({
	'click .menu-toggle' : function(event){
		event.preventDefault();
		var nav = document.querySelector('nav')
		nav.classList.toggle('nav--active')
	}
});

