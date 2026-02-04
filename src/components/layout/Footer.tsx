/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { GetPagesInNavBar } from "@/configs/PageData";
import { Link } from "react-router-dom";
import Badge from "../ui/Badge";
import { scrollToTop } from "@/services/scroll";


/* ----- COMPONENT ----- */
function Footer() {
	const currentYear = new Date().getFullYear();
	const navPages = GetPagesInNavBar();

	const socialLinks = [
		{ name: "GitHub", url: "https://github.com/Dragusheen" },
		{ name: "LinkedIn", url: "https://www.linkedin.com/in/nathan-tirolf/" },
		{ name: "Email", url: "mailto:nathan.tirolf@epitech.eu" }
	];

	return (
		<footer className="w-full py-8 relative z-10 pointer-events-none flex justify-center overflow-hidden">
			<div className="container px-4">
				<div className="glass-panel p-8 pointer-events-auto bg-dragusheen-deep/50 backdrop-blur-md flex flex-col gap-10">
					<div className="flex flex-col md:flex-row justify-between gap-8">
						<div className="flex flex-col gap-2 text-center md:text-left md:w-1/3">
							<h3 className="font-display font-bold text-2xl text-white">Dragusheen</h3>
							<p className="text-dragusheen-muted text-sm leading-relaxed">
								Création d'expériences numériques immersives et fonctionnelles.
								<br />
								Allier la logique du code à l'élégance du design.
							</p>
						</div>

						<div className="flex flex-wrap justify-center md:justify-end gap-12 md:w-2/3">
							<div className="flex flex-col gap-3 text-center md:text-right">
								<span className="text-xs font-bold text-white/40 uppercase tracking-widest">Menu</span>
								{navPages.map((page) => (
									<Link
										key={page.name}
										to={page.path}
										className="text-sm font-bold text-dragusheen-muted hover:text-dragusheen-primary transition-colors"
										onClick={scrollToTop}
									>
										{page.name}
									</Link>
								))}
							</div>
							<div className="flex flex-col gap-3 text-center md:text-right">
								<span className="text-xs font-bold text-white/40 uppercase tracking-widest">Socials</span>
								{socialLinks.map((link) => (
									<a
										key={link.name}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm font-bold text-dragusheen-muted hover:text-white transition-colors uppercase"
									>
										{link.name}
									</a>
								))}
							</div>
						</div>
					</div>
					<div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
					<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-dragusheen-muted">
						<div className="opacity-60">
							© {currentYear} Dragusheen Studio. All rights reserved.
						</div>
						<div className="flex flex-col md:flex-row items-center gap-2 opacity-80">
							<span>Designed & Built using</span>
							<Badge>React</Badge>
							<Badge>TypeScript</Badge>
							<Badge>Tailwind</Badge>
							<Badge>Vite</Badge>
						</div>
					</div>

				</div>
			</div>
		</footer>
	);
}


/* ----- EXPORTS ----- */
export default Footer;
