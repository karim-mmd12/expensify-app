import React from 'react';
import ReactDOM from 'react-dom';
// import expenses from './reducers/expenses';
// import filters from './reducers/filters';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import AppRouter from './routers/AppRouter';



const store = configureStore();
/* store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
}); */

store.dispatch(addExpense({ description: 'Water Bill', createdAt: 1611133330000, amount: 10450 }));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1601862810012, amount: 5550 }));
store.dispatch(addExpense({ description: 'Rent Bill', createdAt: 1611862810012, amount: 14570 }));
store.dispatch(addExpense({ description: 'Water Bill', createdAt: 1613862810012, amount: 10000 }));
store.dispatch(setTextFilter(''));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));