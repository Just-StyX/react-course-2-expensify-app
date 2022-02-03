import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Should set up remove expense action object', () => {
    const action = removeExpense({ id: '1234ac' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1234ac'
    })
})

test('Should set up edit expense action object', () => {
    const action = editExpense( '123abc', { note: 'A new note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'A new note'
        } 
    })
})

test('Should set up add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 0,
        createdAt: 100,
        note: `This was last month's rent` 
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should set up add expense action object with default values', () => {
    const expenseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: '' 
    }
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    })
})