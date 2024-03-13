import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getUsersData = async () => {
  try {
    const login_url = `http://localhost:5000/api/v1/users`;
      const response = await axios.get(login_url);
      console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const addNewUser = async (user) => { 

  try {
    const login_url = `http://localhost:5000/api/v1/users`;
    const response = await axios.post(login_url, user);
   return response;
  } catch (error) {
    throw error;
  }
}


export const getUserByID = async (id) => {
  try {
    const login_url = `http://localhost:5000/api/v1/users/${id}`;
    const response = await axios.get(login_url);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
