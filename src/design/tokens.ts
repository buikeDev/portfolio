// src/design/tokens.ts
// Design tokens for the portfolio redesign. Adjust values to match your brand.

export const colors = {
  primary: "hsl(var(--primary))",
  primaryForeground: "hsl(var(--primary-foreground))",
  secondary: "hsl(var(--secondary))",
  secondaryForeground: "hsl(var(--secondary-foreground))",
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  accent: "hsl(var(--accent))",
  accentForeground: "hsl(var(--accent-foreground))",
  destructive: "hsl(var(--destructive))",
  destructiveForeground: "hsl(var(--destructive-foreground))",
  muted: "hsl(var(--muted))",
  mutedForeground: "hsl(var(--muted-foreground))",
  card: "hsl(var(--card))",
  cardForeground: "hsl(var(--card-foreground))",
  border: "hsl(var(--border))",
  input: "hsl(var(--input))",
  ring: "hsl(var(--ring))",
};

export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
};

export const borderRadius = {
  sm: "calc(var(--radius) - 4px)",
  md: "calc(var(--radius) - 2px)",
  lg: "var(--radius)",
};

export const fontFamily = {
  sans: ["ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"].join(", "),
  heading: ["'Oswald', sans-serif"].join(", "),
  body: ["'Poppins', sans-serif"].join(", "),
};

export const shadows = {
  sm: "0 1px 2px rgba(0,0,0,0.05)",
  md: "0 4px 6px rgba(0,0,0,0.1)",
  lg: "0 10px 15px rgba(0,0,0,0.15)",
};
