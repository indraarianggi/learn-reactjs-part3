import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    // Store creation
    const store = createStore(
        combineReducers(
            {
                // root_state_name : reducer_which_manage_it
                expenses: expensesReducer,
                filters: filtersReducer
            }
        )
    );

    return store;
}
