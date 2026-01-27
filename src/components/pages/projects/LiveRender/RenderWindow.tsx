/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { motion } from "framer-motion";


/* ----- PROPS ----- */
interface RenderWindowProps {
	isHorizontal: boolean;
	isSecondary: boolean;
}


/* ----- COMPONENT ----- */
function RenderWindow({ isHorizontal, isSecondary }: RenderWindowProps) {
	return (
		<motion.div
			initial={{ y: 0 }}
			animate={{ y: [0, -10, 0] }}
			transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
			className="absolute bottom-20 right-32 w-80 h-56 glass-panel border border-white/20 rounded-2xl bg-black/60 backdrop-blur-xl flex flex-col overflow-hidden z-30 shadow-2xl"
		>
			<div className="min-h-8 bg-white/5 border-b border-white/10 flex items-center px-3 gap-2">
				<div className="w-2 h-2 rounded-full bg-white/20" />
				<div className="w-2 h-2 rounded-full bg-white/20" />
				<div className="flex-1 text-center text-[8px] text-white/30 font-mono">localhost:4666</div>
			</div>

			<div className="flex-1 p-6 flex flex-col justify-center relative">
				<motion.div
					layout
					className={`flex gap-4 w-full h-full transition-all duration-500 ${isHorizontal ? "flex-row items-center" : "flex-col items-start"}`}
				>
					<motion.div
						layout
						className={`rounded-lg shadow-lg transition-colors duration-700 ${isHorizontal ? "w-24 h-24" : "w-full h-24"} ${isSecondary ? "bg-dragusheen-secondary" : "bg-dragusheen-primary"}`}
					/>

					<motion.div layout className="flex-1 space-y-3 w-full flex flex-col justify-center">
						<motion.div layout className="h-2.5 w-3/4 bg-white/20 rounded-full" />
						<motion.div layout className="h-2.5 w-1/2 bg-white/10 rounded-full" />
						<motion.div
							layout
							className={`h-2.5 w-1/3 rounded-full transition-colors duration-700 ${isSecondary ? "bg-dragusheen-secondary/50" : "bg-dragusheen-primary/50"}`}
						/>
					</motion.div>
				</motion.div>
			</div>

			<div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent opacity-10 pointer-events-none animate-scan"></div>
		</motion.div>
	);
}


/* ----- EXPORT ----- */
export default RenderWindow;
