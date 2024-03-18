/* eslint-disable import/no-mutable-exports */

import { svgImage } from './local.js';
// eslint-disable-next-line import/no-cycle
import { NAV_ELEMENT } from './menu.js';

const $ = document;
const THEME_ELEMENT = $.getElementById('theme');
const THEME_IMG_ELEMENT = $.getElementById('theme--image');

const HOME_IMG_ELEMENT = $.getElementById('home-img');
const PORTFOLIO_IMG_ELEMENT = $.getElementById('portfolio-img');
const ABOUT_IMG_ELEMENT = $.getElementById('about-img');
const CONTACT_IMG_ELEMENT = $.getElementById('contact-img');

const GITHUB_IMG_ELEMENT = $.getElementById('gitHub-img');
const LINKDIN_IMG_ELEMENT = $.getElementById('linkdin-img');
const TWITTER_IMG_ELEMENT = $.getElementById('twitter-img');

let theme = localStorage.getItem('theme');

const enableDarkMode = () => {
  $.body.classList.add('dark-mode');
  localStorage.setItem('theme', 'dark');
  theme = localStorage.getItem('theme');
};
const disableDarkMode = () => {
  $.body.classList.remove('dark-mode');
  localStorage.setItem('theme', 'light');
  theme = localStorage.getItem('theme');
};

if (theme === 'dark') {
  enableDarkMode();
  THEME_IMG_ELEMENT.src = svgImage.lightMode;
  HOME_IMG_ELEMENT.src = svgImage.homeAlt;
  PORTFOLIO_IMG_ELEMENT.src = svgImage.portfolio;
  ABOUT_IMG_ELEMENT.src = svgImage.aboutAlt;
  CONTACT_IMG_ELEMENT.src = svgImage.contactAlt;
  GITHUB_IMG_ELEMENT.src = svgImage.githubAlt;
  LINKDIN_IMG_ELEMENT.src = svgImage.linkdinAlt;
  TWITTER_IMG_ELEMENT.src = svgImage.twitterAlt;
} else {
  THEME_IMG_ELEMENT.src = svgImage.darkMode;
  HOME_IMG_ELEMENT.src = svgImage.home;
  PORTFOLIO_IMG_ELEMENT.src = svgImage.portfolio;
  ABOUT_IMG_ELEMENT.src = svgImage.about;
  CONTACT_IMG_ELEMENT.src = svgImage.contact;
  GITHUB_IMG_ELEMENT.src = svgImage.github;
  LINKDIN_IMG_ELEMENT.src = svgImage.linkdin;
  TWITTER_IMG_ELEMENT.src = svgImage.twitter;
}

const themeToggle = () => {
  theme = localStorage.getItem('theme');

  if (theme !== 'dark') {
    enableDarkMode();
    THEME_IMG_ELEMENT.src = svgImage.lightMode;
  } else {
    disableDarkMode();
    THEME_IMG_ELEMENT.src = svgImage.darkMode;
  }
};

const changeThemeImg = () => {
  theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    THEME_IMG_ELEMENT.src = svgImage.lightModeOnNav;
  } else {
    THEME_IMG_ELEMENT.src = svgImage.darkModeOnNav;
  }
};

const defaultThemeImg = () => {
  theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    THEME_IMG_ELEMENT.src = svgImage.lightMode;
  } else {
    THEME_IMG_ELEMENT.src = svgImage.darkMode;
  }
};
function isVisible_theme() {
  const visibility = NAV_ELEMENT.getAttribute('data-visible');

  if (visibility === 'true') {
    changeThemeImg();
  } else {
    defaultThemeImg();
  }
}
const imgBasedONTheme = () => {
  theme = localStorage.getItem('theme');

  HOME_IMG_ELEMENT.src = theme === 'dark' ? svgImage.homeAlt : svgImage.home;

  PORTFOLIO_IMG_ELEMENT.src =
    theme === 'dark' ? svgImage.portfolioAlt : svgImage.portfolio;

  ABOUT_IMG_ELEMENT.src = theme === 'dark' ? svgImage.aboutAlt : svgImage.about;

  CONTACT_IMG_ELEMENT.src =
    theme === 'dark' ? svgImage.contactAlt : svgImage.contact;

  GITHUB_IMG_ELEMENT.src =
    theme === 'dark' ? svgImage.githubAlt : svgImage.github;

  LINKDIN_IMG_ELEMENT.src =
    theme === 'dark' ? svgImage.linkdinAlt : svgImage.linkdin;

  TWITTER_IMG_ELEMENT.src =
    theme === 'dark' ? svgImage.twitterAlt : svgImage.twitter;
};

export {
  THEME_ELEMENT,
  THEME_IMG_ELEMENT,
  themeToggle,
  changeThemeImg,
  defaultThemeImg,
  imgBasedONTheme,
  isVisible_theme,
  HOME_IMG_ELEMENT,
  ABOUT_IMG_ELEMENT,
  CONTACT_IMG_ELEMENT,
  PORTFOLIO_IMG_ELEMENT,
  GITHUB_IMG_ELEMENT,
  LINKDIN_IMG_ELEMENT,
  TWITTER_IMG_ELEMENT
};
