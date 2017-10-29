import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions'
import _ from 'lodash'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS: return _.mapKeys(action.payload.data, 'id')
        case FETCH_POST: return { ...state, [action.payload.data.id]: action.payload.data }
        case DELETE_POST: return _.omit(state, action.payload)
        default: return state
    }
}