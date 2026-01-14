
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getHistoricalAnalysis(country: string, context: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analiza críticamente el impacto a largo plazo de la intervención de EE.UU. en ${country}. Contexto actual: ${context}. Responde en español, con un tono académico e histórico, estructurado en 2 párrafos cortos.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching analysis:", error);
    return "No se pudo obtener el análisis en este momento.";
  }
}
