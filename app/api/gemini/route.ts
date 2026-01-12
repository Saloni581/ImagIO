import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { prompt } = body;

        // not my code or thinking process -> but got to learn, useful and necessary long term
        if (!prompt || prompt.trim() === "") {
            return new Response(
                JSON.stringify({ error: "Prompt cannot be empty" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY,
        });

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-image",
            contents: prompt,
        });

        const parts = response.candidates?.[0]?.content?.parts;

        const imgPart = parts?.find((part: any) => part.inlineData?.data);

        if (!imgPart) {
            return new Response(
                JSON.stringify({ error: "No image returned by Gemini" }),
                { status: 500, headers: { "Content-Type": "application/json" } }
            );
        }

        const imageBase64 = imgPart?.inlineData?.data;
        const mimeType = imgPart?.inlineData?.mimeType;

        return new Response(
            JSON.stringify({ base64: imageBase64, mimeType }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (err: any) {
        return new Response(
            JSON.stringify({ error: err.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
