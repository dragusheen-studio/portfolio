/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { FaBuilding, FaUserTie, FaClock, FaCalendarAlt } from "react-icons/fa";
import type { IProject } from "@/types/Project";
import ProjectBentoCard from "./Card";


/* ----- PROPS ----- */
interface ProjectBentoProps {
	project: IProject;
}


/* ----- COMPONENT ----- */
function ProjectBento({ project }: ProjectBentoProps) {
	return (
		<section className="w-full px-4 mb-20">
			<div className="container max-w-6xl mx-auto">
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

					<ProjectBentoCard
						icon={FaUserTie}
						title="Rôle"
						value={project.details.role}
					/>

					<ProjectBentoCard
						icon={FaBuilding}
						title="Contexte"
						value={project.details.client ? project.details.client.name : "Projet Personnel"}
						href={project.details.client?.url}
					/>

					<ProjectBentoCard
						icon={FaClock}
						title="Statut"
						value={project.details.status}
					/>

					<ProjectBentoCard
						icon={FaCalendarAlt}
						title="Référence"
						value={`#${String(project.id).padStart(3, '0')}`}
						subValue="ID Projet"
					/>

				</div>
			</div>
		</section>
	);
};


/* ----- EXPORT ----- */
export default ProjectBento;
