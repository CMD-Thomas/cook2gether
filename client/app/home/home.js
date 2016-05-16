Template.users.helpers({
	'user': function(){
		return Meteor.users.find();
	}
})

Template.users.onCreated(function bodyOnCreated() {
	Meteor.subscribe('users');
  Meteor.subscribe('markers');
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

// Template.map.rendered = function() {
//   L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';

//   var map = L.map('map', {
//     doubleClickZoom: false
//   }).setView([49.25044, -123.137], 13);

//   map.locate({setView: true, maxZoom: 16});

//   L.tileLayer.provider('Thunderforest.Outdoors').addTo(map);
//   function onLocationFound(e) {
//     console.log("clicked allow")
//       var radius = e.accuracy / 2;

//       L.marker(e.latlng).addTo(map)
//           .bindPopup("You are within " + radius + " meters from this point").openPopup();

//       L.circle(e.latlng, radius).addTo(map);
//   }

//   map.on('locationfound', onLocationFound);

// };


//   map.on('dblclick', function(event) {
//     Markers.insert({latlng: event.latlng});
//   });


