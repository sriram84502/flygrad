import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

export async function POST(req: NextRequest) {
    try {
        const { messages } = await req.json();

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
        }

        // Check if API key is available
        if (!process.env.HF_TOKEN) {
            return NextResponse.json({ error: "HF_TOKEN not configured" }, { status: 500 });
        }

        // Initialize OpenAI client with HuggingFace router
        const client = new OpenAI({
            baseURL: "https://router.huggingface.co/v1",
            apiKey: process.env.HF_TOKEN,
        });

        // System instruction to enforce the persona
        const systemMessage = {
            role: "system" as const,
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

        // Call HuggingFace router with OpenAI SDK
        const completion = await client.chat.completions.create({
            model: "meta-llama/Llama-3.2-3B-Instruct",
            messages: conversation,
            max_tokens: 500,
            temperature: 0.7,
            stream: false,
        });

        const aiMessage = completion.choices[0].message;

        return NextResponse.json(aiMessage);

    } catch (error: any) {
        console.error("AI Chat Error Detailed:", error);
        return NextResponse.json({
            error: "Failed to fetch response: " + (error.message || "Unknown error")
        }, { status: 500 });
    }
}
