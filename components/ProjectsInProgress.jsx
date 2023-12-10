import React from "react";
import ProjectCardInProcess from "./ProjectCardInProcess";


const projectData = [
    {
        id: 1,
        title: "ML",
        description: "AR and ML project for home plants caring.",
        image: "/projects/comingsoon.png",
        gitUrl: ""

    },
    {
        id: 2,
        title: "Social Media Feed App",
        description: "Create an app displaying social media-like feed content. Fetch and display data from an API with images, texts, and user interactions. Focus on networking, data models, and complex UI for feed rendering.",
        image: "/projects/comingsoon.png",
        gitUrl: ""
    },
    {
        id: 3,
        title: "Weather Forecast App",
        description: "Display weather forecasts based on user location or input city. UI with weather details, icons, and daily forecasts. Implement API calls, handle data parsing, and display UI accordingly.",
        image: "/projects/comingsoon.png",
        gitUrl: ""
    },
    {
        id: 4,
        title: "To-Do List with Local Storage",
        description: "Create a to-do list with CRUD functionalities. Implement local storage using Core Data or Realm. Learn about data persistence, user input handling, and UI/UX for list management.",
        image: "/projects/comingsoon.png",
        gitUrl: ""
    },
];

const ProjectsInProgress = () => {
    return (
        <div id="projectsInProgress">
            <div className="font-semibold mx-20 mt-20 text-transparent bg-clip-text sm:text-3xl md:text-4xl bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-400">Projects In Progress</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full mx-20 mt-5">
                {projectData.map((project) => (
                    <ProjectCardInProcess 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

export default ProjectsInProgress;