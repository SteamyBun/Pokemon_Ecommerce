import { loginFailure, loginStart, loginSuccess, logout } from './userRedux';
import { publicRequest } from '../requestMethod';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const loginOut = async (dispatch, user) => {
  dispatch(logout());
  try {
    const res = await publicRequest.post('/auth/login', user);
  } catch (err) {
    dispatch(loginFailure());
  }
};
