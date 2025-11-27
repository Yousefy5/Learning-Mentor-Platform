import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export const generateQuiz = async (topic, difficulty = "Medium", count = 5) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
            You are an expert quiz generator for a learning platform.
            Create a ${difficulty} difficulty quiz about "${topic}" with ${count} questions.
            
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

        const result = await model.generateContent(prompt);
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
