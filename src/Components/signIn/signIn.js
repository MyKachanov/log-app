import React, { Component, Fragment } from 'react';
import ConnectyCube from 'connectycube';
import './signIn.sass'; 
import User from '../user/userPage';
import config from '../connectycube-config';

class SignIn extends Component { 
  state = {
    login: "",
    password: "",
    email: "",
    success: "",  
    id: "",
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
        that.setState({id: user.id});
        that.setState({email: user.email});
      }else {
        alert("Вы ввели неправильный логин или пароль")
        that.setState({ success: false});
      }     
    })    
  }

  render() {
    const {success, login, id, email} = this.state;
    return (
      <Fragment>
        {         
          (success)? 
            <User login={login}
                  id={id}
                  email={email}
            />:
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
                  <input type="password" id="password" value={this.state.password} onChange={this.handlePassword} />
              </div>
              <div className="button-wrapper">
                  <div  className="SignUp">
                  <input type="button" value="SignIn" onClick={this.handleSubmit}/>
                  </div>       
              </div>
            </form>
          </div>
        }
      </Fragment>
    );
  }
}

export default SignIn;

