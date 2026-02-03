import { NextRequest, NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";

// Initialize the client securely on the server side
const client = new InferenceClient(process.env.HF_TOKEN);

export async function POST(req: NextRequest) {
    try {
        const { messages } = await req.json();

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
        }

        // System instruction to enforce the persona
        const systemMessage = {
            role: "system",
            content: `You are the FlyGrad AI Counselor. 
      Your goal is to help students from India (and other countries) interested in studying in Malaysia.
      
      Key responsibilities:
      - Answer questions about universities in Malaysia (Taylor's, Sunway, APU, Monash, Nottingham, etc.).
      - Explain the visa process (EMGS) simply.
      - Discuss lifestyle in Kuala Lumpur (cost of living, food, safety).
      - Be encouraging, professional, and friendly.
      - If you don't know an answer, suggest they book a free strategy call with a human counselor.
      
      Do NOT answer questions unrelated to education, Malaysia, or student life.
      Keep answers concise and helpful.`
        };

        // Prepend system message to the conversation history
        const conversation = [systemMessage, ...messages];

        // Using InferenceClient as requested by the user, but with non-streaming for now to ensure stability
        // We will strip the <think> tags from the response before sending it to the frontend
        const chatCompletion = await client.chatCompletion({
            model: "deepseek-ai/DeepSeek-R1:novita", // Switched back to DeepSeek as requested
            messages: conversation,
            max_tokens: 500, // Limit response length
            temperature: 0.7,
        });

        const aiMessage = chatCompletion.choices[0].message;

        // CLEANUP: Remove <think>...</think> blocks from the response
        if (aiMessage.content) {
            aiMessage.content = aiMessage.content.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
        }

        return NextResponse.json(aiMessage);

    } catch (error: any) {
        console.error("AI Chat Error Detailed:", error);
        return NextResponse.json({ error: "Failed to fetch response: " + (error.message || "Unknown error") }, { status: 500 });
    }
}
