"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <div className="w-8 h-8" />;
    }

    return (
        <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-canvas border border-shell-border text-primary hover:text-accent transition-colors shadow-sm dark:shadow-[0_0_10px_rgba(168,85,247,0.15)]"
            aria-label="Toggle Theme"
        >
            {resolvedTheme === "dark" ? "☀" : "☾"}
        </button>
    );
}
