import {iconsSvg} from './icons.js';
import { MENU_ELEMENT, navigationMenu, NAV_ELEMENT, BODY_ELEMENT, onNavIcons, notOnNavIcons } from './menu.js';
import { THEME_ELEMENT, themeToggle } from './theme.js';

import {
  homePageVisibility,
  portfolioPageVisibility,
  aboutPageVisibility,
  contactPageVisibility,
} from './pageswitch.js';

const $ = document;
const SERVICES_READ_MORE_ELEMENT = $.getElementById('btn--readMore');
const SERVICES_LIST_ELEMENT = $.querySelector('.services--list');
const READ_MORE_CLOSE_BTN_ELEMENT = $.getElementById(
  'btn--services--list-close',
);
const HOME_NAV_ELEMENTS = $.getElementsByClassName('home-nav');
const PORTFOLIO_NAV_ELEMENTS = $.getElementsByClassName('portfolio-nav');
const ABOUT_NAV_ELEMENTS = $.getElementsByClassName('about-nav');
const CONTACT_NAV_ELEMENTS = $.getElementsByClassName('contact-nav');

// ===== Menu =====

MENU_ELEMENT.addEventListener('click', navigationMenu);

// ===== Theme =====

THEME_ELEMENT.addEventListener('click', themeToggle);
THEME_ELEMENT.addEventListener('click', ()=> {
  const visibility = NAV_ELEMENT.getAttribute('data-visible');

  if (visibility === 'false') {
    notOnNavIcons();
  } else {
    onNavIcons();
  }
});

/* ===== Services Read More ===== */

function opeanReadMore() {
  SERVICES_LIST_ELEMENT.style.display = 'flex';
  $.getElementById('btn--services--list-close').innerHTML =
    `${iconsSvg.menuClose}`;
  BODY_ELEMENT.style.overflow = 'hidden';
}
function closeReadMore() {
  SERVICES_LIST_ELEMENT.style.display = 'none';
  BODY_ELEMENT.style.overflow = 'auto';
}

SERVICES_READ_MORE_ELEMENT.addEventListener('click', opeanReadMore);
READ_MORE_CLOSE_BTN_ELEMENT.addEventListener('click', closeReadMore);

/* ===== Page Toggle ===== */

if (HOME_NAV_ELEMENTS.length > 0) {
  const HOME_NAV_ELEMENT1 = HOME_NAV_ELEMENTS[0];

  HOME_NAV_ELEMENT1.addEventListener('click', homePageVisibility);
}

if (PORTFOLIO_NAV_ELEMENTS.length > 0) {
  for (let i = 0; i < PORTFOLIO_NAV_ELEMENTS.length; i+=1) {
    PORTFOLIO_NAV_ELEMENTS[i].addEventListener(
      'click',
      portfolioPageVisibility,
    );
  }
}

if (ABOUT_NAV_ELEMENTS.length > 0) {
  for (let i = 0; i < ABOUT_NAV_ELEMENTS.length; i+=1) {
    ABOUT_NAV_ELEMENTS[i].addEventListener('click', aboutPageVisibility);
  }
}

if (CONTACT_NAV_ELEMENTS.length > 0) {
  for (let i = 0; i < CONTACT_NAV_ELEMENTS.length; i+=1) {
    CONTACT_NAV_ELEMENTS[i].addEventListener('click', contactPageVisibility);
  }
}

// ======== header BG

const scrollHeader = () => {
  const header = $.querySelector('header');

  if (window.scrollY >= 50) {
    header.classList.add('scroll--header');
  } else {
    header.classList.remove('scroll--header');
  }
};

window.addEventListener('scroll', scrollHeader);
