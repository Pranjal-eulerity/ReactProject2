import { GET_CANVAS } from "../types"

const initialState = {
    canvas: null
}
//comment 2
const navigateReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CANVAS: {
            return {...state, canvas: action.payload}
        }
        default: {
            return { ...state }
        }
    }
}


export default navigateReducer