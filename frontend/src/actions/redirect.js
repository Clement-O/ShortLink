export const REDIRECT_LINK_REQUEST = 'REDIRECT_LINK_REQUEST'
export const REDIRECT_LINK_SUCCESS = 'REDIRECT_LINK_SUCCESS'
export const REDIRECT_LINK_ERROR = 'REDIRECT_LINK_ERROR'

function requestRedirectLink() {
    return {
        type: REDIRECT_LINK_REQUEST,
        isRedirecting: true,
        isRedirected: false,
    }
}

function successRedirectLink(links) {
    return {
        type: REDIRECT_LINK_SUCCESS,
        isRedirecting: false,
        isRedirected: true,
        full_link: links.full_link,
        short_link: links.short_link,
    }
}

function errorRedirectLink(message) {
    return {
        type: REDIRECT_LINK_ERROR,
        isRedirecting: false,
        isRedirected: false,
        message
    }
}

export const redirectLink = (short_link) => {
    const config = {
        method: 'GET',
        headers: {"Content-Type": "application/json"},
    }
    return dispatch => {
        dispatch(requestRedirectLink())
        return fetch(`/redirect/${short_link}/`, config)
            .then(res => res.json().then(links => ({links, res})))
            .then(({links, res}) => {
                if (!res.ok) {
                    dispatch(errorRedirectLink(links.detail))
                    return Promise.reject(links)
                } else {
                    dispatch(successRedirectLink(links))
                }
            })
    }
}