/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { FaBuilding, FaUserTie, FaClock, FaStar, FaHistory, FaTag } from "react-icons/fa";
import type { IProject } from "@/types/Project";
import ProjectBentoCard from "./Card";


/* ----- PROPS ----- */
interface ProjectBentoProps {
	project: IProject;
}


/* ----- COMPONENT ----- */
function ProjectBento({ project }: ProjectBentoProps) {
	const formatDate = (dateString?: string) => {
		if (!dateString) return "Inconnue";
		const date = new Date(dateString);

		return new Intl.DateTimeFormat("fr-FR", {
			day: "numeric",
			month: "short",
			year: "numeric"
		}).format(date);
	};

	return (
		<section className="w-full px-4 mb-20">
			<div className="container max-w-6xl mx-auto">
				<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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

					<div className="relative group">
						<div className="absolute inset-0 bg-yellow-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
						<ProjectBentoCard
							icon={FaStar}
							title="GitHub Stars"
							value={project.stars !== undefined ? project.stars.toString() : "0"}
						/>
					</div>

					<ProjectBentoCard
						icon={FaHistory}
						title="Dernier Push"
						value={formatDate(project.last_push)}
					/>

					<ProjectBentoCard
						icon={FaTag}
						title="Version"
						value={project.details.version}
					/>
				</div>
			</div>
		</section>
	);
};


/* ----- EXPORT ----- */
export default ProjectBento;
