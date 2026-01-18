/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }
	>> Daniil Stepanov - { daniil.stepanov@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import React from "react";


/* ----- COMPONENT ----- */
const HomePage: React.FC = () => {
	return (
		<section className="section-container flex-col gap-8">
			<div className="glass-panel p-12 text-center max-w-2xl mx-4">
				<Badge className="mb-4">Design System v2</Badge>

				<h1 className="mb-2 text-transparent h-20 bg-clip-text bg-linear-to-r from-dragusheen-primary to-dragusheen-secondary">
					Dragusheen
				</h1>

				<h2 className="text-2xl text-dragusheen-text mb-6">
					Codeur Créatif & Designer de Logique
				</h2>

				<p className="mb-8">
					Bienvenue sur le nouveau design system. Ici on teste les boutons, les typos et le fond animé.
				</p>

				<div className="flex flex-wrap justify-center gap-4">
					<Button variant="primary">Voir mes projets</Button>
					<Button variant="secondary">Me contacter</Button>
					<Button variant="ghost">Github</Button>
				</div>
			</div>

			<div className="flex gap-2">
				<Badge>React</Badge>
				<Badge>TypeScript</Badge>
				<Badge>Tailwind</Badge>
				<Badge>Spline</Badge>
			</div>
		</section>
	);
};


/* ----- EXPORTS ----- */
export default HomePage;
