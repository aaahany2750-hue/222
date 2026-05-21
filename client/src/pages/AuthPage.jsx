import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function AuthPage() {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const { authenticate } = useAuth();
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await authenticate(mode, form);
    nav('/dashboard');
  };

  return <div className="max-w-md mx-auto glass p-6"><h1 className="text-2xl mb-4">{mode === 'login' ? 'Login' : 'Sign Up'}</h1><form onSubmit={submit} className="space-y-3">{mode==='signup'&&<input className="w-full p-2 rounded bg-slate-800" placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})} />}<input className="w-full p-2 rounded bg-slate-800" placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})} /><input type="password" className="w-full p-2 rounded bg-slate-800" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})} /><button className="w-full py-2 bg-cyan-500 rounded">Continue</button></form><button className="mt-3 text-xs" onClick={()=>setMode(mode==='login'?'signup':'login')}>Switch to {mode==='login'?'signup':'login'}</button></div>;
}
