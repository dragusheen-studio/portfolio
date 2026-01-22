/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { type ReactNode } from "react";
import { motion } from "framer-motion";


/* ----- PROPS ----- */
interface BentoCardProps {
	children: ReactNode;
	className?: string;
	onClick?: () => void;
}


/* ----- COMPONENT ----- */
function BentoCard({ children, className = "", onClick }: BentoCardProps) {
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: 20 },
				visible: { opacity: 1, y: 0 }
			}}
			onClick={onClick}
			className={`glass-panel p-6 flex flex-col justify-between overflow-hidden relative group hover:bg-white/5 transition-colors duration-500 ${className}`}
		>
			{children}
		</motion.div>
	);
}


/* ----- EXPORT ----- */
export default BentoCard;
