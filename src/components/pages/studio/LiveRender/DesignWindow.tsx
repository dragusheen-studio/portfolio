/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { motion } from "framer-motion";


/* ----- PROPS ----- */
interface DesignWindowProps {
	isDesigning: boolean;
	isSecondary: boolean;
}


/* ----- COMPONENT ----- */
function DesignWindow({ isDesigning, isSecondary }: DesignWindowProps) {
	return (
		<motion.div
			className={`absolute top-24 right-10 w-48 h-48 glass-panel bg-white/5 border-white/10 rounded-xl p-4 flex flex-col items-center gap-4 z-20 transition-all duration-500 ${isDesigning ? "border-dragusheen-secondary/50 shadow-[0_0_20px_rgba(200,100,255,0.2)] scale-105" : "scale-100 opacity-60"}`}
		>
			<div className="w-full flex justify-between items-center mb-1">
				<div className="text-[8px] text-white/30 uppercase tracking-widest">Theme</div>
			</div>

			<div className="grid grid-cols-2 gap-3 relative">
				<motion.div
					layout
					className="absolute w-8 h-8 rounded-full border-2 border-white shadow-[0_0_10px_white] pointer-events-none"
					animate={{
						x: isSecondary ? 44 : 0,
						y: 0
					}}
					transition={{ type: "spring", stiffness: 300, damping: 20 }}
				/>

				<div className="w-8 h-8 rounded-full bg-dragusheen-primary opacity-80" />
				<div className="w-8 h-8 rounded-full bg-dragusheen-secondary opacity-80" />

				<div className="w-8 h-8 rounded-full bg-white/10" />
				<div className="w-8 h-8 rounded-full bg-white/10" />
			</div>

			<div className="w-full space-y-2 mt-auto">
				<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
					<motion.div animate={{ width: isDesigning ? "70%" : "40%" }} className="h-full bg-white/50" />
				</div>
			</div>
		</motion.div>
	);
}


/* ----- EXPORT ----- */
export default DesignWindow;
