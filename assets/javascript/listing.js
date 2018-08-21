// NPS Geolocation & Image API requests up here






//DarkSky API

var lat = "";//from NPS API Latitude;
var long = "";//from NPS API longitDUDE;
var time = "";//unix time conversion for 1st day of stay;
var APIKey = "cd0b8764bd785f33f097cb738485aa0d";
var queryUrl = "https://api.darksky.net/forecast/" + APIKey + "/" + lat + "," + long + "," + time + "?exclude=currently,minutely,hourly,alerts,flags";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response){


weatherIcon = response.daily.data.icon.val(); //and use switch statement to display the correct icons
})

time