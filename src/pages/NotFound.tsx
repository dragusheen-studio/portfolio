/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }
	>> Daniil Stepanov - { daniil.stepanov@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import Button from "@/components/ui/Button";
import React from "react";
import { Link } from "react-router-dom";


/* ----- COMPONENT ----- */
const NotFoundPage: React.FC = () => {
	return (
		<section className="section-container">
			<div className="glass-panel p-12 text-center">
				<h1 className="font-bold text-transparent h-20 bg-clip-text bg-linear-to-r from-dragusheen-primary to-dragusheen-secondary">
					404
				</h1>
				<h2 className="text-2xl text-dragusheen-text mb-6">
					Cette page s'est perdue dans le néant.
				</h2>
				<div className="flex flex-wrap justify-center gap-4">
					<Link to="/">
						<Button variant="primary">Retour à l'accueil</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};


/* ----- EXPORTS ----- */
export default NotFoundPage;
