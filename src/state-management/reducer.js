export const initialState = {
    text: "",
    colors: [],
    price: {
        min: 0,
        max: 1000
    },
    sort: "",
    productsCount: 0,
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_SEARCH_TEXT': {
            return Object.assign({}, state, { text: action.payload })
        }
        
        case 'SET_SORT_OPTION': {
            return Object.assign({}, state, { sort: action.payload })
        }
        
        case 'SELECT_COLOR': {
            const selectedColors = state.colors;

            const index = selectedColors.findIndex(color => color === action.payload);
            let colors = [...selectedColors, action.payload]

            if (index >= 0) {
                colors = selectedColors.filter(color => color !== action.payload)
            }

            return Object.assign({}, state, { colors })
        }

        case "SET_MIN_PRICE": {
            return Object.assign({}, state, { price: { ...state.price, min: action.payload } })
        }
        
        case "SET_MAX_PRICE": {
            return Object.assign({}, state, { price: { ...state.price, max: action.payload } })
        }
        
        case "SET_PRODUCTS_COUNT": {
            return Object.assign({}, state, { productsCount: action.payload })
        }

        default: {
            return state;
        }
    }
}