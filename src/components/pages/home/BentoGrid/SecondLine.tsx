/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import BentoCard from "@/components/layout/BentoCard";
import Badge from "@/components/ui/Badge";
import { scrollToTop } from "@/services/scroll";
import { Link } from "react-router-dom";


/* --- COMPONENT --- */
function BentoGridSecondLine() {
	return (
		<>
			<BentoCard className="md:col-span-6 min-h-50 flex-row items-center justify-between bg-linear-to-r from-dragusheen-primary/5 via-white/5 to-dragusheen-secondary/5 border border-white/10">
				<div className="z-10 max-w-2xl relative flex flex-col items-start gap-2">
					<h3 className="text-2xl font-bold text-white mb-2">L'un ne va pas sans l'autre</h3>
					<p className="text-dragusheen-muted text-lg">
						Pourquoi séparer le fond et la forme ? C'est la rencontre des deux qui crée la magie. Le code permet de rendre réel ce que la créativité imagine. C'est exactement là que je me situe : à l'intersection, là où on construit vraiment.
					</p>
					<div className="flex gap-4">
						<Badge className="bg-dragusheen-primary/20 text-dragusheen-primary border-dragusheen-primary/30">#Code</Badge>
						<Badge className="bg-dragusheen-secondary/20 text-dragusheen-secondary border-dragusheen-secondary/30">#Design</Badge>
					</div>
					<div className="mt-6">
						<Link
							to="/studio"
							className="inline-flex items-center gap-2 text-white font-bold border-b border-dragusheen-primary pb-0.5 hover:text-dragusheen-primary transition-colors"
							onClick={scrollToTop}
						>
							Voir comment j'applique ça <span>→</span>
						</Link>
					</div>
				</div>

				<div className="hidden md:flex items-center gap-4 opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700">
					<span className="text-6xl">⚙️</span>
					<span className="text-4xl">+</span>
					<span className="text-6xl">🎨</span>
					<span className="text-4xl">=</span>
					<span className="text-6xl">🚀</span>
				</div>
			</BentoCard >
		</>
	);
}

export default BentoGridSecondLine;
