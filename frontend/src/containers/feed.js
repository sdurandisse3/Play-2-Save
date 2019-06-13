import React from 'react'
import Image from '../components/image'
import ImageService from '../services/images';
import firebase from 'firebase';
import './feed.css';


class Feed extends React.Component {
  constructor(props) {
    super(props);

    // ImageService.init();
    // const imagesArray = ImageService.getImages();

    this.state = {
      images: []
    }
  }

  componentDidMount() {
    // var userId = firebase.auth().currentUser.uid;
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('thisuser', user)
        firebase.database().ref('/users/' + user.uid).once('value').then( (snapshot) => {
          if ( snapshot.val() ){
           console.log(snapshot.val().coupons)
          console.log(Object.values(snapshot.val().coupons))
          this.setState({images: Object.values(snapshot.val().coupons)}) 
          }
          else{
            console.log('this got hittt')
            return <h2> Upload Coupon </h2>
          }
        
          
        });
      }
      else {
        // ..... The user is logged out
      }
    })
    // console.log('userID', userId)

  }

  render() {
    const { images } = this.state;
    console.log('LOOKHERE', this.state)
    return (
      <div className='container'  >
      <div className="row">
      {
          images.map((e, i) => {
            console.log('yerrrrr',e);
            return (
              <>
              <div className="col-3">
              <Image className='img-item' image={e[0].url} timestamp={e.timestamp} key={i} />

              </div>

            
            </>)
          })
        }
      </div>
        
      </div>
    );
  };
};
export default Feed;

// <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>