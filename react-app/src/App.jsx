import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import QuizHub from './pages/QuizHub';
import PlacementQuiz from './pages/PlacementQuiz';
import PracticeQuiz from './pages/PracticeQuiz';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<QuizHub />} />
          <Route path="/placement-quiz" element={<PlacementQuiz />} />
          <Route path="/practice-quiz" element={<PracticeQuiz />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
