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
import { getProjects, subscribeToProjects } from "@/store/Projects";


/* ----- COMPONENT ----- */
function Studio() {
	const [projects, setProjects] = useState<IProject[]>([]);
	const [isSyncing, setIsSyncing] = useState<boolean>(false);

	useEffect(() => {
		const unsubscribe = subscribeToProjects((updatedProjects, isLoadingProjects) => {
			setProjects(updatedProjects);
			setIsSyncing(isLoadingProjects);
		});

		const triggerFetch = async () => {
			await getProjects();
		};

		triggerFetch();

		return () => {
			unsubscribe();
		};
	}, []);

	const featuredProjects = projects.filter(p => p.featured);

	return (
		<div className="w-full flex flex-col min-h-screen relative">
			<ProjectsHero />

			{projects.length <= 0 ? (
				<Loader />
			) : (
				projects.length > 0 &&
				<div className="flex flex-col min-h-[50vh]">
					{featuredProjects.length > 0 && (
						<FeaturedSection projects={featuredProjects} />
					)}

					{projects.length > 0 && (
						<ProjectsGrid projects={projects} isSyncing={isSyncing} />
					)}
				</div>
			)}
		</div>
	);
}


/* ----- EXPORTS ----- */
export default Studio;
