// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { thunk } from 'redux-thunk';
import userReducer from './userSlice';
import pageReducer from './pageSlice';
import currencyReducer from './CurrencySlice';

// Thunk;
// redux > MiddleWare (Thunk) (Async , setTimeout, Date()) > reducer (pure)

// const reducers = combineReducers({
//   user: userReducer,
//   page: pageReducer,
//   currency: currencyReducer,
// });
// const store = createStore(reducers, applyMiddleware(thunk));

const store = configureStore({
  reducer: {
    user: userReducer,
    page: pageReducer,
    currency: currencyReducer,
  },
});

export default store;
