import * as type from "./types";
import axios from "axios";

const GetUsersSuccess = (data) => {
  return {
    type: type.FETCH_USER_SUCCESS,
    payload: data,
  };
};

const GetUsersStart = () => {
  return {
    type: type.FETCH_USER_START,
  };
};
const GetUsersFailed = (message) => {
  return {
    type: type.FETCH_USER_FAILED,
    payload: message,
  };
};

const fetchUser = () => {
  return (dispatch) => {
    dispatch(GetUsersStart());
    try {
      axios
        .get(
          "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data",
        )
        .then((res) => {
          dispatch(GetUsersSuccess(res.data));
        });
    } catch (error) {
      dispatch(GetUsersFailed(error.message));
    }
  };
};

const GetUsers = (data) => {
  return {
    type: type.ADD_USER_SUCCESS,
    payload: data,
  };
};
const RemoveUsers = (data) => {
  return {
    type: type.REMOVE_USER_SUCCESS,
    payload: data,
  };
};
const EditUsers = (data) => {
  return {
    type: type.EDIT_USER_SUCCESS,
    payload: data,
  };
};

export { fetchUser, GetUsers, RemoveUsers, EditUsers };
