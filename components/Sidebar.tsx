export default function Sidebar() {
    return (
        <header className="w-full md:w-[360px] lg:w-[400px] shrink-0 glass-panel p-8 rounded-[2rem] md:sticky md:top-8 h-fit md:h-[calc(100vh-4rem)] flex flex-col justify-between relative z-20">
            <div>
                <h1 className="text-3xl font-semibold mb-4 text-primary pr-4">
                    Meehir Prabhakar
                </h1>
                <p className="text-muted leading-relaxed mb-8">
                    Computer Vision & Software Engineer building edge AI, dual-model vision pipelines, and multi-channel SIEM frameworks.
                </p>
            </div>

            <div className="flex flex-col gap-4 text-sm text-muted font-medium pb-2">
                <a
                    href="https://github.com/Meehir5907"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors inline-flex items-center gap-1.5 w-fit"
                >
                    ↗ GitHub
                </a>
                <a
                    href="https://linkedin.com/in/meehir-prabhakar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors inline-flex items-center gap-1.5 w-fit"
                >
                    ↗ LinkedIn
                </a>
                <a
                    href="https://cdn.jsdelivr.net/gh/Meehir5907/ResumeAndCV@main/CV/Meehir_s_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors inline-flex items-center gap-1.5 w-fit">
                    ↗ CV
                </a>
                <a
                    href="https://cdn.jsdelivr.net/gh/Meehir5907/ResumeAndCV@main/Resume/Generic/Meehir_s_Resume_Generic.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors inline-flex items-center gap-1.5 w-fit"
                >
                    ↗ Resume
                </a>
            </div>
        </header>
    );
}
