/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaTh } from "react-icons/fa";
import { motion } from "framer-motion";

import ProjectNavigationArrow from "./Arrow";
import type { IProject } from "@/types/Project";
import { getProjectNeighbors } from "@/store/Projects";
import { scrollToTop } from "@/services/scroll";


/* ----- PROPS ----- */
interface ProjectNavigationProps {
	project: IProject;
}


/* ----- COMPONENT ----- */
function ProjectNavigation({ project }: ProjectNavigationProps) {

	const [neighbors, setNeighbors] = useState<{ prev: IProject; next: IProject; isSingleNeighbor: boolean } | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchNeighbors = async () => {
			setIsLoading(true);
			const data = await getProjectNeighbors(project);
			setNeighbors(data);
			setIsLoading(false);
		};

		fetchNeighbors();
	}, [project]);

	if (isLoading) return null;

	return (
		<section className="w-full mt-24 pb-20 px-4">
			<div className="container max-w-5xl mx-auto flex flex-col gap-6">

				{neighbors && (
					<div className={`
                        grid gap-6 md:gap-8 h-48 md:h-56 w-full
                        ${neighbors.isSingleNeighbor ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}
                    `}>
						{!neighbors.isSingleNeighbor && (
							<>
								<ProjectNavigationArrow project={neighbors.prev} direction="prev" />
								<ProjectNavigationArrow project={neighbors.next} direction="next" />
							</>
						)}

						{neighbors.isSingleNeighbor && (
							<ProjectNavigationArrow project={neighbors.next} direction="next" />
						)}
					</div>
				)}

				<Link to="/studio" className="w-full block group" onClick={scrollToTop}>
					<motion.div
						whileHover={{ scale: 1.01 }}
						whileTap={{ scale: 0.99 }}
						className="relative w-full h-20 flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all shadow-lg backdrop-blur-sm"
					>
						<div className="flex items-center gap-3 text-white/50 group-hover:text-white transition-colors">
							<FaArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform duration-300" />
							<span className="uppercase tracking-widest text-xs font-bold flex items-center gap-2">
								<FaTh className="text-dragusheen-primary/70" /> Tous les projets
							</span>
						</div>
					</motion.div>
				</Link>

			</div>
		</section>
	);
};


/* ----- EXPORT ----- */
export default ProjectNavigation;
