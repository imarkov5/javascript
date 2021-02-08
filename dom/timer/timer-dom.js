let stopwatch = document.querySelector(".stopwatch");
let startButton = document.querySelector(".start");
let stopButton = document.querySelector(".stop");
let resetButton = document.querySelector(".reset");
let oneTenthSec = 0;
let sec = 0;
let stopTime = true;

function startTimer(){
    if(stopTime == true){
        stopTime = false;
        myTimer();
    }
} 
function stopTimer(){
    if(stopTime == false){
        stopTime = true;
    }
}

function myTimer(){
    if(stopTime == false){
        oneTenthSec = parseInt(oneTenthSec);
        sec = parseInt(sec);

        oneTenthSec += 1;

        if(oneTenthSec == 10){
            sec += 1;
            oneTenthSec = 0;
        }

        if(oneTenthSec < 10 || oneTenthSec == 0){
            oneTenthSec = '0' + oneTenthSec;
        }
        if(sec < 10 || sec == 0){
            sec = '0' + sec;
        }
        stopwatch.innerHTML = sec + ':' + oneTenthSec;

        setTimeout("myTimer()", 100);
    }
}

function resetTimer(){
    sec = 0;
    oneTenthSec = 0;
    stopTime = true;
    stopwatch.innerHTML = '00:00';
}
startButton.addEventListener('click', function(){
    console.log("time should start ticking");
    startTimer();
});
stopButton.addEventListener('click', function(){
    console.log("stop");
    stopTimer();
});
resetButton.addEventListener('click', function(){
    console.log("reset");
    resetTimer();
});