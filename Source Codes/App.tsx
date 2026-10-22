import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FraudProvider } from "@/contexts/FraudContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import AppLayout from "@/components/layout/AppLayout";
import AuthPage from "@/pages/AuthPage";
import DashboardPage from "@/pages/DashboardPage";
import TransactionsPage from "@/pages/TransactionsPage";
import AnalyticsPage from "@/pages/AnalyticsPage";
import AlertsPage from "@/pages/AlertsPage";
import SettingsPage from "@/pages/SettingsPage";
import UploadPage from "@/pages/UploadPage";
import ModelMetricsPage from "@/pages/ModelMetricsPage";
import NetworkPage from "@/pages/NetworkPage";
import RulesPage from "@/pages/RulesPage";
import AccountPage from "@/pages/AccountPage";
import JobsPage from "@/pages/JobsPage";
import ReportsPage from "@/pages/ReportsPage";
import AdminUsersPage from "@/pages/AdminUsersPage";
import AdminActivityPage from "@/pages/AdminActivityPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <FraudProvider>
              <Routes>
                <Route path="/auth" element={<AuthPage />} />
                <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
                  <Route path="/" element={<DashboardPage />} />
                  <Route path="/upload" element={<UploadPage />} />
                  <Route path="/jobs" element={<JobsPage />} />
                  <Route path="/transactions" element={<TransactionsPage />} />
                  <Route path="/analytics" element={<AnalyticsPage />} />
                  <Route path="/network" element={<NetworkPage />} />
                  <Route path="/rules" element={<RulesPage />} />
                  <Route path="/model" element={<ModelMetricsPage />} />
                  <Route path="/reports" element={<ReportsPage />} />
                  <Route path="/alerts" element={<AlertsPage />} />
                  <Route path="/account" element={<AccountPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="/admin/users" element={<ProtectedRoute adminOnly><AdminUsersPage /></ProtectedRoute>} />
                  <Route path="/admin/activity" element={<ProtectedRoute adminOnly><AdminActivityPage /></ProtectedRoute>} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </FraudProvider>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
