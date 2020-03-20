import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {connectRouter, routerMiddleware} from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import {createBrowserHistory} from "history";

import postsReducer from "./reducers/postsReducer";
import commentsReducer from "./reducers/commentsReducer";
import usersReducer from "./reducers/usersReducer";

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  router: connectRouter(history),
  posts: postsReducer,
  comments: commentsReducer,
  users: usersReducer,
});

const middleware = [
  thunkMiddleware,
  routerMiddleware(history)
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const store  = createStore(rootReducer, enhancers);

export default store;