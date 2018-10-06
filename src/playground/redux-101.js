import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            const increment = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + increment
            };
        case 'DECREMENT':
            const decrement = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrement
            };
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
store.dispatch(
    {
        type: 'INCREMENT',
        incrementBy: 5
    }
);

// decrement the count
store.dispatch(
    {
        type: 'DECREMENT',
        decrementBy: 10
    }
);

// reset to zero
store.dispatch(
    {
        type: 'RESET'
    }
);
