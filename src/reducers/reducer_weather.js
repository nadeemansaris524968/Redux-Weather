import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
        return [action.payload.data, ...state]; // adds the city to the existing list of cities and returns a new 
        // state. Never modify a state. [city, city, city]
    }
    return state;
}