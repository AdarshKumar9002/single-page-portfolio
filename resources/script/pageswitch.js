const $ = document;
const HOME_PAGE_ELEMENT = $.getElementById('home-page');
const PORTFOLIO_PAGE_ELEMENT = $.getElementById('portfolio-page');
const ABOUT_PAGE_ELEMENT = $.getElementById('about-page');
const CONTACT_PAGE_ELEMENT = $.getElementById('contact-page');

const pageVisibilityShown = (page) => {
  const pageName = page;
  pageName.style.display = 'block';
};
const pageVisibilityHidden = (page1, page2, page3) => {
  const hidePage1 = page1;
  const hidePage2 = page2;
  const hidePage3 = page3;

  hidePage1.style.display = 'none';

  hidePage2.style.display = 'none';

  hidePage3.style.display = 'none';
};

const homePageVisibility = () => {
  pageVisibilityShown(HOME_PAGE_ELEMENT);
  pageVisibilityHidden(
    PORTFOLIO_PAGE_ELEMENT,
    ABOUT_PAGE_ELEMENT,
    CONTACT_PAGE_ELEMENT,
  );
  document.querySelector('header').classList.remove('fixed-header');
};
const portfolioPageVisibility = () => {
  pageVisibilityShown(PORTFOLIO_PAGE_ELEMENT);
  pageVisibilityHidden(
    HOME_PAGE_ELEMENT,
    ABOUT_PAGE_ELEMENT,
    CONTACT_PAGE_ELEMENT,
  );
  document.querySelector('header').classList.add('fixed-header');
};
const aboutPageVisibility = () => {
  pageVisibilityShown(ABOUT_PAGE_ELEMENT);
  pageVisibilityHidden(
    HOME_PAGE_ELEMENT,
    PORTFOLIO_PAGE_ELEMENT,
    CONTACT_PAGE_ELEMENT,
  );
  document.querySelector('header').classList.add('fixed-header');
};
const contactPageVisibility = () => {
  pageVisibilityShown(CONTACT_PAGE_ELEMENT);
  pageVisibilityHidden(
    HOME_PAGE_ELEMENT,
    PORTFOLIO_PAGE_ELEMENT,
    ABOUT_PAGE_ELEMENT,
  );
  document.querySelector('header').classList.add('fixed-header');
};



export {
  HOME_PAGE_ELEMENT,
  PORTFOLIO_PAGE_ELEMENT,
  ABOUT_PAGE_ELEMENT,
  CONTACT_PAGE_ELEMENT,
  homePageVisibility,
  portfolioPageVisibility,
  aboutPageVisibility,
  contactPageVisibility,
};
