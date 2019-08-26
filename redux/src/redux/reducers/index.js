import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import booksReducer from './booksReducer';


export const rootReducer = combineReducers({
    userState: usersReducer,
    bookState: booksReducer
});
