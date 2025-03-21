
import { Calendar, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/StatusBadge";
import { Link } from "react-router-dom";
import { ElectionProgress } from "@/components/ElectionProgress";

interface Election {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  status: "active" | "upcoming" | "completed";
  votesCount: number;
  positions: number;
}

interface ElectionCardProps {
  election: Election;
}

export const ElectionCard = ({ election }: ElectionCardProps) => {
  const getProgress = () => {
    switch (election.status) {
      case "active":
        return Math.floor(Math.random() * 50) + 25; // Random value between 25-75%
      case "completed":
        return 100;
      case "upcoming":
        return 0;
      default:
        return 0;
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow bg-card">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-medium text-lg line-clamp-2">{election.title}</h3>
            <StatusBadge status={election.status} />
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{election.startDate} - {election.endDate}</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{election.votesCount} votes • {election.positions} positions</span>
            </div>
            
            <div className="pt-2">
              <ElectionProgress progress={getProgress()} />
            </div>
          </div>
        </div>
        
        <div className="border-t p-4 flex justify-between items-center">
          <Button variant="ghost" size="sm" asChild>
            <Link to={`/elections/${election.id}`}>View Details</Link>
          </Button>
          
          {election.status === "active" && (
            <Button size="sm" asChild>
              <Link to={`/vote/${election.id}`}>Vote Now</Link>
            </Button>
          )}
          
          {election.status === "upcoming" && (
            <Button size="sm" variant="outline" disabled>
              Coming Soon
            </Button>
          )}
          
          {election.status === "completed" && (
            <Button size="sm" variant="outline" asChild>
              <Link to={`/results/${election.id}`}>See Results</Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
