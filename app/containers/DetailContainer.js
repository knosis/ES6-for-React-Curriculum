import React from 'react'
import Detail from '../components/Detail'

let DetailContainer = React.createClass({
  render () {
    return (
      <Detail
        weather={this.props.location.state.weather}
        city={this.props.routeParams.city} />
    );
  }
});

export default DetailContainer