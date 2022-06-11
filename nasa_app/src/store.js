import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getPostReducer, postListReducer } from './reducers/nasaReducer';

const initialState = {};

const reducer = combineReducers({
    postsList: postListReducer,
    getPostByDate: getPostReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)));

export default store;