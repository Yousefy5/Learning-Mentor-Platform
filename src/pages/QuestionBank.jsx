import React, { useState } from 'react';
import '../styles/QuestionBank.css';

const QuestionBank = () => {
    // Dummy data for the table
    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: "What is the capital of France?",
            tags: ["Geography", "Europe"],
            source: "World Atlas 2023",
            difficulty: "Easy",
            author: "Dr. Alice Smith"
        },
        {
            id: 2,
            question: "Explain the concept of 'supply and demand' in economics.",
            tags: ["Economics", "Microeconomics"],
            source: "Principles of Economics",
            difficulty: "Medium",
            author: "Prof. Bob Johnson"
        },
        {
            id: 3,
            question: "Calculate the definite integral of x^2 from 0 to 2.",
            tags: ["Mathematics", "Calculus"],
            source: "Calculus I Workbook",
            difficulty: "Hard",
            author: "Ms. Carol White"
        },
        {
            id: 4,
            question: "Who painted the Mona Lisa?",
            tags: ["Art History", "Renaissance"],
            source: "Art History Review",
            difficulty: "Easy",
            author: "Dr. Alice Smith"
        },
        {
            id: 5,
            question: "Describe the process of photosynthesis.",
            tags: ["Biology", "Botany"],
            source: "Biology for Dummies",
            difficulty: "Medium",
            author: "Prof. Bob Johnson"
        },
        {
            id: 6,
            question: "What are the primary colors?",
            tags: ["Art Basics"],
            source: "Color Theory Guide",
            difficulty: "Easy",
            author: "Ms. Carol White"
        },
        {
            id: 7,
            question: "List three common programming paradigms.",
            tags: ["Computer Science", "Programming"],
            source: "Introduction to CS",
            difficulty: "Medium",
            author: "Dr. Alice Smith"
        }
    ]);

    return (
        <div className="question-bank-page">
            <div className="container">
                <div className="question-bank-container">
                    <h2 className="page-title">Question Bank</h2>

                    {/* Toolbar */}
                    <div className="toolbar">
                        <div className="search-bar">
                            <i className="bi bi-search"></i>
                            <input type="text" placeholder="Search questions..." />
                        </div>

                        <div className="filters">
                            <select className="filter-select">
                                <option>Tags</option>
                            </select>
                            <select className="filter-select">
                                <option>Difficulty</option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                            <select className="filter-select">
                                <option>Source</option>
                            </select>
                            <select className="filter-select">
                                <option>Author</option>
                            </select>
                            <button className="btn-create">
                                <i className="bi bi-plus-lg"></i> Create Question
                            </button>
                        </div>
                    </div>

                    {/* Questions List Header */}
                    <h5 className="mb-3">All Questions ({questions.length})</h5>

                    {/* Table */}
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col"><input type="checkbox" /></th>
                                    <th scope="col">Question</th>
                                    <th scope="col">Tags</th>
                                    <th scope="col">Source</th>
                                    <th scope="col">Difficulty</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {questions.map((q) => (
                                    <tr key={q.id}>
                                        <td><input type="checkbox" /></td>
                                        <td className="question-text">{q.question}</td>
                                        <td>
                                            {q.tags.map((tag, index) => (
                                                <span key={index} className="badge badge-tag">{tag}</span>
                                            ))}
                                        </td>
                                        <td>{q.source}</td>
                                        <td>
                                            <span className={`badge badge-difficulty difficulty-${q.difficulty.toLowerCase()}`}>
                                                {q.difficulty}
                                            </span>
                                        </td>
                                        <td>{q.author}</td>
                                        <td>
                                            <button className="action-btn" title="Edit">
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                            <button className="action-btn delete" title="Delete">
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default QuestionBank;
