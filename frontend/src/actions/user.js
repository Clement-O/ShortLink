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

export const userLink = () => {
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
            .then(res => res.json().then(user => ({user, res})))
            .then(({user, res}) => {
                if (!res.ok) {
                    dispatch(errorUserLink(user.message))
                    return Promise.reject(user)
                } else {
                    // CONSOLE LOG
                    console.log('USER Response + ItemList')
                    console.log(res)
                    console.log(user)
                    console.log('----------')
                    dispatch(successUserLink(user))
                }
            })
    }
}