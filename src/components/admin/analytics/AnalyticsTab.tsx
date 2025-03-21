
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  Area
} from 'recharts';

export const AnalyticsTab = () => {
  return (
    <div className="animate-fade-in">
      <div className="glass-card rounded-xl p-6">
        <h1 className="text-2xl font-display font-bold mb-6">Analytics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted p-6 rounded-xl">
            <h2 className="text-lg font-medium mb-4">Voter Turnout by Department</h2>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { name: "Engineering", turnout: 58 },
                  { name: "Arts", turnout: 42 },
                  { name: "Science", turnout: 65 },
                  { name: "Business", turnout: 51 },
                  { name: "Medicine", turnout: 72 },
                ]}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="name" />
                  <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <defs>
                    <linearGradient id="colorTurnout" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.2}/>
                    </linearGradient>
                  </defs>
                  <Area 
                    type="monotone" 
                    dataKey="turnout" 
                    stroke="#8B5CF6" 
                    fillOpacity={1} 
                    fill="url(#colorTurnout)" 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-muted p-6 rounded-xl">
            <h2 className="text-lg font-medium mb-4">Voting Hours Distribution</h2>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={[
                  { hour: "8 AM", votes: 42 },
                  { hour: "10 AM", votes: 105 },
                  { hour: "12 PM", votes: 192 },
                  { hour: "2 PM", votes: 158 },
                  { hour: "4 PM", votes: 134 },
                  { hour: "6 PM", votes: 176 },
                  { hour: "8 PM", votes: 120 },
                ]}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                    </linearGradient>
                  </defs>
                  <Line 
                    type="monotone" 
                    dataKey="votes" 
                    stroke="url(#colorGradient)" 
                    strokeWidth={3} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
