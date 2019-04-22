import React, { Component, Fragment } from 'react';
import './userPage.sass';

class UserPage extends Component {
  render() {
    return (
      <Fragment>
          <div className="container">
            <div className="title">
                <h3>Kachanov.dev</h3>
                <h4>Ваши данные, которые доступные после регистрации, и авторизации!</h4>
            </div>
          </div>
      </Fragment>
    );
  }
}

export default UserPage;
