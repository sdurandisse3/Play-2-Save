import React from 'react';
import Login from '../containers/login'
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div>
          <div className='col-4' >
           <Login/> 
          </div>
                </div>
        )
    }
}

export default Home;