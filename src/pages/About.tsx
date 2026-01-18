/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

import Badge from "@/components/ui/Badge";

function About() {
    return (
        <section className="section-container">
            <div className="glass-panel p-12 text-center">
                <Badge className="mb-4">Timeline</Badge>
                <h1 className="text-dragusheen-primary mb-4">Mon Parcours</h1>
                <p>L'histoire de SedNorma, Epitech et mes expériences.</p>
            </div>
        </section>
    );
}

export default About;
