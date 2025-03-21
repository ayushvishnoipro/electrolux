
import { useState } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CandidateCard } from "@/components/CandidateCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Candidate interface
interface Candidate {
  id: string;
  name: string;
  position: string;
  party: string;
  stats: {
    year: string;
    department: string;
  };
  status: "leading" | "active" | "pending" | "elected";
}

const Candidates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample candidates data
  const candidates: Candidate[] = [
    {
      id: "1",
      name: "Alex Johnson",
      position: "Student Body President",
      party: "United Students",
      stats: {
        year: "Senior",
        department: "Political Science"
      },
      status: "leading"
    },
    {
      id: "2",
      name: "Miguel Rodriguez",
      position: "Student Body President",
      party: "Progress Alliance",
      stats: {
        year: "Junior",
        department: "Economics"
      },
      status: "active"
    },
    {
      id: "3",
      name: "Sarah Chen",
      position: "Vice President",
      party: "Student First",
      stats: {
        year: "Senior",
        department: "Computer Science"
      },
      status: "active"
    },
    {
      id: "4",
      name: "Tyrone Wilson",
      position: "Treasurer",
      party: "United Students",
      stats: {
        year: "Sophomore",
        department: "Finance"
      },
      status: "leading"
    },
    {
      id: "5",
      name: "Emily Garcia",
      position: "Secretary",
      party: "Progress Alliance",
      stats: {
        year: "Junior",
        department: "Communications"
      },
      status: "active"
    },
    {
      id: "6",
      name: "David Park",
      position: "Secretary",
      party: "Student First",
      stats: {
        year: "Senior",
        department: "Sociology"
      },
      status: "active"
    }
  ];

  // Filter candidates based on search
  const filteredCandidates = candidates.filter(candidate => 
    candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    candidate.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-muted/30 dark:bg-transparent pb-16 pt-24">
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-xl p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h1 className="text-3xl font-display font-bold">Candidates</h1>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Input 
                type="search" 
                placeholder="Search candidates by name or position..." 
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
                <DropdownMenuLabel>Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>All Positions</DropdownMenuItem>
                <DropdownMenuItem>President</DropdownMenuItem>
                <DropdownMenuItem>Vice President</DropdownMenuItem>
                <DropdownMenuItem>Treasurer</DropdownMenuItem>
                <DropdownMenuItem>Secretary</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCandidates.map((candidate, index) => (
              <CandidateCard 
                key={candidate.id}
                id={candidate.id}
                name={candidate.name}
                position={candidate.position}
                party={candidate.party}
                stats={candidate.stats}
                status={candidate.status}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {}}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidates;
