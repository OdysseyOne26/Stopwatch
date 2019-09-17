let startButton = document.querySelector(".btn-start");
startButton.addEventListener("click", startTimer);
let resetButton = document.querySelector(".btn-reset").addEventListener("click", resetTimer);
let msSpan = document.querySelector(".milliseconds");
let secondsSpan = document.querySelector(".seconds");
let minutesSpan = document.querySelector(".minutes");
let milliseconds = seconds = minutes = 1;
let active = true;

function startTimer(e) {
    if (active === false){
        stopTimer(e.target);
        return true;
    }

    this.style.backgroundColor = "#D43E3F";
    this.innerHTML = "Pause";
    startIntervalMs();
}

function startIntervalMs() {
    active = false;
    interval = setInterval(() => {
        if (milliseconds === 10) {
            milliseconds = 0;
            updateTime(seconds, secondsSpan);
        }
        msSpan.innerHTML = milliseconds;
        milliseconds++;
    }, 100)
}

function updateTime(time, element) {
    if (time < 10) {
        element.innerHTML = `0${time}`;
    } else if (time === 60) {
        element.innerHTML = "00";
        seconds = 0;
        updateTime(minutes, minutesSpan);
        minutes++;
    } else {
        element.innerHTML = time;
    }
    seconds++;
}

function stopTimer(item) {
    clearInterval(interval);
    active = true;
    item.style.backgroundColor = "#4CAF50";
    item.innerHTML = "Continue";
}

function resetTimer() {
    clearInterval(interval);
    active = true;
    msSpan.innerHTML = "0";
    secondsSpan.innerHTML = "00";
    minutesSpan.innerHTML = "00";
    startButton.innerHTML = "Start";
    startButton.style.backgroundColor = "#4CAF50"
    milliseconds = seconds = minutes = 1;
}