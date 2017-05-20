import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
        // Renders a city row
        renderWeather(cityData) {
            const name = cityData.city.name;
            const temps = cityData.list.map(weather => weather.main.temp);
            console.log(temps);

            return (
                <tr key={name}>
                    <td>{name}</td>
                    <td>
                        <Chart data={temps} color="orange" />
                    </td>
                </tr>
            );
        }
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
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            );
        }
    }

// Extracting the state.weather from state and adding it 
// current containers props. ES6 syntax.
function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);