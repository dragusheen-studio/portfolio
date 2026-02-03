/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectHero from "@/components/pages/project/Hero/Hero";
import ProjectBento from "@/components/pages/project/Bento/Bento";
import ProjectGallery from "@/components/pages/project/Gallery";
import ProjectNavigation from "@/components/pages/project/Navigation/Navigation";
import ProjectStory from "@/components/pages/project/Story/Project";
import NotFoundPage from "@/pages/NotFound";
import Loader from "@/components/ui/Loader";
import type { IProject } from "@/types/Project";
import { getProject } from "@/store/Projects";


/* ----- COMPONENT ----- */
function Project() {
	const { projectId } = useParams();

	const [project, setProject] = useState<IProject | undefined>(undefined);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchProjectData = async () => {
			setIsLoading(true);

			window.scrollTo(0, 0);

			const id = parseInt(projectId || "", 10);
			if (!isNaN(id)) {
				try {
					const data = await getProject(id);
					setProject(data);
				} catch (error) {
					console.error("Erreur chargement projet:", error);
				}
			}

			setIsLoading(false);
		};

		fetchProjectData();
	}, [projectId]);

	if (isLoading) {
		return (
			<div className="min-h-screen w-full flex items-center justify-center pt-20">
				<Loader />
			</div>
		);
	}

	if (!project) {
		return <NotFoundPage />;
	}

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
