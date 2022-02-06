import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'
import { onValue, ref } from 'firebase/database'

const createMockStore = configureMockStore([thunk])

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
    // const expenseData = {
    //     description: 'Rent',
    //     amount: 0,
    //     createdAt: 100,
    //     note: `This was last month's rent` 
    // }
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('Should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        note: 'This one is better',
        amount: 3000,
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        const reference = ref(database, `expenses/${actions[0].expense.id}`)
        onValue(reference, (snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done()
        })
    })
})

test('Should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        })
        const reference = ref(database, `expenses/${actions[0].expense.id}`)
        onValue(reference, (snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefaults);
            done()
        })
    })
})
// test('Should set up add expense action object with default values', () => {
//     const expenseData = {
//         description: '',
//         amount: 0,
//         createdAt: 0,
//         note: '' 
//     }
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             ...expenseData
//         }
//     })
// })