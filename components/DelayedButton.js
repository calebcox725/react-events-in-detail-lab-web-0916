const React = require('react')

class DelayedButton extends React.Component {
  constructor() {
    super()

    this.delayedCallback = this.delayedCallback.bind(this)
  }

  delayedCallback(event) {
    event.persist()

    setTimeout(this.props.onDelayedClick, this.props.delay, event)
  }

  render() {
    return (
      <button onClick={this.delayedCallback} />
    )
  }
}

module.exports = DelayedButton
