import { useEffect, useState } from 'react';
import api from '../utils/api';

export default function Dashboard() {
  const [me, setMe] = useState(null);
  useEffect(() => { api.get('/user/me').then((r) => setMe(r.data)); }, []);
  if (!me) return <div>Loading...</div>;
  return <div className="grid md:grid-cols-3 gap-4"><section className="glass p-4 md:col-span-2"><h2 className="text-xl">Welcome, {me.name}</h2><p>Email: {me.email}</p><p>Role: {me.role}</p></section><section className="glass p-4"><h3 className="font-semibold">Notifications</h3><ul className="text-sm mt-2 space-y-2">{me.notifications?.map((n,i)=><li key={i}>• {n.message}</li>)}</ul></section></div>;
}
