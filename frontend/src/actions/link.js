export const shortenLink = full_link => {
    return dispatch => {
        const headers = {"Content-Type": "application/json"};
        const body = JSON.stringify({full_link});
        return fetch('/create-short-link/', {method: 'POST', headers, body})
            .then(res => res.json())
            .then(obj => {
                return dispatch({
                    type: 'SHORTENED_LINK',
                    ...obj
                })
            })
    }    
}