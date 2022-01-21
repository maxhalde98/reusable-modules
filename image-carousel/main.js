const IMAGE_PATHS = ['./images/sample1.jpeg', './images/sample2.jpeg', './images/sample3.jpeg',
  './images/sample4.jpeg', './images/sample5.jpeg'];
// const currIndex = 0;

// const updateSelection = (index) => {
//   for (let i = 0; i < IMAGE_PATHS.length; i += 1) {
//     if (i === index) {
//       document.getElementById(`pic${i}`).classList.replace('picture-img', 'curr-img');
//       document.getElementById(`pic-btn${i}`).classList.replace('slider-btn-off', 'slider-btn-on');
//     } else {
//       document.getElementById(`pic${i}`).classList.replace('curr-img', 'picture-img');
//       document.getElementById(`pic-btn${i}`).classList.replace('slider-btn-on', 'slider-btn-off');
//     }
//   }
//   currIndex = index;
// };

// const createDomElements = () => {
//   const FRAME = document.createElement('div');
//   FRAME.classList.add('frame');

//   const LEFT_ARROW = document.createElement('div');
//   LEFT_ARROW.classList.add('arrow');
//   FRAME.appendChild(LEFT_ARROW);

//   const LEFT_ARROW_BTN = document.createElement('button');
//   LEFT_ARROW_BTN.classList.add('arrow-btn');
//   LEFT_ARROW_BTN.id = 'left-arrow-btn';
//   LEFT_ARROW_BTN.innerHTML = '&#10094';
//   LEFT_ARROW.appendChild(LEFT_ARROW_BTN);

//   const PICTURE_DIV = document.createElement('div');
//   PICTURE_DIV.classList.add('picture');
//   FRAME.appendChild(PICTURE_DIV);

//   const RIGHT_ARROW = document.createElement('div');
//   RIGHT_ARROW.classList.add('arrow');
//   FRAME.appendChild(RIGHT_ARROW);

//   const RIGHT_ARROW_BTN = document.createElement('button');
//   RIGHT_ARROW_BTN.classList.add('arrow-btn');
//   RIGHT_ARROW_BTN.id = 'right-arrow-btn';
//   RIGHT_ARROW_BTN.innerHTML = '&#10095';
//   RIGHT_ARROW.appendChild(RIGHT_ARROW_BTN);

//   const SLIDER = document.createElement('div');
//   SLIDER.classList.add('slider-div');
//   PICTURE_DIV.appendChild(SLIDER);

//   return FRAME;
// };

const imageCarouselFactory = (imagePaths) => {
  const FRAME = document.createElement('div');
  FRAME.classList.add('frame');

  const LEFT_ARROW = document.createElement('div');
  LEFT_ARROW.classList.add('arrow');
  FRAME.appendChild(LEFT_ARROW);

  const LEFT_ARROW_BTN = document.createElement('button');
  LEFT_ARROW_BTN.classList.add('arrow-btn');
  LEFT_ARROW_BTN.id = 'left-arrow-btn';
  LEFT_ARROW_BTN.innerHTML = '&#10094';
  LEFT_ARROW.appendChild(LEFT_ARROW_BTN);

  const PICTURE_DIV = document.createElement('div');
  PICTURE_DIV.classList.add('picture');
  FRAME.appendChild(PICTURE_DIV);

  const RIGHT_ARROW = document.createElement('div');
  RIGHT_ARROW.classList.add('arrow');
  FRAME.appendChild(RIGHT_ARROW);

  const RIGHT_ARROW_BTN = document.createElement('button');
  RIGHT_ARROW_BTN.classList.add('arrow-btn');
  RIGHT_ARROW_BTN.id = 'right-arrow-btn';
  RIGHT_ARROW_BTN.innerHTML = '&#10095';
  RIGHT_ARROW.appendChild(RIGHT_ARROW_BTN);

  const SLIDER = document.createElement('div');
  SLIDER.classList.add('slider-div');
  PICTURE_DIV.appendChild(SLIDER);

  let currIndex = 0;

  for (let i = imagePaths.length - 1; i >= 0; i -= 1) {
    const IMAGE = document.createElement('img');
    IMAGE.src = imagePaths[i];
    IMAGE.classList.add('picture-img');
    IMAGE.id = `pic${i}`;
    PICTURE_DIV.appendChild(IMAGE);

    const SLIDER_BTN = document.createElement('button');
    SLIDER_BTN.classList.add('slider-btn-off');
    SLIDER_BTN.id = `pic-btn${imagePaths.length - i - 1}`;
    // SLIDER_BTN.addEventListener('click', () => {
    //   updateSelection(imagePaths.length - i - 1);
    // });
    SLIDER.appendChild(SLIDER_BTN);
  }

  const updateSelection = (index) => {
    for (let i = 0; i < IMAGE_PATHS.length; i += 1) {
      if (i === index) {
        document.getElementById(`pic${i}`).classList.replace('picture-img', 'curr-img');
        document.getElementById(`pic-btn${i}`).classList.replace('slider-btn-off', 'slider-btn-on');
      } else {
        document.getElementById(`pic${i}`).classList.replace('curr-img', 'picture-img');
        document.getElementById(`pic-btn${i}`).classList.replace('slider-btn-on', 'slider-btn-off');
      }
    }
    currIndex = index;
  };

  LEFT_ARROW_BTN.addEventListener('click', () => {
    if (currIndex === 0) {
      currIndex = IMAGE_PATHS.length - 1;
      updateSelection(currIndex);
    } else {
      currIndex -= 1;
      updateSelection(currIndex);
    }
  });

  RIGHT_ARROW_BTN.addEventListener('click', () => {
    if (currIndex === IMAGE_PATHS.length - 1) {
      currIndex = 0;
      updateSelection(currIndex);
    } else {
      currIndex += 1;
      updateSelection(currIndex);
    }
  });

  updateSelection(currIndex);
};

const CAROUSEL = imageCarouselFactory(IMAGE_PATHS);
