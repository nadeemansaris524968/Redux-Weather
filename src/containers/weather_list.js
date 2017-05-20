import React, { Component } from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {

render() {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        );
    }
}

// Extracting the state.weather from state and adding it 
// current containers props. ES6 syntax.
function mapStateToProps({weather}) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);