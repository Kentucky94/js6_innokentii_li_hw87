import axiosOrders from "../../axiosOrders";
import {push} from 'connected-react-router';

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const registerUserSuccess = () => ({type: REGISTER_USER_SUCCESS});
export const registerUserFailure = error => ({type: REGISTER_USER_SUCCESS, error});
export const loginUserSuccess = user => ({type: LOGIN_USER_SUCCESS, user});
export const loginUserFailure = error => ({type: LOGIN_USER_SUCCESS, error});

export const registerUser = userData => {
  return async dispatch => {
    try{
      await axiosOrders.post('/users', userData);

      dispatch(registerUserSuccess());
      dispatch(push('/'));
    }catch(error){
      dispatch(registerUserFailure(error))
    }
  }
};

export const loginUser = loginData =>{
  return async dispatch => {
    try{
      const response = await axiosOrders.post('/users/sessions', loginData);

      dispatch(loginUserSuccess(response.data));
      dispatch(push('/'))
    }catch(error){
      dispatch(loginUserFailure(error))
    }
  }
};