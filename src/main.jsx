import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { counterReducer } from "./pages/counter/reducer.js";
import CounterPage from "./pages/counter/CounterPage.jsx";

const rootReducer = combineReducers({
    counter: counterReducer,
});

const store = createStore(rootReducer, undefined, composeWithDevTools());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <CounterPage />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
