import { GoogleGenAI, Type, Schema } from "@google/genai";
import { ChatMessage } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are an expert Clinical Psychiatrist and educator for psychiatry residents. 
Your goal is to assist residents in selecting appropriate antidepressants and augmentation strategies based on clinical vignettes.

Rules:
1. Base all advice on standard guidelines (APA, CANMAT, Maudsley, FDA labels).
2. Be concise, academic, and practical. Use bullet points.
3. If a user asks about a specific drug, mention its class, mechanism, and key pearls.
4. If presented with a patient vignette (age, comorbidities, symptoms), suggest:
   - First-line options (and why).
   - What to avoid (and why).
   - Dosing strategies.
5. Always prioritize safety (Black box warnings, interactions).
6. Do not be conversational fluff. Go straight to the clinical reasoning.
7. Disclaimer: Always remind the user that this is an educational tool and clinical judgment is required.

Current Date context: February 2026.
Recognize drugs like Zuranolone, Auvelity, Gepirone as FDA approved.
`;

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';

    // Format history for Gemini API
    // The SDK manages history via the Chat object usually, but for stateless or simple turns we can just prompt.
    // However, to maintain context, we should use ai.chats.create
    
    // We will reconstruct the chat history for the session
    const chatSession = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.2, // Low temperature for factual medical info
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const response = await chatSession.sendMessage({ message: newMessage });
    return response.text || "No response generated.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to consult the Clinical AI. Please check your connection or API key.");
  }
};
