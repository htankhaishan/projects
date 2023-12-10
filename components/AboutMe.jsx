import React from "react";
import Link from 'next/link';
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

//1d
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
          <ul className="list-disc pl-2">
                <li>Swift</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
          </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
          <ul className="list-disc pl-2">
            <li>CTF Challenge Creator(January 2023 – October 2023)</li>
            <li>6th place: Sincon InfoSec in the City CTF (12/2022)</li>
            <li>6th place: IHACK Attack & Defense CTF Final (19 -20 Dec 2021)</li>
            <li>11th place: IHACK CTF Qualifier</li>
            <li>10th place: Wargames Malaysia (11 – 12 Dec 2021)</li>
          </ul>
        ),
    },
    {
        title: "Security",
        id: "security",
        content: (
          <ul className="list-disc pl-2">
            <li>Penetration Testing</li>
            <li>Basic EDR Deployment</li>
            <li>SOC</li>
            <li>Snort</li>
            <li>Solana Hyperdrive</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
                <li>Second Year Computer Science (APU)</li>
                <li>HND in Business Management (SQA)</li>
          </ul>
        ),
    }
];
//1
const AboutMe = () => {
    //1b
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    //1a
    return(
        <section className="text-white mx-5 grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <div>
                    <div className="flex flex-row">
{/* 1e */}
                        <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active= {tab === "skills"}
                        >
                            
                            Skills
                        </TabButton>
                        
                        <TabButton 
                        selectTab={() => handleTabChange("security")}
                        active= {tab === "security"}
                        >
                            {" "}
                            Security{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("experiences")}
                        active= {tab === "experiences"}
                        >
                            {" "}
                            Experiences{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active= {tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        
                    </div>
                    <div className="mt-8 mx-5">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
                <div className="mx-3 mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="font-bold mb-4 text-transparent bg-clip-text sm:text-3xl md:text-4xl bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-400">About Me</h1>
                    <p className="text-base text-justify">Currently pursuing a BSc in Computer Science (Cyber Security) at ASIA PACIFIC UNIVERSITY. Experienced in freelance web development and administrative roles. Passionate about  
                    <span style={{ color: '#eb7be1', fontWeight: 'bold' }}> Swift</span>{' '}
                    and 
                    <span style={{ color: '#a688fa', fontWeight: 'bold' }}> IOS development</span>,{' '}
                    aiming to deepen expertise in this field. I am always looking for new opportunities and feel free to contact me. I will get back to you as soon as possible.
                    </p>
                    <div className=" flex flex-row gap-4 mt-6">
                        <Link href="#github">
                            <img src="/icons/github-icon.svg" alt="Github Icon" />
                        </Link>
                        <Link href="#linkedin">
                            <img src="/icons/linkedin-icon.svg" alt="Linkedin Icon" />
                        </Link>
                        <Link href="mailto:htankhaishan@gmail.com">
                            <img src="/icons/gmail-icon.svg" alt="Gmail Icon" />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};
export default AboutMe;