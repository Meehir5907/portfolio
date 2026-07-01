"use client";

import { useState } from "react";
import { projects } from "@/lib/data";

export default function ProjectList() {
    const [activeCat, setActiveCat] = useState<string>("All");

    const catSet = new Set(projects.map((proj) => proj.categoryId));
    const catList = ["All", ...Array.from(catSet)];

    const visibleProj = activeCat === "All"
        ? projects
        : projects.filter((proj) => proj.categoryId === activeCat);

    return (
        <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            <div className="flex flex-wrap gap-2 mb-4">
                {catList.map((cat, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveCat(cat)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                            activeCat === cat
                                ? "bg-zinc-800 text-zinc-100"
                                : "bg-zinc-900/50 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="flex flex-col gap-10">
                {visibleProj.map((proj, index) => (
                    <article key={index} className="group flex flex-col items-start">
                        {proj.link ? (
                            <a
                                href={proj.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 font-medium text-zinc-100 hover:text-white transition-colors"
                            >
                                {proj.title}
                                <span className="text-zinc-600 transition-transform group-hover:translate-x-1 group-hover:text-zinc-300 text-sm">
                                    ↗
                                </span>
                            </a>
                        ) : (
                            <h3 className="font-medium text-zinc-100">{proj.title}</h3>
                        )}
                        <p className="text-sm text-zinc-400 mt-1 mb-3">{proj.subtitle}</p>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            {proj.description}
                        </p>
                    </article>
                ))}
            </div>
        </div>
    );
}
