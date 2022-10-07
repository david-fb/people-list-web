import { createSlice } from '@reduxjs/toolkit';

const USER_STATE = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : {};

const initialState = {
  isLoggedIn: USER_STATE.isLoggedIn ?? false,
  accessToken: USER_STATE.accessToken ?? '',
  refreshToken: USER_STATE.refreshToken ?? '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogIn: (state, action) => {
      const changes = { ...state, isLoggedIn: true, ...action.payload };
      window.localStorage.setItem('user', JSON.stringify(changes));
      return changes;
    },
    userLogOut: (state) => {
      const changes = {
        isLoggedIn: false,
        accessToken: '',
        refreshToken: '',
      };
      window.localStorage.setItem('user', JSON.stringify(changes));
      return { ...state, ...changes };
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLogIn, userLogOut, loadUserLocalStorage } = userSlice.actions;

export const selectIsUserLoggedIn = (state) => state.user.isLoggedIn;
export const selectAccessToken = (state) => state.user.accessToken;
export const selectRefreshToken = (state) => state.user.refreshToken;

export default userSlice.reducer;
