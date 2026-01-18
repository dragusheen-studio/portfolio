/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { motion } from "framer-motion";


/* ----- PROPS ----- */
interface BurgerMenuProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}


/* ----- COMPONENT ----- */
function BurgerMenu({ isOpen, setIsOpen }: BurgerMenuProps) {
	return (
		<button
			onClick={() => setIsOpen(!isOpen)}
			className="w-8 h-8 flex flex-col justify-center items-center gap-1.5 text-dragusheen-text focus:outline-none"
		>
			<motion.span
				animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
				className="w-6 h-0.5 bg-current rounded-full origin-center"
			/>
			<motion.span
				animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
				className="w-6 h-0.5 bg-current rounded-full"
			/>
			<motion.span
				animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
				className="w-6 h-0.5 bg-current rounded-full origin-center"
			/>
		</button>
	);
}


/* ----- EXPORTS ----- */
export default BurgerMenu;
