"use client";

import { useState } from "react";
import TabNavigation from "./TabNavigation";
import ExperienceList from "./ExperienceList";
import ProjectList from "./ProjectList";

export default function ContentArea() {
    const [activeTab, setActiveTab] = useState<"experience" | "projects">("experience");

    return (
        <section className="flex flex-col relative w-full">
            <div className="md:sticky md:top-8 z-10 w-full mb-8">
                <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="px-2 md:px-4">
                {activeTab === "experience" && <ExperienceList />}
                {activeTab === "projects" && <ProjectList />}
            </div>
        </section>
    );
}
