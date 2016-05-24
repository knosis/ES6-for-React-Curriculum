import React, { PropTypes } from 'react'
import GetCity from '../components/GetCity'

let GetCityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getDefaultProps () {
    return {
      direction: 'column'
    }
  },
  propTypes: {
    direction: PropTypes.string
  },
  getInitialState () {
    return {
      city: ''
    }
  },
  handleSubmitCity (e) {
    e.preventDefault()
    this.context.router.push('/forecast/' + this.state.city)
  },
  handleUpdateCity (e) {
    this.setState({
      city: e.target.value
    })
  },
  render () {
    return (
      <GetCity
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    )
  }
});

export default GetCityContainer
