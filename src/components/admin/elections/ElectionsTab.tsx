
import { Plus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ElectionsList } from "./ElectionsList";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Election {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: "leading" | "active" | "pending" | "elected";
  totalVotes: number;
  positions: number;
}

export const ElectionsTab = () => {
  // Sample elections
  const elections: Election[] = [
    {
      id: "1",
      name: "Student Body Elections 2023-24",
      startDate: "Oct 15, 2023",
      endDate: "Oct 20, 2023",
      status: "active",
      totalVotes: 1245,
      positions: 3
    },
    {
      id: "2",
      name: "Department Representative Elections",
      startDate: "Oct 10, 2023",
      endDate: "Oct 18, 2023",
      status: "active",
      totalVotes: 567,
      positions: 5
    },
    {
      id: "3",
      name: "Club Leadership Elections",
      startDate: "Sep 5, 2023",
      endDate: "Sep 10, 2023",
      status: "elected",
      totalVotes: 892,
      positions: 4
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
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
        
        <ElectionsList elections={elections} />
      </div>
    </div>
  );
};
