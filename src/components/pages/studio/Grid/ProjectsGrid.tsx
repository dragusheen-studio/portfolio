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
	isSyncing: boolean;
}

/* ----- COMPONENT ----- */
function ProjectsGrid({ projects, isSyncing }: ProjectsGridProps) {
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
							<>
								{
									filteredProjects.map((project) => (
										<ProjectPresentationCard key={project.id} project={project} />
									))
								}
								{isSyncing && (
									<motion.div
										layout
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.9 }}
										className="relative flex flex-row items-center rounded-lg border-2 border-dashed border-white/10 bg-white/5 h-28 overflow-hidden"
									>
										<div className="relative h-full w-28 shrink-0 overflow-hidden bg-black/20 flex items-center justify-center">
											<div className="w-6 h-6 border-2 border-white/10 border-t-dragusheen-primary rounded-full animate-spin" />
										</div>

										<div className="flex-1 p-4 flex flex-col justify-center gap-3">
											<div className="flex justify-between items-center">
												<div className="h-4 w-2/3 bg-white/10 rounded animate-pulse" />
											</div>

											<div className="h-2 w-full bg-white/5 rounded animate-pulse" />
											<div className="h-2 w-4/5 bg-white/5 rounded animate-pulse" />

											<div className="mt-auto flex gap-2">
												<div className="h-4 w-12 bg-white/5 rounded border border-white/10 animate-pulse" />
												<div className="h-4 w-16 bg-white/5 rounded border border-white/10 animate-pulse" />
											</div>
										</div>
									</motion.div>
								)}
							</>
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
