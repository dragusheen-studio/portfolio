/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { GetContactLinks } from "@/configs/ContactLinks";
import { motion } from "framer-motion";
import ContactCategoryCard from "./ContactCategoryCard";


/* ----- COMPONENT ----- */
function ContactGrid() {
	return (
		<section id="contact-links" className="w-full py-20 px-4">
			<div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
				{GetContactLinks().map((category, index) => (
					<ContactCategoryCard key={category.id} category={category} index={index} />
				))}
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.5 }}
				className="mt-20 text-dragusheen-muted text-sm text-center relative z-10 px-4"
			>
				<p>Promis, je réponds. Sauf si je suis en train de debuguer un truc vraiment obscur <span className="opacity-50 italic">(et encore)</span>.</p>
			</motion.div>
		</section>
	);
}


/* ----- EXPORTS ----- */
export default ContactGrid;
