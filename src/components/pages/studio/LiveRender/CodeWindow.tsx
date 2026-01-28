/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { motion } from "framer-motion";


/* ----- PROPS ----- */
interface CodeWindowProps {
	isCoding: boolean;
}


/* ----- COMPONENT ----- */
function CodeWindow({ isCoding }: CodeWindowProps) {
	return (
		<motion.div
			className={`absolute top-10 right-40 w-56 h-40 glass-panel bg-[#0a0a0a]/80 border-white/10 rounded-xl p-4 flex flex-col gap-2 z-10 transition-all duration-500 ${isCoding ? "border-dragusheen-primary/50 shadow-[0_0_20px_rgba(123,44,191,0.2)] scale-105" : "scale-100 opacity-60"}`}
		>
			<div className="flex gap-1.5 mb-1">
				<div className="w-2 h-2 rounded-full bg-red-500/50" />
				<div className="w-2 h-2 rounded-full bg-yellow-500/50" />
				<div className="w-2 h-2 rounded-full bg-green-500/50" />
			</div>
			<div className="flex flex-col gap-1.5 mt-2">
				<motion.div animate={{ width: isCoding ? "40%" : "30%" }} className="h-1.5 bg-blue-400/50 rounded-full" />
				<motion.div animate={{ width: isCoding ? "70%" : "60%" }} className="h-1.5 bg-white/20 rounded-full" />
				<motion.div
					animate={{ width: isCoding ? ["0%", "50%", "80%"] : "80%", opacity: isCoding ? 1 : 0.5 }}
					transition={{ duration: 0.5, repeat: isCoding ? Infinity : 0, repeatType: "reverse" }}
					className="h-1.5 bg-green-400/50 rounded-full"
				/>
				<div className="h-1.5 w-1/2 bg-white/20 rounded-full" />
			</div>
			<div className="mt-auto text-[8px] font-mono text-white/20">layout.tsx</div>
		</motion.div>
	);
}


/* ----- EXPORT ----- */
export default CodeWindow;
