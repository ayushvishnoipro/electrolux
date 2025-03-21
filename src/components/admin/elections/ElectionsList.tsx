
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/StatusBadge";

interface Election {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: "leading" | "active" | "pending" | "elected";
  totalVotes: number;
  positions: number;
}

interface ElectionsListProps {
  elections: Election[];
}

export const ElectionsList = ({ elections }: ElectionsListProps) => {
  return (
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
  );
};
