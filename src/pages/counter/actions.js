import {
    COUNTER_RESET,
    COUNTER_DECREMENT,
    COUNTER_INCREMENT,
} from "./variables";

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
