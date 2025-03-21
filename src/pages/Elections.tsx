
import { useState } from "react";
import { Plus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ElectionCard } from "@/components/elections/ElectionCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Sample data interface
interface Election {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  status: "active" | "upcoming" | "completed";
  votesCount: number;
  positions: number;
}

const Elections = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample elections data
  const elections: Election[] = [
    {
      id: "1",
      title: "Student Council Elections 2023-24",
      startDate: "Oct 15, 2023",
      endDate: "Oct 20, 2023",
      status: "active",
      votesCount: 1245,
      positions: 5
    },
    {
      id: "2",
      title: "Department Representative Elections",
      startDate: "Oct 25, 2023",
      endDate: "Oct 30, 2023",
      status: "upcoming",
      votesCount: 0,
      positions: 8
    },
    {
      id: "3",
      title: "Campus Club Leadership Elections",
      startDate: "Sep 5, 2023",
      endDate: "Sep 10, 2023",
      status: "completed",
      votesCount: 892,
      positions: 4
    },
    {
      id: "4",
      title: "Graduate Student Association Elections",
      startDate: "Nov 5, 2023",
      endDate: "Nov 12, 2023",
      status: "upcoming",
      votesCount: 0,
      positions: 3
    }
  ];

  // Filter elections based on search
  const filteredElections = elections.filter(election => 
    election.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-muted/30 dark:bg-transparent pb-16 pt-24">
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-xl p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h1 className="text-3xl font-display font-bold">Elections</h1>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              <span>Register to Vote</span>
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Input 
                type="search" 
                placeholder="Search elections..." 
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
                <DropdownMenuLabel>Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>All</DropdownMenuItem>
                <DropdownMenuItem>Active</DropdownMenuItem>
                <DropdownMenuItem>Upcoming</DropdownMenuItem>
                <DropdownMenuItem>Completed</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredElections.map((election) => (
              <ElectionCard key={election.id} election={election} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elections;
