export const VERIFY_TOKEN_REQUEST = 'VERIFY_TOKEN_REQUEST'
export const VERIFY_TOKEN_SUCCESS = 'VERIFY_TOKEN_SUCCESS'
export const VERIFY_TOKEN_FAILURE = 'VERIFY_TOKEN_FAILURE'

function verifyRequest() {
    return {
        type: VERIFY_TOKEN_REQUEST,
        isValidating: true,
        isValidated: false,
    }
}

function verifySuccess() {
    return {
        type: VERIFY_TOKEN_SUCCESS,
        isValidating: false,
        isValidated: true,
    }
}

function verifyError(message) {
    return {
        type: VERIFY_TOKEN_FAILURE,
        isValidating: false,
        isValidated: false,
        message
    }
}

export const verifyToken = token_access => {
    const config = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"token": token_access})

    }
    return dispatch => {
        dispatch(verifyRequest(token_access))

        return fetch('/token-verify/', config)
            .then(res => res.json().then(verified_token => ({verified_token, res})))
            .then(({verified_token, res}) => {
                if (!res.ok) {
                    dispatch(verifyError(verified_token.detail))
                    return Promise.reject(verified_token)
                } else {
                    dispatch(verifySuccess())
                }
            }).catch(err => console.log("Error: ", err))
    }
}