const imageCarouselFactory = (imagePaths) => {
  for (let i = 0; i < imagePaths.length; i += 1) {
    const IMAGE = document.createElement('img');
    IMAGE.src = 'imagePaths[i]';
  }
};

const IMAGE_PATHS = ['./images/sample1.jpeg', './images/sample2.jpeg', './images/sample3.jpeg',
  './images/sample4.jpeg', './images/sample5.jpeg'];

imageCarouselFactory(IMAGE_PATHS);
