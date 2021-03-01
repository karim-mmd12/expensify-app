import { v4 as uuid } from 'uuid';
// ADD_EXPENSE
// Takes an object and generate an action from it
export const addExpense = (
    {
        description = '',
        note = '',
        amount = '',
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE
export const removeExpense = (
    {
        id
    } = {}
) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// Edit_EXPENSE
export const editExpense = (
    id,
    updates
) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});