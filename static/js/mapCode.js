	// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
	mapboxgl.accessToken = 'pk.eyJ1IjoidG9tdmRiMTEiLCJhIjoiY2w0NWliMHBpMDEwODNjcGJ3aDc3OGYzeSJ9.x8AbcVT7uoUfCbjuVZq--w';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/navigation-night-v1',
center: [5.133306556029083,52.08566089364163],
zoom: 12
});
 
// // Create a default Marker and add it to the map.
// const marker1 = new mapboxgl.Marker()
// .setLngLat([5.133306556029083,52.08566089364163])
// .addTo(map);
 
// Create a default Marker, colored black, rotated 45 degrees.
const marker2 = new mapboxgl.Marker({ color: '#4f52c9', rotation: 10 })
.setLngLat([5.133306556029083,52.08566089364163])
.addTo(map);