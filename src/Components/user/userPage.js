import React, { Fragment } from 'react';
import './userPage.sass';

const UserPage = (props) => {
  console.log(props);
  return(
    <Fragment>
          <div className="container">
            <div className="title">
                <h3>Kachanov.dev</h3>
                <h4>{`Добрый день, ваш логин: ${props.login}`}</h4>
                <h4>{`Ваш Id: ${props.id}`}</h4>
                <h4>{`Ваш mail: ${props.email}`}</h4>
            </div>
          </div>
      </Fragment>
  );
}

export default UserPage;
