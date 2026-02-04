/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { motion } from "framer-motion";


/* ----- PROPS ----- */
interface ProjectGalleryImageCardProps {
	url: string;
	index: number;
	className?: string;
	setSelectedImage: (image: string | null) => void;
	glassContainerClass: string;
}


/* ----- COMPONENT ----- */
function ProjectGalleryImageCard(props: ProjectGalleryImageCardProps) {
	const {
		url,
		index,
		className,
		setSelectedImage,
		glassContainerClass,
	} = props;

	return (
		<motion.div
			key={index}
			initial={{ opacity: 0, scale: 0.95 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			transition={{ delay: index * 0.1 }}
			onClick={() => setSelectedImage(url)}
			className={`rounded-2xl overflow-hidden shadow-2xl cursor-pointer group aspect-video ${glassContainerClass} ${className}`}
		>
			<img
				src={url}
				alt={`Gallery ${index}`}
				className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
			/>
		</motion.div>
	);
};


/* ----- EXPORT ----- */
export default ProjectGalleryImageCard;
