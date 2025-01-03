var map = L.map('map');

// Add a basemap (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

fetch('/data/counters.geojson')
    .then(response => response.json())
    .then(geojsonData => {
        // Add GeoJSON data to the map
        var geojsonLayer = L.geoJSON(geojsonData, {
            onEachFeature: function (feature, layer) {
                // Add a label with the counter name
                if (feature.properties && feature.properties.name) {
                    layer.bindTooltip(feature.properties.name, {
                        permanent: true,  // Always show the label
                        direction: 'right'  // Position the label to the right of the marker
                    });
                }
            }
        }).addTo(map);

        // Fit the map view to the bounds of the GeoJSON layer
        map.fitBounds(geojsonLayer.getBounds());
    })
    .catch(error => console.error('Error fetching GeoJSON data:', error));
