/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/


/* ----- IMPORTS ----- */
import AboutHero from "@/components/pages/about/Hero";
import TimelineChapter from "@/components/pages/about/TimelineChapter";
import TimelineNav from "@/components/pages/about/TimelineNav";
import { GetTimelineChapters } from "@/configs/TimelineChapter";
import { useState, useEffect } from "react";


/* ----- COMPONENT ----- */
function About() {
    const [activeId, setActiveId] = useState(0);
    const TimelineData = GetTimelineChapters();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + (window.innerHeight / 3);

            const heroSection = document.getElementById("hero-section");
            if (heroSection) {
                if (scrollPosition < heroSection.offsetHeight) {
                    setActiveId(0);
                    return;
                }
            }

            for (let i = TimelineData.length - 1; i >= 0; i--) {
                const chapter = TimelineData[i];
                const element = document.getElementById(`chapter-${chapter.id}`);
                if (element) {
                    if (scrollPosition >= element.offsetTop) {
                        setActiveId(chapter.id);
                        return;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full relative">
            <TimelineNav chapters={TimelineData} activeId={activeId} />
            <div className="flex flex-col w-full">
                <div id="hero-section">
                    <AboutHero />
                </div>
                <div className="flex flex-col gap-0 pb-20">
                    {TimelineData.map((chapter) => (
                        <TimelineChapter key={chapter.id} data={chapter} />
                    ))}
                </div>
            </div>
        </div>
    );
}


/* ----- EXPORTS ----- */
export default About;
