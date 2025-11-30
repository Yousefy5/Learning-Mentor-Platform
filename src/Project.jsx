import React from "react";
import { Route, createBrowserRouter, RouterProvider } from "react-router-dom";
// createBrowserRouter - createRoutesFromElements
// Context
import { DataContext, learningArticles } from "./context/DataContext";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage";
import LearningTracks from "./pages/LearningTracks";
import PythonFundamentalsRoadmap from "./components/LearningTracksPage/PythonFundamentalsRoadmap";
import WebDevelopmentFundamentalsRoadmap from "./components/LearningTracksPage/WebDevelopmentFundamentalsRoadmap";
import ProgrammingFundamentals from "./components/LearningTracksPage/ProgrammingFundamentals";
import GraphicDesignEssentials from "./components/LearningTracksPage/GraphicDesignEssentials";
import ProductivityToolsMastery from "./components/LearningTracksPage/ProductivityToolsMastery";
import Home from "./pages/Home";
import OfflineCenters from "./pages/OfflineCenters";
import QuizHub from "./pages/QuizHub";
import PlacementQuiz from "./pages/PlacementQuiz";
import PracticeQuiz from "./pages/PracticeQuiz";
import LogIn from "./pages/Login";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Content from "./pages/Content";

import QuestionBank from "./pages/QuestionBank";
import AboutUs from "./pages/AboutUs";
import Resources from "./pages/Resources";
import Legal from "./pages/Legal";
import ContactUs from "./pages/ContactUs";

const root = ReactDOM.createRoot(document.getElementById("root"));


// createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<LandingPage />} />
//     <Route path="/Learning Tracks" element={<LearningTracks />} />
//     <Route path="/Learning Tracks" element={<LearningTracks />} />

//   </Route>
// );


const routes = createBrowserRouter([
  {
    path: '/', element: <Home />, children: [
      { path: '/', element: <LandingPage /> },
      { path: '/learning-tracks', element: <LearningTracks /> },
      { path: '/learning-tracks/graphic-design-essentials', element: <GraphicDesignEssentials /> },
      { path: '/learning-tracks/programming-fundamentals', element: <ProgrammingFundamentals /> },
      { path: '/learning-tracks/programming-fundamentals/python-fundamentals', element: <PythonFundamentalsRoadmap /> },
      { path: '/learning-tracks/programming-fundamentals/web-development', element: <WebDevelopmentFundamentalsRoadmap /> },
      { path: '/offline-centers', element: <OfflineCenters /> },
      { path: '/quizzes', element: <QuizHub /> },
      { path: '/placement-quiz', element: <PlacementQuiz /> },
      { path: '/practice-quiz', element: <PracticeQuiz /> },
      { path: '/question-bank', element: <QuestionBank /> },
      { path: '/learning-tracks/productivity-tools', element: <ProductivityToolsMastery /> },
      { path: '/about-us', element: <AboutUs /> },
      { path: '/resources', element: <Resources /> },
      { path: '/legal', element: <Legal /> },
      { path: '/contact-us', element: <ContactUs /> },
      { path: '/login', element: <LogIn /> },
      { path: '/signup', element: <SignUp /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/content/:fieldId/:itemId", element: <Content /> }
    ]
  }
]);

root.render(
  // <RouterProvider router={routes} />
  <React.StrictMode>
    <DataContext.Provider value={learningArticles}>
      <RouterProvider router={routes} />
    </DataContext.Provider>
  </React.StrictMode>
);
