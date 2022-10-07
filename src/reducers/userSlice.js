import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  accessToken: '',
  refreshToken: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogIn: (state, action) => {
      return { ...state, isLoggedIn: true, ...action.payload };
    },
    userLogOut: (state) => {
      return { ...state, ...initialState };
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLogIn, userLogOut } = userSlice.actions;

export const selectIsUserLoggedIn = (state) => state.user.isLoggedIn;

export default userSlice.reducer;
