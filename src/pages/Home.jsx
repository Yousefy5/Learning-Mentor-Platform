import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LearningTracks from "./LearningTracks";
import PythonFundamentalsRoadmap from "../components/LearningTracksPage/PythonFundamentalsRoadmap";
import ModuleCards from "../components/LearningTracksPage/components/ModuleCards";
import WebDevelopmentFundamentalsRoadmap from "../components/LearningTracksPage/WebDevelopmentFundamentalsRoadmap";
import ProgrammingFundamentals from "../components/LearningTracksPage/ProgrammingFundamentals";
import LandingPage from "./LandingPage";
function Home() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Home;
