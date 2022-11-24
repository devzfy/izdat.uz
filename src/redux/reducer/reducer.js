const initialState = {
    notification:{
        message: "",
        show: false,
        error: true
    },
    chart: [],
    url: ""
}

export const reducers = (state = initialState, {type, payload}) =>{
    switch (type) {
        case "SET_BOOKS":
            return {
                ...state,
                data: payload
            }
        default:
            return state
    }
}