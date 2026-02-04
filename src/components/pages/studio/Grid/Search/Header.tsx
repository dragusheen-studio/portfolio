/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { FaSearch, FaTimes, FaFilter } from "react-icons/fa";


/* ----- PROPS ----- */
interface ProjectSearchHeaderProps {
	searchQuery: string;
	setSearchQuery: (query: string) => void;
	isFilterOpen: boolean;
	setIsFilterOpen: (open: boolean) => void;
	selectedTags: number;
}


/* ----- COMPONENT ----- */
function ProjectSearchHeader(props: ProjectSearchHeaderProps) {
	const {
		searchQuery, setSearchQuery,
		isFilterOpen, setIsFilterOpen,
		selectedTags
	} = props;

	return (
		<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
			<div className="flex items-end gap-3">
				<h2 className="text-xl font-bold text-white">Le Labo</h2>
			</div>

			<div className="flex gap-2 w-full md:w-auto">
				<div className="relative flex-1 md:w-64 group">
					<div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-dragusheen-primary transition-colors">
						<FaSearch size={12} />
					</div>
					<input
						type="text"
						placeholder="Rechercher..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-8 text-sm text-white focus:outline-none focus:border-dragusheen-primary/50 focus:bg-white/10 transition-all placeholder:text-white/20"
					/>
					{searchQuery && (
						<button
							onClick={() => setSearchQuery("")}
							className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
						>
							<FaTimes size={10} />
						</button>
					)}
				</div>

				<button
					onClick={() => setIsFilterOpen(!isFilterOpen)}
					className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-300 ${isFilterOpen || selectedTags > 0
						? "bg-dragusheen-primary/10 border-dragusheen-primary/50 text-dragusheen-primary"
						: "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
						}`}
				>
					<FaFilter size={12} />
					<span className="hidden sm:inline">Filtres</span>
					{selectedTags > 0 && (
						<span className="bg-dragusheen-primary text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full min-w-[1.2em] text-center">
							{selectedTags}
						</span>
					)}
				</button>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default ProjectSearchHeader;
