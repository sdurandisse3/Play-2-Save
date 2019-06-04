import React from 'react'
import Image from '../components/image'
import ImageService from '../services/images';


class Feed extends React.Component{
    constructor(props) {
        super(props);

        ImageService.init();
        const imagesArray = ImageService.getImages();

        this.state = {
            images: imagesArray
          }
    }

    render(){
        const { images } = this.state; 
        console.log('LOOKHERE',this.state)
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