import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
    return (
        <header className="md:w-1/3 glass-panel p-8 rounded-[2rem] md:sticky md:top-16 h-fit flex flex-col relative">
            <div className="absolute top-8 right-8">
                <ThemeToggle />
            </div>
            <h1 className="text-3xl font-semibold mb-4 text-primary pr-12">
                Meehir Prabhakar
            </h1>
            <p className="text-muted leading-relaxed mb-8">
                Computer Vision & Software Engineer building edge AI, dual-model vision pipelines, and multi-channel SIEM frameworks.
            </p>
            <div className="flex flex-col gap-4 text-sm text-muted font-medium">
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
