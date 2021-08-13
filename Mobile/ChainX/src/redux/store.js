import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {searchReducer,itemReducer,userCommentReducer} from './reducers';

const rootReducer = combineReducers({searchReducer,itemReducer,userCommentReducer});

export const Store = createStore(rootReducer,applyMiddleware(thunk));