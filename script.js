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

let currentQuestion = 0;

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

function loadQuestion(index) {
    const q = quizData[index];
    questionNumber.textContent = `Question ${index + 1} of ${quizData.length}`;
    questionText.textContent = q.question;
    optionsContainer.innerHTML = "";

    q.options.forEach((opt, i) => {
        const optionHTML = `
            <div class="form-check mb-2">
              <input class="form-check-input" type="radio" name="q${index}" id="opt${i}">
              <label class="form-check-label" for="opt${i}">${opt}</label>
            </div>`;
        optionsContainer.innerHTML += optionHTML;
    });

    progressBar.style.width = `${((index + 1) / quizData.length) * 100}%`;

    prevBtn.disabled = index === 0;
    nextBtn.textContent = index === quizData.length - 1 ? "Finish" : "Next";
}

nextBtn.addEventListener("click", () => {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    } else {
        // Finish screen
        quizContainer.style.display = "none";
        quizButtons.style.display = "none";
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
        // progressBar.style.visibility = "hidden"
        finishContainer.style.display = "flex";
        finishContainer.style.flexDirection = "column";
        finishContainer.style.justifyContent = "center";
        progressBar.style.width = "100%";
        }
});

prevBtn.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
});

redoBtn.addEventListener("click", () => {
    currentQuestion = 0;
    quizContainer.style.display = "block";
    prevBtn.style.display = "flex";
    nextBtn.style.display = "flex";
    // progressBar.style.visibility = "visible"
    finishContainer.style.display = "none";
    loadQuestion(currentQuestion);
});

loadQuestion(currentQuestion);
