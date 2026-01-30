/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { useState } from "react";
import ProjectPresentationCard from "./ProjectPresentationCard";
import { AnimatePresence, motion } from "framer-motion";
import type { IProject } from "@/types/Project";
import ProjectSearch from "./Search/ProjectSearch";



/* ----- PROPS ----- */
interface ProjectsGridProps {
    projects: IProject[];
}

/* ----- COMPONENT ----- */
function ProjectsGrid({ projects }: ProjectsGridProps) {
    const [filteredProjects, setFilteredProjects] = useState<IProject[]>(projects);
    const [resetToken, setResetToken] = useState(0);

    const handleReset = () => {
        setResetToken(prev => prev + 1);
    };

    return (
        <section className="w-full py-10 px-4">
            <div className="container max-w-7xl mx-auto">

                <ProjectSearch
                    allProjects={projects}
                    onFilter={setFilteredProjects}
                    resetTrigger={resetToken}
                />

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => (
                                <ProjectPresentationCard key={project.id} project={project} />
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full py-20 text-center flex flex-col items-center gap-4 text-dragusheen-muted"
                            >
                                <div className="text-4xl opacity-20 mb-2">🔭</div>
                                <p className="text-lg text-white">Aucun résultat pour cette combinaison.</p>
                                <button
                                    onClick={handleReset}
                                    className="mt-2 text-sm px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
                                >
                                    Réinitialiser tout
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}


/* ----- EXPORT ----- */
export default ProjectsGrid;
