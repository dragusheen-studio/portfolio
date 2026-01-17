/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

/* ----- IMPORT ----- */
import { motion } from "framer-motion";


/* ----- COMPONENT ----- */
function AnimatedBackground() {
	return (
		<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-dragusheen-deep">
			<motion.div
				animate={{
					x: ["-20%", "20%", "-20%"],
					y: ["-20%", "10%", "-20%"],
					scale: [1, 1.4, 1],
				}}
				transition={{
					duration: 18,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute top-[-10%] left-[-20%] w-[60vw] h-[60vw] bg-dragusheen-primary rounded-full opacity-30 blur-[120px]"
			/>

			<motion.div
				animate={{
					x: ["20%", "-20%", "20%"],
					y: ["20%", "-10%", "20%"],
					scale: [1, 1.5, 1],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute bottom-[-10%] right-[-20%] w-[70vw] h-[70vw] bg-dragusheen-secondary rounded-full opacity-20 blur-[140px]"
			/>

			<motion.div
				animate={{
					x: ["0%", "50%", "-50%", "0%"],
					y: ["0%", "30%", "-30%", "0%"],
				}}
				transition={{
					duration: 25,
					repeat: Infinity,
					ease: "linear",
				}}
				className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] bg-dragusheen-accent rounded-full opacity-20 blur-[100px]"
			/>

			<div className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
				style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E")' }}>
			</div>
		</div>
	);
}


/* ----- EXPORTS ----- */
export default AnimatedBackground;
