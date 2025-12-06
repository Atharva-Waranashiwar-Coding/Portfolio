import { useState } from 'react';

const AiAtharvaBot = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, `🧍You: ${userMessage}`]);
    setInput('');

    const response = await fetch('/api/ai-chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await response.json();
    setMessages(prev => [...prev, `🤖 AI-Atharva: ${data.reply}`]);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">Talk to AI-Atharva 🤖</h2>
      <div className="border p-3 rounded h-64 overflow-y-scroll mb-2 bg-gray-900 text-white text-sm">
        {messages.map((msg, i) => <div key={i}>{msg}</div>)}
      </div>
      <input
        className="border p-2 w-full mb-2 text-black"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && sendMessage()}
        placeholder="Ask anything..."
      />
      <button onClick={sendMessage} className="bg-blue-600 text-white px-4 py-1 rounded">
        Send
      </button>
    </div>
  );
};

export default AiAtharvaBot;
