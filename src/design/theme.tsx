// src/design/theme.ts
// Simple theme provider that sets CSS custom properties for light and dark themes.
// It uses the design tokens defined in tokens.ts.

import { useEffect, useState } from "react";
import { colors, borderRadius, spacing, shadows, fontFamily } from "./tokens";

// Helper to set CSS variables on the root element
function setRootVariables(vars: Record<string, string>) {
  const root = document.documentElement;
  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

// Light and dark theme definitions (adjust HSL values to match your brand)
const lightTheme = {
  "--primary": "220 90% 55%",
  "--primary-foreground": "0 0% 100%",
  "--secondary": "340 80% 50%",
  "--secondary-foreground": "0 0% 100%",
  "--background": "0 0% 100%",
  "--foreground": "220 15% 20%",
  "--accent": "45 100% 50%",
  "--accent-foreground": "0 0% 0%",
  "--destructive": "0 80% 50%",
  "--destructive-foreground": "0 0% 100%",
  "--muted": "210 15% 95%",
  "--muted-foreground": "210 10% 30%",
  "--card": "0 0% 100%",
  "--card-foreground": "220 15% 20%",
  "--border": "210 15% 85%",
  "--input": "210 15% 95%",
  "--ring": "220 90% 55%",
  "--radius": "0.5rem",
};

const darkTheme = {
  "--primary": "220 90% 60%",
  "--primary-foreground": "0 0% 100%",
  "--secondary": "340 80% 60%",
  "--secondary-foreground": "0 0% 100%",
  "--background": "220 15% 10%",
  "--foreground": "210 20% 95%",
  "--accent": "45 100% 55%",
  "--accent-foreground": "0 0% 0%",
  "--destructive": "0 80% 60%",
  "--destructive-foreground": "0 0% 100%",
  "--muted": "210 15% 20%",
  "--muted-foreground": "210 10% 70%",
  "--card": "220 15% 12%",
  "--card-foreground": "210 20% 95%",
  "--border": "210 15% 25%",
  "--input": "210 15% 20%",
  "--ring": "220 90% 55%",
  "--radius": "0.5rem",
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(prefersDark);
    setRootVariables(prefersDark ? darkTheme : lightTheme);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    setRootVariables(newDark ? darkTheme : lightTheme);
    document.documentElement.classList.toggle("dark", newDark);
  };

  // expose for debugging
  // @ts-ignore
  (window as any).toggleTheme = toggleTheme;

  return <>{children}</>;
};
