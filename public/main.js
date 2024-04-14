let mapOptions = {
    center:[47.658779, -117.426048],
    zoom:13
}

let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let pantry1 = new L.Marker([47.660250, -117.391080]);
pantry1.addTo(map);
pantry1.bindPopup("<b>Second Harvest:1234 E Front Ave, Spokane, WA 99202</b><br>Hours:<br>Sunday Closed <br> Monday 8AM4-:30PM <br> Tuesday 8AM-4:30PM <br> Wednesday 8AM-4:30PM <br> Thursday 8AM-4:30PM <br> Friday  8AM-4:30PM");

let pantry2 = new L.Marker([47.733000, -117.413390]);
pantry2.addTo(map);
pantry2.bindPopup("<b>Serve Spokane: 8303 B, N Division St, Spokane, WA 99208</b><br>Hours:<br> Saturday	9-11:30AM <br> Sunday Closed <br> Monday Closed <br> Tuesday 12:30-2:30PM <br> Wednesday 4:30-6:30PM <br> Thursday 12:30-2:30PM <br> Friday Closed");

let pantry3 = new L.Marker([47.653850, -117.407830]);
pantry3.addTo(map);
pantry3.bindPopup("<b>Calvary Baptist Church - Food Distribution Center: 203 E 3rd Ave, Spokane, WA 99202</b><br>Hours <br>: Saturday 9AM-12PM <br> Sunday Closed <br> Monday Closed <br> Tuesday Closed <br> Wednesday Closed <br> Thursday	Closed <br> Friday Closed");

let pantry4 = new L.Marker([47.654770, -117.428340]);
pantry4.addTo(map);
pantry4.bindPopup("<b>The City Gate Food Bank - Food Distribution Center: 170 S Madison St, Spokane, WA 99201</b><br>Hours <br>: Saturday Closed <br> Sunday	Closed <br>  Monday 10:30AM-1:30PM <br> Tuesday 10:30AM-1:30PM <br> Wednesday 10:30-11:45AM <br> Thursday 10:30AM-1:30PM <br> Friday 10:30AM-1:30PM");

let pantry5 = new L.Marker([47.66155, -117.39161]);
pantry5.addTo(map);
pantry5.bindPopup("<b>Union Gospel Mission - Food Distribution Center: 1224 E Trent Ave, Spokane, WA 99202</b><br>Hours: <br> Saturday Closed <br> Sunday Closed <br> Monday 8:30AM-4:30PM <br> Tuesday 8:30AM-4:30PM <br> Wednesday	8:30AM-4:30PM <br> Thursday	8:30AM-4:30PM <br> Friday 8:30AM-4:30PM");

let pantry6 = new L.Marker([47.663538, -117.4340759]);
pantry6.addTo(map);
pantry6.bindPopup("<b>Our Place Community Outreach - Laundry Center: 1509 W College Ave, Spokane, WA 99201</b><br>Hours:<br> Saturday Closed <br> Sunday	Closed <br> Monday Closed <br> Tuesday 9AM-12PM <br> Wednesday	2-6PM <br> Thursday	9AM-12:30PM <br> Friday	Closed");

let pantry7 = new L.Marker([47.7091913, -117.4300379]);
pantry7.addTo(map);
pantry7.bindPopup("<b>Caritas Outreach Ministries: 1228 W Nebraska Ave, Spokane, WA 99205</b><br>Hours:<br>Saturday Closed<br>Sunday Closed<br>Monday 10:30AM-1PM<br>Tuesday Closed<br>Wednesday 10:30AM-1PM<br>Thursday 10:30AM-1PM<br>Friday Closed");

let pantry8 = new L.Marker([47.699079, -117.3787782]);
pantry8.addTo(map);
pantry8.bindPopup("<b>Northwest Connect (Northeast Food Pantry) - Food Distribution Center: 4520 N Crestline St, Spokane, WA 99207</b><br>Hours:<br> Saturday Closed <br> Sunday Closed <br> Monday Closed <br> Tuesday 11AM-1PM <br> Wednesday	Closed <br> Thursday	9-11AM <br> Friday Closed");

let pantry9 = new L.Marker([47.684344, -117.4341011]);
pantry9.addTo(map);
pantry9.bindPopup("<b>Family of Faith Church - Food Distribution Center: 1505 W Cleveland Ave, Spokane, WA 99205</b><br>Hours: <br> Saturday	Closed <br> Sunday Closed <br> Monday Closed <br> Tuesday 9-11AM <br> Wednesday Closed <br> Thursday	Closed <br> Friday Closed");

let pantry10 = new L.Marker([47.630118, -117.3682237]);
pantry10.addTo(map);
pantry10.bindPopup("<b>Southside Food Bank - Food Distribution Center: 2934 E 27th Ave, Spokane, WA 99223</b><br>Hours:<br> Saturday 11AM-12PM <br> Sunday Closed <br> Monday	Closed <br> Tuesday Closed <br> Wednesday Closed <br> Thursday	Closed v Friday Closed");

let pantry11 = new L.Marker([47.67463, -117.40765]);
pantry11.addTo(map);
pantry11.bindPopup("<b>Salvation Army-Food Distribution Center: 222 E Indiana Ave, Spokane, WA 99207</b><br>Hours:<br> Saturday	Closed <br> Sunday Closed <br> Monday	9AM-4PM <br> Tuesday	9AM-4PM <br> Wednesday 9AM-4PM <br> Thursday 9AM-4PM <br> Friday 9AM-4PM");

let pantry12 = new L.Marker([47.65108, -117.37777]);
pantry12.addTo(map);
pantry12.bindPopup("<b>Dr. Martin Luther King Jr. Community Center - Food Distribution Center: 500 S Stone St, Spokane, WA 99202</b><br>Hours:<br> Saturday Closed <br> Sunday Closed <br> Monday 1-3PM <br> Tuesday Closed <br> Wednesday 1-3PM <br> Thursday Closed <br> Friday 1-3PM");

let pantry13 = new L.Marker([47.69397, -117.45281]);
pantry13.addTo(map);
pantry13.bindPopup("<b>Audubon Park Daily Bread - Food Distribution Center: 3906 N Driscoll Blvd, Spokane, WA 99205</b><br>Hours:<br> Saturday Closed <br> Sunday Closed <br> Monday Closed <br> Tuesday 8:30-11:30AM <br> Wednesday Closed <br> Thursday Closed <br> Friday Closed");

let pantry14 = new L.Marker([47.665149, -117.4448041]);
pantry14.addTo(map);
pantry14.bindPopup("<b>Off Broadway Family Outreach - Food Distribution Center: 2225 W Mallon Ave, Spokane, WA 99201</b><br>Hours: <br> Saturday Closed <br> Sunday Closed <br> Monday 2-5PM <br> Tuesday Closed <br> Wednesday Closed <br> Thursday Closed <br> Friday Closed");

let pantry15 = new L.Marker([47.655301, -117.3824776]);
pantry15.addTo(map);
pantry15.bindPopup("<b>Spear Ministries - Food Distribution Center:1905 E Pacific Ave, Spokane, WA 99202</b><br>Hours:<br> Saturday Closed <br> Sunday Closed <br> Monday Closed <br> Tuesday 1-2:30PM <br> Wednesday 1-2:30PM <br> Thursday Closed <br> Friday 9-10AM");


