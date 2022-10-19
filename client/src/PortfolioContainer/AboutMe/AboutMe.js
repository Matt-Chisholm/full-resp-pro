import React from "react";
import "./AboutMe.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) {
      return;
    }
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const screenConstants = {
    description:
      "I am a junior full stack web developer with a passion for front-end and Agile development. I strive to build responsive, clean UI and to constantly learn and grow as a coder. I am a motivated professional willing to be an asset for a great team/organization. ",
    highlights: {
      bullets: [
        "Full stack web and mobile development",
        "Interactive Front End and Design",
        "Passionate about React",
        "Redux for state management",
        "PostgreSQL",
        "Typescript",
        "Express and NodeJS",
      ],
      heading: "Here are a few highlights:",
    },
  };

  const renderHighlights = () => {
    return screenConstants.highlights.bullets.map((value, i) => {
      return (
        <div className='highlight' key={i}>
          <div className='highlight-blob'></div>
          <span>{value}</span>
        </div>
      );
    });
  };

  return (
    <div
      className='about-me-container screen-container fade-in'
      id={props.id || ""}>
      <div className='about-me-parent'>
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className='about-me-card'>
          <div className='about-me-profile'></div>
          <div className='about-me-details'>
            <span className='about-me-description'>
              {screenConstants.description}
            </span>
            <div className='about-me-highlights'>
              <div className='highlight-heading'>
                <span>{screenConstants.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className='about-me-options'>
              <button
                className='btn primary-btn'
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                {" "}
                Hire Me{" "}
              </button>
              <a
                href='https://resume.creddle.io/resume/7w30gjoqxwq'
                target={"_blank"}>
                <button className='btn highlighted-btn'>See Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
