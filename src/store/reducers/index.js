import {
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    LOG_IN,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE
} from '../actions/index'

const initialState = {
    signingUp: false,
    signedUp: false,
    loggingIn: false,
    loggedIn: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_UP:
            return {
                ...state,
                signingUp: true,
                loggedIn: false
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                signingUp: true,
                loggedIn: true
            }
        case SIGN_UP_FAILURE:
            return {
                ...state,
                signingUp: false,
                signedUp: false,
                error: action.payload
            }
        case LOG_IN: 
            return {
                ...state,
                loggingIn: true
            }
        case LOG_IN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true
            }
        case LOG_IN_FAILURE: 
            return {
                ...state,
                loggingIn: false,
                loggedIn: false,
                error: action.payload
            }
        case LOGGED_IN:
            return {
                ...state,
                loggedIn: true
            }
        case LOGGED_OUT:
            return {
                ...state,
                loggedIn: false
            }
        default: 
            return {
                ...state
            }
    }
}

export default reducer