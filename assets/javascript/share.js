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
    $("#logoutButton").show()

    $("#shareButton").on("click", function(event) { 
        event.preventDefault();
        var name = displayName
        // var location = $("#destination").val().trim();
        var startDate = $("#startDate").val().trim();
        var endDate = $("#endDate").val().trim();
        var numberPeople = $("#spaceAvailable").val().trim();
        var campsiteName = $("#campsite").val().trim();
        var requirements = $("#requirements").val().trim();
        var campingStyle = $("#campingStyle").val().trim();
        var userId = uid;
        var userEmail = email
        var location = document.getElementById("my-select-share");
        var value = location.options[location.selectedIndex].value;
        location = value
        console.log(location)
        // $("#my-select").on("value", function() {

        //     console.log(value);
        // })

        
    
        console.log(displayName)
    
        var newCampsite = {
            name: name,
            location: location,
            startDate: startDate,
            endDate: endDate,
            numberPeople: numberPeople,
            campsiteName: campsiteName,
            campingStyle: campingStyle,
            requirements: requirements,
            userId: userId,
            userEmail: userEmail,
        }
    
        database.ref('posts/').push(newCampsite);
        window.location.replace("find.html");
    })

} else {
    // User is signed out.
    // ...
    $("#logoutButton").hide()

}
});


$("#logoutButton").on("click", function() {
    firebase.auth().signOut();
    window.location.replace("index.html")
})

$("#share-button-header").on("click", function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        // User is signed in.
        window.location.replace("share.html")
        } else {
        // User is signed out.
        window.location.replace("login.html")
        }
    });
})