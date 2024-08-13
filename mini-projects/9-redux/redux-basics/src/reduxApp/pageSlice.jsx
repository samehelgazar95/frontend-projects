import { createSlice } from '@reduxjs/toolkit';

const pageState = {
  pageName: '',
  createdAt: null,
};

const pageSlice = createSlice({
  name: 'page',
  initialState: pageState,
  reducers: {
    createPage: {
      prepare(pageName, createdAt) {
        return { payload: { pageName, createdAt } };
      },
      reducer(state, action) {
        state.pageName = action.payload.pageName;
        state.createdAt = action.payload.createdAt;
      },
    },
    updatePage: {
      prepare(pageName, createdAt) {
        return { payload: { pageName, createdAt } };
      },
      reducer(state, action) {
        state.pageName = action.payload.pageName || state.pageName;
        state.createdAt = action.payload.createdAt || state.createdAt;
      },
    },
  },
});

export default pageSlice.reducer;
export const { createPage, updatePage } = pageSlice.actions;

// function pageReducer(state = pageState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case 'page/createPage':
//       return {
//         ...state,
//         pageName: payload.pageName,
//         createdAt: payload.createdAt,
//       };
//     case 'page/updatePage':
//       return { ...state, pageName: payload.pageName };
//     default:
//       return state;
//   }
// }

// // page actions creator
// function createPage(pageName, date) {
//   return {
//     type: 'page/createPage',
//     payload: { pageName: pageName, createdAt: date },
//   };
// }

// function updatePage(pageName) {
//   if (!pageName) return;
//   return { type: 'page/updatePage', payload: { pageName: pageName } };
// }

// export { createPage, updatePage };
