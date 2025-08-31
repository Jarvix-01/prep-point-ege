import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AuthProvider } from "@/hooks/useAuth";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SidebarProvider>
            <div className="min-h-screen flex w-full">
              <AppSidebar />
              <main className="flex-1 flex flex-col">
                <header className="h-16 flex items-center border-b border-border/50 bg-background/80 backdrop-blur-lg px-6">
                  <SidebarTrigger className="text-sidebar-foreground hover:bg-sidebar-accent" />
                  <div className="ml-4">
                    <h1 className="font-semibold text-lg">ЕГЭ Платформа</h1>
                  </div>
                </header>
                <div className="flex-1 p-6">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/auth" element={<Auth />} />
                    {/* Placeholder routes */}
                    <Route path="/variants" element={<div className="text-center py-12"><h2 className="text-2xl font-semibold">Варианты ЕГЭ</h2><p className="text-muted-foreground mt-2">Раздел в разработке</p></div>} />
                    <Route path="/catalog" element={<div className="text-center py-12"><h2 className="text-2xl font-semibold">Каталог заданий</h2><p className="text-muted-foreground mt-2">Раздел в разработке</p></div>} />
                    <Route path="/courses" element={<div className="text-center py-12"><h2 className="text-2xl font-semibold">Мои курсы</h2><p className="text-muted-foreground mt-2">Раздел в разработке</p></div>} />
                    <Route path="/assignments" element={<div className="text-center py-12"><h2 className="text-2xl font-semibold">Мои задания</h2><p className="text-muted-foreground mt-2">Раздел в разработке</p></div>} />
                    <Route path="/statistics" element={<div className="text-center py-12"><h2 className="text-2xl font-semibold">Статистика</h2><p className="text-muted-foreground mt-2">Раздел в разработке</p></div>} />
                    <Route path="/manage-courses" element={<div className="text-center py-12"><h2 className="text-2xl font-semibold">Модерация курсов</h2><p className="text-muted-foreground mt-2">Раздел в разработке</p></div>} />
                    <Route path="/check-homework" element={<div className="text-center py-12"><h2 className="text-2xl font-semibold">Проверка ДЗ</h2><p className="text-muted-foreground mt-2">Раздел в разработке</p></div>} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
              </main>
            </div>
          </SidebarProvider>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
