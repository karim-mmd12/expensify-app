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
console.log('testing');
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));