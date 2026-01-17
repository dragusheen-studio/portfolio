/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

/* ----- IMPORT ----- */
import type { ButtonHTMLAttributes, ReactNode } from "react";


/* ----- PROPS ----- */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "outline" | "ghost";
	children: ReactNode;
}


/* ----- COMPONENT ----- */
function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
	const baseStyles = "relative px-6 py-3 rounded-xl font-display font-bold transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center gap-2";

	const variants = {
		primary: "bg-dragusheen-primary text-white shadow-[0_0_20px_rgba(123,44,191,0.3)] hover:shadow-[0_0_30px_rgba(123,44,191,0.6)] hover:scale-105",
		secondary: "bg-dragusheen-surface border border-white/10 hover:bg-white/10 hover:border-dragusheen-secondary/50 hover:text-dragusheen-secondary",
		outline: "border-2 border-dragusheen-primary text-dragusheen-primary hover:bg-dragusheen-primary hover:text-white",
		ghost: "bg-transparent hover:bg-white/5 text-dragusheen-muted hover:text-white"
	};

	return (
		<button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
			{children}
		</button>
	);
}


/* ----- EXPORTS ----- */
export default Button;
