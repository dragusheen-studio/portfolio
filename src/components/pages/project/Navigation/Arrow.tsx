/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import type { IProject } from "@/types/Project";
import { Link } from "react-router-dom";
import { scrollToTop } from "@/services/scroll";
import { motion } from "framer-motion";


/* ----- PROPS ----- */
interface ProjectNavigationArrowProps {
	project: IProject;
	direction: "prev" | "next";
}


/* ----- COMPONENT ----- */
function ProjectNavigationArrow({ project, direction }: ProjectNavigationArrowProps) {
	return (
		<Link
			to={`/studio/${project.id}`}
			onClick={scrollToTop}
			className="block h-full w-full"
		>
			<motion.div
				whileHover={{ x: direction === "prev" ? -10 : 10 }}
				transition={{ type: "spring", stiffness: 300, damping: 20 }}
				className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111] group shadow-xl hover:shadow-2xl hover:border-white/20 transition-all"
			>
				<div className="absolute inset-0 z-0">
					<img
						src={project.image}
						alt={project.title}
						className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105" // Petit zoom image interne
					/>
					<div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
				</div>

				<div className={`relative z-10 w-full h-full flex flex-col justify-center px-6 py-8
                    ${direction === "next" ? "items-end text-right" : "items-start text-left"}
                `}>

					<span className="text-[10px] text-dragusheen-primary font-bold uppercase tracking-widest mb-2 flex items-center gap-2 bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/5">
						{direction === "prev" ? (
							<>
								<FaArrowLeft /> Précédent
							</>
						) : (
							<>
								Suivant <FaArrowRight />
							</>
						)}
					</span>

					<span className="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-dragusheen-primary transition-colors">
						{project.title}
					</span>
					<span className="text-xs text-white/40 mt-1 line-clamp-1 max-w-[90%]">
						{project.subtitle}
					</span>
				</div>
			</motion.div>
		</Link>
	);
};


/* ----- EXPORT ----- */
export default ProjectNavigationArrow;
