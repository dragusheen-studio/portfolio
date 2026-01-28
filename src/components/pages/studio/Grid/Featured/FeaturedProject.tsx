/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GetProjects } from "@/configs/Projects";
import FeaturedCard from "./Card";


/* ----- COMPONENT ----- */
function FeaturedSection() {
    const featuredProjects = GetProjects().filter(p => p.featured);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused || featuredProjects.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [currentIndex, isPaused, featuredProjects.length]);


    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
    const goToSlide = (index: number) => setCurrentIndex(index);

    if (featuredProjects.length === 0) return null;

    return (
        <section
            className="w-full py-16 border-b border-white/5 bg-linear-to-b from-black/10 to-black/30 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="container max-w-4xl mx-auto relative px-4">
                <div className="relative flex items-center justify-center min-h-137.5">
                    {featuredProjects.length > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 lg:-left-20 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-dragusheen-primary hover:border-dragusheen-primary text-white transition-all z-30 group hidden sm:block"
                            >
                                <FaChevronLeft className="group-hover:-translate-x-0.5 transition-transform" />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-0 lg:-right-20 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-dragusheen-primary hover:border-dragusheen-primary text-white transition-all z-30 group hidden sm:block"
                            >
                                <FaChevronRight className="group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </>
                    )}

                    <div className="w-full relative perspective-1000">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20, rotateY: -5 }}
                                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                                exit={{ opacity: 0, x: -20, rotateY: 5 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="w-full flex justify-center"
                            >
                                <FeaturedCard project={featuredProjects[currentIndex]} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {featuredProjects.length > 1 && (
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                            {featuredProjects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? "w-6 bg-dragusheen-primary shadow-lg shadow-dragusheen-primary/50"
                                        : "w-2 bg-white/20 hover:bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}


/* ----- EXPORT ----- */
export default FeaturedSection;
