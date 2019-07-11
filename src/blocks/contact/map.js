 export default function(){   
    var map;
    var mapContainer = document.querySelector('.contact_map');
    var mapCenter = {lat: 50.431782, lng: 30.516382};
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.431782, lng: 30.516382},
        zoom: 15,
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
        position: mapCenter,
        map: map,
        // icon: "img/LogoMap.png"
    });

    var infowindow = new google.maps.InfoWindow({
        content: "Hello World"
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);   
    });
 };    