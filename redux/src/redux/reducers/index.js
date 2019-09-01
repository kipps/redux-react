import { combineReducers } from 'redux';
import moviesReducer from './acyncReduxer';

export const rootReducer = combineReducers({
    movies: moviesReducer
});