type TabProps = {
    activeTab: "experience" | "projects";
    setActiveTab: (tab: "experience" | "projects") => void;
};

export default function TabNavigation({ activeTab, setActiveTab }: TabProps) {
    return (
        <div className="glass-panel rounded-full px-6 py-3 w-full flex items-center">
            <div className="inline-flex gap-8 w-fit">
                <button
                    onClick={() => setActiveTab("experience")}
                    className={`text-sm font-medium transition-colors ${activeTab === "experience"
                        ? "text-accent"
                        : "text-muted hover:text-primary"
                        }`}
                >
                    Experience
                </button>
                <button
                    onClick={() => setActiveTab("projects")}
                    className={`text-sm font-medium transition-colors ${activeTab === "projects"
                        ? "text-accent"
                        : "text-muted hover:text-primary"
                        }`}
                >
                    Projects
                </button>
            </div>
        </div>
    );
}
