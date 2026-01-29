/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Button from "@/components/ui/Button";
import type { IProject } from "@/types/Project";


/* ----- PROPS ----- */
interface ProjectHeroProps {
	project: IProject;
}


/* ----- COMPONENT ----- */
function ProjectHero({ project }: ProjectHeroProps) {
	return (
		<section className="relative w-full py-20 px-4">
			<div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					className="flex flex-col gap-6 order-1"
				>
					<div className="flex flex-wrap gap-2">
						{project.tags.map(tag => (
							<span
								key={tag.name}
								className={`text-xs font-mono px-3 py-1.5 rounded-md font-bold tracking-wide border transition-all ${tag.important
									? "bg-dragusheen-primary text-white border-dragusheen-primary shadow-[0_0_15px_rgba(123,44,191,0.3)]"
									: "bg-white/10 text-white/70 border-white/10"
									}`}
							>
								{tag.name}
							</span>
						))}
					</div>

					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
						{project.title}
					</h1>

					<p className="text-xl text-white/80 font-display leading-relaxed border-l-4 border-dragusheen-primary pl-6">
						{project.subtitle}
					</p>

					<p className="text-base md:text-lg text-dragusheen-muted leading-relaxed">
						{project.description}
					</p>

					<div className="flex flex-wrap gap-4 pt-4">
						{project.links.map(link => (
							<a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
								<Button
									variant={link.name.toLowerCase().includes("live") ? "primary" : "secondary"}
									className="flex items-center gap-2"
								>
									{link.name.toLowerCase().includes("git") ? <FaGithub /> : <FaExternalLinkAlt />}
									{link.name}
								</Button>
							</a>
						))}

						{project.github_url && (
							<a href={project.github_url} target="_blank" rel="noopener noreferrer">
								<Button variant="secondary" className="flex items-center gap-2">
									<FaGithub /> Repository
								</Button>
							</a>
						)}

					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="relative order-2 lg:order-2 h-75 lg:h-125 w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group"
				>
					<div className="absolute inset-0 bg-linear-to-tr from-dragusheen-primary/20 to-transparent z-10 mix-blend-overlay pointer-events-none" />
					<img
						src={project.image}
						alt={project.title}
						className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
					/>
				</motion.div>
			</div>
		</section>
	);
}


/* ----- EXPORT ----- */
export default ProjectHero;
