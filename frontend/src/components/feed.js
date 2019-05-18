import React from 'react'
import Image from '../components/image';


class Feed extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            images: imagesArray
          }
    }
    render(){
        const { images } = this.state; 
        console.log('state',this.state)
        return(
        <div className='container'>
        {
          images.map((e, i) => {
            return <Image image={e.url} timestamp={e.timestamp} key={i} />
          })
        }
      </div>
        );
    }

}
export default Feed;