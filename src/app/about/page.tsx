"use client"

import React, { useTransition, useState, useEffect } from "react";
import Image from "next/image";
import TabButton from "@/components/ui/TabButton";


interface Tab {
    title: string;
    id: string;
    content: React.ReactNode;
}

const TAB_DATA: Tab[] = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2 text-[#555] dark:text-[#ADB7BE]">
                <li>NextJs</li>
                <li>Sanity</li>
                <li>Javascript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>C language</li>
                <li>Wordpress</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2 text-[#555] dark:text-[#ADB7BE]">
                <li>Intermediate form BIEK, Degree college Year 2023</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2 text-[#555] dark:text-[#ADB7BE]">
                <li>Advanced diploma in Software Engineering, Aptech North Karachi, Karachi</li>
            </ul>
        ),
    },
];

const AboutSection: React.FC = () => {
    const [tab, setTab] = useState<string>("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-6 xl:gap-16 sm:py-16 lg:px-12 xl:px-16">
                <Image src="/images/Me.jpeg" alt="myImage" width={400} height={400} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-primary/90 mb-4">About Me</h2>
                    <p className="lg:text-l text-[#555] dark:text-[#ADB7BE] ">
                        I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
                    </p>
                    <div className="flex flex-row justify-start mt-4 ">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-2">
                        {TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
