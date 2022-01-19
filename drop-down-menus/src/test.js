import dropdownFactory from './function';

const BODY = document.querySelector('body');
BODY.append(dropdownFactory(['Google', 'YouTube', 'Facebook'], ['https://google.ca', 'https://youtube.com', 'https://facebook.com']));
