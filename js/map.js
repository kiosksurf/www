var map;

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function onSuccess(position) {

	var mapOptions = {
		zoom: 15,
		streetViewControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE
		}
	};

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

	var marker = new google.maps.Marker({
		position: pos,
		map: map,
		title: '',
		icon: 'http://cademeufretado.com.br/img/baixaPin.png'
	});

	marker.setAnimation(google.maps.Animation.DROP);

	map.setCenter(pos);

}	
function onError(error) {
	alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
}

google.maps.event.addDomListener(window, 'load', onDeviceReady);