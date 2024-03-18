/* eslint-disable no-plusplus */
import { svgCode, svgImage } from './local.js';
import { MENU_ELEMENT, navigationMenu, BODY_ELEMENT } from './menu.js';
import {
  THEME_ELEMENT,
  themeToggle,
  imgBasedONTheme,
  isVisible_theme,
  HOME_IMG_ELEMENT,
  ABOUT_IMG_ELEMENT,
  CONTACT_IMG_ELEMENT,
  PORTFOLIO_IMG_ELEMENT,
  GITHUB_IMG_ELEMENT,
  LINKDIN_IMG_ELEMENT,
  TWITTER_IMG_ELEMENT,
} from './theme.js';

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

MENU_ELEMENT.innerHTML = svgCode.menuOpen;

MENU_ELEMENT.addEventListener('click', navigationMenu);

// ===== Theme =====

const theme = localStorage.getItem('theme');

if (theme === 'dark') {
  HOME_IMG_ELEMENT.src = svgImage.homeAlt;

  PORTFOLIO_IMG_ELEMENT.src = svgImage.portfolioAlt;

  ABOUT_IMG_ELEMENT.src = svgImage.aboutAlt;

  CONTACT_IMG_ELEMENT.src = svgImage.contactAlt;

  GITHUB_IMG_ELEMENT.src =
    theme === 'dark' ? svgImage.githubAlt : svgImage.github;

  LINKDIN_IMG_ELEMENT.src =
    theme === 'dark' ? svgImage.linkdinAlt : svgImage.linkdin;

  TWITTER_IMG_ELEMENT.src =
    theme === 'dark' ? svgImage.twitterAlt : svgImage.twitter;
}

THEME_ELEMENT.addEventListener('click', themeToggle);
THEME_ELEMENT.addEventListener('click', isVisible_theme);
THEME_ELEMENT.addEventListener('click', imgBasedONTheme);

/* ===== Services Read More ===== */

function opeanReadMore() {
  SERVICES_LIST_ELEMENT.style.display = 'flex';
  $.getElementById('btn--services--list-close').innerHTML =
    `${svgCode.menuClose}`;
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

  HOME_NAV_ELEMENT1.addEventListener("click", homePageVisibility);
}

if (PORTFOLIO_NAV_ELEMENTS.length > 0) {
  for (let i = 0; i < PORTFOLIO_NAV_ELEMENTS.length; i++) {
    PORTFOLIO_NAV_ELEMENTS[i].addEventListener("click", portfolioPageVisibility);
}
}

if (ABOUT_NAV_ELEMENTS.length > 0) {
  for (let i = 0; i < ABOUT_NAV_ELEMENTS.length; i++) {
    ABOUT_NAV_ELEMENTS[i].addEventListener("click", aboutPageVisibility);
}
}

if (CONTACT_NAV_ELEMENTS.length > 0) {
  for (let i = 0; i < CONTACT_NAV_ELEMENTS.length; i++) {
    CONTACT_NAV_ELEMENTS[i].addEventListener("click", contactPageVisibility);
}
}



// ======== header BG

const scrollHeader = () => {
  const header = document.querySelector('header');

  if (window.scrollY >= 50) {
    header.classList.add('scroll--header');
  } else {
    header.classList.remove('scroll--header');
  }
};

window.addEventListener('scroll', scrollHeader);


// document.addEventListener("DOMContentLoaded", () => {
//   const header = document.querySelector("header");
//   const section1 = document.querySelector(".home__first-section--top");

  // Adjust this value to determine when to change the header color
//   const scrollTrigger = section1.offsetTop;

//   window.addEventListener("scroll", () => {
//     if (window.pageYOffset >= scrollTrigger) {
//       header.style.backgroundColor = "#fff"; // Change the color as needed
//       header.style.position = "fixed";
//     } else {
//       header.style.backgroundColor = "transparent"; // Reset to the original color
//       header.style.position = "static";
//     }
//   });
// });
