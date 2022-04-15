
var elcheckboxSun = document.querySelector(".sun") 
var elcheckboxSun = document.querySelector("#id-sun")  

var elcheckboxSleep = document.querySelector(".sleep")
var elcheckboxSleep = document.querySelector("#id-sleep")

var elcheckboxAftobus = document.querySelector(".aftobus")
var elcheckboxAftobus = document.querySelector("#id-aftobus")

var elcheckboxMood = document.querySelector(".mood")
var elcheckboxMood = document.querySelector("#id-mood")

var elcheckboxWind = document.querySelector(".wind")
var elcheckboxWind = document.querySelector("#id-wind")


var elBtnRun = document.querySelector(".btn-run")
var elTextRun = document.querySelector(".text-run")

elBtnRun.addEventListener("click", function (e) {
  e.preventDefault()
  var sun = elcheckboxSun.checked;
  var sleep = elcheckboxSleep.checked;
  var aftobus = elcheckboxAftobus.checked;
  var mood = elcheckboxMood.checked;
  var wint = elcheckboxWind.checked;
  
  console.log(sun, sleep, aftobus, mood, wint);
  
  var message = "";
  
  if ((sun && !sleep && !wint && !aftobus) || (sun && !sleep && mood && !aftobus)) {
    message = "Uqishga boramiz!!! 🏃🏻🏃🏻🏃🏻";
  } else {
    message = "Uqishga bormaymiz??? 🙅🙅🙅";
  }
  elTextRun.textContent = message
})
