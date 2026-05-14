import type { Theme } from "@/types";
import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
  theme: Theme;
  onToggleTheme: () => void;
}

export function Layout({ children, theme, onToggleTheme }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header theme={theme} onToggleTheme={onToggleTheme} />
      <main className="flex-1">{children}</main>
      <Footer theme={theme} />
    </div>
  );
}
