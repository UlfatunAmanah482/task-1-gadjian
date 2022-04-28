import axios from "axios"
import { GET_USERS } from "../constants/users"

export const getAllUsers = (data) => (dispatch) => {
  dispatch({
    type: GET_USERS,
    payload: {
      loading: true,
      data: false,
      error: false,
      redirect: false
    }
  })

  axios.get('https://randomuser.me/api/?results=28')
    .then((res) => {
      dispatch({
        type: GET_USERS,
        payload: {
          loading: false,
          data: res.data.results,
          error: false,
          redirect: false
        }
      })
    })
    .catch((err) => {
      dispatch({
        type: GET_USERS,
        payload: {
          loading: false,
          data: false,
          error: err,
          redirect: false
        }
      })
    })
}