"use client";

import { useState } from "react";
import TabNavigation from "./TabNavigation";
import ExperienceList from "./ExperienceList";
import ProjectList from "./ProjectList";

export default function ContentArea() {
    const [activeTab, setActiveTab] = useState<"experience" | "projects">("experience");

    return (
        <section className="md:w-2/3">
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "experience" && <ExperienceList />}
            {activeTab === "projects" && <ProjectList />}
        </section>
    );
}
