import React from 'react';
//import Fuse from '../context/fuse.js'
//import { HashRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from '../firebase';
import AuthContext from '../contexts/auth';

class Tags extends React.Component {
  static contextType = AuthContext
  constructor(props) {
      super (props)

      this.state= {
          user: this.context,
          tag: '',
          coupon: '',
          expiration: '',
          amount: '',
          datePosted: '',
      }
  };

  setTag(coupon, tag) {
    // A post tag.
    var url = {
      coupon: coupon,
      tag: tag
    };

    //let tags = this.tag.getTags(url)
    //console.log('the tags are..', tags)
    // Get an existing coupon for a new Tag.
    const db = firebase.database(); 
    let newTag = db.ref(this.tag).child('tags').push().key;
  
    // Fill in the new tags's data by appending it to the end of the coupon.
    var updates = {};
    updates['/coupons/' + this.state.tags + '/tags/' + newTag] = url
  
    return db.ref().update(updates);
  }

  handleChange = (e) => {
    this.setState({ [this.tag]: e.target.value });
    console.log(e.target.value)
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    
    const { tag, coupon, datePosted, expiration, amount} = this.state
    console.log('tag', tag, 'coupon', coupon)
      return(
       <>
       <div>
       Tags Page
       </div>
       <div className="jumbotron jumbotron-fluid">
 <div className="container">
   <h1 className="display-4">Tags</h1>
   <div className="lead"><ul>
       {/* Dynamically rendered with data from firebase */}
       <li>#Electronics(5)</li>
       <li>#Groceries(17)</li>
       <li>#Shopping(31)</li>
       <li>#Travel(8)</li>
       <li>#Leisure(18)</li>
       <li>#HomeGoods(11)</li>
       {/* Dynamically rendered with data from firebase */}
       {/* needs component that renders based on the tag chosen */}
       {/* needs componet that ties to moment.js for the time posted */}
       {/* needs component for expiration date */}
       </ul>
       </div>
 </div>
 
</div>

<div className="input-group mb-3">
  <div className="input-group-prepend">
    <button className="btn btn-outline-secondary" onChange={this.handleChange} tag = 'tag' type="button" >SelectTag</button>
  </div>
  <select className="custom-select" id="inputGroupSelect03" onChange={this.handleChange} tag = 'tag'> {/*value = {tag}*/}
  {/* take value from options and update tags */}
    <option defaultValue>Tag</option>
    <option value="Groceries">Groceries</option>
    <option value="Electronics">Electronics</option>
    <option value="Shopping">Shopping</option>
    <option value="Travel">Travel</option>
    <option value="Leisure">Leisure</option>
    <option value="HomeGoods">HomeGoods</option>
    {/* take value from options and update tags */}
  </select>
</div>


          </>

      )
  }
};

export default Tags;