
import TrackIntroduction from "./components/TrackIntroduction.jsx";
import ModuleCards from "./components/ModuleCards.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import { themes } from "./themes.js";

function PythonFundamentalsRoadmap() {
  return (
    <>
      <TrackIntroduction
        TrackTitle="Python Fundamentals Roadmap"
        TrackDescription="Embark on your journey to becoming a proficient Python developer. This roadmap covers essential Python programming skills, from core syntax and logic to data structures and real-world projects."
      />

      <ProgressBar />

      {/* ===== Module 1: Core Python & Data Essentials ===== */}
      <ModuleCards
        theme={themes.python}
        ModuleTitle="Module 1: Core Python & Data Essentials"
        
        title1="Python Fundamentals for Data Analysis"
        paragraphText1="Learn fundamentals of Python and how to set up the environment."
        photo1="/assests/Imgs/Python/Introduction to Python & Setup.svg"
        card1FieldId={5}
        card1ArticleId={24}
        
        title2="Data Manipulation with Pandas Library"
        paragraphText2="Master Pandas for efficient data manipulation and analysis."
        photo2="/assests/Imgs/Python/Variables, Data Types & Operators.svg"
        card2FieldId={5}
        card2ArticleId={25}
        
        title3="Data Visualization with Matplotlib and Seaborn"
        paragraphText3="Transform data into compelling visual stories."
        photo3="/assests/Imgs/Python/Conditions & Loops.svg"
        card3FieldId={5}
        card3ArticleId={26}
      />

      {/* ===== Module 2: Advanced Data Analysis ===== */}
      <ModuleCards
        theme={themes.python}
        ModuleTitle="Module 2: Advanced Data Analysis"
        
        title1="Understanding Artificial Intelligence Fundamentals"
        paragraphText1="Enter the world of machine learning with Python."
        photo1="/assests/Imgs/Python/Functions.svg"
        card1FieldId={7}
        card1ArticleId={34}
        
        title2="Natural Language Processing Basics"
        paragraphText2="Apply statistical methods to extract insights from data."
        photo2="/assests/Imgs/Python/Data Structures.svg"
        card2FieldId={7}
        card2ArticleId={35}
        
        title3="Computer Vision and Image Recognition"
        paragraphText3="Deepen your understanding of Python core concepts."
        photo3="/assests/Imgs/Python/File Handling.svg"
        card3FieldId={7}
        card3ArticleId={36}
      />

      {/* ===== Module 3: Practical Applications ===== */}
      <ModuleCards
        theme={themes.python}
        ModuleTitle="Module 3: Practical Applications"
        
        title1="Machine Learning Basics with Scikit-Learn"
        paragraphText1="Advanced techniques for real-world data challenges."
        photo1="/assests/Imgs/Python/Classes & Objects.svg"
        card1FieldId={5}
        card1ArticleId={27}
        
        title2="Ethics and Responsible AI Development"
        paragraphText2="Create professional data visualizations for presentations."
        photo2="/assests/Imgs/Python/Inheritance & Polymorphism.svg"
        card2FieldId={5}
        card2ArticleId={26}
        
        title3="AI Tools and Platforms for Beginners"
        paragraphText3="Build intelligent data-driven applications."
        photo3="/assests/Imgs/Python/Abstraction & Encapsulation.svg"
        card3FieldId={7}
        card3ArticleId={38}
      />
    </>
  );
}

export default PythonFundamentalsRoadmap;