import { svgCode } from './local.js';
// eslint-disable-next-line import/no-cycle
import { changeThemeImg, defaultThemeImg } from './theme.js';

const $ = document;
const MENU_ELEMENT = $.getElementById('menu');
const NAV_ELEMENT = $.querySelector('.header--navigation');
const BODY_ELEMENT = $.querySelector('body');
const H1_ELEMENT = $.querySelector('h1');
const BUTTON_CONTAINER_ELEMENT = $.querySelector('.btn__container');



const navigationMenu = () => {
  const visibility = NAV_ELEMENT.getAttribute('data-visible');

  if (visibility === 'false') {

    NAV_ELEMENT.setAttribute('data-visible', 'true');
    MENU_ELEMENT.setAttribute('aria-expanded', 'true');

    MENU_ELEMENT.innerHTML = svgCode.menuClose;

    BODY_ELEMENT.style.overflow = 'hidden';

    BUTTON_CONTAINER_ELEMENT.classList.add('btn__container--fixed');
    H1_ELEMENT.classList.add('h1--fixed');

    changeThemeImg();

  } else {

    NAV_ELEMENT.setAttribute('data-visible', 'false');
    MENU_ELEMENT.setAttribute('aria-expended', 'false');

    MENU_ELEMENT.innerHTML = svgCode.menuOpen;

    BODY_ELEMENT.style.overflow = 'auto';

    BUTTON_CONTAINER_ELEMENT.classList.remove('btn__container--fixed');
    H1_ELEMENT.classList.remove('h1--fixed');

    defaultThemeImg();

  }
};
export { MENU_ELEMENT, NAV_ELEMENT, BODY_ELEMENT, navigationMenu };
