/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { motion } from "framer-motion";


/* ----- COMPONENT ----- */
function FakeCV() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
			animate={{ opacity: 1, scale: 1, rotate: 0 }}
			transition={{ duration: 0.8, delay: 0.2 }}
			className="relative flex justify-center md:justify-end"
		>
			<div className="absolute inset-0 bg-linear-to-tr from-dragusheen-primary/30 to-dragusheen-secondary/30 blur-[60px] rounded-full opacity-50"></div>
			<div className="relative glass-panel p-4 rounded-2xl border border-white/20 transform rotate-2 hover:rotate-0 transition-transform duration-500 cursor-pointer group">

				<div className="w-70 h-100 md:w-[320px] md:h-115 bg-white/95 rounded-lg shadow-2xl overflow-hidden relative flex flex-col items-center pt-10 px-6 gap-4">

					<div className="w-16 h-16 bg-dragusheen-deep rounded-full mb-2"></div>
					<div className="w-3/4 h-4 bg-gray-300 rounded"></div>
					<div className="w-1/2 h-3 bg-gray-200 rounded"></div>

					<div className="w-full flex flex-col gap-3 mt-6 items-start">
						<div className="w-1/3 h-3 bg-dragusheen-primary/50 rounded mb-2"></div>
						<div className="w-full h-2 bg-gray-200 rounded"></div>
						<div className="w-full h-2 bg-gray-200 rounded"></div>
						<div className="w-5/6 h-2 bg-gray-200 rounded"></div>
					</div>

					<div className="w-full flex flex-col gap-3 mt-4 items-start">
						<div className="w-1/3 h-3 bg-dragusheen-secondary/50 rounded mb-2"></div>
						<div className="w-full h-2 bg-gray-200 rounded"></div>
						<div className="w-4/6 h-2 bg-gray-200 rounded"></div>
					</div>

					<a href="/pdf/cv_nathan_tirolf.pdf" download target="_blank" rel="noopener noreferrer">
						<div className="absolute inset-0 bg-dragusheen-deep/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
							<span className="text-white font-bold text-lg border border-white/30 px-6 py-2 rounded-full">
								Voir le PDF
							</span>
						</div>
					</a>
				</div>

				<div className="absolute -top-4 -right-4 bg-red-500 text-white font-bold text-xs px-3 py-1 rounded-full shadow-lg border border-white/20">
					PDF
				</div>
			</div>
		</motion.div>
	);
}


/* ----- EXPORTS ----- */
export default FakeCV;
