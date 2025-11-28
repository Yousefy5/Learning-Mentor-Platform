// import React, { useState, useRef } from 'react';
// import { generateQuiz } from '../services/gemini';
// import { extractTextFromPDF } from '../utils/pdfUtils';
// import '../styles/AIQuizGenerator.css';

// const AIQuizGenerator = () => {
//     const [files, setFiles] = useState([]);
//     const [customPrompt, setCustomPrompt] = useState('');
//     const [difficulty, setDifficulty] = useState('Medium');
//     const [questionCount, setQuestionCount] = useState(5);
//     const [timeLimit, setTimeLimit] = useState(10);
//     const [language, setLanguage] = useState('English');

//     const [isLoading, setIsLoading] = useState(false);
//     const [quizData, setQuizData] = useState(null);
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [userAnswers, setUserAnswers] = useState({});
//     const [showResults, setShowResults] = useState(false);
//     const [score, setScore] = useState(0);
//     const [error, setError] = useState('');
//     const [statusMessage, setStatusMessage] = useState('');

//     const fileInputRef = useRef(null);

//     const handleFileChange = (e) => {
//         if (e.target.files && e.target.files.length > 0) {
//             setFiles(Array.from(e.target.files));
//         }
//     };

//     const handleDrop = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
//             setFiles(Array.from(e.dataTransfer.files));
//         }
//     };

//     const handleDragOver = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//     };

//     const handleGenerate = async (e) => {
//         e.preventDefault();

//         if (files.length === 0 && !customPrompt.trim()) {
//             setError('Please upload a PDF or provide a custom prompt.');
//             return;
//         }

//         setIsLoading(true);
//         setError('');
//         setQuizData(null);
//         setShowResults(false);
//         setUserAnswers({});
//         setCurrentQuestion(0);

//         try {
//             let pdfText = '';
//             if (files.length > 0) {
//                 setStatusMessage('Extracting text from documents...');
//                 for (const file of files) {
//                     const text = await extractTextFromPDF(file);
//                     pdfText += text + '\n\n';
//                 }
//             }

//             setStatusMessage('Generating quiz with AI...');
//             const data = await generateQuiz({
//                 pdfText,
//                 customPrompt,
//                 difficulty,
//                 questionCount,
//                 language
//             });
//             setQuizData(data);
//         } catch (err) {
//             console.error(err);
//             setError('Failed to generate quiz. ' + (err.message || 'Please try again.'));
//         } finally {
//             setIsLoading(false);
//             setStatusMessage('');
//         }
//     };

//     const handleOptionSelect = (optionIndex) => {
//         setUserAnswers({
//             ...userAnswers,
//             [currentQuestion]: optionIndex
//         });
//     };

//     const handleNext = () => {
//         if (currentQuestion < quizData.length - 1) {
//             setCurrentQuestion(currentQuestion + 1);
//         } else {
//             calculateScore();
//             setShowResults(true);
//         }
//     };

//     const calculateScore = () => {
//         let newScore = 0;
//         quizData.forEach((q, index) => {
//             if (userAnswers[index] === q.correct) {
//                 newScore++;
//             }
//         });
//         setScore(newScore);
//     };

//     return (
//         <div className="ai-quiz-page">
//             <div className="container">
//                 <div className="ai-quiz-container">

//                     {!quizData && !isLoading && (
//                         <>
//                             <div className="text-center mb-5">
//                                 <h2 className="fw-bold">Practice Quiz</h2>
//                                 <p className="text-muted">Upload one or more PDFs to practice unlimited questions until you master it.</p>
//                             </div>

//                             <div className="generator-form">
//                                 <form onSubmit={handleGenerate}>

//                                     {/* Upload Area */}
//                                     <div
//                                         className="upload-area mb-4"
//                                         onDrop={handleDrop}
//                                         onDragOver={handleDragOver}
//                                         onClick={() => fileInputRef.current.click()}
//                                     >
//                                         <i className="bi bi-cloud-arrow-up upload-icon"></i>
//                                         <h5 className="mt-3">Drag & drop your PDFs here</h5>
//                                         <p className="text-muted small">or</p>
//                                         <button type="button" className="btn btn-outline-secondary btn-sm">Browse Files</button>
//                                         <p className="text-muted mt-2 small">Max file size: 5MB per file</p>
//                                         <input
//                                             type="file"
//                                             ref={fileInputRef}
//                                             onChange={handleFileChange}
//                                             style={{ display: 'none' }}
//                                             accept=".pdf"
//                                             multiple
//                                         />
//                                         {files.length > 0 && (
//                                             <div className="mt-3">
//                                                 {files.map((f, i) => (
//                                                     <span key={i} className="badge bg-light text-dark border me-2">
//                                                         <i className="bi bi-file-earmark-pdf me-1"></i> {f.name}
//                                                     </span>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>

//                                     {/* Custom Prompt */}
//                                     <div className="mb-4">
//                                         <label className="form-label fw-bold">Custom Prompt (Optional)</label>
//                                         <textarea
//                                             className="form-control"
//                                             rows="3"
//                                             placeholder="e.g., 'Focus on the historical dates mentioned in the text' or 'Generate questions about the main characters'"
//                                             value={customPrompt}
//                                             onChange={(e) => setCustomPrompt(e.target.value)}
//                                         ></textarea>
//                                     </div>

//                                     {/* Settings Grid */}
//                                     <div className="row g-3 mb-4">
//                                         <div className="col-md-6">
//                                             <label className="form-label fw-bold">Number of Questions</label>
//                                             <input
//                                                 type="number"
//                                                 className="form-control"
//                                                 min="1"
//                                                 max="20"
//                                                 value={questionCount}
//                                                 onChange={(e) => setQuestionCount(parseInt(e.target.value))}
//                                             />
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label className="form-label fw-bold">Difficulty</label>
//                                             <select
//                                                 className="form-select"
//                                                 value={difficulty}
//                                                 onChange={(e) => setDifficulty(e.target.value)}
//                                             >
//                                                 <option value="Easy">Easy</option>
//                                                 <option value="Medium">Medium</option>
//                                                 <option value="Hard">Hard</option>
//                                             </select>
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label className="form-label fw-bold">Time Limit (minutes)</label>
//                                             <input
//                                                 type="number"
//                                                 className="form-control"
//                                                 value={timeLimit}
//                                                 onChange={(e) => setTimeLimit(parseInt(e.target.value))}
//                                             />
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label className="form-label fw-bold">Quiz Language</label>
//                                             <select
//                                                 className="form-select"
//                                                 value={language}
//                                                 onChange={(e) => setLanguage(e.target.value)}
//                                             >
//                                                 <option value="English">English</option>
//                                                 <option value="Spanish">Spanish</option>
//                                                 <option value="French">French</option>
//                                                 <option value="German">German</option>
//                                                 <option value="Arabic">Arabic</option>
//                                             </select>
//                                         </div>
//                                     </div>

//                                     <button type="submit" className="btn btn-primary w-100 btn-lg generate-btn">
//                                         Generate Quiz
//                                     </button>
//                                 </form>
//                             </div>
//                         </>
//                     )}

//                     {isLoading && (
//                         <div className="text-center py-5">
//                             <div className="spinner-border text-primary mb-3" role="status"></div>
//                             <h5>{statusMessage}</h5>
//                             <p className="text-muted">This may take a few moments.</p>
//                         </div>
//                     )}

//                     {error && (
//                         <div className="alert alert-danger mt-3" role="alert">
//                             {error}
//                         </div>
//                     )}

//                     {quizData && !showResults && (
//                         <div className="quiz-interface">
//                             <div className="d-flex justify-content-between align-items-center mb-4">
//                                 <span className="badge bg-secondary">Question {currentQuestion + 1}/{quizData.length}</span>
//                                 <span className="text-muted"><i className="bi bi-clock"></i> {timeLimit}:00</span>
//                             </div>

//                             <div className="progress mb-4" style={{ height: '6px' }}>
//                                 <div
//                                     className="progress-bar"
//                                     style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
//                                 ></div>
//                             </div>

//                             <div className="question-card">
//                                 <h4 className="mb-4 fw-bold">{quizData[currentQuestion].question}</h4>

//                                 <div className="options-list">
//                                     {quizData[currentQuestion].options.map((option, index) => (
//                                         <div
//                                             key={index}
//                                             className={`option-item ${userAnswers[currentQuestion] === index ? 'selected' : ''}`}
//                                             onClick={() => handleOptionSelect(index)}
//                                         >
//                                             <span className="option-letter">{String.fromCharCode(65 + index)}</span>
//                                             {option}
//                                         </div>
//                                     ))}
//                                 </div>

//                                 <div className="d-flex justify-content-end mt-4">
//                                     <button
//                                         className="btn btn-primary btn-lg"
//                                         onClick={handleNext}
//                                         disabled={userAnswers[currentQuestion] === undefined}
//                                     >
//                                         {currentQuestion === quizData.length - 1 ? 'Finish Quiz' : 'Next Question'}
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     {showResults && (
//                         <div className="results-view text-center">
//                             <div className="mb-4">
//                                 <i className="bi bi-trophy-fill text-warning display-1"></i>
//                             </div>
//                             <h3>Quiz Completed!</h3>
//                             <p className="lead mb-4">You scored <strong>{score}</strong> out of <strong>{quizData.length}</strong></p>

//                             <div className="alert alert-info">
//                                 {score === quizData.length ? "Perfect Score! You're an expert! 🌟" :
//                                     score > quizData.length / 2 ? "Great job! Keep learning! 🚀" :
//                                         "Good effort! Review the topic and try again. 📚"}
//                             </div>

//                             <button
//                                 className="btn btn-outline-primary mt-3"
//                                 onClick={() => {
//                                     setQuizData(null);
//                                     setFiles([]);
//                                     setCustomPrompt('');
//                                 }}
//                             >
//                                 Generate Another Quiz
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AIQuizGenerator;
