let stopwatch = document.querySelector(".stopwatch");
let startButton = document.querySelector(".start");
let stopButton = document.querySelector(".stop");
let resetButton = document.querySelector(".reset");

function myTimer(){
    //var timeDisplay = new Date();
    //document.querySelector(".stopwatch").innerHTML = timeDisplay.toLocaleTimeString();
    let timeDisplay = function(){
        
    }
    stopwatch.innerHTML = timeDisplay();
} 


startButton.addEventListener('click', function(){
    console.log("time should start ticking");
    setInterval(myTimer, 1000);
});
stopButton.addEventListener('click', function(){
    console.log("stop");
    clearInterval(myTimer);
});
resetButton.addEventListener('click', function(){
    console.log("reset");
});

