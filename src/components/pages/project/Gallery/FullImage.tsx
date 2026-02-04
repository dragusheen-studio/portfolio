/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";


/* ----- PROPS ----- */
interface ProjectGalleryFullImageProps {
	selectedImage: string | null;
	setSelectedImage: (image: string | null) => void;
	glassContainerClass: string;
}


/* ----- COMPONENT ----- */
function ProjectGalleryFullImage({ selectedImage, setSelectedImage, glassContainerClass }: ProjectGalleryFullImageProps) {
	return (
		<AnimatePresence>
			{selectedImage && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => setSelectedImage(null)}
					className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 backdrop-blur-lg p-8 md:p-16"
				>
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
						onClick={(e) => e.stopPropagation()}
						className={`relative max-w-7xl max-h-full w-full h-full overflow-hidden rounded-2xl shadow-2xl ${glassContainerClass}`}
					>
						<button
							onClick={() => setSelectedImage(null)}
							className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
						>
							<FaTimes size={24} />
						</button>
						<img src={selectedImage} alt="Full size" className="w-full h-full object-contain p-4" />
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};


/* ----- EXPORT ----- */
export default ProjectGalleryFullImage;
