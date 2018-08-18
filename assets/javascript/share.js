var config = {
    apiKey: "AIzaSyAONZYnyHUjy1Sng-pxNkStJ_NBkLM83Dw",
    authDomain: "campshare-2c108.firebaseapp.com",
    databaseURL: "https://campshare-2c108.firebaseio.com",
    projectId: "campshare-2c108",
    storageBucket: "campshare-2c108.appspot.com",
    messagingSenderId: "850750063272"
  };
  firebase.initializeApp(config);
  var db = firebase.database();
  
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
    $("#profileButton").attr(href, "#")
    $("#shareButton").on("click", function(event) { 
        event.preventDefault();
        // var name = $("#").val().trim();
        var location = $("#destination").val().trim();
        var date = $("#length").val().trim();
        var numberPeople = $("#spaceAvailable").val().trim();
        var campingStyle = $("#typeOfSite").val().trim();
        var notes = $("#notes").val().trim();
    
        console.log(location)
        function writeUserData(userId, name, email, imageUrl) {
            firebase.database().ref('users/' + userId).set({
              username: displayName,
              email: email,
              profile_picture : imageUrl,
              // Add more stuff here
            });
            }
        var newCampsite = {
            name: name,
            location: location,
            date: date,
            numberPeople: numberPeople,
            campingStyle: campingStyle,
            notes: notes,
        }
    
        db.ref('users/' + uid).push(newCampsite);
    
    })
} else {
    // User is signed out.
    // ...
}
});

