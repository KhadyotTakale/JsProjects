const btnEl = document.getElementById("btn");
const ansEl = document.getElementById("ans");
const inputEl = document.getElementById("num");

btnEl.addEventListener("click", () => {
    let num = parseInt(inputEl.value);
    if (isNaN(num) || num < 0) {
        ansEl.innerHTML = `Please enter a non-negative integer.`;
        return;
    }
    
    let finalans = factorial(num);
    ansEl.innerHTML = `The factorial of ${num} is: ${finalans}`;
});

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
