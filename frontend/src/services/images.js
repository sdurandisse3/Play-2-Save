const ImageService = {}

ImageService.init = () => {
    if (localStorage.getItem('images') === null) {
      localStorage.setItem('images', JSON.stringify([]));
    }
  }

ImageService.getImages = () => {
    const imageArrayString = localStorage.getItem('images');
  }

export default ImageService;