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

      <ModuleCards
        theme={themes.python}
        ModuleTitle="Module 1: Core Python Essentials"
        title1="Introduction to Python & Setup"
        title2="Variables, Data Types & Operators"
        title3="Conditions & Loops"
        paragraphText1="Learn fundamentals of Python and how to set up the environment."
        paragraphText2="Understand variables, data types, and operators in Python."
        paragraphText3="Master conditional statements and looping techniques."
        photo1="/assests/Imgs/Python/Introduction to Python & Setup.svg"
        photo2="/assests/Imgs/Python/Variables, Data Types & Operators.svg"
        photo3="/assests/Imgs/Python/Conditions & Loops.svg"
      />

      <ModuleCards
        theme={themes.python}
        ModuleTitle="Module 2: Working with Data"
        title1="Functions & Modules"
        title2="Data Structures"
        title3="File Handling"
        paragraphText1="Learn how to create functions and organize code with modules."
        paragraphText2="Explore lists, tuples, sets, dictionaries, and their use cases."
        paragraphText3="Work with files to read, write, and manage data."
        photo1="/assests/Imgs/Python/Functions.svg"
        photo2="/assests/Imgs/Python/Data Structures.svg"
        photo3="/assests/Imgs/Python/File Handling.svg"
      />

      <ModuleCards
        theme={themes.python}
        ModuleTitle="Module 3: Object-Oriented Programming"
        title1="Classes & Objects"
        title2="Inheritance & Polymorphism"
        title3="Abstraction & Encapsulation"
        paragraphText1="Understand the concept of classes and how objects are created."
        paragraphText2="Learn how inheritance and polymorphism help build scalable programs."
        paragraphText3="Master abstraction and encapsulation to write clean and secure code."
        photo1="/assests/Imgs/Python/Classes & Objects.svg"
        photo2="/assests/Imgs/Python/Inheritance & Polymorphism.svg"
        photo3="/assests/Imgs/Python/Abstraction & Encapsulation.svg"
      />
    </>
  );
}

export default PythonFundamentalsRoadmap;
