function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 51.905969, lng: -8.5161637 },
        { lat: 53.4560538, lng: -6.2683397 },
        { lat: 51.852441, lng: -8.4883274 },
        { lat: 51.8905054, lng: -8.5252062 },
        { lat: 51.8668801, lng: -8.8910066 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}