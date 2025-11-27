import React, { useState } from 'react';
import { generateQuiz } from '../services/gemini';
import '../styles/AIQuizGenerator.css';

const AIQuizGenerator = () => {
    const [topic, setTopic] = useState('');
    const [difficulty, setDifficulty] = useState('Medium');
    const [questionCount, setQuestionCount] = useState(5);
    const [isLoading, setIsLoading] = useState(false);
    const [quizData, setQuizData] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);
    const [error, setError] = useState('');

    const handleGenerate = async (e) => {
        e.preventDefault();
        if (!topic.trim()) return;

        setIsLoading(true);
        setError('');
        setQuizData(null);
        setShowResults(false);
        setUserAnswers({});
        setCurrentQuestion(0);

        try {
            const data = await generateQuiz(topic, difficulty, questionCount);
            setQuizData(data);
        } catch (err) {
            setError('Failed to generate quiz. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleOptionSelect = (optionIndex) => {
        setUserAnswers({
            ...userAnswers,
            [currentQuestion]: optionIndex
        });
    };

    const handleNext = () => {
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            calculateScore();
            setShowResults(true);
        }
    };

    const calculateScore = () => {
        let newScore = 0;
        quizData.forEach((q, index) => {
            if (userAnswers[index] === q.correct) {
                newScore++;
            }
        });
        setScore(newScore);
    };

    return (
        <div className="ai-quiz-page">
            <div className="container">
                <div className="ai-quiz-container">
                    <h2 className="text-center mb-4 page-title">
                        <i className="bi bi-stars text-primary me-2"></i>
                        AI Quiz Generator
                    </h2>

                    {!quizData && !isLoading && (
                        <div className="generator-form">
                            <form onSubmit={handleGenerate}>
                                <div className="mb-3">
                                    <label className="form-label">What do you want to learn about?</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="e.g., React Hooks, World War II, Photosynthesis"
                                        value={topic}
                                        onChange={(e) => setTopic(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <label className="form-label">Difficulty</label>
                                        <select
                                            className="form-select"
                                            value={difficulty}
                                            onChange={(e) => setDifficulty(e.target.value)}
                                        >
                                            <option value="Easy">Easy</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Hard">Hard</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Number of Questions: {questionCount}</label>
                                        <input
                                            type="range"
                                            className="form-range"
                                            min="3"
                                            max="10"
                                            value={questionCount}
                                            onChange={(e) => setQuestionCount(parseInt(e.target.value))}
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary w-100 btn-lg generate-btn">
                                    Generate Quiz
                                </button>
                            </form>
                        </div>
                    )}

                    {isLoading && (
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary mb-3" role="status"></div>
                            <h5>Generating your quiz with AI...</h5>
                            <p className="text-muted">This may take a few seconds.</p>
                        </div>
                    )}

                    {error && (
                        <div className="alert alert-danger mt-3" role="alert">
                            {error}
                        </div>
                    )}

                    {quizData && !showResults && (
                        <div className="quiz-interface">
                            <div className="progress mb-4">
                                <div
                                    className="progress-bar"
                                    style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
                                ></div>
                            </div>

                            <div className="question-card">
                                <span className="badge bg-secondary mb-2">Question {currentQuestion + 1}/{quizData.length}</span>
                                <h4 className="mb-4">{quizData[currentQuestion].question}</h4>

                                <div className="options-list">
                                    {quizData[currentQuestion].options.map((option, index) => (
                                        <div
                                            key={index}
                                            className={`option-item ${userAnswers[currentQuestion] === index ? 'selected' : ''}`}
                                            onClick={() => handleOptionSelect(index)}
                                        >
                                            <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                                            {option}
                                        </div>
                                    ))}
                                </div>

                                <div className="d-flex justify-content-end mt-4">
                                    <button
                                        className="btn btn-primary btn-lg"
                                        onClick={handleNext}
                                        disabled={userAnswers[currentQuestion] === undefined}
                                    >
                                        {currentQuestion === quizData.length - 1 ? 'Finish Quiz' : 'Next Question'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {showResults && (
                        <div className="results-view text-center">
                            <div className="mb-4">
                                <i className="bi bi-trophy-fill text-warning display-1"></i>
                            </div>
                            <h3>Quiz Completed!</h3>
                            <p className="lead mb-4">You scored <strong>{score}</strong> out of <strong>{quizData.length}</strong></p>

                            <div className="alert alert-info">
                                {score === quizData.length ? "Perfect Score! You're an expert! 🌟" :
                                    score > quizData.length / 2 ? "Great job! Keep learning! 🚀" :
                                        "Good effort! Review the topic and try again. 📚"}
                            </div>

                            <button
                                className="btn btn-outline-primary mt-3"
                                onClick={() => {
                                    setQuizData(null);
                                    setTopic('');
                                }}
                            >
                                Generate Another Quiz
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AIQuizGenerator;
