  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAONZYnyHUjy1Sng-pxNkStJ_NBkLM83Dw",
    authDomain: "campshare-2c108.firebaseapp.com",
    databaseURL: "https://campshare-2c108.firebaseio.com",
    projectId: "campshare-2c108",
    storageBucket: "campshare-2c108.appspot.com",
    messagingSenderId: "850750063272"
  };
  firebase.initializeApp(config);

  database = firebase.database();

$("#shareButton").on("click", function(event) { 
    event.preventDefault();
    var name = $("#").val().trim();
    var location = $("#").val().trim();
    var date = $("#").val().trim();
    var numberPeople = $("#").val().trim();;
    var campingStyle = $("#").val().trim();;
    var notes = $("#").val().trim();;

    var newCampsite = {
        name: name,
        location: location,
        date: date,
        numberPeople: numberPeople,
        campingStyle: campingStyle,
        notes: notes,
    }

    database.ref(user).push(newCampsite);

    

})