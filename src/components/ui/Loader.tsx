/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { motion } from "framer-motion";


/* ----- COMPONENT ----- */
function Loader() {
	return (
		<div className="w-full h-[50vh] flex flex-col items-center justify-center gap-4">
			<motion.div
				animate={{ rotate: 360 }}
				transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
				className="w-12 h-12 border-4 border-white/10 border-t-dragusheen-primary rounded-full"
			/>
			<span className="text-white/40 text-sm font-mono animate-pulse">
				Synchronisation GitHub...
			</span>
		</div>
	);
}


/* ----- EXPORTS ----- */
export default Loader;
