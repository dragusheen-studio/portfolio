/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { scrollToElement } from "@/services/scroll";
import LiveRender from "./LiveRender/LiveRender";


/* ----- COMPONENT ----- */
function StudioHero() {
	return (
		<section className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-8 py-20 overflow-hidden">

			<div className="absolute top-0 right-0 w-150 h-150 bg-dragusheen-primary/5 rounded-full blur-[150px] pointer-events-none" />
			<div className="absolute bottom-0 left-0 w-125 h-125 bg-dragusheen-secondary/5 rounded-full blur-[150px] pointer-events-none" />

			<div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8"
				>
					<Badge className="bg-white/5 border-white/10 text-white">
						Le Studio
					</Badge>

					<h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
						Plus que de simples <br />
						<span className="text-transparent bg-clip-text bg-linear-to-r from-dragusheen-primary to-dragusheen-secondary">
							devoirs.
						</span>
					</h1>

					<div className="space-y-4 text-dragusheen-muted text-lg leading-relaxed max-w-xl">
						<p>
							J'ai codé beaucoup de projets... <strong className="text-white font-medium">Mais vous ne les verrez pas tous ici.</strong>
						</p>
						<p>
							Je préfère vous montrer ce qui me définit vraiment : les projets nés d'une envie personnelle, d'un besoin réel ou d'un défi technique.
						</p>
						<p className="italic text-white/80 border-l-2 border-dragusheen-primary pl-4">
							"Bref... Voici les projets où j'ai mis un peu de mon âme (et beaucoup de café)."
						</p>
					</div>

					<div className="mt-4 pt-4">
						<Button variant="primary" onClick={() => scrollToElement("featured-projects")} className="group">
							Voir les créations
							<span className="ml-2 group-hover:translate-y-1 transition-transform duration-300">↓</span>
						</Button>
					</div>
				</motion.div>

				<div className="hidden md:block">
					<LiveRender />
				</div>
			</div>
		</section>
	);
}


/* ----- EXPORT ----- */
export default StudioHero;
