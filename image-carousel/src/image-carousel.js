const updateSelection = (index, imagePaths) => {
  for (let i = 0; i < imagePaths.length; i += 1) {
    if (i === index) {
      document.getElementById(`pic${i}`).classList.replace('picture-img', 'curr-img');
      document.getElementById(`pic-btn${i}`).classList.replace('slider-btn-off', 'slider-btn-on');
    } else {
      document.getElementById(`pic${i}`).classList.replace('curr-img', 'picture-img');
      document.getElementById(`pic-btn${i}`).classList.replace('slider-btn-on', 'slider-btn-off');
    }
  }
};

const imageCarouselFactory = (imagePaths) => {
  let currIndex = 0;

  const FRAME = document.createElement('div');
  FRAME.classList.add('frame');

  const LEFT_ARROW = document.createElement('div');
  LEFT_ARROW.classList.add('arrow');

  const LEFT_ARROW_BTN = document.createElement('button');
  LEFT_ARROW_BTN.classList.add('arrow-btn');
  LEFT_ARROW_BTN.id = 'left-arrow-btn';
  LEFT_ARROW_BTN.innerHTML = '&#10094';
  LEFT_ARROW.appendChild(LEFT_ARROW_BTN);

  const PICTURE_DIV = document.createElement('div');
  PICTURE_DIV.classList.add('picture');

  const RIGHT_ARROW = document.createElement('div');
  RIGHT_ARROW.classList.add('arrow');

  const RIGHT_ARROW_BTN = document.createElement('button');
  RIGHT_ARROW_BTN.classList.add('arrow-btn');
  RIGHT_ARROW_BTN.id = 'right-arrow-btn';
  RIGHT_ARROW_BTN.innerHTML = '&#10095';
  RIGHT_ARROW.appendChild(RIGHT_ARROW_BTN);

  const SLIDER = document.createElement('div');
  SLIDER.classList.add('slider-div');
  PICTURE_DIV.appendChild(SLIDER);

  FRAME.appendChild(LEFT_ARROW);
  FRAME.appendChild(PICTURE_DIV);
  FRAME.appendChild(RIGHT_ARROW);

  imagePaths.forEach((path, index) => {
    const IMAGE = document.createElement('img');
    IMAGE.src = path;
    if (index === 0) {
      IMAGE.classList.add('curr-img');
    } else {
      IMAGE.classList.add('picture-img');
    }
    IMAGE.id = `pic${index}`;
    PICTURE_DIV.appendChild(IMAGE);

    const SLIDER_BTN = document.createElement('button');
    if (index === 0) {
      SLIDER_BTN.classList.add('slider-btn-on');
    } else {
      SLIDER_BTN.classList.add('slider-btn-off');
    }
    SLIDER_BTN.id = `pic-btn${index}`;
    SLIDER_BTN.addEventListener('click', () => {
      updateSelection(index, imagePaths);
      currIndex = index;
    });
    SLIDER.appendChild(SLIDER_BTN);
  });

  LEFT_ARROW_BTN.addEventListener('click', () => {
    if (currIndex === 0) {
      currIndex = imagePaths.length - 1;
      updateSelection(currIndex, imagePaths);
    } else {
      currIndex -= 1;
      updateSelection(currIndex, imagePaths);
    }
  });

  RIGHT_ARROW_BTN.addEventListener('click', () => {
    if (currIndex === imagePaths.length - 1) {
      currIndex = 0;
      updateSelection(currIndex, imagePaths);
    } else {
      currIndex += 1;
      updateSelection(currIndex, imagePaths);
    }
  });

  const autoChange = () => {
    if (currIndex === imagePaths.length - 1) {
      currIndex = 0;
      updateSelection(currIndex, imagePaths);
    } else {
      currIndex += 1;
      updateSelection(currIndex, imagePaths);
    }
  };
  setInterval(autoChange, 5000);

  return FRAME;
};

export default imageCarouselFactory;
