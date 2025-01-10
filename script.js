const counter = document.getElementById('counter');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');

let count = 0

increase.addEventListener('click', () => {
    count += 1
    counter.textContent = count
})

decrease.addEventListener('click', () => {
    count -= 1
    counter.textContent = count
})

reset.addEventListener('click', () => {
    count = 0
    counter.textContent = count
})