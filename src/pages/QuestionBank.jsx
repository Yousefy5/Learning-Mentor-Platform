import React, { useState, useEffect } from 'react';
import '../styles/QuestionBank.css';

const QuestionBank = () => {

    
    const handleDelete = (id) => {

  fetch(`https://x8ki-letl-twmt.n7.xano.io/api:-R5f3gd8/quizzes/${id}`, {
    method: 'DELETE',
  })
  .then(res => {
    if (!res.ok) throw new Error("Failed to delete question");
    setQuestions(prev => prev.filter(q => q.id !== id));
  })
  .catch(err => console.error(err));
};

const handleEdit = (updatedQuestion) => {
  fetch(`https://your-api-endpoint.com/questions/${updatedQuestion.id}`, {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedQuestion)
  })
  .then(res => res.json())
  .then(data => {
    setQuestions(prev => prev.map(q => q.id === data.id ? data : q));
  })
  .catch(err => console.error(err));
};



const [questions, setQuestions] = useState([]);
const [setLoading] = useState(true);


useEffect(() => {
    fetch("https://x8ki-letl-twmt.n7.xano.io/api:-R5f3gd8/quizzes") 
        .then(res => res.json())
        .then(data => {
            const formatted = data.map(q => ({
                id: q.id,
                question: q.question,
                tags: ["Programming"], 
                source: "",
                difficulty: q.difficulty || "Unknown",
                author: q.author || "Unknown"
            }));
            setQuestions(formatted);
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
            setLoading(false);
        });
}, []);


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
                                        <td>{questions.source}</td>
                                        <td>
                                            <span className={`badge badge-difficulty difficulty-${q.difficulty.toLowerCase()}`}>
                                                {q.difficulty}
                                            </span>
                                        </td>
                                        <td>{q.author}</td>
                                        <td>
                                                <button className="action-btn" title="Edit" onClick={() => handleEdit(q)}>
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>
                                                <button className="action-btn delete" title="Delete" onClick={() => handleDelete(q.id)}>
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
