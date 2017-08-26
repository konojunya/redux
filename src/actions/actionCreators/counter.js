import { ADD_COUNT } from '../actionTypes/counter';

export const add_count = (count) => {
    return {
        type: ADD_COUNT,
        count
    }
}