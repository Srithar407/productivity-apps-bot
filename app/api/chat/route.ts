import { Configuration,OpenAIApi } from "openai-edge";
import { OpenAIStream,StreamingTextResponse } from "ai";
import Groq from "groq-sdk";

export const runtime = 'edge';
const groq = new Groq({
    apiKey : process.env.API_KEY
});
export async function POST(request:Request) {
    const { messages } = await request.json();
    const response = await groq.chat.completions.create({
        model : "llama3-8b-8192",
        stream : true,
        messages:[{
            role:"system",
            content : "you are a helpfull CyberScurity Advisor and your name is Srithar.You could suggest some apps for better productivity. Strictly don't give any suggestion or assistance to any other content."
        }, ...messages]
    })
    const stream = await OpenAIStream(response);
    return new StreamingTextResponse(stream);
}