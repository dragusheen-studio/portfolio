/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import type { IProject } from "@/types/Project";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";


/* ----- PROPS ----- */
interface ProjectPresentationCardProps {
	project: IProject;
}


/* ----- COMPONENT ----- */
function ProjectPresentationCard({ project }: ProjectPresentationCardProps) {
	const navigate = useNavigate();

	const importantTags = project.tags.filter(tag => tag.important);

	return (
		<motion.div
			layout
			initial={{ opacity: 0, x: -10 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
			transition={{ duration: 0.2 }}
			onClick={() => navigate(`/studio/${project.id}`)}
			className="group relative flex flex-row items-center rounded-lg glass-panel border border-white/5 hover:border-white/20 bg-white/5 transition-all duration-300 overflow-hidden h-28 cursor-pointer"
		>

			{project.featured && (
				<div
					className="absolute top-0 left-0 z-20 bg-yellow-500 text-black p-1.5 rounded-br-lg shadow-[0_0_10px_rgba(234,179,8,0.5)]"
					title="Projet Star"
				>
					<FaStar size={10} />
				</div>
			)}

			<div className="relative h-full w-28 shrink-0 overflow-hidden bg-black/50">
				<img
					src={project.image}
					alt={`Illustration de ${project.title}`}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
				/>
			</div>

			<div className="flex-1 p-4 flex flex-col justify-center gap-1 overflow-hidden">
				<div className="flex justify-between items-start">
					<h3 className="text-base font-bold text-white truncate pr-2">
						{project.title}
					</h3>
					<span className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-xs font-bold">
						→
					</span>
				</div>

				<p className="text-xs text-dragusheen-muted leading-tight line-clamp-1 mb-1">
					{project.subtitle}
				</p>

				<div className="mt-auto flex flex-wrap gap-1.5">
					{importantTags.map((tag) => (
						<span
							key={tag.name}
							className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white border border-white/20 uppercase tracking-wide opacity-40"
						>
							{tag.name}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
}


/* ----- EXPORT ----- */
export default ProjectPresentationCard;
