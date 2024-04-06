import { iconsSvg, socialMediaIcons, navigationIcons } from "./icons.js";

const MENU_OPEN_ICONS = document.getElementsByClassName('menu-icon-open');
const MENU_CLOSE_ICONS = document.getElementsByClassName('menu-icon-close');
const DARK_MODE_ICONS = document.getElementsByClassName('dark-mode-icon');
const LIGHT_MODE_ICONS = document.getElementsByClassName('light-mode-icons');

const GITHUB_ICONS = document.getElementsByClassName('github');
const LINKEDIN_ICONS = document.getElementsByClassName('linkedin');
const TWITTER_ICONS = document.getElementsByClassName('twitter');

const HOME_ICONS = document.getElementsByClassName('homeIcon');
const PROJECT_ICONS = document.getElementsByClassName('projectIcon');
const ABOUT_ICONS = document.getElementsByClassName('aboutIcon');
const CONTACT_ICONS = document.getElementsByClassName('contactIcon');


function assignIcons(icons, svg) {
    const iconsElements = icons;
    for (let i = 0; i < icons.length; i+=1) {
        iconsElements[i].innerHTML = svg;
    }
}

assignIcons(MENU_OPEN_ICONS, iconsSvg.menuOpen);
assignIcons(MENU_CLOSE_ICONS, iconsSvg.menuClose);
assignIcons(DARK_MODE_ICONS, iconsSvg.darkMode);
assignIcons(LIGHT_MODE_ICONS, iconsSvg.lightMode);

assignIcons(GITHUB_ICONS, socialMediaIcons.gitHub);
assignIcons(LINKEDIN_ICONS, socialMediaIcons.linkedin);
assignIcons(TWITTER_ICONS, socialMediaIcons.twitter);

assignIcons(HOME_ICONS, navigationIcons.home);
assignIcons(PROJECT_ICONS, navigationIcons.project);
assignIcons(ABOUT_ICONS, navigationIcons.about);
assignIcons(CONTACT_ICONS, navigationIcons.contact);




