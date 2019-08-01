const initialState = {
    full_link: '',
    short_link: '',
}

export default function link(state=initialState, action) {
    console.log(action) // CONSOLE LOG
    switch (action.type) {
        case 'SHORTEN_LINK':
            console.log('reducers/link case shorten : ' + action.full_link) // CONSOLE LOG
            return {
                full_link: action.full_link,
                ...state
            }
        case 'SHORTENED_LINK':
            console.log('reducers/link case shortened : ' + action.full_link + ' ' + action.short_link) // CONSOLE LOG
            return {
                ...state,
                full_link: action.full_link,
                short_link: action.short_link
            }
        default:
            return state
    }
}