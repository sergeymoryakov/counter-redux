import "./styles.css";

const counter = document.getElementById("counter");
const addBtnNode = document.getElementById("add");
const subBtnNode = document.getElementById("sub");
const asyncBtnNode = document.getElementById("async");
const themeBtnNode = document.getElementById("theme");

let state = 0;

function render() {
    counter.textContent = state.toString();
}

addBtnNode.addEventListener("click", () => {
    state++;
    render();
});

subBtnNode.addEventListener("click", () => {
    state--;
    render();
});

asyncBtnNode.addEventListener("click", () => {
    setTimeout(() => {
        state++;
        render();
    }, 2000);
});

themeBtnNode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

render();
