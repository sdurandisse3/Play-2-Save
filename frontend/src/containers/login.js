import React from 'react';
import firebase from '../firebase';

class Login extends React.Component{
    state = {
        email: '',
        password: '',
        error: ''
      }

      render(){
        const { email, password, error } = this.state;
        const displayError = error === '' ? '' : <div className="alert alert-danger" role="alert">{error}</div>
        const displayForm = <>

          return(

          )
      }
}
export default Login;