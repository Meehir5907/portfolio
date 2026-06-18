"use client";

import { useState } from "react";

const experience = [
    {
        role: "Software & AI Engineering Intern",
        company: "TechtoGreen Drone & Robotics",
        period: "Dec 2024 — Aug 2026",
        description: "Deployed edge AI models and engineered dual-model vision pipelines using VGGT monocular depth estimation and YOLO segmentation. Integrated YDLIDAR G2 sensors and managed MAVLink telemetry via FastAPI.",
    },
    {
        role: "Technical Team Member",
        company: "The Machine Learning Club",
        period: "2026 — Present",
        description: "Collaborating on AI initiatives and technical frameworks within the VIT-AP University developer community.",
    },
];

const projects = [
    {
        title: "Chakshu",
        subtitle: "AI-driven SIEM Framework",
        description: "Log ingestion and multi-channel protocol threat correlation featuring custom synthetic host telemetry generation.",
        link: "https://github.com/Meehir5907/Chakshu",
    },
    {
        title: "Sharvara",
        subtitle: "N-Channel Transformer Model",
        description: "PyTorch-based architecture designed for classifying malicious network packets within the CTU-13 dataset.",
        link: "https://github.com/Meehir5907/Sharvara",
    },
    {
        title: "MemoRe",
        subtitle: "Dual N-Back Engine",
        description: "C++/Qt and QML implementation of the working memory game with dynamic UI components and CMake build configuration.",
        link: "https://github.com/Meehir5907/MemoRe",
    },
    {
        title: "AR Accessibility Smart Glasses",
        subtitle: "Hardware Prototype",
        description: "Wearable system featuring heads-up captioning, MEMS microphone arrays, and local edge AI processing.",
        link: "",
    },
];

export default function Home() {
    const [activeTab, setActiveTab] = useState<"experience" | "projects">("experience");

    return (
        <main className="max-w-5xl mx-auto p-8 pt-16 md:pt-24 flex flex-col md:flex-row gap-16 md:gap-24">
            <header className="md:w-1/3 md:sticky md:top-24 h-fit">
                <h1 className="text-3xl font-semibold mb-4 text-zinc-100">
                    Meehir Prabhakar
                </h1>
                <p className="text-zinc-400 leading-relaxed mb-8">
                    Computer Vision & Software Engineer building edge AI, dual-model vision pipelines, and multi-channel SIEM frameworks.
                </p>
                <div className="flex flex-col gap-4 text-sm text-zinc-400 font-medium">
                    <a
                        href="https://github.com/Meehir5907"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-100 transition-colors inline-flex items-center gap-1.5 w-fit"
                    >
                        ↗ GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/meehir-prabhakar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-100 transition-colors inline-flex items-center gap-1.5 w-fit"
                    >
                        ↗ LinkedIn
                    </a>
                </div>
            </header>

            <section className="md:w-2/3">
                <div className="flex gap-8 mb-10 border-b border-zinc-800/50 pb-4">
                    <button
                        onClick={() => setActiveTab("experience")}
                        className={`text-sm font-medium transition-colors ${activeTab === "experience"
                                ? "text-zinc-100"
                                : "text-zinc-500 hover:text-zinc-300"
                            }`}
                    >
                        Experience
                    </button>
                    <button
                        onClick={() => setActiveTab("projects")}
                        className={`text-sm font-medium transition-colors ${activeTab === "projects"
                                ? "text-zinc-100"
                                : "text-zinc-500 hover:text-zinc-300"
                            }`}
                    >
                        Selected Work
                    </button>
                </div>

                <div className="flex flex-col gap-10">
                    {activeTab === "experience" && experience.map((job, index) => (
                        <article key={index} className="flex flex-col items-start animate-in fade-in slide-in-from-bottom-2 duration-500">
                            <h3 className="font-medium text-zinc-100">{job.role}</h3>
                            <div className="flex items-center gap-2 text-sm text-zinc-400 mt-1 mb-3">
                                <span>{job.company}</span>
                                <span>&middot;</span>
                                <span>{job.period}</span>
                            </div>
                            <p className="text-sm text-zinc-500 leading-relaxed">
                                {job.description}
                            </p>
                        </article>
                    ))}

                    {activeTab === "projects" && projects.map((project, index) => (
                        <article key={index} className="group flex flex-col items-start animate-in fade-in slide-in-from-bottom-2 duration-500">
                            {project.link ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 font-medium text-zinc-100 hover:text-white transition-colors"
                                >
                                    {project.title}
                                    <span className="text-zinc-600 transition-transform group-hover:translate-x-1 group-hover:text-zinc-300 text-sm">
                                        ↗
                                    </span>
                                </a>
                            ) : (
                                <h3 className="font-medium text-zinc-100">{project.title}</h3>
                            )}
                            <p className="text-sm text-zinc-400 mt-1 mb-3">{project.subtitle}</p>
                            <p className="text-sm text-zinc-500 leading-relaxed">
                                {project.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
