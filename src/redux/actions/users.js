import { GET_USRS, GET_USER_BY_ID } from "../types";

import { getUsersData, addNewUser, getUserByID } from "../../services/users";

export const getUsers = () => async (dispatch) => {
  try {
    const response = await getUsersData();

    dispatch({
      type: GET_USRS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addUser = (user) => async (dispatch) => {
  try {
    const response = await addNewUser(user);

    if (response.status === 201) {
      dispatch({
        type: GET_USRS,
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSingelUser = (id) => async (dispatch) => {
  try {
    const response = await getUserByID(id);

    if (response.status === 200) {
      dispatch({
        type: GET_USER_BY_ID,
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
