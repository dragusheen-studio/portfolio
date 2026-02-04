/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { FaCheck } from "react-icons/fa";
import type { IProject } from "@/types/Project";


/* ----- PROPS ----- */
interface ProjectStoryKeyFeatureProps {
	project: IProject;
}


/* ----- COMPONENT ----- */
function ProjectStoryKeyFeature({ project }: ProjectStoryKeyFeatureProps) {
	return (
		<div className="w-full lg:w-80 shrink-0 bg-black/40 rounded-2xl p-6 border border-white/10 h-fit">
			<h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">
				Key Features
			</h3>
			<ul className="space-y-4">
				{project.details.features.map((feature, idx) => (
					<li key={idx} className="flex items-start gap-3 text-sm text-white/90">
						<div className="mt-1 w-4 h-4 rounded-full bg-dragusheen-primary flex items-center justify-center shrink-0">
							<FaCheck size={8} className="text-white" />
						</div>
						<span>{feature}</span>
					</li>
				))}
			</ul>
		</div>
	);
}


/* ----- EXPORT ----- */
export default ProjectStoryKeyFeature;
