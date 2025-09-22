import React from "react";
import ecommerce from "../assets/ecommerce.jpg"
import group from '../assets/group.jpg';
import pokemon from '../assets/pokemon.jpg'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Social Workout Tracker",
      description:
        "That helps you log workouts, create AI-powered schedules, join groups, and find workout partners to stay motivated and reach your fitness goals together",
      image: group,
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://social-workout-tracker1.onrender.com",
      githubUrl: "https://github.com/AnkitaMalani/Social-Workout-Tracker",
    },
    {
      id: 2,
      title: "Ecommerce Website",
      description:
        "A custom-designed e-commerce site integrated with external APIs for products, orders, and payments",
      image: ecommerce,
      technologies: ["Javascript", "React", "API integration"],
      liveUrl: "https://ecommerce-website-ebmd.onrender.com/",
      githubUrl: "https://github.com/AnkitaMalani/Ecommerce-website",
    },
    {
      id: 3,
      title: "Pokemon",
      description:
        "A full-stack turn-based Pokémon battle simulator with PokeAPI-powered rosters, user authentication, real-time battles, and a live leaderboard.",
      image: pokemon,
      technologies: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
      liveUrl: "https://pokemon-fgbx.onrender.com",
      githubUrl: "https://github.com/AnkitaMalani/Pokemon-mono",
    },
  
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative shadow-2xl bg-[#20273b] p-[1px] overflow-hidden group"
              style={{ borderRadius: '1.75rem' }}
            >
          
              {/* Card content */}
              <div 
                className="relative  flex  flex-col w-full h-full text-sm antialiased dark:border-slate-800 overflow-hidden transition-all duration-300 group-hover:bg-slate-900/90"
                style={{ borderRadius: 'calc(1.75rem * 0.96)' }}
              >
                <figure>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-300 mt-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 my-4">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="badge badge-outline badge-sm border-sky-400 text-sky-400">
                        {tech}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end gap-2">
                    <a
                      href={project.liveUrl}
                      className="btn btn-outline btn-sm hover:bg-[#CBACF9] border-[#CBACF9]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="btn btn-outline btn-sm border-[#CBACF9] text-[#CBACF9] hover:bg-[#CBACF9] hover:text-slate-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/AnkitaMalani" className="btn btn-outline btn-lg">
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
