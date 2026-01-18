/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

/* ----- IMPORTS ----- */
import type { ReactNode } from "react";
import { Link } from "react-router-dom";


/* ----- PROPS ----- */
interface NavBarFixedListProps {
	children?: ReactNode;
	onLogoClick?: () => void;
}


/* ----- COMPONENT ----- */
function NavBarFixedList({ children, onLogoClick = () => { } }: NavBarFixedListProps) {
	return (
		<div className="glass-panel px-6 py-3 flex items-center gap-4 pointer-events-auto bg-dragusheen-deep/50 backdrop-blur-md">
			<Link
				to="/"
				className="w-8 h-8 hover:scale-110 transition-transform flex items-center justify-center"
				onClick={onLogoClick}
			>
				<img src="/svg/icon.svg" alt="Dragusheen Logo" className="w-full h-full" />
			</Link>
			{children}
		</div>
	);
}


/* ----- EXPORTS ----- */
export default NavBarFixedList;
