import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import type { User } from '../../types/User'

interface UsersChartProps {
  users: User[]
}

export default function UsersChart({ users }: UsersChartProps) {
  if (!users.length) return null  

  const chartData = users.map((u) => ({
    name: u.username,
    // eslint-disable-next-line react-hooks/purity
    posts: Math.floor(Math.random() * 20), 
  }))

  return (
    <div style={{ height: 300, marginTop: 20 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="posts" fill="#1976d2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
