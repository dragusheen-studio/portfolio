/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import type { IContactCategory } from "@/types/Contact";
import { motion } from "framer-motion";
import ContactLinkCard from "@/components/pages/contact/ContactGrid/ContactLinkCard";


/* ----- PROPS ----- */
interface ContactCategoryCardProps {
	category: IContactCategory;
	index: number;
}


/* ----- COMPONENT ----- */
function ContactCategoryCard({ category, index }: ContactCategoryCardProps) {
	return (
		<motion.div
			key={category.id}
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className="glass-panel p-8 flex flex-col border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden"
		>
			<div className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

			<div className="mb-8 relative z-10">
				<span className={`text-xs font-bold bg-clip-text text-transparent bg-linear-to-r ${category.color} uppercase tracking-widest`}>
					{category.subtitle}
				</span>
				<h3 className="text-2xl font-bold text-white mt-2 mb-3">
					{category.title}
				</h3>
				<p className="text-sm text-dragusheen-muted/80 leading-relaxed">
					{category.description}
				</p>
			</div>

			<div className="flex flex-col gap-4 relative z-10">
				{category.links.map((link) => (
					<ContactLinkCard key={link.label} link={link} />
				))}
			</div>
		</motion.div>
	);
}


/* ----- EXPORTS ----- */
export default ContactCategoryCard;
