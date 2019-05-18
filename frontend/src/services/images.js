const ImageService = {}

ImageService.init = () => {
    if (localStorage.getItem('images') === null) {
      localStorage.setItem('images', JSON.stringify([]));
    }
  }

ImageService.getImages = () => {
    const imageArrayString = localStorage.getItem('images');
    const imageArray = JSON.parse(imageArrayString);
    return imageArray;
  }

  ImageService.saveImage = (url, timestamp) => {
    const newImage = { url, timestamp };
  
  }
export default ImageService;