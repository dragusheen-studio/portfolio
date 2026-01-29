/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { GetNextAndPreviousProject } from "@/configs/Projects";
import ProjectNavigationArrow from "./Arrow";
import type { IProject } from "@/types/Project";


/* ----- PROPS ----- */
interface ProjectNavigationProps {
	project: IProject;
}


/* ----- COMPONENT ----- */
function ProjectNavigation({ project }: ProjectNavigationProps) {
	const { prevProject, nextProject } = GetNextAndPreviousProject(project);

	return (
		<section className="w-full mt-24 pb-20 px-4">
			<div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 h-48 md:h-56">
				<ProjectNavigationArrow project={prevProject} direction="prev" />
				<ProjectNavigationArrow project={nextProject} direction="next" />
			</div>
		</section>
	);
};


/* ----- EXPORT ----- */
export default ProjectNavigation;
