// Function to draw your map
var drawMap = function() {

  // Create map and set viewd
  var map = L.map('container');
  map.setView([47.6550,-122.3080],8);

  
  var layer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
  
  layer.addTo(map);
  // Create an tile layer variable using the appropriate url
  // Execute your function to get data
  getData();
 
}

// Function for getting data
var getData = function() {

  // Execute an AJAX request to get the data in data/response.js
  var data;
  $.ajax({
  		  url:'data/response.json';
		  type: "get",
    success:function(dat) {
       data = dat
    } 
   dataType:"json"
}) 
 /*  customBuild(data);
  // When your request is successful, call your customBuild function

}
// Do something creative with the data here!  
var customBuild = function(data) {
		 data.map(function(crime) {
		   var marker = new L.circle(
		   [crime.lat,crime.lng],50,{
		   color:'red',
		   opacity:.5
		   }).addTo(map);
		   var text = crime['Armed or Unarmed']+' , '+crime['Hit or Killed'];
		   marker.bindPopup(text);
		   marker.on('mouseover', function (e) {
           this.openPopup();
           });
           marker.on('mouseout', function (e) {
            this.closePopup();
        });
		   
	}
}
*/