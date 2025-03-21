import { useState } from "react";
import { 
  Users, 
  BarChart3, 
  LineChart, 
  Activity, 
  Calendar, 
  Settings,
  LogOut,
  Plus,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/StatusBadge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Import for charting - fixed to use proper components from recharts
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  BarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line
} from 'recharts';

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Sample vote data for charts
  const voteData = [
    { name: "Oct 15", votes: 325 },
    { name: "Oct 16", votes: 480 },
    { name: "Oct 17", votes: 230 },
    { name: "Oct 18", votes: 420 },
    { name: "Oct 19", votes: 380 },
    { name: "Oct 20", votes: 290 }
  ];

  // Sample candidate data for pie chart
  const candidateData = [
    { name: "Alex Johnson", votes: 480, color: "#3B82F6" },
    { name: "Miguel Rodriguez", votes: 300, color: "#8B5CF6" },
    { name: "Sarah Chen", votes: 220, color: "#EC4899" }
  ];

  // Sample elections
  const elections = [
    {
      id: "1",
      name: "Student Body Elections 2023-24",
      startDate: "Oct 15, 2023",
      endDate: "Oct 20, 2023",
      status: "active" as const,
      totalVotes: 1245,
      positions: 3
    },
    {
      id: "2",
      name: "Department Representative Elections",
      startDate: "Oct 10, 2023",
      endDate: "Oct 18, 2023",
      status: "active" as const,
      totalVotes: 567,
      positions: 5
    },
    {
      id: "3",
      name: "Club Leadership Elections",
      startDate: "Sep 5, 2023",
      endDate: "Sep 10, 2023",
      status: "elected" as const,
      totalVotes: 892,
      positions: 4
    }
  ];

  // Sample candidates
  const candidates = [
    {
      id: "1",
      name: "Alex Johnson",
      position: "Student Body President",
      party: "United Students",
      votes: 480,
      status: "leading" as const
    },
    {
      id: "2",
      name: "Miguel Rodriguez",
      position: "Student Body President",
      party: "Progress Alliance",
      votes: 300,
      status: "active" as const
    },
    {
      id: "3",
      name: "Sarah Chen",
      position: "Student Body President",
      party: "Student First",
      votes: 220,
      status: "active" as const
    },
    {
      id: "4",
      name: "Sophia Martinez",
      position: "Vice President",
      party: "United Students",
      votes: 510,
      status: "leading" as const
    },
    {
      id: "5",
      name: "David Kim",
      position: "Vice President",
      party: "Progress Alliance",
      votes: 490,
      status: "active" as const
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30 dark:bg-transparent pb-16 pt-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="lg:w-64 glass-card rounded-xl p-4 h-fit lg:sticky lg:top-24">
            <div className="mb-6 flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-semibold text-sm">CE</span>
              </div>
              <h2 className="font-display font-semibold">Admin Portal</h2>
            </div>
            
            <nav className="space-y-1">
              <Button
                variant={activeTab === "dashboard" ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("dashboard")}
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
              <Button
                variant={activeTab === "elections" ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("elections")}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Elections
              </Button>
              <Button
                variant={activeTab === "candidates" ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("candidates")}
              >
                <Users className="h-4 w-4 mr-2" />
                Candidates
              </Button>
              <Button
                variant={activeTab === "analytics" ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("analytics")}
              >
                <Activity className="h-4 w-4 mr-2" />
                Analytics
              </Button>
              <Button
                variant={activeTab === "settings" ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("settings")}
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </nav>
            
            <div className="pt-6 mt-6 border-t">
              <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <Tabs value={activeTab} className="space-y-6" onValueChange={setActiveTab}>
              <TabsContent value="dashboard" className="space-y-6 animate-fade-in">
                <div className="glass-card rounded-xl p-6">
                  <h1 className="text-2xl font-display font-bold mb-6">Admin Dashboard</h1>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="bg-primary/10 rounded-xl p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-muted-foreground">Total Voters</p>
                          <h3 className="text-2xl font-bold">3,500</h3>
                        </div>
                        <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                        +12% from last election
                      </p>
                    </div>
                    
                    <div className="bg-secondary/10 rounded-xl p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-muted-foreground">Active Elections</p>
                          <h3 className="text-2xl font-bold">2</h3>
                        </div>
                        <div className="h-10 w-10 bg-secondary/20 rounded-full flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-secondary" />
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Ending Oct 20, 2023
                      </p>
                    </div>
                    
                    <div className="bg-accent/10 rounded-xl p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-muted-foreground">Votes Today</p>
                          <h3 className="text-2xl font-bold">380</h3>
                        </div>
                        <div className="h-10 w-10 bg-accent/20 rounded-full flex items-center justify-center">
                          <BarChart3 className="h-5 w-5 text-accent" />
                        </div>
                      </div>
                      <p className="text-xs text-amber-600 dark:text-amber-400 mt-2">
                        -5% from yesterday
                      </p>
                    </div>
                    
                    <div className="bg-muted rounded-xl p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-muted-foreground">Voter Turnout</p>
                          <h3 className="text-2xl font-bold">42%</h3>
                        </div>
                        <div className="h-10 w-10 bg-muted-foreground/20 rounded-full flex items-center justify-center">
                          <Activity className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                        +8% from last election
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h2 className="text-lg font-medium">Vote Distribution</h2>
                    <div className="h-80 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={voteData}>
                          <defs>
                            <linearGradient id="colorVotes" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip 
                            contentStyle={{ 
                              borderRadius: '8px',
                              backgroundColor: 'rgba(255, 255, 255, 0.8)',
                              backdropFilter: 'blur(4px)',
                              border: 'none'
                            }} 
                          />
                          <Area 
                            type="monotone" 
                            dataKey="votes" 
                            stroke="#3B82F6" 
                            fillOpacity={1} 
                            fill="url(#colorVotes)" 
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="glass-card rounded-xl p-6">
                    <h2 className="text-lg font-medium mb-4">President Race</h2>
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={candidateData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={2}
                            dataKey="votes"
                          >
                            {candidateData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip 
                            contentStyle={{ 
                              borderRadius: '8px',
                              backgroundColor: 'rgba(255, 255, 255, 0.8)',
                              backdropFilter: 'blur(4px)',
                              border: 'none'
                            }} 
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {candidateData.map((candidate, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: candidate.color }}></div>
                          <span className="truncate">{candidate.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="glass-card rounded-xl p-6">
                    <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
                    <div className="space-y-4">
                      {[...Array(4)].map((_, index) => (
                        <div key={index} className="bg-muted rounded-lg p-3 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                              {index % 2 === 0 ? (
                                <Users className="h-4 w-4 text-primary" />
                              ) : (
                                <Calendar className="h-4 w-4 text-primary" />
                              )}
                            </div>
                            <div>
                              <p className="text-sm font-medium">
                                {index % 2 === 0 
                                  ? `${50 - index * 10} new votes recorded`
                                  : `Election settings updated`
                                }
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {index === 0 ? "Just now" : `${index * 15} minutes ago`}
                              </p>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="elections" className="space-y-6 animate-fade-in">
                <div className="glass-card rounded-xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <h1 className="text-2xl font-display font-bold">Manage Elections</h1>
                    <Button className="gap-2">
                      <Plus className="h-4 w-4" />
                      <span>Create Election</span>
                    </Button>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                      <Input 
                        type="search" 
                        placeholder="Search elections..." 
                        className="pl-10" 
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="gap-2">
                          <Filter className="h-4 w-4" />
                          <span>Filter</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuLabel>Status</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>All</DropdownMenuItem>
                        <DropdownMenuItem>Active</DropdownMenuItem>
                        <DropdownMenuItem>Completed</DropdownMenuItem>
                        <DropdownMenuItem>Upcoming</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  
                  <div className="space-y-4">
                    {elections.map((election) => (
                      <div 
                        key={election.id} 
                        className="bg-muted rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{election.name}</h3>
                            <StatusBadge status={election.status} />
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            <span>{election.startDate} - {election.endDate}</span>
                            <span className="mx-2">•</span>
                            <span>{election.positions} positions</span>
                            <span className="mx-2">•</span>
                            <span>{election.totalVotes} votes</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 self-end sm:self-auto">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="candidates" className="space-y-6 animate-fade-in">
                <div className="glass-card rounded-xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <h1 className="text-2xl font-display font-bold">Manage Candidates</h1>
                    <Button className="gap-2">
                      <Plus className="h-4 w-4" />
                      <span>Add Candidate</span>
                    </Button>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                      <Input 
                        type="search" 
                        placeholder="Search candidates..." 
                        className="pl-10" 
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="gap-2">
                          <Filter className="h-4 w-4" />
                          <span>Filter</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuLabel>Position</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>All Positions</DropdownMenuItem>
                        <DropdownMenuItem>President</DropdownMenuItem>
                        <DropdownMenuItem>Vice President</DropdownMenuItem>
                        <DropdownMenuItem>Treasurer</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium">Name</th>
                          <th className="text-left py-3 px-4 font-medium">Position</th>
                          <th className="text-left py-3 px-4 font-medium">Party</th>
                          <th className="text-right py-3 px-4 font-medium">Votes</th>
                          <th className="text-left py-3 px-4 font-medium">Status</th>
                          <th className="text-right py-3 px-4 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {candidates.map((candidate) => (
                          <tr key={candidate.id} className="border-b last:border-none hover:bg-muted/50">
                            <td className="py-3 px-4">{candidate.name}</td>
                            <td className="py-3 px-4">{candidate.position}</td>
                            <td className="py-3 px-4">{candidate.party}</td>
                            <td className="py-3 px-4 text-right">{candidate.votes}</td>
                            <td className="py-3 px-4">
                              <StatusBadge status={candidate.status} />
                            </td>
                            <td className="py-3 px-4 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    />
                                  </svg>
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-100 dark:hover:bg-red-900/20">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                  </svg>
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="analytics" className="animate-fade-in">
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
                          <RechartsLineChart data={[
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
                          </RechartsLineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="settings" className="animate-fade-in">
                <div className="glass-card rounded-xl p-6">
                  <h1 className="text-2xl font-display font-bold mb-6">Settings</h1>
                  
                  <div className="grid gap-6">
                    <div className="border-b pb-6">
                      <h2 className="text-lg font-medium mb-4">System Configuration</h2>
                      <div className="grid gap-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-muted p-4 rounded-lg">
                          <div>
                            <h3 className="font-medium">Maintenance Mode</h3>
                            <p className="text-sm text-muted-foreground">Temporarily disable the voting system for maintenance.</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">Enable</Button>
                            <Button variant="outline" size="sm">Disable</Button>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-muted p-4 rounded-lg">
                          <div>
                            <h3 className="font-medium">Email Notifications</h3>
                            <p className="text-sm text-muted-foreground">Configure email settings for notifications and alerts.</p>
                          </div>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-muted p-4 rounded-lg">
                          <div>
                            <h3 className="font-medium">System Logs</h3>
                            <p className="text-sm text-muted-foreground">View and export system logs for troubleshooting.</p>
                          </div>
                          <Button variant="outline" size="sm">View Logs</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-b pb-6">
                      <h2 className="text-lg font-medium mb-4">User Management</h2>
                      <div className="grid gap-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-muted p-4 rounded-lg">
                          <div>
                            <h3 className="font-medium">Admin Accounts</h3>
                            <p className="text-sm text-muted-foreground">Manage administrator access and permissions.</p>
                          </div>
                          <Button variant="outline" size="sm">Manage</Button>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-muted p-4 rounded-lg">
                          <div>
                            <h3 className="font-medium">Voter Database</h3>
                            <p className="text-sm text-muted-foreground">Import and manage eligible voter records.</p>
                          </div>
                          <Button variant="outline" size="sm">Import</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-lg font-medium mb-4">Security</h2>
                      <div className="grid gap-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-muted p-4 rounded-lg">
                          <div>
                            <h3 className="font-medium">Two-Factor Authentication</h3>
                            <p className="text-sm text-muted-foreground">Enforce additional authentication for admin accounts.</p>
                          </div>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-muted p-4 rounded-lg">
                          <div>
                            <h3 className="font-medium">Audit Logs</h3>
                            <p className="text-sm text-muted-foreground">View detailed audit trail of system activities.</p>
                          </div>
                          <Button variant="outline" size="sm">View</Button>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-muted p-4 rounded-lg">
                          <div>
                            <h3 className="font-medium">Backup & Recovery</h3>
                            <p className="text-sm text-muted-foreground">Configure automatic backups and recovery options.</p>
                          </div>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;
