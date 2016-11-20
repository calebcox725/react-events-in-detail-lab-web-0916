const React = require('react')

class CoordinatesButton extends React.Component {
  constructor() {
    super()

    this.coordinatesCallback = this.coordinatesCallback.bind(this)
  }

  coordinatesCallback(event) {
    let coordinates = [event.pageX, event.pageY]
    this.props.onReceiveCoordinates(coordinates)
  }

  render() {
    return (
      <button onClick={this.coordinatesCallback} />
    )
  }
}

module.exports = CoordinatesButton
