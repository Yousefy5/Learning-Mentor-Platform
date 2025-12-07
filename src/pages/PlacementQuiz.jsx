import React, { useState, useEffect } from 'react';
import '../styles/PlacementQuiz.css';

const PlacementQuiz = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [userAnswers, setUserAnswers] = useState({});
    const [score, setScore] = useState(0);

    const formatQuestions = (data) => {
        return data.map(q => {
            let options = [
                q.correct,
                q.option2,
                q.option3
            ].filter(opt => opt && opt.trim() !== "");

            const shuffled = options.sort(() => Math.random() - 0.5);

            const correctIndex = shuffled.indexOf(q.correct);

            return {
                id: q.id,
                question: q.question,
                options: shuffled,
                correct: correctIndex
            };
        });
    };

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:-R5f3gd8/quizzes");
                const data = await response.json();

                const formatted = formatQuestions(data);

                const random10 = formatted.sort(() => 0.5 - Math.random()).slice(0, 5);

                setQuestions(random10);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching questions:", error);
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    const handleOptionChange = (questionIndex, optionIndex) => {
        setUserAnswers({
            ...userAnswers,
            [questionIndex]: optionIndex
        });
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
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
        questions.forEach((q, index) => {
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

    const progress = ((currentQuestion + 1) / questions.length) * 100;

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                <h3>Loading questions...</h3>
            </div>
        );
    }

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
                                ></div>
                            </div>

                            {/* Quiz Content */}
                            <div className="question-block">
                                <h6 className="text-muted">
                                    Question {currentQuestion + 1} of {questions.length}
                                </h6>
                                <h4 className="fw-bold mb-3">Practice Quiz</h4>

                                <p className="mt-2">{questions[currentQuestion].question}</p>

                                <div className="mt-3">
                                    {questions[currentQuestion].options.map((opt, i) => (
                                        <div className="form-check mb-2" key={i}>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name={`q${currentQuestion}`}
                                                checked={userAnswers[currentQuestion] === i}
                                                onChange={() => handleOptionChange(currentQuestion, i)}
                                            />
                                            <label className="form-check-label">
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
                                    {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                                </button>
                            </div>
                        </>
                    ) : (
                        // Finish Screen
                        <div className="text-center question-block d-flex flex-column justify-content-center align-items-center">
                            <h4 className="fw-bold mb-3">🎉 Practice Quiz Completed!</h4>
                            <p className="text-muted">Well done! You’ve completed the quiz.</p>

                            <div className="alert alert-info w-100">
                                <h5>Your Score: {score}/{questions.length} ({Math.round((score / questions.length) * 100)}%)</h5>
                            </div>

                            <button className="btn btn-success mt-3" onClick={handleRedo}>Try Again</button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default PlacementQuiz;
