/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import type { ITimelineChapter } from "@/types/TimelineChapter";


/* ----- PROPS ----- */
interface TimelineChapterProps {
	data: ITimelineChapter;
}


/* ----- COMPONENT ----- */
function TimelineChapter({ data }: TimelineChapterProps) {
	const isLeft = data.align === "left";

	return (
		<section
			id={`chapter-${data.id}`}
			className="w-full min-h-[70vh] py-24 relative flex items-center justify-center overflow-hidden"
		>
			<div className={`absolute w-125 h-125 rounded-full bg-linear-to-r ${data.theme} blur-[120px] opacity-10 pointer-events-none ${isLeft ? "-left-40" : "-right-40"}`} />
			<div className="container px-4 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className={`flex flex-col gap-6 ${isLeft ? "md:order-1 text-left" : "md:order-2 md:text-right items-end"}`}
				>
					<div className="flex items-center gap-4">
						<span className="text-6xl md:text-8xl font-bold text-white/5 font-display select-none">
							0{data.id}
						</span>
						<Badge className={`bg-white/5 border-white/10 ${isLeft ? "" : "ml-auto"}`}>
							{data.year}
						</Badge>
					</div>

					<div>
						<h2 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
							{data.title}
						</h2>
						<h3 className={`text-xl font-display font-bold text-transparent bg-clip-text bg-linear-to-r ${data.theme}`}>
							{data.subtitle}
						</h3>
					</div>

					<div className={`glass-panel p-6 border-l-4 ${isLeft ? "border-l-white/10" : "border-r-4 border-r-white/10 border-l-0"}`}>
						<p className="text-dragusheen-muted text-lg leading-relaxed">
							{data.description}
						</p>
					</div>

					<div className="relative py-2">
						<span className={`text-5xl absolute -top-2 text-white/10 font-serif ${isLeft ? "left-0" : "right-0"}`}>"</span>
						<p className={`text-white/80 font-medium italic relative z-10 ${isLeft ? "pl-6" : "pr-6"}`}>
							{data.quote}
						</p>
					</div>

					<div className={`flex flex-wrap gap-2 ${isLeft ? "" : "justify-end"}`}>
						{data.tags.map(tag => (
							<span key={tag} className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/5">
								#{tag}
							</span>
						))}
					</div>
				</motion.div>


				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
					className={`relative h-64 md:h-112.5 w-full flex items-center justify-center ${isLeft ? "md:order-2" : "md:order-1"}`}
				>
					<div className="w-full h-full glass-panel border border-white/5 flex items-center justify-center relative overflow-hidden group hover:border-white/20 transition-all duration-500 rounded-2xl">
						<div
							className="absolute inset-0 bg-cover bg-center opacity-20 blur-xl scale-110"
							style={{ backgroundImage: `url(${data.image})` }}
						></div>
						<img
							src={data.image}
							alt={data.title}
							className="relative z-10 w-3/4 h-3/4 object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
						/>
						<div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-linear-to-br ${data.theme}`}></div>
					</div>
				</motion.div>

			</div>
		</section>
	);
}


/* ----- EXPORTS ----- */
export default TimelineChapter;
