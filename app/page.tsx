
import ChatComponents from "@/components/chatComponents";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <div className="bg-slate-900 p-3 w-[800px] rounded-md text-white">
        <h2 className="text-2xl mb-2 text-center">Cybersecurity Advisor Bot</h2>
        <p>Hello! I am a Cyber Security Advisor. You can ask me about cyber security query's and doubts about that. and also I have a suggestions of some productive apps that will helpfull to your privacy!</p>
        <ChatComponents />
      </div>
    </main>
  );
}
