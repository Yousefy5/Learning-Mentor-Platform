import React, { useState } from 'react';
import './PracticeQuiz.css';

const practiceQuizData = [
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        options: [
            "var myVariable = 10;",
            "variable myVariable = 10;",
            "v myVariable = 10;",
            "declare myVariable = 10;"
        ],
        correct: 0
    },
    {
        question: "Which CSS property is used to change the text color?",
        options: [
            "text-color",
            "color",
            "font-color",
            "text-style"
        ],
        correct: 1
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlink and Text Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which of the following is a JavaScript framework?",
        options: [
            "Django",
            "React",
            "Flask",
            "Express"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of the 'alt' attribute in an img tag?",
        options: [
            "To make the image load faster",
            "To provide alternative text for screen readers",
            "To change the image size",
            "To add a border to the image"
        ],
        correct: 1
    },
    {
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        correct: 0
    },
    {
        question: "What is the default value of the position property in CSS?",
        options: [
            "relative",
            "absolute",
            "static",
            "fixed"
        ],
        correct: 2
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        correct: 1
    }
];

const PracticeQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [userAnswers, setUserAnswers] = useState({});
    const [score, setScore] = useState(0);

    const handleOptionChange = (questionIndex, optionIndex) => {
        setUserAnswers({
            ...userAnswers,
            [questionIndex]: optionIndex
        });
    };

    const handleNext = () => {
        if (currentQuestion < practiceQuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            calculateScore();
            setIsFinished(true);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const calculateScore = () => {
        let newScore = 0;
        practiceQuizData.forEach((q, index) => {
            if (userAnswers[index] === q.correct) {
                newScore++;
            }
        });
        setScore(newScore);
    };

    const handleRedo = () => {
        setCurrentQuestion(0);
        setIsFinished(false);
        setUserAnswers({});
        setScore(0);
    };

    const getResultMessage = () => {
        const percentage = Math.round((score / practiceQuizData.length) * 100);
        if (percentage >= 90) return "Excellent! You're a pro! 🏆";
        if (percentage >= 80) return "Great job! You're doing well! 👍";
        if (percentage >= 70) return "Good work! Keep practicing! 💪";
        if (percentage >= 60) return "Not bad! Review the material and try again! 📚";
        return "Keep studying! Practice makes perfect! 📖";
    };

    const progress = ((currentQuestion + 1) / practiceQuizData.length) * 100;

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
                                <h6 className="text-muted">Question {currentQuestion + 1} of {practiceQuizData.length}</h6>
                                <h4 className="fw-bold mb-3">Practice Quiz</h4>
                                <p className="mt-2">{practiceQuizData[currentQuestion].question}</p>
                                <div className="mt-3">
                                    {practiceQuizData[currentQuestion].options.map((opt, i) => (
                                        <div className="form-check mb-2" key={i}>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name={`q${currentQuestion}`}
                                                id={`opt${i}`}
                                                checked={userAnswers[currentQuestion] === i}
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
                                    {currentQuestion === practiceQuizData.length - 1 ? "Finish" : "Next"}
                                </button>
                            </div>
                        </>
                    ) : (
                        /* Finish Screen */
                        <div className="text-center question-block d-flex flex-column justify-content-center align-items-center" style={{ height: '100%' }}>
                            <h4 className="fw-bold mb-3">🎉 Practice Quiz Completed!</h4>
                            <p className="text-muted">Well done! You’ve completed the practice quiz.</p>

                            <div className="alert alert-info w-100">
                                <h5>Your Score: {score}/{practiceQuizData.length} ({Math.round((score / practiceQuizData.length) * 100)}%)</h5>
                                <p className="mb-0">{getResultMessage()}</p>
                            </div>

                            <button className="btn btn-success mt-3" onClick={handleRedo}>Try Again</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PracticeQuiz;
