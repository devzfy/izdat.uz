const initialState = []

export const reducers = (state = initialState, {type, payload}) =>{
    switch (type) {
        case "SET_BOOKS":
            return [...state, payload];
        default:
            return state
    }
}   