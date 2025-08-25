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

let currentQuestion = 0;
let userAnswers = [];
let score = 0;

const quizContainer = document.getElementById("quiz-container");
const finishContainer = document.getElementById("finish-container");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progressBar = document.getElementById("progress-bar");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const redoBtn = document.getElementById("redo-btn");
const quizButtons = document.getElementById("quiz-buttons");
const scoreDisplay = document.getElementById("score-display");

function loadQuestion(index) {
    const q = practiceQuizData[index];
    questionNumber.textContent = `Question ${index + 1} of ${practiceQuizData.length}`;
    questionText.textContent = q.question;
    optionsContainer.innerHTML = "";

    q.options.forEach((opt, i) => {
        const isChecked = userAnswers[index] === i;
        const optionHTML = `
            <div class="form-check mb-2">
              <input class="form-check-input" type="radio" name="q${index}" id="opt${i}" value="${i}" ${isChecked ? 'checked' : ''}>
              <label class="form-check-label" for="opt${i}">${opt}</label>
            </div>`;
        optionsContainer.innerHTML += optionHTML;
    });

    progressBar.style.width = `${((index + 1) / practiceQuizData.length) * 100}%`;

    prevBtn.disabled = index === 0;
    nextBtn.textContent = index === practiceQuizData.length - 1 ? "Finish" : "Next";
}

function saveAnswer() {
    const selectedOption = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    if (selectedOption) {
        userAnswers[currentQuestion] = parseInt(selectedOption.value);
    }
}

function calculateScore() {
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === practiceQuizData[index].correct) {
            score++;
        }
    });
    return score;
}

function showResults() {
    const totalQuestions = practiceQuizData.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    let message = "";
    if (percentage >= 90) {
        message = "Excellent! You're a pro! 🏆";
    } else if (percentage >= 80) {
        message = "Great job! You're doing well! 👍";
    } else if (percentage >= 70) {
        message = "Good work! Keep practicing! 💪";
    } else if (percentage >= 60) {
        message = "Not bad! Review the material and try again! 📚";
    } else {
        message = "Keep studying! Practice makes perfect! 📖";
    }

    scoreDisplay.innerHTML = `
        <div class="alert alert-info">
            <h5>Your Score: ${score}/${totalQuestions} (${percentage}%)</h5>
            <p class="mb-0">${message}</p>
        </div>
    `;
}

nextBtn.addEventListener("click", () => {
    saveAnswer();
    
    if (currentQuestion < practiceQuizData.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    } else {
        calculateScore();
        quizContainer.style.display = "none";
        quizButtons.style.display = "none";
        finishContainer.style.display = "flex";
        finishContainer.style.flexDirection = "column";
        finishContainer.style.justifyContent = "center";
        progressBar.style.width = "100%";
        showResults();
    }
});

prevBtn.addEventListener("click", () => {
    saveAnswer();
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
});

redoBtn.addEventListener("click", () => {
    currentQuestion = 0;
    userAnswers = [];
    score = 0;
    quizContainer.style.display = "block";
    quizButtons.style.display = "flex";
    finishContainer.style.display = "none";
    loadQuestion(currentQuestion);
});

optionsContainer.addEventListener("change", (e) => {
    if (e.target.type === "radio") {
        userAnswers[currentQuestion] = parseInt(e.target.value);
    }
});

loadQuestion(currentQuestion);
