import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { startSetExpenses } from './actions/expenses'
import 'normalize.css/normalize.css'
import './styles/style.scss'
import AppRouter from './routers/AppRouter'
import './firebase/firebase.js'

const store = configureStore()
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'))
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('root'))
})
