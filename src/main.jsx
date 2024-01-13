import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { counterReducer } from "./pages/counter/reducer.js";
import CounterPage from "./pages/counter/CounterPage.jsx";

import "./api/mock-server.js";

const rootReducer = combineReducers({
    counter: counterReducer,
});

const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <CounterPage />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
