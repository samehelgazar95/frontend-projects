import { createSlice } from '@reduxjs/toolkit';

const userState = {
  userName: '',
  age: null,
};

// Pure Func >> Not allowed to use Async in it so we use Thunk to handle side effects
// RTK >> Use Immer (allows immutability)
const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    create: {
      // Action creator will be >> create
      prepare(name, age) {
        return { payload: { name, age } };
      },
      reducer(state, action) {
        // user/create
        state.userName = action.payload.name;
        state.age = action.payload.age;
      },
    },
    update: {
      // Action creator will be >> update
      prepare(name, age) {
        // user/update
        return { payload: { name, age } };
      },
      reducer(state, action) {
        state.userName = action.payload.name || state.name;
        state.age = action.payload.age || state.age;
      },
    },
  },
});

export const { create, update } = userSlice.actions;
export default userSlice.reducer;

// ==================================================

// // Redux
// function userReducer(state = userState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case 'user/create':
//       return { ...state, userName: payload.userName, age: payload.age };
//     case 'user/update':
//       return {
//         ...state,
//         userName: payload.userName && payload.userName,
//         age: payload.age && payload.age,
//       };
//     default:
//       return state;
//   }
// }

// // user action creators
// function create(userName, age) {
//   return { type: 'user/create', payload: { userName: userName, age: age } };
// }

// function update(userName, age) {
//   if (!userName) return;
//   return { type: 'user/update', payload: { userName: userName, age: age } };
// }

// export default userReducer;
// export { create, update };
