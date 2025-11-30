// Mock Quiz Generator - Works offline without API
// This generates sample quiz questions for testing purposes

const mockQuizTemplates = {
    Easy: [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            correct: 2,
            explanation: "Paris is the capital and largest city of France."
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            correct: 1,
            explanation: "2 plus 2 equals 4."
        },
        {
            question: "What color is the sky on a clear day?",
            options: ["Red", "Blue", "Green", "Yellow"],
            correct: 1,
            explanation: "The sky appears blue due to Rayleigh scattering."
        },
        {
            question: "How many continents are there?",
            options: ["5", "6", "7", "8"],
            correct: 2,
            explanation: "There are 7 continents: Africa, Antarctica, Asia, Europe, North America, Oceania, and South America."
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            correct: 2,
            explanation: "Jupiter is the largest planet in our solar system."
        }
    ],
    Medium: [
        {
            question: "What is the square root of 144?",
            options: ["10", "11", "12", "13"],
            correct: 2,
            explanation: "The square root of 144 is 12 because 12 × 12 = 144."
        },
        {
            question: "Which programming language is known for its use in web development?",
            options: ["C++", "JavaScript", "Assembly", "COBOL"],
            correct: 1,
            explanation: "JavaScript is widely used for web development, especially for client-side scripting."
        },
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
            correct: 0,
            explanation: "HTML stands for Hyper Text Markup Language."
        },
        {
            question: "In what year did World War II end?",
            options: ["1943", "1944", "1945", "1946"],
            correct: 2,
            explanation: "World War II ended in 1945."
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Au", "Gd", "Ag"],
            correct: 1,
            explanation: "Au is the chemical symbol for gold, derived from the Latin word 'aurum'."
        }
    ],
    Hard: [
        {
            question: "What is the time complexity of binary search?",
            options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
            correct: 1,
            explanation: "Binary search has a time complexity of O(log n) as it divides the search space in half with each iteration."
        },
        {
            question: "Which of the following is NOT a design pattern?",
            options: ["Singleton", "Factory", "Compiler", "Observer"],
            correct: 2,
            explanation: "Compiler is not a design pattern; it's a program that translates code. The others are common design patterns."
        },
        {
            question: "What is the Heisenberg Uncertainty Principle?",
            options: [
                "Energy cannot be created or destroyed",
                "Position and momentum cannot both be precisely known",
                "Mass and energy are equivalent",
                "Every action has an equal and opposite reaction"
            ],
            correct: 1,
            explanation: "The Heisenberg Uncertainty Principle states that certain pairs of physical properties, like position and momentum, cannot both be known to arbitrary precision."
        },
        {
            question: "What is the Big O notation for merge sort?",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(2^n)"],
            correct: 1,
            explanation: "Merge sort has a time complexity of O(n log n) in all cases."
        },
        {
            question: "Which ancient civilization built Machu Picchu?",
            options: ["Aztec", "Maya", "Inca", "Olmec"],
            correct: 2,
            explanation: "Machu Picchu was built by the Inca civilization in the 15th century."
        }
    ]
};

/**
 * Generate a mock quiz based on parameters
 * @param {Object} params - Quiz parameters
 * @param {string} params.pdfText - Text from PDF (will be shown in questions if provided)
 * @param {string} params.customPrompt - Custom instructions
 * @param {string} params.difficulty - Easy, Medium, or Hard
 * @param {number} params.questionCount - Number of questions to generate
 * @param {string} params.language - Quiz language (currently only English supported in mock)
 * @returns {Promise<Array>} Array of quiz questions
 */
export const generateMockQuiz = async (params) => {
    const {
        pdfText = "",
        customPrompt = "",
        difficulty = "Medium",
        questionCount = 5,
        language = "English"
    } = params;

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Get the appropriate template based on difficulty
    const template = mockQuizTemplates[difficulty] || mockQuizTemplates.Medium;

    // If we have PDF text, create a custom question about it
    let questions = [...template];

    if (pdfText && pdfText.trim().length > 50) {
        // Extract first meaningful sentence from PDF
        const sentences = pdfText.split('.').filter(s => s.trim().length > 20);
        const snippet = sentences[0]?.substring(0, 100) || "the uploaded document";

        questions.unshift({
            question: `Based on the uploaded document, which of the following best describes its content?`,
            options: [
                "Technical documentation",
                "Educational material",
                "Business report",
                "Research paper"
            ],
            correct: 1,
            explanation: `This is a sample question generated from your uploaded PDF. The actual content discusses: "${snippet}..."`
        });
    }

    // If there's a custom prompt, add a question about it
    if (customPrompt && customPrompt.trim().length > 10) {
        questions.unshift({
            question: `Regarding "${customPrompt.substring(0, 50)}${customPrompt.length > 50 ? '...' : ''}", which approach is most effective?`,
            options: [
                "Systematic analysis and planning",
                "Trial and error approach",
                "Ignoring the problem",
                "Random selection"
            ],
            correct: 0,
            explanation: "Systematic analysis and planning is generally the most effective approach for any well-defined problem or topic."
        });
    }

    // Return the requested number of questions
    const selectedQuestions = questions.slice(0, questionCount);

    console.log(`✅ Mock quiz generated: ${selectedQuestions.length} questions at ${difficulty} difficulty`);

    return selectedQuestions;
};
