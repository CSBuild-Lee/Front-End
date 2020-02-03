import axios from 'axios';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const signUp = userCreds => dispatch => {
    dispatch({ type: SIGN_UP })
    return axios.post('https://backend-url.com', userCreds)
    .then(res => {
        dispatch({ type: SIGN_UP_SUCCESS, payload: res.data.key })
        localStorage.setItem('token')
        // Pretty sure we need to also pass in res.data.something-else above
    })
    .catch(err => {
        dispatch({ type: SIGN_UP_FAILURE, payload: res.data.message })
        // Copy/paste and add another if using unique message for user and pass
    })
}

export const logIn = userCreds => dispatch => {
    dispatch({ type: LOG_IN })
    return axios.post('https://backend-url.com', userCreds)
    .then(res => {
        dispatch({ type: LOG_IN_SUCCESS, payload: res.data.key })
        localStorage.setItem('token')
        // Pretty sure we need to also pass in res.data.something-else above
    })
    .catch(err => {
        dispatch({ type: LOG_IN_FAILURE, payload: res.data.message })
        // Copy/paste and add another if using unique message for user and pass
    })
}