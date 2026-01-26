/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Link } from "react-router-dom";
import FakeCV from "@/components/display/FakeCV";

function AboutHero() {
    return (
        <section className="relative w-full min-h-screen py-20 px-4 md:px-8 flex items-center justify-center">
            <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center md:items-start text-center md:text-left gap-6"
                >
                    <Badge className="bg-dragusheen-primary/10 border-dragusheen-primary/20 text-dragusheen-primary">
                        Curriculum Vitae
                    </Badge>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Mon Parcours & <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-dragusheen-primary to-dragusheen-secondary">
                            Évolution
                        </span>
                    </h1>

                    <p className="text-dragusheen-muted text-lg leading-relaxed max-w-xl">
                        Cette page n'est pas juste une liste de dates. C'est l'histoire de ma progression, de mes apprentissages et des défis techniques que j'ai relevés.
                        <br /><br />
                        Vous trouverez ici le détail de mes expériences, mais si vous préférez la version synthétique, le CV est juste là.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-2">
                        <a href="/pdf/cv_nathan_tirolf.pdf" download target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" className="group shadow-lg shadow-dragusheen-primary/20">
                                <span className="mr-2">📄</span>
                                Télécharger le CV
                                <span className="ml-2 opacity-70 group-hover:translate-x-1 transition-transform">↓</span>
                            </Button>
                        </a>

                        <Link to="/contact">
                            <Button variant="ghost">Me contacter</Button>
                        </Link>
                    </div>
                </motion.div>
                <div className="hidden md:block">
                    <FakeCV />
                </div>
            </div>
        </section>
    );
}

export default AboutHero;
