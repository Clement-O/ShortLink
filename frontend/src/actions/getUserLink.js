export const USER_LINK_REQUEST = 'USER_LINK_REQUEST'
export const USER_LINK_SUCCESS = 'USER_LINK_SUCCESS'
export const USER_LINK_ERROR = 'USER_LINK_ERROR'

function requestUserLink() {
    return {
        type: USER_LINK_REQUEST,
        isFetching: true,
        isFetched: false
    }
}

function successUserLink(user) {
    return {
        type: USER_LINK_SUCCESS,
        isFetching: false,
        isFetched: true,
        user_links: user
    }
}

function errorUserLink(message) {
    return {
        type: USER_LINK_ERROR,
        isFetching: false,
        isFetched: false,
        message
    }
}

export const getUserLink = () => {
    const config = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token_access')
        }
    }
    return dispatch => {
        dispatch(requestUserLink())

        return fetch('/user-link/', config)
            .then(res => res.json().then(user_link => ({user_link, res})))
            .then(({user_link, res}) => {
                if (!res.ok) {
                    dispatch(errorUserLink(user_link.message))
                    return Promise.reject(user_link)
                } else {
                    dispatch(successUserLink(user_link))
                }
            })
    }
}