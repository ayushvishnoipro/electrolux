
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { DashboardTab } from "@/components/admin/dashboard/DashboardTab";
import { ElectionsTab } from "@/components/admin/elections/ElectionsTab";
import { CandidatesTab } from "@/components/admin/candidates/CandidatesTab";
import { AnalyticsTab } from "@/components/admin/analytics/AnalyticsTab";
import { SettingsTab } from "@/components/admin/settings/SettingsTab";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-muted/30 dark:bg-transparent pb-16 pt-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Main Content */}
          <main className="flex-1">
            <Tabs value={activeTab} className="space-y-6" onValueChange={setActiveTab}>
              <TabsContent value="dashboard">
                <DashboardTab />
              </TabsContent>
              
              <TabsContent value="elections">
                <ElectionsTab />
              </TabsContent>
              
              <TabsContent value="candidates">
                <CandidatesTab />
              </TabsContent>
              
              <TabsContent value="analytics">
                <AnalyticsTab />
              </TabsContent>
              
              <TabsContent value="settings">
                <SettingsTab />
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;
