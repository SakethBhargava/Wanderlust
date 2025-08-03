mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: listing.geometry.coordinates,
    zoom: 12
});

// Marker for your listing
new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h4>${listing.location}</h4><p>Exact location will be shared after booking</p>`)
    )
    .addTo(map);

// Add a circle around the listing (e.g., 1000 meters = 1km)
map.on('load', () => {
    const radiusInMeters = 1500;

    map.addSource('listing-circle', {
        type: 'geojson',
        data: createGeoJSONCircle(listing.geometry.coordinates, radiusInMeters)
    });

    map.addLayer({
        id: 'listing-circle-layer',
        type: 'fill',
        source: 'listing-circle',
        layout: {},
        paint: {
            'fill-color': '#ff0000',
            'fill-opacity': 0.15
        }
    });

    geolocateControl.trigger();
});

// Geolocate user (optional)
const geolocateControl = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showAccuracyCircle: true,
    showUserLocation: true,
    showUserHeading: true,
});
map.addControl(geolocateControl);

// Utility to create a circle polygon in GeoJSON
function createGeoJSONCircle(center, radiusInMeters, points = 64) {
    const [longitude, latitude] = center;
    const coords = [];
    const earthRadius = 6371000; // meters

    for (let i = 0; i < points; i++) {
        const angle = (i * 360) / points;
        const radians = (angle * Math.PI) / 180;

        const dx = radiusInMeters * Math.cos(radians);
        const dy = radiusInMeters * Math.sin(radians);

        const deltaLng = dx / (earthRadius * Math.cos((latitude * Math.PI) / 180) * (Math.PI / 180));
        const deltaLat = dy / (earthRadius * (Math.PI / 180));

        coords.push([longitude + deltaLng, latitude + deltaLat]);
    }

    coords.push(coords[0]); // close the circle

    return {
        type: 'Feature',
        geometry: {
            type: 'Polygon',
            coordinates: [coords]
        }
    };
}
