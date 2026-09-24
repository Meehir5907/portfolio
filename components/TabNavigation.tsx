type TabProps = {
    activeTab: "experience" | "projects";
    setActiveTab: (tab: "experience" | "projects") => void;
};

export default function TabNavigation({ activeTab, setActiveTab }: TabProps) {
    return (
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
                Projects
            </button>
        </div>
    );
}
