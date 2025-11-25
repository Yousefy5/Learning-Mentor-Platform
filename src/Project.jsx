import { Route, createBrowserRouter, RouterProvider } from "react-router-dom";
// createBrowserRouter - createRoutesFromElements
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage";
import LearningTracks from "./pages/LearningTracks";
import PythonFundamentalsRoadmap from "./components/LearningTracksPage/PythonFundamentalsRoadmap";
import WebDevelopmentFundamentalsRoadmap from "./components/LearningTracksPage/WebDevelopmentFundamentalsRoadmap";
import ProgrammingFundamentals from "./components/LearningTracksPage/ProgrammingFundamentals";
import GraphicDesignEssentials from "./components/LearningTracksPage/GraphicDesignEssentials";
import Home from "./pages/Home";
import OfflineCenters from "./pages/OfflineCenters";

const root = ReactDOM.createRoot(document.getElementById("root"));

// createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<LandingPage />} />
//     <Route path="/Learning Tracks" element={<LearningTracks />} />
//     <Route path="/Learning Tracks" element={<LearningTracks />} />

//   </Route>
// );
const routes = createBrowserRouter([

  { path: '/', element: <Home />, children:[
    { path: '/', element: <LandingPage /> },
    { path: '/learning-tracks', element: <LearningTracks /> },
    { path: '/learning-tracks/graphic-design-essentials', element: <GraphicDesignEssentials /> },
    { path: '/learning-tracks/programming-fundamentals', element: <ProgrammingFundamentals /> },
    { path: '/learning-tracks/programming-fundamentals/python-fundamentals', element: <PythonFundamentalsRoadmap /> },
    { path: '/learning-tracks/programming-fundamentals/web-development', element: <WebDevelopmentFundamentalsRoadmap /> },
    { path: '/offline-centers', element: <OfflineCenters/> }
  ]},


])

root.render(
  <RouterProvider router={routes} />
);
