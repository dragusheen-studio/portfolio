/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import type { IProject } from "@/types/Project";


/* ----- DATAS ----- */
const Projects: IProject[] = [
	{
		id: -1,
		github_url: "https://github.com/dragusheen/Advent_of_code",
		stars: 0,
		last_push: "2025-12-11T00:58:27Z",
		title: "Advent of Code",
		subtitle: "Objectif : Complétion totale.",
		description: "Mon dépôt centralisé regroupant toutes mes solutions. Je participe activement chaque mois de décembre, tout en résolvant progressivement les années antérieures en parallèle pour atteindre les 100%.",
		image: "/img/projects/advent_of_code/logo.jpg",
		tags: [
			{ name: "Python", important: true },
			{ name: "AdventOfCode", important: true },
			{ name: "Algorithm", important: true },
			{ name: "Logic", important: false },
			{ name: "Challenge", important: false },
			{ name: "Parsing", important: false }
		],
		links: [
			{ name: "Site Officiel", url: "https://adventofcode.com" }
		],
		featured: false,
		details: {
			role: "Participant",
			status: "Saisonnier",
			problem: "L'Advent of Code est une mine d'or d'apprentissage depuis 2015. Mon défi est de rattraper tout l'historique des puzzles pour parfaire ma maîtrise de Python, au-delà du simple challenge annuel.",
			solution: "Une structure de projet rigoureuse (par Année/Jour) qui me permet de switcher entre l'édition en cours et les anciennes versions. Chaque exercice est prétexte à explorer des concepts avancés (Pathfinding, Arithmétique modulaire, Parsing, etc).",
			features: [
				"Architecture multi-années",
				"Résolution de problèmes complexes",
				"Optimisation algorithmique",
				"Parsing de données brutes"
			],
			gallery: [
				"/img/projects/advent_of_code/2025.png",
				"/img/projects/advent_of_code/2024.png",
				"/img/projects/advent_of_code/2015.png"
			]
		}
	},
	{
		id: -2,
		github_url: "https://github.com/dragusheen/EpicubeSolver",
		stars: 0,
		last_push: "2025-07-04T07:44:28Z",
		title: "Epicube Solver",
		subtitle: "Assistant de résolution en Terminal.",
		description: "Un outil en ligne de commande (CLI) permettant de numériser, manipuler et résoudre un Rubik's Cube. Il propose une saisie manuelle ou assistée par webcam pour générer la solution optimale.",
		image: "/img/projects/EpicubeSolver/Cube.png",
		tags: [
			{ name: "Python", important: true },
			{ name: "CLI", important: true },
			{ name: "OpenCV", important: false },
			{ name: "Résolution", important: false },
			{ name: "Kociemba", important: false },
			{ name: "Algorithm", important: false }
		],
		links: [],
		featured: true,
		details: {
			role: "Developer",
			status: "En pause",
			problem: "Transférer l'état d'un cube physique vers un solveur est souvent fastidieux. Les interfaces graphiques sont parfois lourdes pour un besoin simple.",
			solution: "Développement d'une interface textuelle légère capable de modéliser le cube en 2D (ASCII/Couleurs). L'entrée peut être accélérée via une webcam qui scanne les faces, avant de laisser l'algorithme calculer la solution.",
			features: [
				"Interface Terminal",
				"Visualisation d'état",
				"Saisie assistée par Webcam",
				"Notation standard"
			],
			gallery: [
				"/img/projects/EpicubeSolver/Build.png",
				"/img/projects/EpicubeSolver/View.png",
				"/img/projects/EpicubeSolver/Shuffle.png",
				"/img/projects/EpicubeSolver/Solve.png",
			]
		}
	},
];

/* ----- FUNCTION ----- */
function GetProjects() {
	return Projects;
}


/* ----- EXPORTS ----- */
export { GetProjects };
