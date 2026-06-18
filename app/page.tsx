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
        description: "Collaborating on AI initiatives and technical frameworks within the VIT-AP University developer community."
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
    return (
        <main className="max-w-3xl mx-auto p-8 pt-16">
            <header className="mb-20">
                <h1 className="text-3xl font-semibold mb-4 text-zinc-100">
                    Meehir Prabhakar
                </h1>
                <p className="text-zinc-400 leading-relaxed max-w-xl">
                    Computer Vision & Software Engineer building edge AI, dual-model vision pipelines, and multi-channel SIEM frameworks.
                </p>
            </header>

            <section className="mb-20">
                <h2 className="text-xl font-medium mb-8 text-zinc-200">Experience</h2>

                <div className="flex flex-col gap-10">
                    {experience.map((job, index) => (
                        <article key={index} className="flex flex-col items-start">
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
                </div>
            </section>

            <section>
                <h2 className="text-xl font-medium mb-8 text-zinc-200">Selected Work</h2>

                <div className="flex flex-col gap-10">
                    {projects.map((project, index) => (
                        <article key={index} className="group flex flex-col items-start">
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
