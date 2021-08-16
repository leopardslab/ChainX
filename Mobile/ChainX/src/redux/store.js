import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import searchReducer from './reducers';

const rootReducer = combineReducers({searchReducer});

export const Store = createStore(rootReducer,applyMiddleware(thunk));