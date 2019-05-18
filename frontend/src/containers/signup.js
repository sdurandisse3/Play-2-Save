import React from 'react';

class SignUp extends React.Component{
    state = {
        email: '',
        password: '',
        error: ''
      }
      render() {
      
        
    
        return (
            <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email"  />
            </div>
           
          </form>
        );
      }
}
export default SignUp;