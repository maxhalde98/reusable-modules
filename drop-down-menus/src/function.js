// factory function that takes class names of a button, a content to be shown/hidden,
// and a container to hold both elements
const dropdownFactory = (texts, links) => {
  const DROPDOWN_CONTAINER = document.createElement('div');
  DROPDOWN_CONTAINER.classList.add('dropdown');

  const DROPDOWN_BTN = document.createElement('button');
  DROPDOWN_BTN.classList.add('dropdown-btn');
  DROPDOWN_BTN.textContent = 'Dropdown';

  const DROPDOWN_CONTENT = document.createElement('div');
  DROPDOWN_CONTENT.classList.add('dropdown-content');

  DROPDOWN_CONTAINER.appendChild(DROPDOWN_BTN);
  DROPDOWN_CONTAINER.appendChild(DROPDOWN_CONTENT);

  let num = texts.length;

  while (num >= 0) {
    const LINK = document.createElement('a');
    LINK.href = links[num];
    LINK.textContent = texts[num];
    DROPDOWN_CONTENT.appendChild(LINK);
    num -= 1;
  }

  DROPDOWN_BTN.addEventListener('mouseover', () => {
    DROPDOWN_CONTENT.style.visibility = 'visible';
  });

  DROPDOWN_CONTAINER.addEventListener('mouseleave', () => {
    DROPDOWN_CONTENT.style.visibility = 'hidden';
  });

  return DROPDOWN_CONTAINER;
};

export default dropdownFactory;
