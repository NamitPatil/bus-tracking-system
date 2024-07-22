// Your web app's Firebase configuration
// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyAMn7IaS1ttRAD4am7RSkEL9vcXe15jbZg",
    authDomain: "bus-tracking-dkte.firebaseapp.com",
    databaseURL: "https://bus-tracking-dkte-default-rtdb.firebaseio.com/",
    projectId: "bus-tracking-dkte",
    storageBucket: "bus-tracking-dkte.appspot.com",
    messagingSenderId: "939719508769",
    appId: "1:939719508769:web:1e4989dcbe15c5bac57460",
    measurementId: "G-1F49JSBEC8"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the database
var database = firebase.database();

// Initialize and add the map
let map;
let marker;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 },
        zoom: 15,
    });
    marker = new google.maps.Marker({
        map: map,
    });
}

initMap();

function updateMap(location) {
    const position = { lat: location.latitude, lng: location.longitude };
    map.setCenter(position);
    marker.setPosition(position);
}

// Create bus number buttons
const buttonsContainer = document.getElementById('buttonsContainer');
for (let i = 1; i <= 30; i++) {
    const button = document.createElement('button');
    button.textContent = 'Bus ' + i;
    button.className = 'bus-button';
    button.onclick = function () {
        const busNumber = i;
        database.ref('drivers/' + busNumber + '/location').on('value', (snapshot) => {
            const location = snapshot.val();
            if (location) {
                updateMap(location);
            }
        });
    };
    buttonsContainer.appendChild(button);
}
