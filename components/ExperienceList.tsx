"use client";

import { useState } from "react";
import { experience, projects } from "@/lib/data";

export default function ExperienceList() {
    const [activeSet, setActiveSet] = useState<Set<string>>(new Set());

    const toggleJob = (id: string) => {
        const nextSet = new Set(activeSet);
        if (nextSet.has(id)) {
            nextSet.delete(id);
        } else {
            nextSet.add(id);
        }
        setActiveSet(nextSet);
    };

    return (
        <div className="flex flex-col gap-10">
            {experience.map((job, index) => {
                const relatedProj = projects.filter(
                    (proj) => proj.relatedExperienceId === job.id,
                );
                const isExpanded = activeSet.has(job.id);
                const hasProj = relatedProj.length > 0;

                return (
                    <article key={index} className="flex flex-col items-start animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div
                            className={`flex items-center gap-2 ${hasProj ? "cursor-pointer group" : ""}`}
                            onClick={() => hasProj && toggleJob(job.id)}
                        >
                            <h3 className="font-medium text-zinc-100 group-hover:text-white transition-colors">
                                {job.role}
                            </h3>
                            {hasProj && (
                                <span className={`text-zinc-500 text-sm transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}>
                                    &gt;
                                </span>
                            )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zinc-400 mt-1 mb-3">
                            <span>{job.company}</span>
                            <span>&middot;</span>
                            <span>{job.period}</span>
                        </div>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            {job.description}
                        </p>
                        
                        {hasProj && (
                            <div className={`grid transition-all duration-300 ease-in-out w-full ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
                                <div className="overflow-hidden flex flex-col gap-4 border-l border-zinc-800/50 pl-4 ml-1">
                                    {relatedProj.map((proj, projIndex) => (
                                        <div key={projIndex} className="flex flex-col">
                                            <h4 className="text-sm font-medium text-zinc-300">{proj.title}</h4>
                                            <p className="text-xs text-zinc-500 mt-0.5">{proj.subtitle}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </article>
                );
            })}
        </div>
    );
}
