/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import type { IconType } from "react-icons";
import { FaExternalLinkAlt } from "react-icons/fa";


/* ----- PROPS ----- */
interface ProjectBentoCardProps {
	icon: IconType;
	title: string;
	value: string;
	subValue?: string;
	href?: string;
}


/* ----- COMPONENT ----- */
function ProjectBentoCard({ icon: Icon, title, value, subValue, href }: ProjectBentoCardProps) {
	return (
		<div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 hover:border-white/20 transition-all h-32 md:h-40 backdrop-blur-sm">
			<div className="flex justify-between items-start">
				<div className="p-2.5 rounded-lg bg-dragusheen-primary text-white shadow-lg">
					<Icon size={16} />
				</div>
				{href && <FaExternalLinkAlt className="text-white/30 text-xs" />}
			</div>
			<div>
				<span className="text-[10px] text-white/50 uppercase tracking-widest font-bold block mb-1">{title}</span>
				{href ? (
					<a href={href} target="_blank" className="text-white font-bold md:text-lg hover:text-dragusheen-primary transition-colors underline decoration-white/20 underline-offset-4 line-clamp-1">
						{value}
					</a>
				) : (
					<span className="text-white font-bold md:text-lg line-clamp-1">{value}</span>
				)}
				{subValue && <span className="text-xs text-white/40 block mt-1">{subValue}</span>}
			</div>
		</div>
	)
}


/* ----- EXPORT ----- */
export default ProjectBentoCard;
