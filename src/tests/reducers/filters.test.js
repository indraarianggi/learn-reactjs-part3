import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter value', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(
        {
            text: '',
            sortBy: 'date',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
        }
    );
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sort: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const action = { type: 'SORT_BY_DATE' };

    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'Something to filter';
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: text});
    expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
    const startDate = moment();
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: startDate });
    expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
    const endDate = moment();
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: endDate });
    expect(state.endDate).toEqual(endDate);
});
