import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});

console.log(store.getState());

// Actions - an object that gets sent to the store

// increment the count
store.dispatch(
    {
        type: 'INCREMENT'
    }
);

// decrement the count
store.dispatch(
    {
        type: 'DECREMENT'
    }
);

// reset to zero
store.dispatch(
    {
        type: 'RESET'
    }
);

console.log(store.getState());
