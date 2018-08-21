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
    // displayParkInfo();
  })



//   function displayParkInfo() {
    
//     var queryURL_NPS = "https://developer.nps.gov/api/v1/campgrounds?q=yosemite&api_key=5cZGKFkWtjCEhTA6R4fLucsuyuPYAkLhmZgeIYbw&limit=100&fields=latLong"

//     $.ajax({

//       url: queryURL_NPS,
//       method: "GET"
//     }).then(function(response) {
//       console.log(response.data)
//       console.log(response.data[0].name)
//     })
//   }


  $('#my-select').on('change', function(){
    var e = document.getElementById("my-select");
    var value = e.options[e.selectedIndex].value;
    console.log(value);
    var park;
    var weatherLat= "";
    var weatherLong = "";
    if (value == 1){
      park = 'yose';
      weatherLat = "37.8526119";
      weatherLong = "-119.5420258";
    } 
    else if (value == 2){
        park = 'seki';
        weatherLat = "36.4907037";
        weatherLong = "-118.827748";
    }
    else if (value == 3){
        park = 'redw';
        weatherLat = "41.1709195";
        weatherLong = "-123.9769672";
    }
    else if (value == 4){
        park = 'jotr';
        weatherLat = "33.9002331";
        weatherLong = "-116.1415649";
    }
    else if (value == 5){
        park = 'lavo';
        weatherLat = "40.4971386";
        weatherLong = "-121.5506459";
    }
    else if (value == 6){
        park = 'deva';
        weatherLat = "36.7243049";
        weatherLong = "-117.2581319";
    }
    else if (value == 7){
        park = 'pinn';
        weatherLat = "36.4788925";
        weatherLong = "-121.2241197";
    }
    else if (value == 8){
        park = 'chis';
        weatherLat = "33.9255922";
        weatherLong = "-120.0337459";
    }
// Weather and Skycon

var coords = {
    "1":[37.8526119, -119.5420258, 10],
    "2":[36.4907037, -118.827748, 10],
    "3":[41.1709195, -123.9769672, 11],
    "4":[33.9002331, -116.1415649, 10],
    "5":[40.4971386, -121.5506459, 10],
    "6":[36.7243049, -117.2581319, 8],
    "7":[36.4788925, -121.2241197, 12],
    "8":[33.9255922, -120.0337459, 9],
  
  }
function weatherCall(){
  var origTime = childSnap.val().startDate;//unix time conversion for 1st day of stay;
  var time = moment(origTime,MM-DD-YYYY);
  var APIKey = "cd0b8764bd785f33f097cb738485aa0d";
  var queryUrl_weather = "https://api.darksky.net/forecast/" + APIKey + "/" + weatherLat + "," + weatherLong + "," + time + "?exclude=currently,minutely,hourly,alerts,flags";
  
  $.ajax({
    url: queryUrl_weather,
    method: "GET"
  }).then(function(response){
  
  
  weatherIcon = response.daily.data.icon.val(); //and use switch statement to display the correct icons
  })
}

//Drew's Code
    recenter(value)

    
    var queryURL = `https://developer.nps.gov/api/v1/parks?parkCode=${park}&api_key=5cZGKFkWtjCEhTA6R4fLucsuyuPYAkLhmZgeIYbw&limit=100&fields=images`
    $.get(queryURL,function(response) {
        //use reponse to populate divs
        console.log(response.data[0].name)
        $(".park-title").text(response.data[0].name)
        database.ref('posts/').orderByChild('location').equalTo(park).on("value", (snapshot) => {
            $('.find-container').empty()
            console.log('CHICKEN');
            console.log(snapshot.val())

            snapshot.forEach(function(childSnap){
              campDiv = $("<div>")
              campDiv.attr("class","card")
              campDiv2 = $("<div>")
              campDiv2.attr("class","row")
              campDiv3 = $("<div>")
              campDiv3.attr("class","col-md-3")

              campDiv3img = $("<img>")
              campDiv3img.attr("src", response.data[0].images[0].url) // call snapshot.val for camp imgUrl
              campDiv3img.attr("class","card-img-top")
              campDiv3.append(campDiv3img)
              campDiv3.append("<p>" + childSnap.val().name + " wants to share their site at with "  + childSnap.val().numberPeople + " from " + childSnap.val().startDate + " to " + childSnap.val().endDate + ". " + childSnap.val().name + " camping style is " + childSnap.val().campingStyle + " & wants you to bring " + childSnap.val().requirements + ".")
              //creates a button to send to the host's email
              campDiv3.append('<button class="contact-btn" onclick=location.href="mailto:' + childSnap.val().userEmail + '">Send Email to Host</button>')
            
              var skycons = new Skycons({"color":"white"})
              let weatDiv = $("<div>")
              let weatCan = $("<canvas>")
              weatCan.attr("width", "125")
              weatCan.attr("height", "125")
              weatCan.append(skycons.())
              weatDiv.append(weatCan)
              $(".find-container").append()
              console.log(childSnap.val().name)
            })
            
          })
    })
  })

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
} else {
    // User is signed out.
    // ...
    $("#logoutButton").hide()
}
});

$("#logoutButton").on("click", function() {
    firebase.auth().signOut();
    location.reload();
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