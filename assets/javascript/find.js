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

  firebase.database().ref('/posts').on('value', function(snapshot) {
    console.log(snapshot);

    // Variables from database values
    var displayName = snapshot.val();
    var campDestination = snapshot.val();
    var numberPeople = snapshot.val();
    var campingStyle = snapshot.val();
    var notes = snapshot.val();

  });

  database.ref('posts/').on("child_added", function(snapshot) {
    console.log(snapshot.val().location);
    console.log(snapshot.val().name)
    console.log(snapshot.val().startDate)
    console.log(snapshot.val().endDate)
  })

    $(".camp-spot").attr(campDestination)
    $('.camp-requirements').attr(displayName + campingStyle + notes + numberPeople)

    database.ref('posts' + uid).pull(newCampsite);

  var ref = database.ref("server/saving-data/fireblog/posts");

// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});