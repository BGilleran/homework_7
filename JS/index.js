// turn on stop function 
function turnOnStopLight(){
clearLights(); document.getElementById("stopLight").style.backgroundColor = "red";
}

// turn on slow function
function turnOnSlowLight(){
 clearLights(); document.getElementById("slowLight").style.backgroundColor = "yellow";
}

// turn on go function
function turnOnGoLight(){
 clearLights(); document.getElementById("goLight").style.backgroundColor = "green";
}

// set stop light click event
document.getElementById("stopButton").onclick = turnOnStopLight;

// set slow light click event
document.getElementById("slowButton").onclick = turnOnSlowLight;

// set go light click event
document.getElementById("goButton").onclick = turnOnGoLight;


function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}

