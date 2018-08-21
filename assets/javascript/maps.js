var SFLL = [37.7577627, -122.4726194]
SOURCE_OF_TRUTH = {
  "-1":[37.1925702, -123.8109914, 6],
  "1":[37.8526119, -119.5420258, 8],
  "2":[36.4709345, -118.6925393, 8],
  "3":[41.4358712, -124.5847391, 8],
  "4":[33.9002331, -116.1415649, 8],
  "5":[40.4971386, -121.5506459, 8],
  "6":[36.4799442, -118.1737032, 8],
  "7":[36.49387, -121.2463069, 8],
  "8":[33.9638713, -120.4534455, 8],

}

var yosemite={lat: 37.8526119, lng: -119.5420258}
var map;
      function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: SOURCE_OF_TRUTH["-1"][0], lng: SOURCE_OF_TRUTH["-1"][1]},
          zoom: SOURCE_OF_TRUTH["-1"][2]});
          
      
      }

      function recenter(parkCode) {
        console.log(parkCode, SOURCE_OF_TRUTH[parkCode])
        //This is going to handle an event
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: SOURCE_OF_TRUTH[parkCode][0], lng: SOURCE_OF_TRUTH[parkCode][1]},
          zoom: SOURCE_OF_TRUTH[parkCode][2]
        }); 
        var marker = new google.maps.Marker({position: {lat: SOURCE_OF_TRUTH[parkCode][0], lng: SOURCE_OF_TRUTH[parkCode][1]}, map: map})      
        //going to look up latLong
        //call google maps api
      }