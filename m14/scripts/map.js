let map;

function initMap() {
  const myLatLng = { lat: 35.59814074544034, lng: -82.5514566040051 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: 'Hello World!',
  });
}