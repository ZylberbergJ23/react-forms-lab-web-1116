const React = require('react');

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.state = {username: '', password: ''};
  }

  handleUsername(event) {
    this.setState({username: event.target.value})
  }

  handlePassword(event) {
    this.setState({password: event.target.value})
  }

  handleLogin(event) {
    event.preventDefault()
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.onSubmit()
    }
  }


  render() {
    return (
      <form onSubmit = {this.handleLogin}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value= {this.state.username} onChange = {this.handleUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value= {this.state.password} onChange = {this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
