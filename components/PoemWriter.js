const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.handleError = this.handleError.bind(this)
    this.state = {value: ''};
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleError() {
    let lines = this.state.value.split('\n')

    if(lines.length < 3) {return false}

    if((lines[0].trim().split(" ").length === 5) &&
      (lines[1].trim().split(" ").length === 3) &&
      (lines[2].trim().split(" ").length === 5)) {return true}
    else{return false}

  }

  render() {

    if (this.handleError()) {
      return(
      <textarea rows="3" cols="60" value= {this.state.value} onChange= {this.handleChange}/>
    )}
    else {
      return(
      <div>
        <textarea rows="3" cols="60" value= {this.state.value} onChange= {this.handleChange}/>
        <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
      </div>
      )
    }
  }
  
}


module.exports = PoemWriter;
