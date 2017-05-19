import axios from 'axios';
const API_KEY = '64e5121d7725dbead84248c8ea3645c0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    // Asynchronous 
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // when the action's payload is a Promise ( here request is a redux promise )
    // middleware stops it, unwraps the promise into reducer usable data and then
    // sends it out to all the reducers.
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}