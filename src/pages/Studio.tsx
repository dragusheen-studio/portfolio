/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { useEffect, useState } from "react";
import FeaturedSection from "@/components/pages/studio/Grid/Featured/FeaturedProject";
import ProjectsGrid from "@/components/pages/studio/Grid/ProjectsGrid";
import ProjectsHero from "@/components/pages/studio/Hero";
import Loader from "@/components/ui/Loader";
import type { IProject } from "@/types/Project";
import { getProjects } from "@/store/Projects";


/* ----- COMPONENT ----- */
function Studio() {
	const [projects, setProjects] = useState<IProject[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setProjects(await getProjects());
			} catch (error) {
				console.error("Erreur chargement projets:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	const featuredProjects = projects.filter(p => p.featured);

	return (
		<div className="w-full flex flex-col min-h-screen">
			<ProjectsHero />

			{isLoading ? (
				<Loader />
			) : (
				<>
					{featuredProjects.length > 0 && (
						<FeaturedSection projects={featuredProjects} />
					)}

					<ProjectsGrid projects={projects} />
				</>
			)}
		</div>
	);
}


/* ----- EXPORTS ----- */
export default Studio;
