import { createStore } from 'redux';

// Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const setCount = ({ count = 0 } = {}) => ({
    type: 'SET',
    count: count
});

const resetCount = () => ({
    type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions - an object that gets sent to the store

// increment the count
store.dispatch(incrementCount({ incrementBy: 5 }));

// decrement the count
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 7 }));

// reset to zero
store.dispatch(resetCount());

// set count to 101
store.dispatch(setCount({ count: 101 }));
