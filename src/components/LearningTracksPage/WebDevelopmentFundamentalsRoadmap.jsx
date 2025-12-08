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
  
  title1="Responsive Web Design Fundamentals"
  paragraphText1="Learn the foundation of web structure."
  photo1="/assests/Imgs/page3/HTM_Course.svg"
  card1FieldId={1}
  card1ArticleId={1}
  
  title2="CSS Styling and Modern Layout Techniques"
  paragraphText2="Style web pages with CSS properties."
  photo2="/assests/Imgs/page3/CSS_Course.svg"
  card2FieldId={1}
  card2ArticleId={7}
  
  title3="Modern JavaScript and ES6+ Features"
  paragraphText3="Learn interactivity with JavaScript."
  photo3="/assests/Imgs/page3/JS_Course.svg"
  card3FieldId={1}
  card3ArticleId={2}
/>
    </>
  );
}

export default WebDevelopmentFundamentalsRoadmap;
