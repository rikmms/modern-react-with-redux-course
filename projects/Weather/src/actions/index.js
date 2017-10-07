import axios from "axios"

const API_KEY = '4dc3819d43c722d658c15bf86c17e4fe'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${ API_KEY }`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const request = axios.get(`${ ROOT_URL }&q=${ city },us`)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}