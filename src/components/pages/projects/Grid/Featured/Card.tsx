/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import type { IProject } from "@/types/Project";
import Button from "@/components/ui/Button";
import { scrollToTop } from "@/services/scroll";


/* ----- PROPS ----- */
interface FeaturedCardProps {
    project: IProject;
}


/* ----- COMPONENT ----- */
function FeaturedCard({ project }: FeaturedCardProps) {
    return (
        <Link to={`/studio/${project.id}`} onClick={scrollToTop}>

            <div className="relative w-full max-w-lg mx-auto bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02] group cursor-pointer">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent z-10 opacity-60" />
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-yellow-500/20">
                        <FaStar size={10} /> Starred
                    </div>
                </div>

                <div className="p-8 flex flex-col items-start relative z-20 -mt-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-4 w-full"
                    >
                        <div className="flex justify-between items-start w-full">
                            <div>
                                <span className="text-dragusheen-primary font-mono text-[10px] uppercase tracking-widest mb-1 block">
                                    Sélection du Studio
                                </span>
                                <h3 className="text-3xl font-bold text-white transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                        <p className="text-sm text-white/60 font-display italic mt-1 border-l-2 border-white/10 pl-3">
                            "{project.subtitle}"
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-dragusheen-muted text-sm leading-relaxed line-clamp-3 mb-6"
                    >
                        {project.description}
                    </motion.p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 4).map(tag => (
                            <span key={tag.name} className={`text-[10px] font-mono px-2 py-1 rounded border uppercase tracking-wider ${tag.important ? "bg-dragusheen-primary/10 border-dragusheen-primary/30 text-dragusheen-primary" : "bg-white/5 border-white/10 text-white/30"}`}>
                                {tag.name}
                            </span>
                        ))}
                    </div>

                    <div className="flex w-full gap-3 pt-4 border-t border-white/5 mt-auto">
                        <Button variant="primary" className="flex-1 text-xs py-2">
                            Découvrir
                        </Button>
                    </div>
                </div>
            </div >
        </Link>
    );
}

export default FeaturedCard;
