const ImageService = {}

ImageService.init = () => {
    if (localStorage.getItem('images') === null) {
      localStorage.setItem('images', JSON.stringify([]));
    }
  }
export default ImageService;