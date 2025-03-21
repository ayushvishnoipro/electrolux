import { useState } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreateCandidateDialog } from "./CreateCandidateDialog";
import { useCandidateStore } from "@/store/candidateStore";
import { useElectionStore } from "@/store/electionStore";

export const CandidatesTab = () => {
  const { elections } = useElectionStore();
  const { candidates, addCandidate, deleteCandidate } = useCandidateStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [electionFilter, setElectionFilter] = useState("all");

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = 
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.party.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesElection = electionFilter === "all" || candidate.electionId === electionFilter;
    return matchesSearch && matchesElection;
  });

  // Group candidates by election
  const groupedCandidates = filteredCandidates.reduce((groups, candidate) => {
    const election = elections.find(e => e.id === candidate.electionId);
    const electionName = election?.name || "Unknown Election";
    return {
      ...groups,
      [electionName]: [...(groups[electionName] || []), candidate]
    };
  }, {} as Record<string, typeof candidates>);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="glass-card rounded-xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-display font-bold">Manage Candidates</h1>
          <CreateCandidateDialog onCreateCandidate={addCandidate} />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Input 
              type="search" 
              placeholder="Search candidates..." 
              className="pl-10" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Select 
            value={electionFilter}
            onValueChange={setElectionFilter}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by election" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Elections</SelectItem>
              {elections.map((election) => (
                <SelectItem key={election.id} value={election.id}>
                  {election.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {Object.entries(groupedCandidates).map(([electionName, candidates]) => (
          <div key={electionName} className="mb-8">
            <h2 className="text-lg font-semibold mb-4">{electionName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {candidates.map((candidate) => (
                <div key={candidate.id} className="glass-card p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{candidate.name}</h3>
                      <p className="text-sm text-muted-foreground">{candidate.position}</p>
                      <p className="text-sm">{candidate.party}</p>
                    </div>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => deleteCandidate(candidate.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
