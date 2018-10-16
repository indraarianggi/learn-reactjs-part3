import moment from 'moment';
import expensesReducer from '../../reducers/expenses';

const expenses = [
    {
        id: '1',
        description: 'Gum',
        note: '',
        amount: 195,
        createdAt: 0
    },
    {
        id: '2',
        description: 'Rent',
        note: '',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'Credit Card',
        note: '',
        amount: 4500,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
];

test('should set default state',  () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '2'
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(
        [
            expenses[0],
            expenses[2]
        ]
    );
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const newExpense = {
        id: '4',
        description: 'Telephone bill',
        note: '',
        amount: 1500,
        createdAt: moment(0).add(10, 'days').valueOf()
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
});

test('should edit ad expense by id', () => {
    const updates = {
        description: 'Water bill'
    }

    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates: updates
    }

    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe(updates.description);
});

test('should not edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1'
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
