/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import FeaturedSection from "@/components/pages/studio/Grid/Featured/FeaturedProject";
import ProjectsGrid from "@/components/pages/studio/Grid/ProjectsGrid";
import ProjectsHero from "@/components/pages/studio/Hero";


/* ----- COMPONENT ----- */
function Studio() {
	return (
		<div className="w-full flex flex-col">
			<ProjectsHero />
			<FeaturedSection />
			<ProjectsGrid />
		</div>
	);
}


/* ----- EXPORTS ----- */
export default Studio;
