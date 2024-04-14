import { iconsSvg } from './icons.js';

const $ = document;
const MENU_ELEMENT = $.getElementById('menu');
const NAV_ELEMENT = $.querySelector('.header--navigation');
const BODY_ELEMENT = $.body;
const H1_ELEMENT = $.querySelector('h1');
const BUTTON_CONTAINER_ELEMENT = $.querySelector('.btn__container');
const MENU_AND_THEME_ICONS = $.getElementsByClassName('onNav');

// change Menu and theme icons color when navigtion is open
const onNavIcons = () => {
  for (let i = 0; i < MENU_AND_THEME_ICONS.length; i += 1) {
    MENU_AND_THEME_ICONS[i].classList.remove('menuAndTheme-icons');
  }
};

// change Menu and theme icons color when navigtion is close
const notOnNavIcons = () => {
  for (let i = 0; i < MENU_AND_THEME_ICONS.length; i += 1) {
    MENU_AND_THEME_ICONS[i].classList.add('menuAndTheme-icons');
  }
};

const navigationMenu = () => {
  const visibility = NAV_ELEMENT.getAttribute('data-visible');
  if (visibility === 'false') {
    NAV_ELEMENT.setAttribute('data-visible', 'true');
    MENU_ELEMENT.setAttribute('aria-expanded', 'true');

    MENU_ELEMENT.innerHTML = iconsSvg.menuClose;

    onNavIcons();

    BODY_ELEMENT.style.overflow = 'hidden';

    BUTTON_CONTAINER_ELEMENT.classList.add('btn__container--fixed');
    H1_ELEMENT.classList.add('h1--fixed');
  } else {
    NAV_ELEMENT.setAttribute('data-visible', 'false');
    MENU_ELEMENT.setAttribute('aria-expanded', 'false');

    MENU_ELEMENT.innerHTML = iconsSvg.menuOpen;

    notOnNavIcons();

    BODY_ELEMENT.style.overflow = 'auto';

    BUTTON_CONTAINER_ELEMENT.classList.remove('btn__container--fixed');
    H1_ELEMENT.classList.remove('h1--fixed');
  }
};
const closeNavigation = () => {
  const visibility = NAV_ELEMENT.getAttribute('data-visible');
  if (visibility === 'true') {
    NAV_ELEMENT.setAttribute('data-visible', 'false');
    MENU_ELEMENT.setAttribute('aria-expanded', 'false');

    MENU_ELEMENT.innerHTML = iconsSvg.menuOpen;

    notOnNavIcons();

    BODY_ELEMENT.style.overflow = 'auto';

    BUTTON_CONTAINER_ELEMENT.classList.remove('btn__container--fixed');
    H1_ELEMENT.classList.remove('h1--fixed');
  }
};
export {
  MENU_ELEMENT,
  NAV_ELEMENT,
  BODY_ELEMENT,
  navigationMenu,
  onNavIcons,
  notOnNavIcons,
  closeNavigation,
};
