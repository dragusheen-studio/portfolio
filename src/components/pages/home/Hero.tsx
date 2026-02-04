/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { useTypewriter } from "@/services/TypeWritterEffect";
import { scrollToTop } from "@/services/scroll";


/* ----- COMPONENT ----- */
function HomeHero() {
	const typewrittenText = useTypewriter(["Dragusheen", "Nathan Tirolf"], 150, 100, 2000);

	return (
		<section className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-8 py-12">

			<div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="flex flex-col items-center md:items-start text-center md:text-left gap-6"
				>
					<Badge className="bg-dragusheen-primary/10 border-dragusheen-primary/20 text-dragusheen-primary w-fit">
						Portfolio 2026
					</Badge>

					<div className="space-y-2">
						<h1 className="text-5xl md:text-7xl font-bold tracking-tight flex flex-col gap-2">
							<span>Salut, c'est</span>
							<span className="h-16 md:h-24 flex items-center justify-center md:justify-start">
								<span className="inline-block min-w-[13ch] text-center md:text-left">
									<span className="text-transparent bg-clip-text bg-linear-to-r from-dragusheen-primary via-dragusheen-secondary to-dragusheen-accent animate-gradient-x bg-size-[200%_auto]">
										{typewrittenText}
									</span>
									<span className="animate-cursor ml-1 text-dragusheen-primary"></span>
								</span>
							</span>
						</h1>

						<h2 className="text-xl md:text-2xl text-dragusheen-text/80 font-display">
							Codeur Créatif & Designer
						</h2>
					</div>

					<p className="text-dragusheen-muted text-lg leading-relaxed max-w-md">
						Étudiant à <span className="text-white font-bold">Epitech</span>.
						Je conçois des architectures logicielles robustes et des interfaces immersives.
					</p>

					<div className="flex flex-wrap gap-4 mt-2">
						<Link to="/studio" onClick={scrollToTop}>
							<Button variant="primary">Mes Projets</Button>
						</Link>
						<Link to="/contact" onClick={scrollToTop}>
							<Button variant="secondary">Me Contacter</Button>
						</Link>
					</div>
				</motion.div>


				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
					className="relative flex justify-center md:justify-end"
				>
					<div className="relative w-72 h-72 md:w-96 md:h-96">
						<div className="absolute -inset-4 bg-linear-to-r from-dragusheen-primary to-dragusheen-secondary rounded-4xl blur-2xl opacity-30 animate-pulse"></div>
						<div className="relative h-full w-full glass-panel p-3 rounded-4xl border border-white/20 flex items-center justify-center">
							<div className="w-full h-full rounded-3xl overflow-hidden bg-dragusheen-deep/50 relative">
								<img
									src="/img/profile_picture.png"
									alt="Dragusheen Profile"
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-dragusheen-deep/60 to-transparent"></div>
							</div>

						</div>

						<motion.div
							animate={{ y: [0, -10, 0] }}
							transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
							className="absolute -top-6 -right-6 glass-panel p-4 rounded-2xl border border-white/10"
						>
							<span className="text-2xl">💻</span>
						</motion.div>

						<motion.div
							animate={{ y: [0, 10, 0] }}
							transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
							className="absolute -bottom-4 -left-4 glass-panel p-3 rounded-2xl border border-white/10"
						>
							<span className="text-2xl">🖌️</span>
						</motion.div>

					</div>
				</motion.div>

			</div>
		</section>
	);
}


/* ----- EXPORTS ----- */
export default HomeHero;
