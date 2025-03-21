
import { useState } from "react";
import { Filter, Info, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { ResultsCard } from "@/components/results/ResultsCard";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Election result interface
interface ElectionResult {
  id: string;
  title: string;
  date: string;
  totalVotes: number;
  positions: {
    name: string;
    winner: {
      name: string;
      party: string;
      votes: number;
      percentage: number;
    };
    runnerUp?: {
      name: string;
      party: string;
      votes: number;
      percentage: number;
    };
  }[];
}

const Results = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("past");
  
  // Sample results data
  const electionResults: ElectionResult[] = [
    {
      id: "1",
      title: "Student Council Elections 2022-23",
      date: "Oct 20, 2022",
      totalVotes: 2450,
      positions: [
        {
          name: "President",
          winner: {
            name: "Jordan Lee",
            party: "United Students",
            votes: 1200,
            percentage: 49
          },
          runnerUp: {
            name: "Taylor Smith",
            party: "Progress Alliance",
            votes: 950,
            percentage: 39
          }
        },
        {
          name: "Vice President",
          winner: {
            name: "Casey Martin",
            party: "United Students",
            votes: 1350,
            percentage: 55
          },
          runnerUp: {
            name: "Jamie Wilson",
            party: "Progress Alliance",
            votes: 850,
            percentage: 35
          }
        }
      ]
    },
    {
      id: "2",
      title: "Department Representative Elections 2022",
      date: "Sep 15, 2022",
      totalVotes: 1280,
      positions: [
        {
          name: "Engineering Rep",
          winner: {
            name: "Alex Chen",
            party: "STEM Forward",
            votes: 350,
            percentage: 58
          },
          runnerUp: {
            name: "Sam Rodriguez",
            party: "Engineers United",
            votes: 250,
            percentage: 42
          }
        }
      ]
    },
    {
      id: "3",
      title: "Graduate Student Association Elections 2022",
      date: "Nov 10, 2022",
      totalVotes: 780,
      positions: [
        {
          name: "GSA President",
          winner: {
            name: "Morgan Davis",
            party: "Research First",
            votes: 420,
            percentage: 54
          },
          runnerUp: {
            name: "Riley Johnson",
            party: "Graduate Voice",
            votes: 360,
            percentage: 46
          }
        }
      ]
    }
  ];

  // Filter results based on search
  const filteredResults = electionResults.filter(result => 
    result.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-muted/30 dark:bg-transparent pb-16 pt-24">
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-xl p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h1 className="text-3xl font-display font-bold">Election Results</h1>
          </div>
          
          <Card className="mb-8 bg-primary/5 border-primary/20">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                Current Election Status
              </CardTitle>
              <CardDescription>
                Student Council Elections 2023-24 is currently active and ongoing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Live Results Available</p>
                  <p className="text-sm text-muted-foreground">Votes are being counted as they come in.</p>
                </div>
                <Button className="gap-2">
                  <TrendingUp className="h-4 w-4" />
                  View Live Results
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full grid grid-cols-2 mb-8">
              <TabsTrigger value="past">Past Elections</TabsTrigger>
              <TabsTrigger value="statistics">Statistics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="past" className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Input 
                    type="search" 
                    placeholder="Search past elections..." 
                    className="pl-10" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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
                    <DropdownMenuLabel>Year</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>All Years</DropdownMenuItem>
                    <DropdownMenuItem>2023</DropdownMenuItem>
                    <DropdownMenuItem>2022</DropdownMenuItem>
                    <DropdownMenuItem>2021</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <div className="space-y-6">
                {filteredResults.map((result) => (
                  <ResultsCard key={result.id} result={result} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="statistics">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Election Participation Trends</CardTitle>
                    <CardDescription>Voter turnout over the past years</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 w-full flex items-center justify-center bg-muted/50 rounded-md">
                      <p className="text-muted-foreground">Statistics visualization coming soon</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Party Performance Analysis</CardTitle>
                    <CardDescription>How different parties performed in recent elections</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 w-full flex items-center justify-center bg-muted/50 rounded-md">
                      <p className="text-muted-foreground">Statistics visualization coming soon</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Results;
