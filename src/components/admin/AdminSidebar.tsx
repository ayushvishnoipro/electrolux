
import { Button } from "@/components/ui/button";
import { BarChart3, Calendar, Users, Activity, Settings, LogOut } from "lucide-react";

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const AdminSidebar = ({ activeTab, setActiveTab }: AdminSidebarProps) => {
  return (
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
  );
};
