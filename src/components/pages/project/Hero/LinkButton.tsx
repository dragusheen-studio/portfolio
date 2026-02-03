/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { getProjectByTitle } from "@/store/Projects";
import type { IProjectLink } from "@/types/Project";

interface ProjectHeroLinkButtonProps {
	link: IProjectLink
}

function ProjectHeroLinkButton({ link }: ProjectHeroLinkButtonProps) {
	const [finalUrl, setFinalUrl] = useState<string | null>(null);
	const [isInternal, setIsInternal] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const resolveUrl = async () => {
			setIsLoading(true);

			if (link.url.startsWith("/")) {
				setFinalUrl(link.url);
				setIsInternal(true);
			}
			else if (link.url.startsWith("./")) {
				const targetTitle = link.url.slice(2);
				const projectId = await getProjectByTitle(targetTitle);

				if (projectId !== undefined) {
					setFinalUrl(`/studio/${projectId}`);
					setIsInternal(true);
				} else {
					console.warn(`Lien projet introuvable : ${targetTitle}`);
					setFinalUrl(null);
				}
			}
			else {
				setFinalUrl(link.url);
				setIsInternal(false);
			}

			setIsLoading(false);
		};

		resolveUrl();
	}, [link.url]);

	if (isLoading || !finalUrl) return null;

	const baseClass = "flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-sm font-medium text-white";

	if (isInternal) {
		return (
			<Link to={finalUrl} className={baseClass}>
				{link.name} <FaArrowRight className="text-xs opacity-70" />
			</Link>
		);
	}

	return (
		<a href={finalUrl} target="_blank" rel="noopener noreferrer" className={baseClass}>
			{link.name} <FaExternalLinkAlt className="text-xs opacity-70" />
		</a>
	);
}

export default ProjectHeroLinkButton;
