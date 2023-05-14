import { DECREMENT, INCREMENT, RANDOM_INCREMENT } from "../types";

const initialState = {
    count: 0,
    appName: "Redux App",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        case RANDOM_INCREMENT:
            return {
                ...state,
                count: state.count + action.payload,
            };
        default:
            return state;
    }
};

export default reducer;