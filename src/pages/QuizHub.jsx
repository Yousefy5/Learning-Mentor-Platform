import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/QuizHub.css';

const QuizHub = () => {
    return (
        <div className="roadmap-page">
            <div className="container text-center px-5">

                <div className="row text-center mb-4">
                    <div className="col">
                        <h3>Test Your Knowledge</h3>
                    </div>
                </div>


                <div className="row justify-content-center g-4">
                    {/* Card 1 */}
                    <div className="col-md-3">
                        <div className="learning-card">
                            <i className="bi bi-mortarboard fs-1" style={{ color: '#018a83' }}></i>
                            <h5>Placement Quiz</h5>
                            <p>Simulate real exam conditions with quizzes that test your preparation level.</p>
                            <Link to="/placement-quiz" className="btn btn-primary">Start Placement Quiz</Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-3">
                        <div className="learning-card">
                            <i className="bi bi-pencil-square fs-1" style={{ color: '#018a83' }}></i>
                            <h5>Practice Quiz</h5>
                            <p>Pick a topic and practice unlimited questions until you master it.</p>
                            <Link to="/practice-quiz" className="btn btn-primary">Start Practice Quiz</Link>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-3">
                        <div className="learning-card">
                            <i className="bi bi-journal-text fs-1" style={{ color: '#018a83' }}></i>
                            <h5>Question Bank</h5>
                            <p>Browse questions by category and difficulty. Build your confidence step by step.</p>
                            <Link to="/question-bank" className="btn btn-primary">Go to Question Bank</Link>
                        </div>
                    </div>

                    {/* Card 4 - AI Generator */}
                    <div className="col-md-3">
                        <div className="learning-card">
                            <i className="bi bi-stars fs-1" style={{ color: '#018a83' }}></i>
                            <h5>AI Quiz Generator</h5>
                            <p>Generate custom quizzes on any topic instantly using the power of AI.</p>
                            <Link to="/ai-quiz-generator" className="btn btn-primary">Generate with AI</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizHub;
