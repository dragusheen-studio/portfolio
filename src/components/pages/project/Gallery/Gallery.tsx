/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { useState } from "react";
import type { IProject } from "@/types/Project";
import ProjectGalleryFullImage from "./FullImage";
import ProjectGalleryDisplayImages from "./DisplayImages";
import ProjectGalleryCarousel from "./Carousel";


/* ----- PROPS ----- */
interface ProjectGalleryProps {
	project: IProject;
}


/* ----- COMPONENT ----- */
function ProjectGallery({ project }: ProjectGalleryProps) {
	const gallery = project.details.gallery;
	if (!gallery || gallery.length === 0) return null;

	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const glassContainerClass = "bg-black/40 backdrop-blur-md border border-white/10";

	return (
		<>
			<section className="w-full py-10 px-4">
				<div className="container max-w-6xl mx-auto">
					<div className="flex items-center gap-4 mb-8">
						<h3 className="text-2xl font-bold text-white">Galerie</h3>
						<div className="h-px flex-1 bg-white/10" />
					</div>

					{gallery.length >= 4 ? (
						<ProjectGalleryCarousel
							gallery={gallery}
							glassContainerClass={glassContainerClass}
							setSelectedImage={setSelectedImage}
						/>
					) : (
						<ProjectGalleryDisplayImages
							gallery={gallery}
							setSelectedImage={setSelectedImage}
							glassContainerClass={glassContainerClass}
						/>
					)}
				</div>
			</section>

			<ProjectGalleryFullImage
				selectedImage={selectedImage}
				setSelectedImage={setSelectedImage}
				glassContainerClass={glassContainerClass}
			/>
		</>
	);
};


/* ----- EXPORT ----- */
export default ProjectGallery;
