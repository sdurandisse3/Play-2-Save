import React from 'react';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Redirect } from 'react-router-dom';
import Button from '../components/button';

class Login extends React.Component{
    state = {
        email: '',
        password: '',
        error: ''
      }

      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }
      
      handleSubmit = (e) => {
        e.preventDefault();
    
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((response) => {
            console.log('Returns: ', response);
          })
          .catch(err => {
            const { message } = err;
            this.setState({ error: message });
          })
      }

      // componentDidMount() {
      //   this.unsubscribe = firebase.auth().onAuthStateChanged(async user => {
      //     if(user) {
      //       console.log('uzur',user)
      //       const { email, password } = user;
     
      //       await this.setState({ user, email, password });
      //     }
      //     else {
      //       this.setState({ user: null });
      //     }
      //   });
      // }

      render(){
        const { email, password, error, user } = this.state;
        console.log('state',this.state, 'email',email, 'password',password, 'user',user)
        const displayError = error === '' ? '' : <div className="alert alert-danger" role="alert">{error}</div>
        const displayForm = <>
      
      {displayError}
      <form>
        <div className='container col-4' >
        <h1>Connect Coupons</h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" placeholder="Password" value={password} name="password" onChange={this.handleChange} />
        </div>
        <Button className='col col-md-6' goTo='/feed' onClick={this.handleSubmit} value='button' /> 
        
        <button type="submit" goTo='/feed' className="btn btn-primary" onClick={this.handleSubmit}>Login</button>          
        </div>

      </form>
      </>;

          return(
            <AuthContext.Consumer>
            {
              (user) => {
                if (user) {
                  return <Redirect to='/' />
                } else {
                  return displayForm;
                }
              }
            }
          </AuthContext.Consumer>
          )
      }
}
export default Login;