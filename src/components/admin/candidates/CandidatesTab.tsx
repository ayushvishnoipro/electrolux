
import { Plus, Filter } from "lucide-react";
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

interface Candidate {
  id: string;
  name: string;
  position: string;
  party: string;
  votes: number;
  status: "leading" | "active" | "pending" | "elected";
}

export const CandidatesTab = () => {
  // Sample candidates
  const candidates: Candidate[] = [
    {
      id: "1",
      name: "Alex Johnson",
      position: "Student Body President",
      party: "United Students",
      votes: 480,
      status: "leading"
    },
    {
      id: "2",
      name: "Miguel Rodriguez",
      position: "Student Body President",
      party: "Progress Alliance",
      votes: 300,
      status: "active"
    },
    {
      id: "3",
      name: "Sarah Chen",
      position: "Student Body President",
      party: "Student First",
      votes: 220,
      status: "active"
    },
    {
      id: "4",
      name: "Sophia Martinez",
      position: "Vice President",
      party: "United Students",
      votes: 510,
      status: "leading"
    },
    {
      id: "5",
      name: "David Kim",
      position: "Vice President",
      party: "Progress Alliance",
      votes: 490,
      status: "active"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
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
    </div>
  );
};
