import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addExpense, editExpense, removeExpense, startAddExpense, setExpense, startSetExpenses } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'
import { onValue, ref, set } from 'firebase/database'


test('Should set up set expense object with data', () => {
    const action = setExpense(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSE',
        expenses
    })
})
test('Should fetch data from firebase', (done) => {
    const store = createMockStore({ })
    store.dispatch(startSetExpenses())
    const actions = store.getActions()
    expect(actions[0]).toEqual({
        type: 'SET_EXPENSE',
        expenses
    })
    done()
})

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({ id, description, amount, note, createdAt }) => {
        expensesData[id] = { description, amount, note, createdAt }
    })
    const reference = ref(database, `expenses`)
    set(reference, expensesData)
    done()
})

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
            //expect(snapshot.val()).toEqual(expenseData);
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

