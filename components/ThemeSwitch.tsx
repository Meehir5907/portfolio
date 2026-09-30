"use client";

import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <div className="w-[98px] h-[28px]" />;
    }

    return (
        <div className="relative flex items-center bg-canvas/40 border border-shell-border rounded-full p-0.5">
            {/* Sliding background pill indicator */}
            <div 
                className={`absolute h-[calc(100%-4px)] top-0.5 rounded-full bg-accent shadow-sm transition-all duration-300 ease-out ${
                    theme === "light" 
                        ? "left-0.5 w-[28px]" 
                        : theme === "system" 
                        ? "left-[30px] w-[42px]" 
                        : "left-[74px] w-[28px]"
                }`}
            />

            <button
                onClick={() => setTheme("light")}
                className={`relative z-10 w-[28px] py-1 flex items-center justify-center text-xs font-medium transition-colors duration-200 ${
                    theme === "light" ? "text-[var(--accent-fg)]" : "text-muted hover:text-primary"
                }`}
                title="Light Mode"
            >
                ☀
            </button>
            <button
                onClick={() => setTheme("system")}
                className={`relative z-10 w-[42px] py-1 flex items-center justify-center text-xs font-medium transition-colors duration-200 ${
                    theme === "system" ? "text-[var(--accent-fg)]" : "text-muted hover:text-primary"
                }`}
                title="System Default"
            >
                Auto
            </button>
            <button
                onClick={() => setTheme("dark")}
                className={`relative z-10 w-[28px] py-1 flex items-center justify-center text-xs font-medium transition-colors duration-200 ${
                    theme === "dark" ? "text-[var(--accent-fg)]" : "text-muted hover:text-primary"
                }`}
                title="Dark Mode"
            >
                ☾
            </button>
        </div>
    );
}
