import { NextRequest, NextResponse } from "next/server";

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

        // Use fetch directly to call HuggingFace API
        const response = await fetch("https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-3B-Instruct/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.HF_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "meta-llama/Llama-3.2-3B-Instruct",
                messages: conversation,
                max_tokens: 500,
                temperature: 0.7,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("HuggingFace API Error:", errorText);
            return NextResponse.json({ error: `HuggingFace API error: ${errorText}` }, { status: response.status });
        }

        const data = await response.json();
        const aiMessage = data.choices[0].message;

        return NextResponse.json(aiMessage);

    } catch (error: any) {
        console.error("AI Chat Error Detailed:", error);
        return NextResponse.json({ error: "Failed to fetch response: " + (error.message || "Unknown error") }, { status: 500 });
    }
}
