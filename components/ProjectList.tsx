"use client";

import { useState } from "react";
import { projects } from "@/lib/data";

type FilterMode = "focus" | "and" | "or";

const MODES: { id: FilterMode; label: string }[] = [
    { id: "focus", label: "Focus" },
    { id: "and", label: "AND" },
    { id: "or", label: "OR" },
];

export default function ProjectList() {
    const [filterMode, setFilterMode] = useState<FilterMode>("focus");
    const [activeCats, setActiveCats] = useState<Set<string>>(new Set());

    const catSet = new Set(projects.flatMap((proj) => proj.categoryIds));
    const catList = Array.from(catSet);

    const changeMode = (mode: FilterMode) => {
        setFilterMode(mode);
        setActiveCats(new Set());
    };

    const toggleCat = (cat: string) => {
        if (filterMode === "focus") {
            setActiveCats(activeCats.has(cat) ? new Set() : new Set([cat]));
            return;
        }

        const nextSet = new Set(activeCats);
        if (nextSet.has(cat)) {
            nextSet.delete(cat);
        } else {
            nextSet.add(cat);
        }
        setActiveCats(nextSet);
    };

    const visibleProj = activeCats.size === 0
        ? projects
        : filterMode === "and"
            ? projects.filter((proj) =>
                Array.from(activeCats).every((cat) => proj.categoryIds.includes(cat)),
            )
            : projects.filter((proj) =>
                proj.categoryIds.some((id) => activeCats.has(id)),
            );

    return (
        <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            <div className="flex justify-start">
                <select
                    value={filterMode}
                    onChange={(e) => changeMode(e.target.value as FilterMode)}
                    className="bg-canvas text-muted text-xs font-medium rounded-md px-2 py-1.5 border border-shell-border focus:outline-none focus:border-accent cursor-pointer"
                >
                    {MODES.map((mode) => (
                        <option key={mode.id} value={mode.id} className="bg-canvas">
                            {mode.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-wrap gap-2 -mt-4">
                <button
                    onClick={() => setActiveCats(new Set())}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors border border-shell-border ${activeCats.size === 0
                        ? "bg-accent text-[var(--accent-fg)] border-accent"
                        : "bg-canvas text-muted hover:text-primary hover:border-accent"
                        }`}
                >
                    All
                </button>
                {catList.map((cat, index) => (
                    <button
                        key={index}
                        onClick={() => toggleCat(cat)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors border border-shell-border ${activeCats.has(cat)
                            ? "bg-accent text-[var(--accent-fg)] border-accent"
                            : "bg-canvas text-muted hover:text-primary hover:border-accent"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="flex flex-col gap-10 mt-2">
                {visibleProj.map((proj, index) => (
                    <article key={index} className="group flex flex-col items-start">
                        {proj.link ? (
                            <a
                                href={proj.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 font-medium text-primary hover:text-accent transition-colors"
                            >
                                {proj.title}
                                <span className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent text-sm">
                                    ↗
                                </span>
                            </a>
                        ) : (
                            <h3 className="font-medium text-primary">{proj.title}</h3>
                        )}
                        <p className="text-sm text-muted mt-1 mb-3">{proj.subtitle}</p>
                        <p className="text-sm text-muted leading-relaxed">
                            {proj.description}
                        </p>
                    </article>
                ))}
            </div>
        </div>
    );
}
