// factory function that takes class names of a button, a content to be shown/hidden,
// and a container to hold both elements
const dropdownFactory = (btnClass, contentClass, containerClass) => {
  const DROPDOWN_BTN = document.getElementsByClassName(btnClass);
  const DROPDOWN_CONTENT = document.getElementsByClassName(contentClass);
  const DROPDOWN_CONTAINER = document.getElementsByClassName(containerClass);

  DROPDOWN_BTN[0].addEventListener('mouseover', () => {
    DROPDOWN_CONTENT[0].style.visibility = 'visible';
  });

  DROPDOWN_CONTAINER[0].addEventListener('mouseleave', () => {
    DROPDOWN_CONTENT[0].style.visibility = 'hidden';
  });
};

export default dropdownFactory;
