/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


/* ----- PROPS ----- */
interface ProjectGalleryCarouselProps {
	gallery: string[];
	glassContainerClass: string;
	setSelectedImage: (image: string | null) => void;
}


/* ----- COMPONENT ----- */
function ProjectGalleryCarousel({ gallery, glassContainerClass, setSelectedImage }: ProjectGalleryCarouselProps) {
	const THUMB_COUNT = 5;
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		if (isHovered) return;
		const timer = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % gallery.length);
		}, 3000);
		return () => clearInterval(timer);
	}, [isHovered, gallery.length]);

	const nextImage = (e?: React.MouseEvent) => {
		e?.stopPropagation();
		setCurrentIndex((prev) => (prev + 1) % gallery.length);
	};

	const prevImage = (e?: React.MouseEvent) => {
		e?.stopPropagation();
		setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
	};

	const getVisibleThumbnails = () => {
		const total = gallery.length;
		let start = currentIndex - Math.floor(THUMB_COUNT / 2);
		if (start < 0) start = 0;
		if (start + THUMB_COUNT > total) start = total - THUMB_COUNT;
		if (start < 0) start = 0;
		return gallery.slice(start, start + THUMB_COUNT).map((url, i) => ({
			url,
			originalIndex: start + i
		}));
	};

	return (
		<div
			className="flex flex-col gap-4 w-full"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				className={`relative w-full aspect-video md:aspect-21/9 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group ${glassContainerClass}`}
				onClick={() => setSelectedImage(gallery[currentIndex])}
			>
				<AnimatePresence mode="wait">
					<motion.img
						key={currentIndex}
						src={gallery[currentIndex]}
						alt={`Gallery ${currentIndex}`}
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.4 }}
						className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
					/>
				</AnimatePresence>
			</div>

			<div className="flex items-center justify-center gap-2 md:gap-4 mt-2 max-w-full">
				<button
					onClick={prevImage}
					className="p-2 md:p-3 rounded-full bg-white/5 hover:bg-white/20 text-white transition-colors border border-white/10 shrink-0"
				>
					<FaChevronLeft size={12} className="md:w-4 md:h-4" />
				</button>

				<div className="flex gap-2 overflow-hidden">
					{getVisibleThumbnails().map((item, localIndex) => (
						<button
							key={item.originalIndex}
							onClick={(e) => { e.stopPropagation(); setCurrentIndex(item.originalIndex); }}
							className={`
                                relative rounded-lg overflow-hidden border transition-all duration-300 shrink-0
                                ${glassContainerClass} 
                                ${currentIndex === item.originalIndex ? "border-dragusheen-primary opacity-100 scale-105 bg-black/60" : "border-white/10 opacity-50 hover:opacity-80"}
                                h-10 w-14 md:h-16 md:w-24
                                ${(localIndex === 0 || localIndex === 4) ? "hidden md:block" : "block"}
                            `}
						>
							<img src={item.url} alt="thumb" className="w-full h-full object-contain p-1" />
						</button>
					))}
				</div>

				<button
					onClick={nextImage}
					className="p-2 md:p-3 rounded-full bg-white/5 hover:bg-white/20 text-white transition-colors border border-white/10 shrink-0"
				>
					<FaChevronRight size={14} className="md:w-4 md:h-4" />
				</button>
			</div>
		</div>
	);
};


/* ----- EXPORT ----- */
export default ProjectGalleryCarousel;
