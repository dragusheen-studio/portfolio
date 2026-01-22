/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import BentoGridFirstLine from "./FirstLine";
import BentoGridSecondLine from "./SecondLine";
import BentoGridThirdLine from "./ThirdLine";


/* --- COMPONENT --- */
function BentoGrid() {
	return (
		<section className="container mx-auto px-4 py-20 max-w-6xl">

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="mb-12 text-center"
			>
				<Badge className="mb-4">ADN</Badge>
				<h2 className="text-3xl md:text-5xl font-bold text-white">
					Double Compétence.
				</h2>
			</motion.div>

			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ staggerChildren: 0.1 }}
				className="grid grid-cols-1 md:grid-cols-6 gap-4 min-h-150"
			>
				<BentoGridFirstLine />
				<BentoGridSecondLine />
				<BentoGridThirdLine />
			</motion.div>
		</section>
	);
}

export default BentoGrid;
