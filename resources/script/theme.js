import {iconsSvg} from './icons.js';
import { BODY_ELEMENT } from './menu.js';

const $ = document;
const THEME_ELEMENT = $.getElementById('theme');


let theme = localStorage.getItem('theme');

const enableDarkMode = () => {
  BODY_ELEMENT.classList.add('dark-mode');
  localStorage.setItem('theme', 'dark');
  theme = localStorage.getItem('theme');
  THEME_ELEMENT.innerHTML=iconsSvg.lightMode;
};
const disableDarkMode = () => {
  BODY_ELEMENT.classList.remove('dark-mode');
  localStorage.setItem('theme', 'light');
  theme = localStorage.getItem('theme');
  THEME_ELEMENT.innerHTML=iconsSvg.lightMode;
};

if (theme === 'dark') {
  enableDarkMode();
}

const themeToggle = () => {
  theme = localStorage.getItem('theme');

  if (theme !== 'dark') {
    enableDarkMode();
    THEME_ELEMENT.innerHTML = iconsSvg.lightMode;
  } else {
    disableDarkMode();
    THEME_ELEMENT.innerHTML = iconsSvg.darkMode;
  }
};


export {
  THEME_ELEMENT,
  themeToggle,
};
