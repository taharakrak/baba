
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getStyleRecommendation(userInput: string): Promise<any> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `The user is looking for a hair or beard style recommendation. User details: ${userInput}`,
    config: {
      systemInstruction: "You are a world-class professional barber at F & H Gents Saloon. Provide a stylish, personalized grooming recommendation. Keep it concise and professional.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          style: { type: Type.STRING, description: "The name of the suggested hairstyle or beard style" },
          description: { type: Type.STRING, description: "A brief description of how the style looks" },
          why: { type: Type.STRING, description: "Why this style suits the user based on their input" }
        },
        required: ["style", "description", "why"]
      }
    },
  });

  return JSON.parse(response.text);
}
