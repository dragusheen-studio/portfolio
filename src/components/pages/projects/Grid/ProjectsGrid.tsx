/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { GetProjects } from "@/configs/Projects";
import ProjectPresentationCard from "./ProjectPresentationCard";


/* ----- COMPONENT ----- */
function ProjectsGrid() {
    const projects = GetProjects();

    return (
        <section className="w-full py-10 px-4">
            <div className="container max-w-7xl mx-auto">

                <div className="mb-8 flex items-end gap-4 border-b border-white/10 pb-4">
                    <h2 className="text-xl font-bold text-white">Tous les projets</h2>
                    <span className="text-xs text-dragusheen-muted font-mono mb-1">({projects.length})</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <ProjectPresentationCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}


/* ----- EXPORT ----- */
export default ProjectsGrid;
