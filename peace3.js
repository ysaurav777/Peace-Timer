let twentySecondsBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");
let timerTextEl = document.getElementById("timerText");
let uniqueNo = null;
let counterVal = 0;

function timer() {
    if (counterVal > 1) {
        counterVal = counterVal - 1;
        timerTextEl.textContent = counterVal + " seconds left";
    } else {
        timerTextEl.textContent = "Your moment is complete";
        clearInterval(uniqueNo);
    }
}

function allneed() {
    timerTextEl.textContent = counterVal + " seconds left";
    uniqueNo = setInterval(timer, 1000);
}

thirtySecondsBtnEl.addEventListener('click', function() {
    counterVal = 30;
    clearInterval(uniqueNo);
    allneed();
});

twentySecondsBtnEl.addEventListener('click', function() {
    counterVal = 20;
    clearInterval(uniqueNo);
    allneed();
});

fortySecondsBtnEl.addEventListener('click', function() {
    counterVal = 40;
    clearInterval(uniqueNo);
    allneed();
});

oneMinuteBtnEl.addEventListener('click', function() {
    counterVal = 60;
    clearInterval(uniqueNo);
    allneed();
});