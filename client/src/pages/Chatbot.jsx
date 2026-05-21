import { useState } from 'react';
import api from '../utils/api';

export default function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const ask = async () => {
    const userMsg = { by: 'You', text: input };
    setMessages((m) => [...m, userMsg]);
    const { data } = await api.post('/chat', { message: input, tone: 'professional' });
    setMessages((m) => [...m, { by: 'AI', text: data.reply }]);
    setInput('');
  };

  const voice = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.onresult = (e) => setInput(e.results[0][0].transcript);
    recognition.start();
  };

  return <div className="glass p-4"><h2 className="text-xl mb-3">AI Chatbot</h2><div className="h-72 overflow-y-auto space-y-2">{messages.map((m,i)=><div key={i} className="p-2 rounded bg-slate-800"><b>{m.by}:</b> {m.text}</div>)}</div><div className="mt-3 flex gap-2"><input value={input} onChange={(e)=>setInput(e.target.value)} className="flex-1 p-2 rounded bg-slate-800" placeholder="Type your message" /><button onClick={ask} className="px-4 bg-cyan-500 rounded">Send</button><button onClick={voice} className="px-4 bg-violet-500 rounded">Voice</button></div></div>;
}
