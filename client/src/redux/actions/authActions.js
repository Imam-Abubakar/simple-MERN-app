import axios from 'axios';
import { AUTH, LOGOUT } from '../../constants/userConstants';

export const signin = (form) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/auth/login`, form, config);

    dispatch({
      type: AUTH,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (form) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/auth/register`, form, config);

    dispatch({
      type: AUTH,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = (form) => async (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem('userInfo');
  document.location.href = '/';
};
