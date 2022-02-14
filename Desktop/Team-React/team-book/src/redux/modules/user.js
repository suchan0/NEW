import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from 'axios'

// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

// middleware actions
const loginAction = (user) => {
  return function (dispatch, getState, { history }) {
    console.log(history);
    dispatch(setUser(user));
    history.push("/");
  }
};


const signupFB = (id, pwd, user_name) => {
  return function (dispatch, getState, {history}){
    axios
    .post('http://13.124.130.158/user/signup',{
      "username": id,
      "nickname": user_name ,
      "password": pwd
      
    })
    .then((res) => {
      if (res.data === "성공적으로 회원 가입이 완료 되었습니다.") {
        window.alert(res.data)
        history.push("/");
        return;
      }
      window.alert(res.data)
    })
    .catch((error) => {
      console.log(error);
    })
    
  }
}

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
      
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export
const actionCreators = {
  logOut,
  getUser,
  loginAction,
  signupFB,
};

export { actionCreators };