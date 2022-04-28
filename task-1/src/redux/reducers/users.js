import { GET_USERS } from "../constants/users";

const initialState = {
  users: []
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload.data
      }
  
    default:
      return state;
  }
}