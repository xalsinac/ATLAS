
import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
};

export async function getHistoricalAnalysis(country: string, context: string) {
  const ai = getAIClient();
  if (!ai) {
    console.warn("API_KEY no detectada. Asegúrate de que las variables de entorno estén configuradas.");
    return "El análisis por IA requiere una clave de API configurada.";
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
    return response.text;
  } catch (error) {
    console.error("Error fetching analysis:", error);
    return "No se pudo obtener el análisis en este momento debido a un error en el servicio.";
  }
}
