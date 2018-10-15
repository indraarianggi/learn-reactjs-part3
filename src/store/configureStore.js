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
        ),

        /*
        ** [OPTIONAL]
        ** Configuration for Redux Developer Tools (for browser extention)
        ** https://github.com/zalmoxisus/redux-devtools-extension
        */
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}
