import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export const generateQuiz = async (params) => {
    const {
        pdfText = "",
        customPrompt = "",
        difficulty = "Medium",
        questionCount = 5,
        language = "English"
    } = params;

    try {
        const modelsToTry = ["gemini-1.5-flash", "gemini-1.5-flash-001", "gemini-pro", "gemini-1.0-pro"];
        let model = null;
        let result = null;
        let lastError = null;

        for (const modelName of modelsToTry) {
            try {
                console.log(`Attempting to generate with model: ${modelName}`);
                model = genAI.getGenerativeModel({ model: modelName });
                result = await model.generateContent(prompt);
                console.log(`Success with model: ${modelName}`);
                break; // If successful, exit the loop
            } catch (error) {
                console.warn(`Failed with model ${modelName}:`, error);
                lastError = error;
                // Continue to next model
            }
        }

        if (!result) {
            throw new Error(`All models failed. Last error: ${lastError?.message || "Unknown error"}`);
        }

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
