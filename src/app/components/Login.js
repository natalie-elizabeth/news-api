import React from 'react';
import ReactDOM from 'react-dom';
// import FontAwesome from 'react-fontawesome';
import GoogleLogin from 'react-google-login';
// import GoogleLogin from '../dist/google-login';

const success = (response) => {
  console.log(response);
};

const error = (response) => {
  console.error(response);
};

const loading = () => {
  console.log('loading');
};
export default class Login extends React.Component {
  render() {
    return (
      <div className="Loginbutton">
        <GoogleLogin
          clientId='658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
          onSuccess={success}
          onFailure={error}
          onRequest={loading}
          buttonText="Login using google+"
          redirectUri="https://localhost:3000"
        />
      </div>
    );
  }
}
