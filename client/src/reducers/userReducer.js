import { GET_USERS, ADD_USER } from "../actions/types";
const userReducer = (state = { users: [], loading:true }, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return { ...state, users: payload.users,loading:false }; //payload array of users
    case ADD_USER:
      return { ...state, users: [...state.users, payload] }; // payload is newUser
    default:
      return state;
  }
};
export default userReducer;
