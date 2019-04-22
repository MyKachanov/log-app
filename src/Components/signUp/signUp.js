import React, { Component } from 'react';
import ConnectyCube from 'connectycube';
import './signup.sass';

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
                <input type="text" id="Password" value={this.state.email} onChange={this.handleEmail} />
            </div>
            <div className="input-wrapper">
                <label>Password</label>           
                <input type="text" id="Fullname" value={this.state.password} onChange={this.handlePassword} />
            </div> 
            <div className="button-wrapper">
                <div  className="SignUp">
                  <input type="submit" value="SignUp" onClick={this.handleSubmit}/>
                </div>       
            </div>
        </form>
    </div>
    );
  }
}

export default SignUp;


