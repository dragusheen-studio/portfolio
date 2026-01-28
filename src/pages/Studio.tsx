/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import ProjectsGrid from "@/components/pages/projects/Grid/ProjectsGrid";
import ProjectsHero from "@/components/pages/projects/Hero";


/* ----- COMPONENT ----- */
function Studio() {
	return (
		<div className="w-full flex flex-col">
			<ProjectsHero />
			<ProjectsGrid />
		</div>
	);
}


/* ----- EXPORTS ----- */
export default Studio;
