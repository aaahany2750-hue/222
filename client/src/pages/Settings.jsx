import { useState } from 'react';
import api from '../utils/api';

export default function Settings() {
  const [theme, setTheme] = useState('dark');
  const save = async () => {
    await api.put('/user/settings', { theme });
    document.documentElement.classList.toggle('dark', theme === 'dark');
  };
  return <div className="glass p-4 max-w-lg"><h2 className="text-xl mb-3">Settings</h2><select value={theme} onChange={(e)=>setTheme(e.target.value)} className="w-full p-2 rounded bg-slate-800"><option value="dark">Dark</option><option value="light">Light</option></select><button onClick={save} className="mt-3 px-4 py-2 bg-cyan-500 rounded">Save</button></div>;
}
