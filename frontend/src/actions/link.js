export const SHORTEN_LINK_REQUEST = 'SHORTEN_LINK_REQUEST'
export const SHORTEN_LINK_SUCCESS = 'SHORTEN_LINK_SUCCESS'
export const SHORTEN_LINK_ERROR = 'SHORTEN_LINK_ERROR'

function requestShortenLink(full_link) {
    return {
        type: SHORTEN_LINK_REQUEST,
        isShortening: true,
        isShortened: false,
        full_link
    }
}

function successShortenLink(links) {
    return {
        type: SHORTEN_LINK_SUCCESS,
        isShortening: false,
        isShortened: true,
        full_link: links.full_link,
        short_link: links.short_link
    }
}

function errorShortenLink(message) {
    return {
        type: SHORTEN_LINK_ERROR,
        isShortening: false,
        isShortened: false,
        message
    }
}

export const shortenLink = full_link => {
    let headers = {"Content-Type": "application/json"};
    if (localStorage.getItem('token_access')) {
        headers.Authorization = "Bearer " + localStorage.getItem('token_access')
    }
    const config = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({full_link})
    }
    return dispatch => {
        dispatch(requestShortenLink(full_link))

        return fetch('/create-short-link/', config)
            .then(res => res.json().then(links => ({links, res})))
            .then(({links, res}) => {
                if (!res.ok) {
                    dispatch(errorShortenLink(links.full_link[0]))
                    return Promise.reject(links)
                } else {
                    dispatch(successShortenLink(links))
                }
            })
    }
}