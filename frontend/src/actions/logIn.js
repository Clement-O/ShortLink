export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

function requestLogin() {
    return {
        type: LOGIN_REQUEST,
        isAuthenticating: true,
        isAuthenticated: false,
    }
}

function successLogin(tokens) {
    return {
        type: LOGIN_SUCCESS,
        isAuthenticating: false,
        isAuthenticated: true,
        token_access: tokens.access
    }
}

function errorLogin(message) {
    return {
        type: LOGIN_FAILURE,
        isAuthenticating: false,
        isAuthenticated: false,
        message
    }
}

export const userLogin = ({username, password}) => {
    const config = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, password})
    }
    return dispatch => {
        dispatch(requestLogin())

        return fetch('/token-access/', config)
            .then(res => res.json().then(tokens => ({tokens, res})))
            .then(({tokens, res}) => {
                if (!res.ok) {
                    dispatch(errorLogin(tokens.detail))
                    return Promise.reject(tokens)
                } else {
                    localStorage.setItem('token_access', tokens.access)
                    localStorage.setItem('token_refresh', tokens.refresh)
                    dispatch(successLogin(tokens))
                }
            }).catch(err => console.log("Error: ", err))
    }
}