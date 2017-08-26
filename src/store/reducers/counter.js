import { ADD_COUNT } from '../../actions/actionTypes/counter';

const initialState = {
    count: 0
}

export const counter = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COUNT:
            const count = action.count
            return Object.assign({}, state, { count })
        default:
            return state
    }
}