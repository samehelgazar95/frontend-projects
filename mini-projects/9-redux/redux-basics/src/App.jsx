import { useDispatch } from 'react-redux';
import { create, update } from './reduxApp/userSlice';
import { createPage, updatePage } from './reduxApp/pageSlice';
import { convert } from './reduxApp/CurrencySlice';
import Account from './Account';

export default function App() {
  /*
    userState, pageState
    redux
    store.dispatch(createUser('Name', 25));
    store.getState().user;
  */
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(create('Name', 25))}>Create User</button>
      <button onClick={() => dispatch(update('New Name'))}>Update User</button>
      <br />
      <button
        onClick={() => dispatch(createPage('Page', new Date().toISOString()))}
      >
        Create Page
      </button>
      <button onClick={() => dispatch(updatePage('New Page'))}>
        Update Page
      </button>
      <br />
      <button onClick={() => dispatch(convert())}>EUR to USD</button>
      <Account />
    </div>
  );
}
