var drawMap = function() {

  var map = L.map('container');
  map.setView([47.6550,-122.3080],8);

  
  var layer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
  
  layer.addTo(map);
  getData();
 
}


var getData = function() {


  $.ajax({
  		  url:'data/response.json',
		  type: "get",
    success:function(dat) {
       customBuild(dat);
    },
   dataType:"json"
}) 

}

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

