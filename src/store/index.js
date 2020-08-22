import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducers from "./reducers";

let middlewares = [];

// for async operations, network calls
middlewares.push(thunk);

//smart console logging of actions
middlewares.push(logger);

const composeEnhancers = compose;

// create store
const store = createStore(
    reducers,
    undefined,
    composeEnhancers(
        applyMiddleware(...middlewares)
    ),
);

export default store;
