import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App';

import 'bootstrap/dist/css/bootstrap.css'

import configureStore from './components/store/configureStore'

import {startSetCategories} from './components/actions/categories'
import {startSetNotes} from './components/actions/notes'
import {startGetUser} from './components/actions/user'



const store = configureStore()

console.log(store.getState())
store.subscribe(() => {
    console.log(store.getState())
})

//handle all page reloads, and also get the initial data from the server to store it in the redux store
if(localStorage.getItem('authToken')) {
    store.dispatch(startSetCategories())
    store.dispatch(startSetNotes())
    store.dispatch(startGetUser())

}
const ele = (

    <Provider store = {store}>
        <App/>
    </Provider>

)

ReactDOM.render(ele, document.getElementById('root'));