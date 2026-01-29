/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { motion } from "framer-motion";
import type { IProject } from "@/types/Project";


/* ----- PROPS ----- */
interface ProjectGalleryProps {
	project: IProject;
}


/* ----- COMPONENT ----- */
function ProjectGallery({ project }: ProjectGalleryProps) {
	if (!project.details.gallery || project.details.gallery.length === 0) return null;

	return (
		<section className="w-full py-10 px-4">
			<div className="container max-w-6xl mx-auto">
				<div className="flex items-center gap-4 mb-8">
					<h3 className="text-2xl font-bold text-white">Galerie</h3>
					<div className="h-px flex-1 bg-white/10" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{project.details.gallery.map((imgUrl, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.1 }}
							className={`rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl ${idx === 2 ? "md:col-span-2 aspect-21/9" : "aspect-video"}`}
						>
							<img src={imgUrl} alt={`Gallery ${idx}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};


/* ----- EXPORT ----- */
export default ProjectGallery;
