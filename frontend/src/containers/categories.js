import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Category extends React.Component {
   constructor(props) {
       super (props)

       this.state= {
           
           user: null,
           category: null,
           type: null,
           number: null
       }
   };


   render() {
       return(
        <>
        <div>
        Category
        </div>
        <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Category</h1>
    <p className="lead"><ul>
        {/* Dynamically rendered with data from firebase */}
        
        {/* Dynamically rendered with data from firebase */}
        </ul>
        </p>
  </div>
</div>
           </>

       )
   }
};

export default Category;