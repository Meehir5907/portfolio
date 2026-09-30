"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeMode = "light" | "system" | "dark";

type ThemeContextType = {
    theme: ThemeMode;
    setTheme: (theme: ThemeMode) => void;
    resolvedTheme: "light" | "dark";
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<ThemeMode>("system");
    const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const updateTheme = () => {
            const activeTheme: "light" | "dark" =
                theme === "system" ? (mediaQuery.matches ? "dark" : "light") : theme;

            setResolvedTheme(activeTheme);
            const root = document.documentElement;
            root.classList.remove("light", "dark");
            root.classList.add(activeTheme);
        };

        updateTheme();

        if (theme === "system") {
            mediaQuery.addEventListener("change", updateTheme);
            return () => mediaQuery.removeEventListener("change", updateTheme);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};
