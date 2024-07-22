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

document.getElementById('driverForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var busNumber = document.getElementById('busNumber').value;

    // Save driver data to Firebase
    database.ref('drivers/' + busNumber).set({
        name: name,
        phone: phone,
        email: email,
        busNumber: busNumber,
        location: {
            latitude: null,
            longitude: null
        }
    });

    alert('Driver details submitted!');
});
