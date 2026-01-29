/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { useParams } from "react-router-dom";
import { GetProjectById } from "@/configs/Projects";
import NotFoundPage from "@/pages/NotFound";
import ProjectHero from "@/components/pages/project/Hero";
import ProjectBento from "@/components/pages/project/Bento/Bento";
import ProjectGallery from "@/components/pages/project/Gallery";
import ProjectNavigation from "@/components/pages/project/Navigation/Navigation";
import ProjectStory from "@/components/pages/project/Story/Project";


/* ----- COMPONENT ----- */
function Project() {
	const { projectId } = useParams();
	const id = parseInt(projectId || "", 10);
	const project = !isNaN(id) ? GetProjectById(id) : undefined;

	if (!project) return <NotFoundPage />;

	return (
		<div className="min-h-screen w-full">
			<div className="pt-24 lg:pt-32">
				<ProjectHero project={project} />
				<ProjectBento project={project} />
				<ProjectStory project={project} />
				<ProjectGallery project={project} />
				<ProjectNavigation project={project} />
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default Project;
