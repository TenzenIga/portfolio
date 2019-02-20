export default function initMap() {
    // The location of Uluru
    var uluru = {lat: 59.917791, lng: 30.473280};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});

    }
