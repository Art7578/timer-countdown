const minutesBlock = document.getElementById('js-minutes');
const secondsBlock = document.getElementById('js-seconds');
const hundrethsBlock = document.getElementById('js-hundreths');
const btnStart = document.getElementById('js-start');
const btnStop = document.getElementById('js-stop');
const btnReset = document.getElementById('js-reset');

let interval;
let minutes = 0;
let seconds = 0;
let miiliseconds = 0;

const startTimer = () => {
    miiliseconds++;

    if (miiliseconds <= 99) {
        hundrethsBlock.innerHTML = miiliseconds;
    }
    if (miiliseconds == 100) {
        hundrethsBlock.innerHTML = '00';
    }

    if (miiliseconds > 99) {
        seconds++;
        secondsBlock.innerHTML = '0' + seconds;

        miiliseconds = 0;
        
    }

    if (seconds > 9) {
        secondsBlock.innerHTML = seconds;
    }

    if (seconds > 59) {
        minutes++;
        minutesBlock.innerHTML = '0' + minutes;

        seconds = 0;
        secondsBlock.innerHTML = '0' + seconds
    }

    if (minutes > 9) {
        minutesBlock.innerHTML = minutes;
    }
}

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10)
});
btnStop.addEventListener('click', () => {
    clearInterval(interval);
});
btnReset.addEventListener('click', () => {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    miiliseconds = 0;

    minutesBlock.innerHTML = '00';
    secondsBlock.innerHTML = '00';
    hundrethsBlock.innerHTML = '00';
});
