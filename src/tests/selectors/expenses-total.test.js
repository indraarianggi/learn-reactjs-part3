import moment from 'moment';
import selectExpenseTotal from '../../selectors/expenses-total';

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
        amount: 1095,
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

test('should return 0 if no expenses', () => {
    const result = selectExpenseTotal([]);
    expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
    const result = selectExpenseTotal([expenses[0]]);
    expect(result).toBe(expenses[0].amount);
});

test('should correctly add up multiple expense', () => {
    let expectedValue = 0;
    expenses.forEach(expense => {
        expectedValue += expense.amount;
    });

    const result = selectExpenseTotal(expenses);
    expect(result).toBe(expectedValue);
});
