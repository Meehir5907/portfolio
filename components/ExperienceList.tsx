import { experience } from "@/lib/data";

export default function ExperienceList() {
    return (
        <div className="flex flex-col gap-10">
            {experience.map((job, index) => (
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
        </div>
    );
}
