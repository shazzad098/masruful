import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Objective from "./pages/Objective";
import Personal from "./pages/Personal";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Languages from "./pages/Languages";
import Assessment from "./pages/Assessment";
import Experience from "./pages/Experience";
import Activities from "./pages/Activities";
import Declaration from "./pages/Declaration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/objective" element={<Objective />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/declaration" element={<Declaration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
