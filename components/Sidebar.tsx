export default function Sidebar() {
    return (
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
    );
}
