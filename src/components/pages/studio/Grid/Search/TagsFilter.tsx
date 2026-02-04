/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { FaTimes, FaCheck, FaLayerGroup, FaObjectGroup } from "react-icons/fa";
import { motion } from "framer-motion";


/* ----- PROPS ----- */
interface ProjectSearchTagsFilterProps {
	filterMode: "OR" | "AND";
	setFilterMode: (mode: "OR" | "AND") => void;
	selectedTags: string[];
	setSelectedTags: (tags: string[]) => void;
	uniqueTags: string[];
	toggleTag: (tag: string) => void;
}


/* ----- COMPONENT ----- */
function ProjectSearchTagsFilter(props: ProjectSearchTagsFilterProps) {
	const {
		filterMode, setFilterMode,
		selectedTags, setSelectedTags,
		uniqueTags,
		toggleTag
	} = props;

	return (
		<motion.div
			initial={{ height: 0, opacity: 0 }}
			animate={{ height: "auto", opacity: 1 }}
			exit={{ height: 0, opacity: 0 }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
			className="overflow-hidden"
		>
			<div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-4">

				<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
					<div className="flex items-center gap-2 bg-black/20 p-1 rounded-lg border border-white/5 w-fit">
						<button onClick={() => setFilterMode("OR")} className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${filterMode === "OR" ? "bg-dragusheen-primary text-white shadow-sm" : "text-dragusheen-muted hover:text-white"}`}>
							<FaLayerGroup size={10} /> Au moins un tag
						</button>
						<button onClick={() => setFilterMode("AND")} className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${filterMode === "AND" ? "bg-dragusheen-primary text-white shadow-sm" : "text-dragusheen-muted hover:text-white"}`}>
							<FaObjectGroup size={10} /> Tous les tags
						</button>
					</div>

					{selectedTags.length > 0 && (
						<button onClick={() => setSelectedTags([])} className="text-xs text-white font-bold underline underline-offset-4 hover:text-white/80 transition-colors flex items-center gap-2 self-end sm:self-auto">
							<FaTimes size={10} /> Tout désélectionner
						</button>
					)}
				</div>

				<div className="flex flex-wrap gap-2">
					{uniqueTags.map(tag => {
						const isSelected = selectedTags.includes(tag);
						return (
							<button
								key={tag}
								onClick={() => toggleTag(tag)}
								className={`group px-3 py-1.5 rounded-md text-xs font-mono border transition-all duration-200 flex items-center gap-2 ${isSelected
									? "bg-dragusheen-primary border-dragusheen-primary text-white shadow-[0_0_15px_rgba(123,44,191,0.4)]"
									: "bg-black/20 border-white/10 text-dragusheen-muted hover:border-white/30 hover:text-white"
									}`}
							>
								{isSelected && <FaCheck size={8} />}
								{tag}
							</button>
						);
					})}
				</div>
			</div>
		</motion.div>
	);
}


/* ----- EXPORT ----- */
export default ProjectSearchTagsFilter;
