import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 1,
        title: "BMI Calculator",
        description: "BMI Calculator with diet suggestion.",
        image: "/projects/comingsoon.png",
        gitUrl: ""
    },
    {
        id: 2,
        title: "Quote of the Day App",
        description: "Fetch and display a random quote from an API. Basic UI with a button to fetch a new quote. Learn API integration and asynchronous data fetching.",
        image: "/projects/comingsoon.png",
        gitUrl: ""
    },

];

const Projects = () => {
    return (
        <div id="projects">
            <div className="font-semibold mx-20 text-transparent bg-clip-text sm:text-3xl md:text-4xl bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-400">Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-1 gap-x-8 gap-y-4 md:gap-12 h-full mx-20 mt-5">
                {projectData.map((project) => (
                    <ProjectCard 
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

export default Projects;