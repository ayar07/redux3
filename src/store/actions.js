import { DECREMENT, INCREMENT, RANDOM_INCREMENT } from "./types";

const increment = () => {
    return {
        type: INCREMENT,
    };
};

const decrement = () => {
    return {
        type: DECREMENT,
    };
};

const rndIncrement = () => {
    return {
        type: RANDOM_INCREMENT,
        paylaod: Math.floor(Math.random() * 100),
    };
};

const rndDecrement = () => {
    return {
        type: RANDOM_INCREMENT,
        paylaod: Math.floor(Math.random() * 100),
    };
};

export { increment, decrement, rndIncrement, rndDecrement, }