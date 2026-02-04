/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/


/* ----- IMPORTS ----- */
import type { ITimelineChapter } from "@/types/TimelineChapter";


/* ----- DATAS ----- */
const TimelineChapter: ITimelineChapter[] = [
    {
        id: 0,
        navLabel: "Le Commencement - Epitech",
        year: "2022",
        title: "Le Commencement",
        subtitle: "Epitech - Programme Grande École",
        description: "Le choc de la Piscine. La découverte que le code n'est pas de la magie, mais de la logique pure. Apprentissage intensif du C, de la gestion mémoire et des bases de l'architecture logicielle. Les premières nuits blanches pour se rendre compte qu'au final, l'ancien push était meilleur...",
        quote: "Ma première expérience de code et surtout ce premier pied dans un monde que je ne quitterais plus !",
        tags: ["C / C++", "Unix", "Algorithmique", "Résilience"],
        theme: "from-[#207db1] to-[#2ca9ef]",
        image: "/img/timeline/epitech_logo.png",
        links: [],
    },

    {
        id: 0,
        navLabel: "L'Exigence - Indigen Solution",
        year: "Juil. 2023 - Déc. 2023",
        title: "L'Exigence du Pixel",
        subtitle: "Indigen Solution - Développeur Web",
        description: "Premier saut dans le grand bain professionnel. Développement pour des clients prestigieux comme Nespresso ou le Yacht Club de Monaco. Ici, 'à peu près' n'existe pas. Apprentissage de la rigueur Front-End et du respect absolu des maquettes.",
        quote: "Ma première expérience professionnelle avec un mentor qui a parfaitement su me transmettre sa passion et sa rigueur !",
        tags: ["React", "Luxe", "Rigueur", "CSS Expert"],
        theme: "from-[#ca0574] to-[#ff079e]",
        image: "/img/timeline/indigen_logo.png",
        links: [],
    },

    {
        id: 0,
        navLabel: "Transmettre - Epitech",
        year: "Fév. 2024 - Mars 2025",
        title: "Apprendre en Transmettant",
        subtitle: "Epitech Nice - Assistant Pédagogique (AER)",
        description: "Passage de l'autre côté du miroir. Encadrement technique des étudiants sur les projets Système et C. Pour expliquer un concept, il faut le maîtriser à 200%. Une expérience humaine forte qui a solidifié mes bases techniques.",
        quote: "Le moment où j'ai compris que je ne voulais pas seulement coder, mais aussi apprendre et transmettre mes connaissances !",
        tags: ["Pédagogie", "Leadership", "Système", "C++"],
        theme: "from-[#ae0920] to-[#ec0c2c]",
        image: "/img/timeline/epitech_logo.png",
        links: [],
    },

    {
        id: 0,
        navLabel: "Industrie & UX - WIT",
        year: "Mars 2025 - Juil. 2025",
        title: "Au cœur de l'Industrie",
        subtitle: "WIT - Développeur Mobile & Full-Stack",
        description: "Le défi : rendre simples et fluides des processus industriels complexes via des interfaces tactiles. Focus intense sur l'Expérience Utilisateur (UX) et le développement mobile performant.",
        quote: "Un véritable défi, tant technique qu'organisationnel. Être maître de mon propre projet était une responsabilité nouvelle et excitante !",
        tags: ["React Native", "UI/UX", "Industriel", "TypeScript"],
        theme: "from-[#0087c1] to-[#00b7ff]",
        image: "/img/timeline/wit_logo.png",
        links: [],
    },

    {
        id: 0,
        navLabel: "L'Exploration - UQAC",
        year: "Août 2025 - Mai 2026",
        title: "L'Exploration",
        subtitle: "UQAC (Canada) - Échange Universitaire",
        description: "Départ pour le Saguenay. Ouverture internationale et spécialisation via un Bachelor en Jeux Vidéo. Découverte de nouvelles cultures, de nouvelles approches créatives (GameDev) et adaptation à un nouvel environnement.",
        quote: "J'y ai découvert un nouveau monde dont je n'effleurais que la surface : le Game Dev, c'est incroyable !",
        tags: ["International", "GameDev", "Adaptabilité", "Unity"],
        theme: "from-[#7c8c4d] to-[#a8be68]",
        image: "/img/timeline/uqac_logo.png",
        links: [],
    },

    {
        id: 0,
        navLabel: "L'Expression - Radio UQAC",
        year: "Sept. 2025 - Mai 2026",
        title: "L'Expression",
        subtitle: "Club Radio UQAC - Vice-Président & Monteur",
        description: "Découverte d'une passion inattendue : la voix. En tant que Vice-Président, j'ai transformé mon goût pour l'écriture en émissions concrètes. Interviewer, animer, monter : j'ai appris à structurer un récit et à captiver une audience sans une seule ligne de code. Une aventure humaine où la logique laisse place à l'émotion.",
        quote: "J'ai réalisé que raconter une histoire à travers un micro est tout aussi puissant que d'en raconter une à travers un programme.",
        tags: ["Storytelling", "Communication", "Montage Audio", "Leadership"],
        theme: "from-[#8e44ad] to-[#9b59b6]",
        image: "/img/timeline/studio_52_20.png",
        links: [
            {
                label: "Découvrir mes podcasts",
                url: "https://open.spotify.com/show/0t18hVPLS2V79KEnVE9bNQ"
            },
            {
                label: "Découvrir le Studio 52.20",
                url: "https://discord.gg/cMtqaD2Zv5"
            },
        ],
    },

    {
        id: 0,
        navLabel: "La Vision - SedNorma",
        year: "2025 - Présent",
        title: "La Vision",
        subtitle: "SedNorma - Co-fondateur & CTO",
        description: "La synthèse du parcours. Construction d'une architecture IA complète pour la conformité des ERP. Je ne code plus seulement des fonctionnalités, je bâtis un produit et une stratégie technique. L'alliance finale entre la Tech et le Design.",
        quote: "Je ne vois plus juste la fin d'un projet, mais toute sa continuité. Pour une fois, j'espère ne jamais avoir à faire le 'Push Final' !",
        tags: ["Architecture IA", "Entrepreneuriat", "Python", "Full Stack"],
        theme: "from-[#ce6304] to-[#ff8506]",
        image: "/img/timeline/sednorma_logo.png",
        links: [],
    }
];


/* ----- FUNCTION ----- */
function GetTimelineChapters() {
    if (TimelineChapter[0].id === 0) TimelineChapter.forEach((c, i) => c.id = i + 1);
    return TimelineChapter;
}


/* ----- EXPORTS ----- */
export { GetTimelineChapters };
