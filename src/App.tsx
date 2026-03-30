import { useState, useCallback } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthModalProvider } from "@/hooks/useAuthModal";
import LoadingScreen from "@/components/LoadingScreen";
import MusicPlayer from "@/components/MusicPlayer";
import PageTransition from "@/components/PageTransition";
import Index from "./pages/Index.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Contact from "./pages/Contact.tsx";
import Gallery from "./pages/Gallery.tsx";
import PremiumPlans from "./pages/PremiumPlans.tsx";
import VerifiedProfiles from "./pages/VerifiedProfiles.tsx";
import DedicatedRM from "./pages/DedicatedRM.tsx";
import PrivacySettings from "./pages/PrivacySettings.tsx";
import SuccessStories from "./pages/SuccessStories.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <PageTransition transitionKey={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/premium-plans" element={<PremiumPlans />} />
        <Route path="/services/verified-profiles" element={<VerifiedProfiles />} />
        <Route path="/services/dedicated-rm" element={<DedicatedRM />} />
        <Route path="/services/privacy-settings" element={<PrivacySettings />} />
        <Route path="/services/success-stories" element={<SuccessStories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
};

const App = () => {
  const [showLoading, setShowLoading] = useState(true);
  const handleLoadingComplete = useCallback(() => {
    setShowLoading(false);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div style={{ background: 'hsl(30 50% 4%)', minHeight: '100vh', overflowX: 'hidden', width: '100%', maxWidth: '100vw' }}>
          <BrowserRouter>
            <AuthModalProvider>
              <AnimatedRoutes />
              <MusicPlayer />
            </AuthModalProvider>
          </BrowserRouter>
        </div>
        {showLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
