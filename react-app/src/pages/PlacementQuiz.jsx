import React, { useState } from 'react';
import './PlacementQuiz.css';

const quizData = [
    {
        question: "What is the primary function of CSS?",
        options: [
            "To define the structure and content of a web page.",
            "To style the visual presentation of a web page.",
            "To add interactivity and dynamic behavior to a web page.",
            "To manage server-side logic and databases."
        ]
    },
    {
        question: "Which HTML tag is used to include JavaScript?",
        options: ["< js >", "< script >", "< javascript >", "< code >"]
    },
    {
        question: "Which of the following is NOT a programming language?",
        options: ["Python", "HTML", "Java", "C++"]
    },
    {
        question: "What does SQL stand for?",
        options: [
            "Structured Query Language",
            "Sequential Query Language",
            "Simple Query Logic",
            "Systematic Query List"
        ]
    }
];

const PlacementQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState({});

    const handleOptionChange = (questionIndex, optionIndex) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionIndex]: optionIndex
        });
    };

    const handleNext = () => {
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setIsFinished(true);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleRedo = () => {
        setCurrentQuestion(0);
        setIsFinished(false);
        setSelectedAnswers({});
    };

    const progress = ((currentQuestion + 1) / quizData.length) * 100;

    return (
        <div className="page-container">
            <div className="container d-flex justify-content-center">
                <div className="quiz-card">
                    {!isFinished ? (
                        <>
                            {/* Progress Bar */}
                            <div className="progress mb-4">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: `${progress}%` }}
                                    aria-valuenow={progress}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>

                            {/* Quiz Content */}
                            <div className="question-block">
                                <h6 className="text-muted">Question {currentQuestion + 1} of {quizData.length}</h6>
                                <h4 className="fw-bold mb-3">Placement Quiz</h4>
                                <p className="mt-2">{quizData[currentQuestion].question}</p>
                                <div className="mt-3">
                                    {quizData[currentQuestion].options.map((opt, i) => (
                                        <div className="form-check mb-2" key={i}>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name={`q${currentQuestion}`}
                                                id={`opt${i}`}
                                                checked={selectedAnswers[currentQuestion] === i}
                                                onChange={() => handleOptionChange(currentQuestion, i)}
                                            />
                                            <label className="form-check-label" htmlFor={`opt${i}`}>
                                                {opt}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="d-flex justify-content-between mt-4">
                                <button
                                    className="btn btn-outline-secondary quiz-buttons"
                                    onClick={handlePrevious}
                                    disabled={currentQuestion === 0}
                                >
                                    Previous
                                </button>
                                <button
                                    className="btn btn-primary quiz-buttons"
                                    onClick={handleNext}
                                >
                                    {currentQuestion === quizData.length - 1 ? "Finish" : "Next"}
                                </button>
                            </div>
                        </>
                    ) : (
                        /* Finish Screen */
                        <div className="text-center question-block d-flex flex-column justify-content-center align-items-center" style={{ height: '100%' }}>
                            <h4 className="fw-bold mb-3">🎉 Quiz Finished!</h4>
                            <p className="text-muted">You’ve completed all the questions.</p>
                            <button className="btn btn-success mt-3" onClick={handleRedo}>Redo Quiz</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PlacementQuiz;
