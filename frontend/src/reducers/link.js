const initialState = {
    full_link: '',
    short_link: '',
}

export default function link(state=initialState, action) {
    console.log(action) // CONSOLE LOG
    switch (action.type) {
        case 'SHORTEN_LINK':
            return {
                full_link: action.full_link,
                ...state
            }
        case 'SHORTENED_LINK':
            return {
                ...state,
                full_link: action.full_link,
                short_link: action.short_link
            }
        default:
            return state
    }
}