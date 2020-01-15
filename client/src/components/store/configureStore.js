import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import categoriesReducer from '../reducers/categories'
import notesReducer from '../reducers/notes'
import userReducer from '../reducers/user'

const configureStore = () => {
    const store = createStore(combineReducers({
        categories: categoriesReducer,
        notes: notesReducer,
        user: userReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore