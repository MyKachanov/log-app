import React, { Component } from 'react';
import ConnectyCube from 'connectycube';
import './signup.sass';
import config from '../connectycube-config';

class SignUp extends Component {
  state = {
    login: "",
    password: "",
    email: ""
  }
  
  componentWillMount() {
    ConnectyCube.init(...config);
    ConnectyCube.createSession((error, session) => {
      if (!session) {
        alert(error)
      }
    });
  }

  handleLogin = (event) => {
    this.setState({login: event.target.value});
  }
  handlePassword = (event) => {
    this.setState({password: event.target.value});
  }
  handleEmail = (event) => {
    this.setState({email: event.target.value});
  }
  
  handleSubmit = (event) =>{
    event.preventDefault();
    let userProfile = {
      'login': this.state.login,
      'password': this.state.password,
      'email': this.state.email,
    }
    ConnectyCube.users.signup(userProfile, function(error, user){
        if(user){
          alert("Вы успешно зарегистрировались");
          var host = "http://"+window.location.hostname+":"+window.location.port;
          window.location.assign(host);
        }else{
          alert("Извините, такой Login уже существует");
        }
    }); 
  }

  render() {
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
                <label>Email</label>           
                <input type="email" id="Password" value={this.state.email} onChange={this.handleEmail} />
            </div>
            <div className="input-wrapper">
                <label>Password</label>           
                <input type="password" id="Fullname" value={this.state.password} onChange={this.handlePassword} />
            </div> 
            <div className="button-wrapper">
                <div  className="SignUp">
                  <input type="button" value="SignUp" onClick={this.handleSubmit}/>
                </div>       
            </div>
        </form>
    </div>
    );
  }
}

export default SignUp;


