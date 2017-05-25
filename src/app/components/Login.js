import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';


const success = (response) => {
  console.log(response);
};

const error = (response) => {
  console.error(response);
};

const loading = () => {
  console.log('loading');
};
function Login() {
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
module.exports = Login;
