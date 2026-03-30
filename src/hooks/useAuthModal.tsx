import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import AuthModal from "@/components/AuthModal";

interface AuthModalContextValue {
  openAuth: (mode?: "login" | "signup") => void;
  closeAuth: () => void;
}

const AuthModalContext = createContext<AuthModalContextValue | null>(null);

export const AuthModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("signup");

  const openAuth = useCallback((m: "login" | "signup" = "signup") => {
    setMode(m);
    setOpen(true);
  }, []);

  const closeAuth = useCallback(() => setOpen(false), []);

  return (
    <AuthModalContext.Provider value={{ openAuth, closeAuth }}>
      {children}
      <AuthModal open={open} onClose={closeAuth} initialMode={mode} />
    </AuthModalContext.Provider>
  );
};

export const useAuthModal = () => {
  const ctx = useContext(AuthModalContext);
  if (!ctx) throw new Error("useAuthModal must be used within AuthModalProvider");
  return ctx;
};
