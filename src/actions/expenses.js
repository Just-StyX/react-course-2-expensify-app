import { v1 as uuid } from "uuid";
import database from '../firebase/firebase'
import { ref, set, remove, update, onValue, off, push, onChildRemoved, onChildChanged, onChildAdded } from 'firebase/database'

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;
        const expense = { description, note, amount, createdAt }
        const reference = ref(database, 'expenses')
        return push(reference, expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))})
    }
}

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
        const reference = ref(database, `expenses/${id}`)
        return remove(reference).then(() => {
            dispatch(removeExpense({ id }))
        })
    }
}

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id, 
    updates
})

export const setExpense = (expenses) => ({
    type: 'SET_EXPENSE',
    expenses
})

export const startSetExpenses = () => {
    return (dispatch) => {
        const reference = ref(database, 'expenses')
        return onValue(reference, (snapshot) => {
            const expenses = [];

            snapshot.forEach((child) => {
                expenses.push({
                    id: child.key,
                    ...child.val()
                })
            })
            dispatch(setExpense(expenses))
        })
    }
}