
var drawMap = function() {

  var map = L.map('container');
  map.setView([47.6550,-122.3080],5);

  
  var layer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
  
  layer.addTo(map);
  getData(map);
 
}


var getData = function(map) {


  $.ajax({
  		  url:'data/response.json',
		  type: "get",
    success:function(dat) {
       customBuild(dat,map);
    },
   dataType:"json"
}) 

}

var customBuild = function(data,map) {
		 data.map(function(crime) {
		   if(crime.Race=="Black or African American") {
		   						   var marker = new L.circle(
		   						   [crime.lat,crime.lng],100,{
		   						   color:'red',
		   						   opacity:.5
		   }).addTo(map);
		   } else if (crime.Race=="White") {
		   	 	  var marker = new L.circle(
		   		  [crime.lat,crime.lng],100,{
		   		  color:'blue',
		   		  opacity:.5
		   }).addTo(map);
		   } else if (crime.Race=="Asian") {
		   	 var marker = new L.circle(
		   [crime.lat,crime.lng],100,{
		   color:'yellow',
		   opacity:.5
		   }).addTo(map);
		   } else {
		   var marker = new L.circle(
		   [crime.lat,crime.lng],100,{
		   color:'green',
		   opacity:.5
		   }).addTo(map);
		   }
		   var text = crime['Date Searched'] + " , " + crime['Armed or Unarmed?']+' , '+crime['Hit or Killed?'];
		   marker.bindPopup(text);
		   marker.on('mouseover', function (e) {
           		this.openPopup();
          	 });
           	marker.on('mouseout', function (e) {
            		this.closePopup();
        	});
	})
	
}

