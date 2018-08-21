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
    var park
    if (value == 1){
      park = 'yose';
    } 
    else if (value == 2){
        park = 'seki';
    }
    else if (value == 3){
        park = 'redw';
    }
    else if (value == 4){
        park = 'jotr';
    }
    else if (value == 5){
        park = 'lavo';
    }
    else if (value == 6){
        park = 'deva';
    }
    else if (value == 7){
        park = 'pinn';
    }
    else if (value == 8){
        park = 'chis';
    }

//Drew's Code
    recenter(value)

    
    var queryURL = `https://developer.nps.gov/api/v1/parks?parkCode=${park}&api_key=5cZGKFkWtjCEhTA6R4fLucsuyuPYAkLhmZgeIYbw&limit=100`
    $.get(queryURL,function(response) {
        //use reponse to populate divs
        console.log(response.data[0].name)
        $(".park-title").text(response.data[0].name)
        database.ref('/posts').orderByChild('location').equalTo(park).on("value", (snapshot) => {
            $('.park-title').empty()

            //creates a button to send to the host's email
            $(".park-title").append('<button onclick=location.href="mailto:' + userEmail + '">Send Email to Host</button>')


            snapshot.forEach(data => {
                console.log(data)
            //   var p = $('<p>')
            //   p.text(data.val().campingStyle)
            //  console.log(data.val().campingStyle)
            //   $('.park-title').append(p)
            })
          })
    })
  })
//   $(".dropdown").onclick(function dropdownSelect() {
//     var createDiv = $("<div class='findSite jumbotron'>")
//     createDiv.text(campsiteName)
//   })


  //     $(".camp-spot").attr(campDestination)
//     $('.camp-requirements').attr(displayName + campingStyle + notes + numberPeople)

//     database.ref('users/' + uid).pull(newCampsite);

//   });

//   var ref = database.ref("server/saving-data/fireblog/posts");

// // Attach an asynchronous callback to read the data at our posts reference
// ref.on("value", function(snapshot) {
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });
