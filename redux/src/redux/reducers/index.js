import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import usersReducer from './usersReducer';
import booksReducer from './booksReducer';


export const rootReducer = combineReducers({
    userState: usersReducer,
    bookState: booksReducer,
    form: formReducer
});