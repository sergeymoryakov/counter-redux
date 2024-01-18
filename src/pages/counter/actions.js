import {
    COUNTER_RESET,
    COUNTER_DECREMENT,
    COUNTER_INCREMENT,
    COUNTER_LOADING,
    COUNTER_LOADING_SUCCESS,
    COUNTER_LOADING_ERROR,
} from "./variables";

import { API } from "./api";

export const load = () => {
    return (dispatch) => {
        dispatch({ type: COUNTER_LOADING });

        API.getCounter()
            .then((data) => {
                dispatch({
                    type: COUNTER_LOADING_SUCCESS,
                    payload: data.counter,
                });
            })
            .catch((error) => {
                console.error(error);
                dispatch({
                    type: COUNTER_LOADING_ERROR,
                });
            });
    };
};

export const reset = () => {
    return {
        type: COUNTER_RESET,
    };
};

export const increment = () => {
    return {
        type: COUNTER_INCREMENT,
    };
};

export const decrement = () => {
    return {
        type: COUNTER_DECREMENT,
    };
};
