function initMap() {
    var map = L.map('map').setView([-1.286389, 36.817223], 15); // Change to your coordinates

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([-1.286389, 36.817223]).addTo(map) // Change to your location
        .bindPopup('Grey Salon Hospital')
        .openPopup();
}

document.addEventListener("DOMContentLoaded", initMap);