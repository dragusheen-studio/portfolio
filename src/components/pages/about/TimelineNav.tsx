/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { scrollToElement } from "@/services/scroll";
import type { ITimelineChapter } from "@/types/TimelineChapter";


/* ----- PROPS ----- */
interface TimelineNavProps {
	chapters: ITimelineChapter[];
	activeId: number;
}


/* ----- COMPONENT ----- */
function TimelineNav({ chapters, activeId }: TimelineNavProps) {
	return (
		<div className="hidden md:flex fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-40 flex-col gap-4 items-end pointer-events-auto">
			<button
				onClick={() => scrollToElement("hero-section")}
				className="group flex items-center gap-3 focus:outline-none"
			>
				<span className={`
                    text-xs font-bold text-white bg-black/50 px-2 py-1 rounded backdrop-blur-sm transition-all duration-300
                    ${activeId === 0 ? "text-dragusheen-primary" : ""}
                    opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
                `}>
					Intro
				</span>
				<div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${activeId === 0 ? "bg-white border-white scale-125" : "bg-transparent border-white/30 group-hover:border-white"
					}`} />
			</button>

			{
				chapters.map((chapter) => (
					<button
						key={chapter.id}
						onClick={() => scrollToElement(`chapter-${chapter.id}`)}
						className="group flex items-center gap-3 focus:outline-none"
					>
						<span className={`
                        text-xs font-bold text-white bg-black/50 px-2 py-1 rounded backdrop-blur-sm transition-all duration-300 text-right
                        opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
                    `}>
							{chapter.navLabel}
						</span>

						<div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${activeId === chapter.id
							? "bg-dragusheen-primary border-dragusheen-primary scale-125 shadow-[0_0_10px_#7b2cbf]"
							: "bg-transparent border-white/30 group-hover:border-white group-hover:bg-white/20"
							}`} />
					</button>
				))
			}

			<div className="absolute right-1.5 top-2 bottom-2 w-px bg-white/10 -z-10" />
		</div >
	);
}


/* ----- EXPORTS ----- */
export default TimelineNav;
