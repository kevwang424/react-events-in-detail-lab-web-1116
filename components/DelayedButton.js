const React = require('react')

class DelayedButton extends React.Component {

  constructor(){
    super()
    this.myClick = this.myClick.bind(this)
  }

  myClick(event){
    event.persist()
    setTimeout(()=> {this.props.onDelayedClick(event)}, this.props.delay)
  }

  render(){
    return (
      <button onClick = {this.myClick}/>
    )
  }

}


module.exports = DelayedButton
