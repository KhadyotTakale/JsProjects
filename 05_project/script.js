const counterEl = document.getElementById("counter");

let counter = 0;

const increaseEl = document.getElementById("increase");
const decreaseEl = document.getElementById("decrease");
const resetEl = document.getElementById("reset");

function updateCounter() {
    counterEl.innerText = counter;
}

function add() {
    counter++;
    updateCounter();
    
}

function sub() {
    counter--;
    updateCounter();
}

function reset() {
    counter = 0;
    updateCounter();
}

increaseEl.addEventListener("click", add);
resetEl.addEventListener("click", reset);
decreaseEl.addEventListener("click", sub);


