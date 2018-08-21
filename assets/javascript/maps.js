var cali = [37.1925702, -123.8109914, 5]
SOURCE_OF_TRUTH = {
  "1":[37.8526119, -119.5420258, 10],
  "2":[36.4907037, -118.827748, 10],
  "3":[41.1709195, -123.9769672, 11],
  "4":[33.9002331, -116.1415649, 10],
  "5":[40.4971386, -121.5506459, 10],
  "6":[36.7243049, -117.2581319, 8],
  "7":[36.4788925, -121.2241197, 12],
  "8":[33.9255922, -120.0337459, 9],

}

var map;
      function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: cali[0], lng: cali[1]},
          zoom: cali[2]});
          for (var place in SOURCE_OF_TRUTH){
          var marker = new google.maps.Marker({position: {lat: SOURCE_OF_TRUTH[place][0], lng: SOURCE_OF_TRUTH[place][1]}, map: map})

        }
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