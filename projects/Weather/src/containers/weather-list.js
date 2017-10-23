import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google-map'

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name
    const temperatures = cityData.list.map(weather => weather.main.temp)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const { lon, lat } = cityData.city.coord

    return (
      <tr key={ name }>
        <td><GoogleMap lon={ lon } lat={ lat } /></td>
        <td><Chart data={ temperatures } color={ 'orange' } units='k' /></td>
        <td><Chart data={ pressures } color={ 'black' } units='hPa' /></td>
        <td><Chart data={ humidities } color={ 'green' } units='%' /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temeperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)