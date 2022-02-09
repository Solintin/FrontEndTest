import * as type from "../Actions/types";

const initailState = {
  users: [],
  localUsers: [],
  loading: false,
  error: "",
};
const User = (state = initailState, action) => {
  switch (action.type) {
    case type.FETCH_USER_START:
      return {
        ...state,
        loading: true,
      };
    case type.FETCH_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case type.FETCH_USER_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case type.ADD_USER_START:
      return {
        ...state,
        loading: true,
      };
    case type.ADD_USER_SUCCESS:
      return {
        ...state,
        localUsers: [
          ...state.localUsers,
          { ...action.payload, id: state.localUsers.length + 1 },
        ],
        loading: false,
      };
    case type.REMOVE_USER_SUCCESS:
      const updateLocalUsers = state.localUsers.filter((items) => {
        return items.id !== action.payload;
      });
      return {
        ...state,
        localUsers: updateLocalUsers,
        loading: false,
      };
    case type.EDIT_USER_SUCCESS:
      const updateCurrentUser = () => {
        const update = state.localUsers.filter(
          (item) => item.id != action.payload.id,
        );
        return [...update, action.payload];
      };

      console.log(updateCurrentUser());

      return {
        ...state,
        localUsers: updateCurrentUser(),
        loading: false,
      };
    case type.ADD_USER_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default User;
