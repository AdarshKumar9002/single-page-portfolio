const svgCode = {
  menuOpen: ` <svg
  data-name="Layer 1"
  width="25"
  id="Layer_1"
  viewBox="0 0 200 200"
  width="200"
  xmlns="http://www.w3.org/2000/svg"
>
  <title />
  <path
    class="svg--color"
    d="M75,20H40A20.06,20.06,0,0,0,20,40V75A20.06,20.06,0,0,0,40,95H75A20.06,20.06,0,0,0,95,75V40A20.06,20.06,0,0,0,75,20Zm0,55H40V40H75Zm95-27.5a10,10,0,0,0-10,10V75H125V40h17.5a10,10,0,0,0,0-20H125a20.06,20.06,0,0,0-20,20V75a20.06,20.06,0,0,0,20,20h35a20.06,20.06,0,0,0,20-20V57.5A10,10,0,0,0,170,47.5ZM75,105H40a20.06,20.06,0,0,0-20,20v35a20.06,20.06,0,0,0,20,20H75a20.06,20.06,0,0,0,20-20V125A20.06,20.06,0,0,0,75,105Zm0,55H40V125H75Zm85-55H125a20.06,20.06,0,0,0-20,20v35a20.06,20.06,0,0,0,20,20h35a20.06,20.06,0,0,0,20-20V125A20.06,20.06,0,0,0,160,105Zm0,55H125V125h35Z"
  />
</svg>`,
  menuClose:  `
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#000"
  stroke-width="2.3"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="lucide lucide-menu"
>
  <line x1="4" x2="15" y1="6" y2="18" />
  <line x1="4" x2="15" y1="18" y2="6" />
  </svg>
`,
};

const svgImage = {

  lightMode: "./resources/img/light-mode.svg",
  lightModeOnNav: "./resources/img/light-mode-alt.svg",

  darkMode: "./resources/img/dark-mode.svg",
  darkModeOnNav: "./resources/img/dark-mode-alt.svg",

  github:"./resources/img/git-hub.svg",
  githubAlt:"./resources/img/git-hub-alt.svg",

  linkdin:"./resources/img/linkdin.svg",
  linkdinAlt:"./resources/img/linkdin-alt.svg",

  twitter:"./resources/img/twitter.svg",
  twitterAlt:"./resources/img/twitter-alt.svg",

  insta:"",

  home: "./resources/img/home.svg",
  homeAlt: "./resources/img/home-alt.svg",

  portfolio: "./resources/img/project.svg",
  portfolioAlt: "./resources/img/project-alt.svg",

  about: "./resources/img/about.svg",
  aboutAlt: "./resources/img/about-alt.svg",

  contact: "./resources/img/contact.svg",
  contactAlt: "./resources/img/contact-alt.svg",
};

export {svgCode, svgImage};