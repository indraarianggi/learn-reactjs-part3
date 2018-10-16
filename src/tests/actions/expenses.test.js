import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual(
        {
            type: 'REMOVE_EXPENSE',
            id: '123abc'
        }
    );
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { description: 'Rent', note: 'This is a rent expense' });
    expect(action).toEqual(
        {
            type: 'EDIT_EXPENSE',
            id: '123abc',
            updates: {
                description: 'Rent',
                note: 'This is a rent expense'
            }
        }
    );
});

test('should setup add expense action object with provided value', () => {
    const expenseData = {
        description: 'Rent',
        amount: 193500,
        createdAt: 1000,
        note: 'This was last months rent'
    }

    const action = addExpense(expenseData);
    expect(action).toEqual(
        {
            type: 'ADD_EXPENSE',
            expense: {
                ...expenseData,
                id: expect.any(String)
            }
        }
    )
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual(
        {
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                createdAt: 0,
                description: '',
                amount: 0,
                note: ''
            }
        }
    )
});
