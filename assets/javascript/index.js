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

var database = firebase.database()

// National Parks Service API
var queryURL_NPS = "https://developer.nps.gov/api/v1/parks?parkCode&api_key=5cZGKFkWtjCEhTA6R4fLucsuyuPYAkLhmZgeIYbw&limit=100&fields=images"
console.log(queryURL_NPS)

$.get(queryURL_NPS, function(response){
  console.log(response)
  for(var i = 0; i < 100; i++){
    // response.data[i].images[0]

  }
  
  var index=0
  setInterval(function(){
    index++
    // $(".jumbotron").attr("style",'background-image: url('+ response.data[index].images[0].url+')', "height:"+ "auto")
    $(".jumbotron").css({"background-image": "url("+ response.data[index].images[0].url+')'})
  },3000)
});

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
  } else {
    // User is signed out.
    // ...
  }
});





// $.ajax({
//     url: queryURL_NPS,
//     method: "GET"
//   }) 

  // .then(function(response) {
  //   console.log(response)
  // });