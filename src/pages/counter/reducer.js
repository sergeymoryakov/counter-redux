import {
    COUNTER_DECREMENT,
    COUNTER_INCREMENT,
    COUNTER_RESET,
} from "./variables";

const initialState = {
    value: 0,
};

export function counterReducer(state = initialState, action) {
    switch (action.type) {
        case COUNTER_RESET:
            return {
                ...state,
                value: initialState.value,
            };
        case COUNTER_INCREMENT:
            return {
                ...state,
                value: state.value + 1,
            };
        case COUNTER_DECREMENT:
            return {
                ...state,
                value: state.value - 1,
            };

        default:
            return {
                ...state,
            };
    }
}
