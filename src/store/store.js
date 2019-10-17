import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// import userReducer from './reducers/userReducer';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;