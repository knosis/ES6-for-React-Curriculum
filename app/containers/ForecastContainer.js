import React from 'react'
import Forecast from '../components/Forecast'
import { getForcast } from '../helpers/api'

let ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return {
      isLoading: true,
      forecastData: {}
    }
  },
  componentDidMount () {
    this.makeRequest(this.props.routeParams.city)
  },
  componentWillReceiveProps (nextProps) {
    this.makeRequest(nextProps.routeParams.city)
  },
  makeRequest (city) {
    getForcast(city)
      .then((forecastData) => {
        this.setState({
          isLoading: false,
          forecastData: forecastData
        });
      });
  },
  handleClick (weather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    })
  },
  render () {
    return (
      <Forecast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        handleClick={this.handleClick}
        forecastData={this.state.forecastData} />
    )
  }
});

export default ForecastContainer