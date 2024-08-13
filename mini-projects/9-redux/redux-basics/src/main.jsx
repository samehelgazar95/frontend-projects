import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './reduxApp/store.jsx';
// import { createUser, updateUser, createPage } from './reduxApp/store.jsx';
// Redux
// console.log(store.getState().user);
// store.dispatch(createUser('Sameh', 29));
// console.log(store.getState().user);
// store.dispatch(updateUser('Sameh ElGazar', 29));
// console.log(store.getState().user);

// console.log(store.getState().page);
// store.dispatch(createPage('Page'));
// console.log(store.getState().page);
// store.dispatch(createPage('New Page Name'));
// console.log(store.getState().page);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

/*
1) Redux: It's an independent js lib that don't have to work with react
    - npm i redux
    - import { createStore, combineReducers, applyMiddleware } from 'redux';
    - store have access to (dispatch(), getState())

  React-Redux: To Connect React with Redux
    - npm i react-redux
    - import { Provider } from 'react-redux';
      <Provider store={store}></Provider>
    - import {useDispatch(), useSelector()} from 'react-redux';

  React-Thunk: It's a middleware lib used in react-redux that is responsible for any side effect (fetching, setTimeout ...)
    - npm i redux-thunk
    - import {thunk} from 'redux-thunk';

  const rootReducer = combineReducers({
  user: userReducer,
  page: pageReducer,
  currency: currencyReducer,
    });
  const store = createStore(rootReducer, applyMiddleware(thunk));

  ====================================

  RTK:

*/
