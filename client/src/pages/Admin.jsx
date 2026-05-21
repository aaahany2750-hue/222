import { useEffect, useState } from 'react';
import api from '../utils/api';

export default function Admin() {
  const [data, setData] = useState(null);
  useEffect(() => { api.get('/user/admin').then((r)=>setData(r.data)).catch(()=>setData({ error: 'Admin only' })); }, []);
  if (!data) return <div>Loading...</div>;
  if (data.error) return <div className="glass p-4">{data.error}</div>;
  return <div className="glass p-4"><h2 className="text-xl">Admin Panel</h2><p>Total users: {data.totalUsers}</p><ul className="mt-2">{data.recentUsers.map((u)=><li key={u._id}>{u.name} - {u.email}</li>)}</ul></div>;
}
