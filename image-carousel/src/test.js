import imageCarouselFactory from './image-carousel';

const IMAGE_PATHS = ['../src/images/sample1.jpeg', '../src/images/sample2.jpeg', '../src/images/sample3.jpeg',
  '../src/images/sample4.jpeg', '../src/images/sample5.jpeg'];

const BODY = document.querySelector('body');
BODY.append(imageCarouselFactory(IMAGE_PATHS));
