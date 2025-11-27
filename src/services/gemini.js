import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

// Helper to convert File to base64
async function fileToGenerativePart(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64Data = reader.result.split(',')[1];
            resolve({
                inlineData: {
                    data: base64Data,
                    mimeType: file.type
                },
            });
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

export const generateQuiz = async (params) => {
    const {
        files = [],
        customPrompt = "",
        difficulty = "Medium",
        questionCount = 5,
        language = "English"
    } = params;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        let promptParts = [];

        // Add files if present
        if (files.length > 0) {
            const fileParts = await Promise.all(files.map(fileToGenerativePart));
            promptParts = [...promptParts, ...fileParts];
        }

        // Construct the text prompt
        const textPrompt = `
            You are an expert quiz generator.
            Create a ${difficulty} difficulty quiz with ${questionCount} questions.
            Language: ${language}
            
            ${customPrompt ? `Custom Instructions: ${customPrompt}` : ''}
            
            ${files.length > 0 ? "Based on the attached document(s)." : "Topic: General Knowledge (since no document was provided, infer topic from custom instructions or default to general knowledge)."}

            Return the result strictly as a JSON array of objects.
            Each object must have this structure:
            {
                "question": "The question text",
                "options": ["Option A", "Option B", "Option C", "Option D"],
                "correct": 0, // Index of the correct option (0-3)
                "explanation": "Brief explanation of why the answer is correct"
            }

            Do not include any markdown formatting (like \`\`\`json). Just return the raw JSON array.
        `;

        promptParts.push(textPrompt);

        const result = await model.generateContent(promptParts);
        const response = await result.response;
        const text = response.text();

        // Clean up markdown if present
        const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();

        return JSON.parse(cleanText);
    } catch (error) {
        console.error("Error generating quiz:", error);
        throw error;
    }
};
