import { projects } from "@/lib/data";

export default function ProjectList() {
    return (
        <div className="flex flex-col gap-10">
            {projects.map((proj, index) => (
                <article key={index} className="group flex flex-col items-start animate-in fade-in slide-in-from-bottom-2 duration-500">
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
    );
}
