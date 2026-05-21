import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Layout() {
  const { user, logout } = useAuth();
  return (
    <div className="min-h-screen p-4 md:p-6">
      <nav className="glass p-4 flex flex-wrap gap-3 items-center justify-between">
        <div className="font-bold text-cyan-300">AI FUTURE HUB</div>
        <div className="flex gap-3 text-sm">
          {user && <><Link to="/dashboard">Dashboard</Link><Link to="/chat">Chatbot</Link><Link to="/settings">Settings</Link><Link to="/admin">Admin</Link></>}
        </div>
        {user && <button className="px-3 py-1 bg-rose-500 rounded" onClick={logout}>Logout</button>}
      </nav>
      <main className="mt-5"><Outlet /></main>
    </div>
  );
}
