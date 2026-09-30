"use client";

import { useState } from "react";
import TabNavigation from "./TabNavigation";
import ExperienceList from "./ExperienceList";
import ProjectList from "./ProjectList";

export default function ContentArea() {
    const [activeTab, setActiveTab] = useState<"experience" | "projects">("experience");

    return (
        <section className="md:w-2/3 flex flex-col relative">
            <div className="md:sticky md:top-16 z-10 w-fit mb-8">
                <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="px-2 md:px-4">
                {activeTab === "experience" && <ExperienceList />}
                {activeTab === "projects" && <ProjectList />}
            </div>
        </section>
    );
}
