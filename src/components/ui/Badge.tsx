/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- PROPS ----- */
interface BadgeProps {
	children: string;
	color?: string;
	className?: string;
}


/* ----- COMPONENT ----- */
function Badge({ children, className }: BadgeProps) {
	return (
		<span className={`
			px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider backdrop-blur-md
			bg-white/5 border border-white/10 text-dragusheen-muted hover:text-white hover:border-dragusheen-primary/50 transition-colors
			${className}
		`}>
			{children}
		</span>
	);
}


/* ----- EXPORTS ----- */
export default Badge;
