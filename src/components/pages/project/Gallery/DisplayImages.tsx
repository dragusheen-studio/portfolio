/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import ProjectGalleryImageCard from "./ImageCard";


/* ----- PROPS ----- */
interface ProjectGalleryDisplayImagesProps {
	gallery: string[];
	setSelectedImage: (image: string | null) => void;
	glassContainerClass: string;
}


/* ----- COMPONENT ----- */
function ProjectGalleryDisplayImages({ gallery, setSelectedImage, glassContainerClass }: ProjectGalleryDisplayImagesProps) {
	return (
		<div className="flex flex-col gap-6">

			{gallery.length >= 2 && (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<ProjectGalleryImageCard
						url={gallery[0]}
						index={0}
						setSelectedImage={setSelectedImage}
						glassContainerClass={glassContainerClass}
					/>
					<ProjectGalleryImageCard
						url={gallery[1]}
						index={1}
						setSelectedImage={setSelectedImage}
						glassContainerClass={glassContainerClass}
					/>
				</div>
			)}
			{(gallery.length === 1 || gallery.length === 3) && (
				<ProjectGalleryImageCard
					url={gallery[gallery.length - 1]}
					index={gallery.length - 1}
					setSelectedImage={setSelectedImage}
					glassContainerClass={glassContainerClass}
					className="md:aspect-21/9"
				/>
			)}
		</div>
	);
};


/* ----- EXPORT ----- */
export default ProjectGalleryDisplayImages;
