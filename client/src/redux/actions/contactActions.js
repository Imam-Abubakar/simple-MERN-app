import axios from 'axios';

import {
  CONTACT_CREATE,
  CONTACT_UPDATE,
  CONTACT_DELETE,
  CONTACT_DELETE_ALL,
  CONTACT_FETCH_ALL,
} from '../../constants/contactConstant';

export const createContact = (form) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/contact`, form, config);
    dispatch({ type: CONTACT_CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchContacts = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/contact`, config);
    dispatch({ type: CONTACT_FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = (id) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(`${import.meta.env.VITE_REACT_APP_API}/contact/${id}`, config);
    dispatch({ type: CONTACT_DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const deleteContacts = (idArr) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.post(`${import.meta.env.VITE_REACT_APP_API}/contact/delete`, idArr, config);
    dispatch({ type: CONTACT_DELETE_ALL, payload: idArr });
  } catch (error) {
    console.log(error);
  }
};

export const updateContact = (id, form) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`${import.meta.env.VITE_REACT_APP_API}/contact/${id}`, form, config);
    console.log(data);
    dispatch({ type: CONTACT_UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
