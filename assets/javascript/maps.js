var SFLL = [37.7577627, -122.4726194]
var map;
      function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: SFLL[0], lng: SFLL[1]},
          zoom: 8
        });
      }

      function recenter() {
        //This is going to handle an event
        
        //going to grab an element from html
        //going to look up latLong
        //call google maps api
      }