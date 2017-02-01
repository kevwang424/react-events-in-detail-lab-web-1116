const React = require('react')

class CoordinatesButton extends React.Component {

  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    this.props.onReceiveCoordinates([event.screenX, event.screenY])
  }

  render(){
    return (
      <button onClick={this.handleClick}/>
    )
  }
}

module.exports = CoordinatesButton
