/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeaturedSection from "@/components/pages/studio/Grid/Featured/FeaturedProject";
import ProjectsGrid from "@/components/pages/studio/Grid/ProjectsGrid";
import ProjectsHero from "@/components/pages/studio/Hero";
import Loader from "@/components/ui/Loader";
import type { IProject } from "@/types/Project";
import { getProjects, subscribeToProjects } from "@/store/Projects";
import { FaGithub } from "react-icons/fa";


/* ----- COMPONENT ----- */
function Studio() {
	const [projects, setProjects] = useState<IProject[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const unsubscribe = subscribeToProjects((updatedProjects) => {
			setProjects(updatedProjects);
		});

		const triggerFetch = async () => {
			setIsLoading(true);
			await getProjects();
			setIsLoading(false);
		};

		triggerFetch();

		return () => {
			unsubscribe();
		};
	}, []);

	const featuredProjects = projects.filter(p => p.featured);

	return (
		<div className="w-full flex flex-col min-h-screen relative">
			<ProjectsHero />

			<AnimatePresence>
				{isLoading && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="fixed top-24 left-1/2 -translate-x-1/2 z-50 glass-panel border border-dragusheen-primary/30 bg-black/60 px-4 py-2 rounded-full flex items-center gap-3 shadow-lg"
					>
						<div className="w-3 h-3 border-2 border-white/20 border-t-dragusheen-primary rounded-full animate-spin" />
						<span className="text-xs text-white/80 font-mono flex items-center gap-2">
							Synchronisation GitHub <FaGithub className="opacity-50" />
						</span>
					</motion.div>
				)}
			</AnimatePresence>

			{projects.length === 0 || isLoading ? (
				<Loader />
			) : (
				<div className="flex flex-col min-h-[50vh]">
					{featuredProjects.length > 0 && (
						<FeaturedSection projects={featuredProjects} />
					)}

					{projects.length > 0 && (
						<ProjectsGrid projects={projects} />
					)}
				</div>
			)}
		</div>
	);
}


/* ----- EXPORTS ----- */
export default Studio;
