const React = require('react');

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.handleChanges = this.handleChanges.bind(this)
    this.state = {value: ''};
  }

  handleChanges(event){
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChanges}/> 
        <h1> {this.props.maxChars - this.state.value.length} </h1>
      </div>
    );
  }
}

module.exports = TwitterMessage;
