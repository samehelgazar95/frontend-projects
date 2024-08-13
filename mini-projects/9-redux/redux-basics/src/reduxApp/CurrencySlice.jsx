import { createSlice } from '@reduxjs/toolkit';

const currencyState = {
  rateEurToUsd: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState: currencyState,
  reducers: {
    convert(state, action) {
      state.rateEurToUsd = action.payload.rate;
    },
  },
});

// function currencyReducer(state = currencyReducer, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case 'currency/convert':
//       return { ...state, rateEurToUsd: payload.rate };
//     default:
//       return state;
//   }
// }

// currency action
function convert() {
  // THUNK
  return async (dispatch, getState) => {
    fetch(`https://api.frankfurter.app/latest?amount=1&from=EUR&to=USD`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: 'currency/convert',
          payload: { rate: data.rates.USD },
        })
      );
  };
}

export default currencySlice.reducer;
// export default currencyReducer;
export { convert };
