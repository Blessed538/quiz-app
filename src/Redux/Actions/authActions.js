import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './../Constants';
import axios from 'axios';
import { returnErrors } from './errorAction';

// const history = useHistory();
// Check token & load user
export const loaduser = () => (dispatch, getState) => {
  //user loading
  // console.log(tokenConfig(getState));
  dispatch({
    type: USER_LOADING,
  });
  axios
    .get('http://localhost:4000/api/auth/user')
    .then(
      (res) =>
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        })
      // history.push('/taketest')
    )
    .catch((err) => {
      console.log(err);
      dispatch(
        returnErrors(
          (err && err.response && err.response.data) || 'error found',
          (err && err.response && err.response.status) || 400
        )
      );
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

export const register = ({ name, email, password }) => (dispatch) => {
  //headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  //Request body
  const body = { name, email, password };

  axios
    .post('http://localhost:4000/api/user', body, config)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

//Logout User
export const logout = (cb) => (dispatch) => {
  cb();
  return dispatch({
    type: LOGOUT_SUCCESS,
  });
};

// Login User
export const login = ({ email, password, history }, cb = () => {}) => (
  dispatch
) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request body
  // const body = JSON.parse({ email, password });

  console.log(email, password);
  axios
    .post('http://localhost:4000/api/auth', { email, password })
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      cb(res, null);
    })

    .catch((err) => {
      console.log(err);
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

export const tokenConfig = (getState) => {
  //Get token from localstorage
  const token = getState().auth.token;
  console.log(token);
  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  // if token , add to headers

  if (token) {
    return (config.headers['x-auth-token'] = token);
  }

  return config;
};
