/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { FaExclamationTriangle, FaLightbulb } from "react-icons/fa";
import type { IProject } from "@/types/Project";
import ProjectStoryKeyFeature from "./KeyFeature";
import ProjectStoryBloc from "./Bloc";


/* ----- PROPS ----- */
interface ProjectStoryProps {
	project: IProject;
}


/* ----- COMPONENT ----- */
function ProjectStory({ project }: ProjectStoryProps) {
	return (
		<section className="w-full px-4 mb-20">
			<div className="container max-w-5xl mx-auto flex flex-col gap-8">

				<ProjectStoryBloc
					content={project.details.problem}
					icon={FaExclamationTriangle}
					title="Le Challenge"
					colorSet="danger"
				/>

				<ProjectStoryBloc
					content={project.details.solution}
					icon={FaLightbulb}
					title="La Solution"
					colorSet="primary"
				>
					<ProjectStoryKeyFeature project={project} />
				</ProjectStoryBloc>
			</div>
		</section>
	);
}


/* ----- EXPORT ----- */
export default ProjectStory;
