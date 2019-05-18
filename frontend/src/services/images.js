const ImageService = {}

ImageService.init = () => {
    if (localStorage.getItem('images') === null) {
      localStorage.setItem('images', JSON.stringify([]));
    }
  }

ImageService.getImages = () => {
    const imageArrayString = localStorage.getItem('images');
    const imageArray = JSON.parse(imageArrayString);
  }

export default ImageService;