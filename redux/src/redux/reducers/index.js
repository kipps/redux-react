import { combineReducers } from 'redux';
import accountReducer from './account';
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
    accountReducer: accountReducer,
    form: formReducer
});
