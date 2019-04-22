import React, { Component } from 'react';
import ConnectyCube from 'connectycube';
import './signIn.sass'; 
import User from '../user/userPage';

const config = [
  {
    appId: 596,
    authKey: 'DYrO3A7OayuesNR',
    authSecret: 'Wpe9qGes6QfDbny'
  },
  {
    debug: {
      mode: 1
    }
  }
];

class SignIn extends Component {
  state = {
    login: "",
    password: "",
    email: "",
    success: ""
  }
  componentWillMount() {
    ConnectyCube.init(...config);
    ConnectyCube.createSession((error, session) => {});
  }

  handleLogin = (event) => {
    this.setState({login: event.target.value});
  }
  handlePassword = (event) => {
    this.setState({password: event.target.value});
  } 

  handleSubmit = (event) =>{
    event.preventDefault();
    let users = {
      login: this.state.login,
      password: this.state.password,
    }
    let that = this;
    ConnectyCube.login(users, function(error, user) {
      if (user && !error) {
        that.setState({ success: true});
      }else {
        alert("Вы ввели неправильный логин или пароль")
        that.setState({ success: false});
      }     
    })    
  }

  render() {
    const {success} = this.state;
    return (
      <div className="container">
        <div className="title">
            <h3>Kachanov.dev</h3>
        </div>
        <form>
            <div className="input-wrapper">
                <label>login</label>           
                <input type="text" id="login" value={this.state.login} onChange={this.handleLogin} />
            </div>
            <div className="input-wrapper">
                <label>Password</label>           
                <input type="text" id="password" value={this.state.password} onChange={this.handlePassword} />
            </div>
            <div className="button-wrapper">
                <div  className="SignUp">
                <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                </div>       
            </div>
        </form>
        {         
          (success)? <User />: console.log(false)
        }
      </div> 
    );
  }
}

export default SignIn;

