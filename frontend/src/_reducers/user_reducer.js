import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_FAILED, LOGOUT } from "../_consts/auth";

let initialState = { loggedIn: false, details: {} };

let userReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log("LOGIN reducer is true")
            return { ...state, loggedIn: true, details: action.payload };
        case LOGOUT:
        case LOGIN_ERROR:
        case LOGIN_FAILED:
            console.log("LOGIN reducer is false")
            return initialState;
        default:
            return state
    }
}

export default userReducer;