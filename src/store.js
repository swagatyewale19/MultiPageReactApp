import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import postsReducer from './redux/reducers';
const initialState = {
    loading: false,
    posts: [], // Make sure posts is initially an empty array
    error: null,
  };
const rootReducer = combineReducers({
    posts: postsReducer,
  });
  const store = createStore(rootReducer, applyMiddleware(thunk));
  export default store;
  