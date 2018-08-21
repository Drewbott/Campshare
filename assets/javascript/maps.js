var SFLL = [37.7577627, -122.4726194]
SOURCE_OF_TRUTH = {
  "-1":[37.7577627, -122.4726194, 8],
  "1":[37.8501367,-121.9339533, 20]

}



var map;
      function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: SOURCE_OF_TRUTH["-1"][0], lng: SOURCE_OF_TRUTH["-1"][1]},
          zoom: SOURCE_OF_TRUTH["-1"][2]
        });
      }

      function recenter(parkCode) {
        console.log(parkCode, SOURCE_OF_TRUTH[parkCode])
        //This is going to handle an event
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: SOURCE_OF_TRUTH[parkCode][0], lng: SOURCE_OF_TRUTH[parkCode][1]},
          zoom: SOURCE_OF_TRUTH[parkCode][2]
        });        //going to grab an element from html
        //going to look up latLong
        //call google maps api
      }