import TrackIntroduction from "./components/TrackIntroduction.jsx";
import ModuleCards from "./components/ModuleCards.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import { themes } from "./themes.js";

function WebDevelopmentFundamentalsRoadmap() {
  return (
    <>
      <TrackIntroduction
        TrackTitle="Web Development Fundamentals Roadmap"
        TrackDescription="Embark on your journey to becoming a full-stack web developer. This roadmap covers essential technologies from HTML to React, structured for clear progress and practical application."
      />
      <ProgressBar />
      <ModuleCards
        theme={themes.default}
        ModuleTitle="Module 1: Frontend Core Essentials"
        title1="HTML Basics"
        title2="CSS Basics"
        title3="JavaScript Basics"
        paragraphText1="Learn the foundation of web structure with HTML elements and attributes."
        paragraphText2="Style web pages with CSS properties, layouts, and selectors."
        paragraphText3="Learn interactivity and logic through JavaScript fundamentals."
        photo1="./public/assests/Imgs/page3/HTM_Course.svg"
        photo2="./public/assests/Imgs/page3/CSS_Course.svg"
        photo3="./public/assests/Imgs/page3/JS_Course.svg"
      />
      <ModuleCards
        theme={themes.default}
        ModuleTitle="Module 2: Building Interactive UIs"
        title1="DOM Manipulation"
        title2="Events"
        title3="Intro to Frameworks"
        paragraphText1="Learn how to interact with the DOM to create dynamic experiences."
        paragraphText2="Master event handling to make applications responsive and interactive."
        paragraphText3="Get familiar with modern UI libraries like React."
        photo1="./public/assests/Imgs/page3/DOM_Course.svg"
        photo2="./public/assests/Imgs/page3/Events_Course.svg"
        photo3="./public/assests/Imgs/page3/Framwork_Course.svg"
      />
      <ModuleCards
        theme={themes.default}
        ModuleTitle="Module 3: Advanced Concepts & Deployment"
        title1="HTML Basics"
        title2="CSS Basics"
        title3="JavaScript Basics"
        paragraphText1="Learn the foundation of web structure with HTML elements and attributes."
        paragraphText2="Style web pages with CSS properties, layouts, and selectors."
        paragraphText3="Learn interactivity and logic through JavaScript fundamentals."
        photo1="./public/assests/Imgs/page3/HTM_Course.svg"
        photo2="./public/assests/Imgs/page3/CSS_Course.svg"
        photo3="./public/assests/Imgs/page3/JS_Course.svg"
      />
    </>
  );
}

export default WebDevelopmentFundamentalsRoadmap;
