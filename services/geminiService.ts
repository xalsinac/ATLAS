
import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  try {
    // Comprobación segura de variable de entorno para evitar crasheos en GitHub Pages
    // @ts-ignore
    const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : null;
    
    if (!apiKey) {
      console.warn("API_KEY no configurada.");
      return null;
    }
    return new GoogleGenAI({ apiKey });
  } catch (e) {
    return null;
  }
};

export async function getHistoricalAnalysis(country: string, context: string) {
  const ai = getAIClient();
  if (!ai) {
    return "El análisis por IA requiere una clave de API configurada en las variables de entorno.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analiza críticamente el impacto a largo plazo de la intervención de EE.UU. en ${country}. Contexto actual: ${context}. Responde en español, con un tono académico e histórico, estructurado en 2 párrafos cortos.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });
    return response.text || "No se pudo generar el texto.";
  } catch (error) {
    console.error("Error fetching analysis:", error);
    return "No se pudo obtener el análisis en este momento.";
  }
}
