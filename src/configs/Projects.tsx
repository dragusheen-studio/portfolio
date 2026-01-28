/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import type { IProject } from "@/types/Project";


/* ----- DATAS ----- */
const MockProjects: IProject[] = [
	{
		id: 1,
		title: "SedNorma",
		subtitle: "L'IA au service de la conformité BTP.",
		description: "Plateforme SaaS révolutionnaire utilisant l'IA pour analyser automatiquement la conformité des bâtiments aux normes ERP. Moteur d'analyse sémantique et dashboard client complet.",
		image: "https://placehold.co/600x400/1e293b/38bdf8?text=SedNorma",
		tags: [
			{ name: "React", important: true },
			{ name: "Python", important: true },
			{ name: "AI / NLP", important: true },
			{ name: "SaaS", important: false }
		],
		links: [{ name: "Live", url: "https://sednorma.com" }],
		featured: true
	},
	{
		id: 2,
		title: "Papaya Library",
		subtitle: "Gestion de mémoire haute performance.",
		description: "Une librairie C++ bas niveau focalisée sur l'optimisation mémoire et les structures de données personnalisées. Conçue pour les environnements critiques où chaque octet compte.",
		image: "https://placehold.co/600x400/4c0519/fb7185?text=Papaya",
		tags: [
			{ name: "C++", important: true },
			{ name: "Memory", important: true },
			{ name: "System", important: false }
		],
		links: [{ name: "Github", url: "#" }],
		featured: true
	},
	{
		id: 3,
		title: "Epicube Solver",
		subtitle: "Résolution AR temps réel via Webcam.",
		description: "Application de vision par ordinateur capable de scanner un Rubik's Cube via webcam, de modéliser son état 3D et de guider l'utilisateur vers la solution étape par étape.",
		image: "https://placehold.co/600x400/0f172a/6366f1?text=Epicube",
		tags: [
			{ name: "Python", important: true },
			{ name: "OpenCV", important: true },
			{ name: "Algo", important: false }
		],
		links: [{ name: "Github", url: "#" }],
		featured: true
	},
	{
		id: 4,
		title: "WebTools Suite",
		subtitle: "Le couteau suisse du développeur.",
		description: "Ensemble d'utilitaires web open-source (convertisseurs JSON/YAML, formateurs, générateurs de hash) regroupés dans une interface unifiée et rapide.",
		image: "https://placehold.co/600x400/064e3b/34d399?text=WebTools",
		tags: [
			{ name: "React", important: true },
			{ name: "TypeScript", important: false },
			{ name: "Vite", important: false }
		],
		links: [{ name: "Github", url: "#" }, { name: "Live", url: "#" }],
		featured: false
	},
	{
		id: 5,
		title: "Vulkan Engine",
		subtitle: "Moteur de rendu 3D from scratch.",
		description: "Moteur graphique expérimental écrit en C++ utilisant l'API Vulkan. Supporte le chargement de modèles GLTF, les lumières dynamiques et les ombres.",
		image: "https://placehold.co/600x400/450a0a/ef4444?text=Vulkan",
		tags: [
			{ name: "C++", important: true },
			{ name: "Vulkan", important: true },
			{ name: "Graphics", important: false }
		],
		links: [{ name: "Github", url: "#" }],
		featured: false
	},
	{
		id: 6,
		title: "Neon Dashboard",
		subtitle: "Admin panel data-viz futuriste.",
		description: "Interface d'administration inspirée du style Cyberpunk, intégrant des graphiques D3.js en temps réel et un système de theming CSS avancé.",
		image: "https://placehold.co/600x400/2e1065/a855f7?text=Neon+Dash",
		tags: [
			{ name: "React", important: true },
			{ name: "D3.js", important: true },
			{ name: "Tailwind", important: false }
		],
		links: [{ name: "Live", url: "#" }],
		featured: false
	},
	{
		id: 7,
		title: "EcoTrack Mobile",
		subtitle: "Suivi d'empreinte carbone personnel.",
		description: "Application mobile cross-platform permettant de calculer et suivre son empreinte carbone quotidienne via la géolocalisation et les habitudes de transport.",
		image: "https://placehold.co/600x400/14532d/4ade80?text=EcoTrack",
		tags: [
			{ name: "React Native", important: true },
			{ name: "Node.js", important: false },
			{ name: "Maps", important: false }
		],
		links: [],
		featured: false
	},
	{
		id: 8,
		title: "Quantum TSP",
		subtitle: "Optimisation par recuit simulé.",
		description: "Implémentation d'algorithmes heuristiques complexes pour résoudre le problème du voyageur de commerce sur des jeux de données massifs.",
		image: "https://placehold.co/600x400/172554/60a5fa?text=Quantum",
		tags: [
			{ name: "C++", important: true },
			{ name: "Algorithm", important: true },
			{ name: "Maths", important: false }
		],
		links: [{ name: "Github", url: "#" }],
		featured: false
	},
	{
		id: 9,
		title: "Neural Chat Local",
		subtitle: "LLM quantifié sur CPU.",
		description: "Interface de chat pour faire tourner des modèles de langage (Llama 2, Mistral) localement sur des machines grand public grâce à la quantification.",
		image: "https://placehold.co/600x400/312e81/818cf8?text=Neural",
		tags: [
			{ name: "Python", important: true },
			{ name: "PyTorch", important: false },
			{ name: "LLM", important: true }
		],
		links: [{ name: "Github", url: "#" }],
		featured: false
	},
	{
		id: 10,
		title: "Cyber UI Kit",
		subtitle: "Bibliothèque de composants React.",
		description: "Un set de composants UI réutilisables, accessibles et animés, documentés via Storybook. Design system complet prêt pour la production.",
		image: "https://placehold.co/600x400/4a044e/e879f9?text=CyberUI",
		tags: [
			{ name: "React", important: true },
			{ name: "Figma", important: true },
			{ name: "Storybook", important: false }
		],
		links: [{ name: "Live", url: "#" }],
		featured: false
	},
	{
		id: 11,
		title: "Rust Sniffer",
		subtitle: "Analyseur de paquets réseau.",
		description: "Outil CLI performant écrit en Rust pour capturer et analyser le trafic réseau en temps réel. Alternative légère à Wireshark pour le terminal.",
		image: "https://placehold.co/600x400/7c2d12/fb923c?text=Rust+Net",
		tags: [
			{ name: "Rust", important: true },
			{ name: "Network", important: true },
			{ name: "CLI", important: false }
		],
		links: [{ name: "Github", url: "#" }],
		featured: false
	},
	{
		id: 12,
		title: "Dreamscape Gen",
		subtitle: "Art génératif procédural.",
		description: "Exploration des algorithmes génératifs pour créer des paysages abstraits infinis. Utilisation de p5.js et de shaders GLSL custom.",
		image: "https://placehold.co/600x400/701a75/f0abfc?text=Dreamscape",
		tags: [
			{ name: "JavaScript", important: true },
			{ name: "WebGL", important: true },
			{ name: "Art", important: false }
		],
		links: [{ name: "Live", url: "#" }],
		featured: false
	},
	{
		id: 13,
		title: "SmartHome Hub",
		subtitle: "Dashboard domotique IoT.",
		description: "Interface centrale pour piloter des objets connectés (Lumières, Chauffage) via un Raspberry Pi. Architecture MQTT et websockets.",
		image: "https://placehold.co/600x400/134e4a/2dd4bf?text=SmartHome",
		tags: [
			{ name: "Vue.js", important: true },
			{ name: "IoT", important: true },
			{ name: "Node.js", important: false }
		],
		links: [{ name: "Github", url: "#" }],
		featured: false
	},
	{
		id: 14,
		title: "FlowNote",
		subtitle: "Prise de notes pour devs.",
		description: "Application de prise de notes orientée Markdown avec support des diagrammes de code et synchronisation cloud chiffrée.",
		image: "https://placehold.co/600x400/171717/a3a3a3?text=FlowNote",
		tags: [
			{ name: "Electron", important: true },
			{ name: "React", important: false },
			{ name: "Productivity", important: false }
		],
		links: [],
		featured: false
	},
	{
		id: 15,
		title: "Pixel Arena",
		subtitle: "MMO 2D expérimental.",
		description: "Prototype de jeu multijoueur en temps réel dans le navigateur. Utilisation de WebRTC pour une latence minimale entre les joueurs.",
		image: "https://placehold.co/600x400/431407/fca5a5?text=PixelArena",
		tags: [
			{ name: "Phaser", important: true },
			{ name: "Socket.io", important: true },
			{ name: "Game", important: false }
		],
		links: [{ name: "Live", url: "#" }],
		featured: false
	}
];


/* ----- FUNCTIONS ----- */
function GetProjects() {
	return MockProjects;
}


/* ----- EXPORTS ----- */
export { GetProjects };
