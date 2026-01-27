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
import FakeChat from "./FakeChat/FakeChat";


/* ----- COMPONENT ----- */
function ContactHero() {
	return (
		<section className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-8 py-20">

			<div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className="flex flex-col items-center md:items-start text-center md:text-left gap-6"
				>
					<Badge className="bg-dragusheen-primary/10 border-dragusheen-primary/20 text-dragusheen-primary">
						Me Contacter
					</Badge>

					<h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
						On construit quelque chose <br />
						<span className="text-transparent bg-clip-text bg-linear-to-r from-dragusheen-primary to-dragusheen-secondary">
							ensemble ?
						</span>
					</h1>

					<p className="text-dragusheen-muted text-lg leading-relaxed max-w-xl">
						Vous avez le concept, j'ai le code. <br />
						Que ce soit pour transformer une maquette en interface vivante, collaborer sur une idée folle ou simplement discuter tech et créa, ma porte est ouverte.
					</p>

					<div className="mt-4">
						<Button variant="primary" onClick={() => scrollToElement("contact-links")} className="group">
							Choisir un canal
							<span className="ml-2 group-hover:translate-y-1 transition-transform duration-300">↓</span>
						</Button>
					</div>
				</motion.div>

				<div className="hidden md:block">
					<FakeChat />
				</div>
			</div>
		</section>
	);
}


/* ----- EXPORTS ----- */
export default ContactHero;
