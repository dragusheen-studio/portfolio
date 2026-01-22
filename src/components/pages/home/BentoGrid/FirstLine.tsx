/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import BentoCard from "@/components/layout/BentoCard";
import Badge from "@/components/ui/Badge";
import FakeTerminal from "@/components/display/FakeTerminal";


/* --- COMPONENT --- */
function BentoGridFirstLine() {
	return (
		<>
			<BentoCard className="md:col-span-3 min-h-70 bg-linear-to-br from-dragusheen-deep to-dragusheen-primary/10 border border-white/5">
				<div className="z-10 text-left flex flex-col items-start">
					<Badge className="mb-4 bg-dragusheen-primary/20 text-dragusheen-primary border-dragusheen-primary/30">Front-end & Architecture</Badge>
					<h3 className="text-2xl font-bold text-white mb-2">Le code est mon outil</h3>
					<p className="text-dragusheen-muted text-sm leading-relaxed max-w-xs">
						Pour beaucoup, le front-end c'est juste "ce qu'on voit". Pour moi, c'est ce qu'on vit. J'aime le code quand il est utile, propre et qu'il sert une expérience fluide. Je ne pisse pas de la ligne pour faire joli : je cherche la logique, la performance et ce petit détail d'interaction qui rend l'utilisation agréable.
						Je ne me limite pas au navigateur web. Une interface reste une interface, quel que soit le support.
					</p>
				</div>
				<FakeTerminal />
			</BentoCard>

			<BentoCard className="md:col-span-3 min-h-70 bg-linear-to-bl from-dragusheen-deep to-dragusheen-secondary/10 border border-white/5">
				<div className="z-10 text-right flex flex-col items-end">
					<Badge className="mb-4 bg-dragusheen-secondary/20 text-dragusheen-secondary border-dragusheen-secondary/30">UI/UX & Motion</Badge>
					<h3 className="text-2xl font-bold text-white mb-2">Le design est mon langage</h3>
					<p className="text-dragusheen-muted text-sm leading-relaxed max-w-xs">
						Imaginer, c'est bien. Concrétiser, c'est mieux. Le design n'est pas une couche de peinture qu'on ajoute à la fin. C'est la structure même du projet. C'est comprendre comment une idée abstraite devient un produit utilisable.
						J'aime penser l'identité visuelle, l'ergonomie et l'émotion que va dégager un projet avant même d'écrire la première balise.					</p>
				</div>

				<div className="absolute left-0 bottom-0 p-6 opacity-40 group-hover:opacity-80 transition-opacity duration-500">
					<div className="w-16 h-16 rounded-full bg-linear-to-tr from-dragusheen-secondary to-purple-500 blur-xl"></div>
					<div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 absolute top-4 left-8 animate-bounce delay-700"></div>
				</div>
			</BentoCard>
		</>
	);
}

export default BentoGridFirstLine;
