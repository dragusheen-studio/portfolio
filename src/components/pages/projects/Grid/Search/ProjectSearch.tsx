/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { useState, useMemo, useEffect } from "react";
import { FaTimes, FaCheck, FaLayerGroup, FaObjectGroup } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import type { IProject } from "@/types/Project";
import ProjectSearchHeader from "./Header";
import ProjectSearchTagsFilter from "./TagsFilter";


/* ----- PROPS ----- */
interface ProjectSearchProps {
	allProjects: IProject[];
	onFilter: (filtered: IProject[]) => void;
	resetTrigger: number;
}


/* ----- COMPONENT ----- */
function ProjectSearch({ allProjects, onFilter, resetTrigger }: ProjectSearchProps) {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [filterMode, setFilterMode] = useState<"OR" | "AND">("OR");
	const [isFilterOpen, setIsFilterOpen] = useState(false);


	const uniqueTags = useMemo(() => {
		const tags = new Set(allProjects.flatMap(p => p.tags.map(t => t.name)));
		return Array.from(tags).sort();
	}, [allProjects]);


	useEffect(() => {
		const filtered = allProjects.filter((project) => {
			let matchesTags = true;
			if (selectedTags.length > 0) {
				if (filterMode === "OR") {
					matchesTags = project.tags.some(t => selectedTags.includes(t.name));
				} else {
					matchesTags = selectedTags.every(selected =>
						project.tags.some(t => t.name === selected)
					);
				}
			}

			const matchesSearch =
				project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.subtitle.toLowerCase().includes(searchQuery.toLowerCase());

			return matchesTags && matchesSearch;
		});
		onFilter(filtered);
	}, [searchQuery, selectedTags, filterMode, allProjects]);

	useEffect(() => {
		if (resetTrigger > 0) {
			setSearchQuery("");
			setSelectedTags([]);
			setFilterMode("OR");
		}
	}, [resetTrigger]);

	const toggleTag = (tag: string) => {
		setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
	};

	return (
		<div className="flex flex-col gap-4 mb-8 border-b border-white/10 pb-6">

			<ProjectSearchHeader
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				isFilterOpen={isFilterOpen}
				setIsFilterOpen={setIsFilterOpen}
				selectedTags={selectedTags.length}
			/>

			<AnimatePresence>
				{isFilterOpen && (
					<ProjectSearchTagsFilter
						filterMode={filterMode}
						setFilterMode={setFilterMode}
						selectedTags={selectedTags}
						setSelectedTags={setSelectedTags}
						uniqueTags={uniqueTags}
						toggleTag={toggleTag}
					/>
				)}
			</AnimatePresence>
		</div>
	);
}


/* ----- EXPORT ----- */
export default ProjectSearch;
