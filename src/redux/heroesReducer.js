const initialState = {
    text: '',
    chars: []
}

export const heroesReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'text_change':
            return {
                ...state,
                text: action.text
            };
        case 'set_chars':
            return {
                ...state,
                chars: [...action.chars].map(char => {
                    return { ...char, favorite: false }
                }),
            };
        case 'favorite_char':
            return {
                ...state,
                chars: state.chars.map(char => {
                    if (char.url === action.url) {
                        return { ...char, favorite: true }
                    }
                    return char;
                })
            };
        case 'unfavorite_char':
            return {
                ...state,
                chars: state.chars.map(char => {
                    if (char.url === action.url) {
                        return { ...char, favorite: false }
                    }
                    return char;
                })
            };
        case 'filter_chars':
            return {
                ...state,
                chars: state.chars.filter(char => char.name.indexOf(action.value) !== -1)
            }
        case 'filter_favorite':
            return {
                ...state,
                chars: state.chars.filter(char => char.favorite)
            }
        default:
            return state;
    }
}

export const actions = {
    textChange: (text) => {
        return {
            type: 'text_change',
            text
        }
    },
    setChars: (chars) => {
        return {
            type: 'set_chars',
            chars
        }
    },
    makeFavorite: (url) => {
        return {
            type: 'favorite_char',
            url
        }
    },
    makeUnFavorite: (url) => {
        return {
            type: 'unfavorite_char',
            url
        }
    },
    filterChars: (value) => {
        return {
            type: 'filter_chars',
            value
        }
    },
    filterFavorite: () => {
        return {
            type: 'filter_favorite'
        }
    }
}
