import Home from "../PortfolioContainer/Home/Home";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";
import ContactMe from "../PortfolioContainer/ContactMe/ContactMe";
import Projects from "../PortfolioContainer/Projects/Projects";

export const totalScreens = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "AboutMe",
    component: AboutMe,
  },
  {
    screen_name: "Projects",
    component: Projects,
  },
  {
    screen_name: "ContactMe",
    component: ContactMe,
  },
];

export const getScreenIndex = (screenName) => {
  if (!screenName) {
    return -1;
  }
  for (let i = 0; i < totalScreens.length; i++) {
    if (totalScreens[i].screen_name === screenName) {
      return i;
    }
  }
  return -1;
};
