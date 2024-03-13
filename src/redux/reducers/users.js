import { GET_USRS, GET_USER_BY_ID } from "../types";

let initialState = {
  usersList: [],
  userInfo :null
};

const users = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USRS:
      return { ...state, usersList: payload.users };
    case GET_USER_BY_ID:
      return { ...state, userInfo: payload.user };

    default:
      return state;
  }
};
export default users;
