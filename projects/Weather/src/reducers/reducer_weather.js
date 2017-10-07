import { FETCH_WEATHER } from '../actions'

export default function WeatherReducer(state = [], action) {

  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([ action.payload.data ])
      return [action.payload.data, ...state]
  }

  return state
}