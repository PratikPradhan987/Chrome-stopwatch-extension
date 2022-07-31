var seconds = 0;
var minutes = 0;
var hours = 0;

// var intervalTime = 1000;

var viewerSeconds = 0;
var viewerMinutes = 0;
var viewerHours = 0;

const starterBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
const stopwatchDisplay = document.querySelector("#timer");
const tensBtn = document.querySelector("#tens");

function countUp() {
    

  seconds++;
  
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  } 
    
  
   if (seconds < 10) {
    viewerSeconds = "0" + seconds.toString();
  } else {
    viewerSeconds = seconds;
  }
  
  if (minutes < 10) {
    viewerMinutes = "0" + minutes.toString();
  } else {
    viewerMinutes = minutes;
  }
  
  if (hours < 10) {
    viewerHours = "0" + hours.toString();
  } else {
    viewerHours = hours;
  }
  
  
 stopwatchDisplay.innerHTML = viewerHours + ":" + viewerMinutes + ":" + viewerSeconds;
  
}


starterBtn.onclick = () => {
    chrome.storage.sync.get('author', ({ author }) => {
        console.log('author: ', author);
    });
  console.log("start click");
  interval = window.setInterval(countUp, 1000);
  starterBtn.innerHTML  = "";
  starterBtn.style.backgroundColor = "#000000";  
}


stopBtn.onclick = () => {
 console.log("stop click"); 
  window.clearInterval(interval);
  starterBtn.innerHTML = "start";
  starterBtn.style.backgroundColor = "#5800FF";
}

resetBtn.onclick = () => {
  console.log("reset click");
  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  
  stopwatchDisplay.innerHTML = "00:00:00";
  
  starterBtn.innerHTML = "start";
  starterBtn.style.backgroundColor = "#5800FF";

}














