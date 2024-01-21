import "./styles.css";
import { applyMiddleware, createStore, compose } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./redux/rootReducer";
import { INIT_APPLICATION } from "./redux/variables";
import {
    asyncIncrement,
    changeTheme,
    decrement,
    increment,
} from "./redux/actions";

const counter = document.getElementById("counter");
const addBtnNode = document.getElementById("add");
const subBtnNode = document.getElementById("sub");
const asyncBtnNode = document.getElementById("async");
const themeBtnNode = document.getElementById("theme");

// function logger(state) {
//     return function (next) {
//         return function (action) {
//             console.log("Prev state", state.getState());
//             console.log("Action", action);
//             const newState = next(action);
//             console.log("New State", newState);
//             return newState;
//         };
//     };
// }

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
);

addBtnNode.addEventListener("click", () => {
    store.dispatch(increment());
});

subBtnNode.addEventListener("click", () => {
    store.dispatch(decrement());
});

asyncBtnNode.addEventListener("click", () => {
    store.dispatch(asyncIncrement());
});

themeBtnNode.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("light")
        ? "dark"
        : "light";
    store.dispatch(changeTheme(newTheme));
});

store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state.counter;
    document.body.className = state.theme.value;

    [addBtnNode, subBtnNode, asyncBtnNode, themeBtnNode].forEach((btn) => {
        btn.disabled = state.theme.disabled;
    });
});

store.dispatch({ type: INIT_APPLICATION });
