var config = {
    apiKey: "AIzaSyAONZYnyHUjy1Sng-pxNkStJ_NBkLM83Dw",
    authDomain: "campshare-2c108.firebaseapp.com",
    databaseURL: "https://campshare-2c108.firebaseio.com",
    projectId: "campshare-2c108",
    storageBucket: "campshare-2c108.appspot.com",
    messagingSenderId: "850750063272"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  
firebase.auth().onAuthStateChanged(function(user) {
if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
    console.log(displayName)
    console.log(uid) 
    $("#profileButton").text(displayName);
    $("#profileButton").attr("href", "#")
    $("#shareButton").on("click", function(event) { 
        event.preventDefault();
        var name = displayName
        var location = $("#destination").val().trim();
        var startDate = $("#startDate").val().trim();
        var endDate = $("#endDate").val().trim();
        var numberPeople = $("#spaceAvailable").val().trim();
        var campingStyle = $("#typeOfSite").val().trim();
        var requirements = $("#requirements").val().trim();
    
        console.log(displayName)
    
        var newCampsite = {
            name: name,
            location: location,
            startDate: startDate,
            endDate: endDate,
            numberPeople: numberPeople,
            campingStyle: campingStyle,
            requirements: requirements,
        }
    
        database.ref('users/' + uid).push(newCampsite);
    
    })

} else {
    // User is signed out.
    // ...
}
});

