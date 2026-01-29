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
	// --- FEATURED ---
	{
		id: 1,
		title: "SedNorma",
		subtitle: "L'IA au service de la conformité BTP.",
		description: "Plateforme SaaS révolutionnaire utilisant l'IA pour analyser automatiquement la conformité des bâtiments aux normes ERP.",
		image: "https://placehold.co/1920x1080/1e293b/38bdf8?text=SedNorma+Cover",
		tags: [
			{ name: "React", important: true },
			{ name: "Python", important: true },
			{ name: "AI / NLP", important: true },
			{ name: "SaaS", important: false }
		],
		links: [{ name: "Live", url: "https://sednorma.com" }],
		featured: true,
		details: {
			role: "Co-Founder & CTO",
			status: "En production",
			client: {
				name: "Station F",
				url: "https://stationf.co",
				description: "Incubateur de startups à Paris."
			},
			problem: "Les architectes passent 20% de leur temps à vérifier manuellement la conformité aux normes ERP (Établissements Recevant du Public), un processus fastidieux et sujet aux erreurs humaines.",
			solution: "Développement d'une architecture micro-services. Le backend Python utilise des modèles NLP (Spacy/Transformers) pour parser les documents légaux. Le frontend React permet de visualiser les erreurs directement sur les plans PDF via une surcouche vectorielle.",
			features: [
				"Analyse sémantique des documents juridiques.",
				"Visualisation d'erreurs en overlay sur PDF.",
				"Génération de rapports automatiques.",
				"Système de paiement Stripe intégré."
			],
			gallery: [
				"https://placehold.co/1200x800/1e293b/38bdf8?text=Dashboard",
				"https://placehold.co/1200x800/1e293b/38bdf8?text=Analysis+View",
				"https://placehold.co/1200x800/1e293b/38bdf8?text=Report"
			]
		}
	},
	{
		id: 2,
		title: "Papaya Library",
		subtitle: "Gestion de mémoire haute performance.",
		description: "Une librairie C++ bas niveau focalisée sur l'optimisation mémoire et les structures de données personnalisées.",
		image: "https://placehold.co/1920x1080/4c0519/fb7185?text=Papaya+Code",
		tags: [
			{ name: "C++", important: true },
			{ name: "Memory", important: true },
			{ name: "System", important: false }
		],
		links: [{ name: "Github", url: "#" }],
		featured: true,
		details: {
			role: "Lead Developer",
			status: "Maintenu (v2.0)",
			problem: "Dans les moteurs de jeux ou les systèmes temps réel, l'allocation dynamique standard (malloc/new) est trop lente et provoque de la fragmentation mémoire.",
			solution: "Implémentation d'allocateurs custom (Linear, Stack, Pool) permettant une allocation en O(1). Utilisation intensive des templates C++ moderne (C++20) pour garantir la sécurité du typage sans coût au runtime.",
			features: [
				"Zero-overhead abstraction.",
				"Conteneurs compatibles STL.",
				"Tracking de mémoire pour debug.",
				"Support multi-thread lock-free."
			],
			gallery: [
				"https://placehold.co/1200x800/4c0519/fb7185?text=Benchmark+Graph",
				"https://placehold.co/1200x800/4c0519/fb7185?text=Code+Snippet"
			]
		}
	},
	{
		id: 3,
		title: "Epicube Solver",
		subtitle: "Résolution AR temps réel via Webcam.",
		description: "Application de vision par ordinateur capable de scanner un Rubik's Cube et de guider l'utilisateur vers la solution.",
		image: "https://placehold.co/1920x1080/0f172a/6366f1?text=Epicube",
		tags: [
			{ name: "Python", important: true },
			{ name: "OpenCV", important: true },
			{ name: "Algo", important: false }
		],
		links: [{ name: "Github", url: "#" }],
		featured: true,
		details: {
			role: "Solo Developer",
			status: "Terminé",
			problem: "Résoudre un Rubik's Cube est frustrant pour les débutants, et les applications existantes demandent souvent de rentrer les couleurs manuellement.",
			solution: "Utilisation d'OpenCV pour la détection de contours et la calibration des couleurs en temps réel. L'algorithme de Kociemba (Two-Phase Algorithm) est utilisé pour trouver la solution optimale en moins de 20 mouvements.",
			features: [
				"Détection automatique des faces.",
				"Guide 3D en réalité augmentée.",
				"Solveur optimal (<20 coups).",
				"Interface intuitive."
			],
			gallery: [
				"https://placehold.co/1200x800/0f172a/6366f1?text=Scanning+Phase",
				"https://placehold.co/1200x800/0f172a/6366f1?text=Solving+Step"
			]
		}
	},

	// --- STANDARD PROJECTS ---
	{
		id: 4,
		title: "WebTools Suite",
		subtitle: "Le couteau suisse du développeur.",
		description: "Ensemble d'utilitaires web open-source regroupés dans une interface unifiée.",
		image: "https://placehold.co/1920x1080/064e3b/34d399?text=WebTools",
		tags: [
			{ name: "React", important: true },
			{ name: "TypeScript", important: false },
			{ name: "Vite", important: false }
		],
		links: [{ name: "Github", url: "#" }, { name: "Live", url: "#" }],
		featured: false,
		details: {
			role: "Frontend Developer",
			status: "En pause",
			problem: "Je passais mon temps à chercher 'JSON Formatter' ou 'Base64 Decode' sur Google et je tombais sur des sites pleins de pubs.",
			solution: "Création d'une PWA React performante qui regroupe tous ces outils en local, sans aucune requête serveur pour garantir la confidentialité des données.",
			features: [
				"Fonctionne hors-ligne (PWA).",
				"Respect total de la vie privée.",
				"Thème sombre par défaut.",
				"Plus de 20 outils intégrés."
			],
			gallery: [
				"https://placehold.co/1200x800/064e3b/34d399?text=Tool+List",
				"https://placehold.co/1200x800/064e3b/34d399?text=JSON+Editor"
			]
		}
	},
	{
		id: 5,
		title: "Vulkan Engine",
		subtitle: "Moteur de rendu 3D from scratch.",
		description: "Moteur graphique expérimental écrit en C++ utilisant l'API Vulkan.",
		image: "https://placehold.co/1920x1080/450a0a/ef4444?text=Vulkan",
		tags: [
			{ name: "C++", important: true },
			{ name: "Vulkan", important: true },
			{ name: "Graphics", important: false }
		],
		links: [{ name: "Github", url: "#" }],
		featured: false,
		details: {
			role: "Graphics Programmer",
			status: "Prototype",
			problem: "Comprendre le fonctionnement bas niveau d'une carte graphique moderne.",
			solution: "Implémentation d'un pipeline de rendu complet avec Vulkan : gestion des buffers, synchronisation GPU/CPU, et shaders SPIR-V.",
			features: [
				"Chargement de modèles GLTF.",
				"Système de matériaux PBR.",
				"Ombres dynamiques.",
				"Hot-reloading des shaders."
			],
			gallery: [
				"https://placehold.co/1200x800/450a0a/ef4444?text=Render+Output",
				"https://placehold.co/1200x800/450a0a/ef4444?text=Wireframe+Mode"
			]
		}
	},
	{
		id: 6,
		title: "Neon Dashboard",
		subtitle: "Admin panel data-viz futuriste.",
		description: "Interface d'administration inspirée du style Cyberpunk avec graphiques temps réel.",
		image: "https://placehold.co/1920x1080/2e1065/a855f7?text=Neon+Dash",
		tags: [
			{ name: "React", important: true },
			{ name: "D3.js", important: true },
			{ name: "Tailwind", important: false }
		],
		links: [{ name: "Live", url: "#" }],
		featured: false,
		details: {
			role: "UI/UX Designer & Dev",
			status: "Terminé",
			problem: "Les dashboards d'admin sont souvent ennuyeux et tristes.",
			solution: "Design d'une interface immersive avec des effets de néon (CSS box-shadow) et des graphiques D3.js fluides.",
			features: [
				"Graphiques temps réel.",
				"Thèmes personnalisables.",
				"Composants drag & drop.",
				"Responsive design."
			],
			gallery: [
				"https://placehold.co/1200x800/2e1065/a855f7?text=Overview",
				"https://placehold.co/1200x800/2e1065/a855f7?text=Analytics"
			]
		}
	},
	{
		id: 7,
		title: "EcoTrack Mobile",
		subtitle: "Suivi d'empreinte carbone personnel.",
		description: "App mobile pour calculer et suivre son empreinte carbone quotidienne.",
		image: "https://placehold.co/1920x1080/14532d/4ade80?text=EcoTrack",
		tags: [
			{ name: "React Native", important: true },
			{ name: "Node.js", important: false },
			{ name: "Maps", important: false }
		],
		links: [],
		featured: false,
		details: {
			role: "Fullstack Developer",
			status: "En développement",
			problem: "Difficile de se rendre compte de l'impact de nos déplacements quotidiens.",
			solution: "Application mobile qui détecte automatiquement les trajets (marche, voiture, vélo) et estime le CO2 émis.",
			features: [
				"Détection d'activité automatique.",
				"Gamification avec badges.",
				"Historique détaillé.",
				"Conseils écologiques."
			],
			gallery: [
				"https://placehold.co/1200x800/14532d/4ade80?text=Home+Screen",
				"https://placehold.co/1200x800/14532d/4ade80?text=Map+View"
			]
		}
	},
	{
		id: 8,
		title: "Quantum TSP",
		subtitle: "Optimisation par recuit simulé.",
		description: "Algorithmes heuristiques pour résoudre le problème du voyageur de commerce.",
		image: "https://placehold.co/1920x1080/172554/60a5fa?text=Quantum",
		tags: [
			{ name: "C++", important: true },
			{ name: "Algorithm", important: true },
			{ name: "Maths", important: false }
		],
		links: [{ name: "Github", url: "#" }],
		featured: false,
		details: {
			role: "Researcher",
			status: "Terminé",
			problem: "Le problème du voyageur de commerce est NP-Complet, impossible à résoudre parfaitement pour un grand nombre de villes.",
			solution: "Implémentation d'algorithmes d'approximation comme le Recuit Simulé (Simulated Annealing) et les Algorithmes Génétiques.",
			features: [
				"Visualisation graphique des chemins.",
				"Comparaison d'algorithmes.",
				"Gestion de datasets massifs.",
				"Optimisation multi-thread."
			],
			gallery: [
				"https://placehold.co/1200x800/172554/60a5fa?text=Graph+View",
				"https://placehold.co/1200x800/172554/60a5fa?text=Stats"
			]
		}
	},
	{
		id: 9,
		title: "Neural Chat Local",
		subtitle: "LLM quantifié sur CPU.",
		description: "Interface de chat pour faire tourner des modèles de langage localement.",
		image: "https://placehold.co/1920x1080/312e81/818cf8?text=Neural",
		tags: [
			{ name: "Python", important: true },
			{ name: "PyTorch", important: false },
			{ name: "LLM", important: true }
		],
		links: [{ name: "Github", url: "#" }],
		featured: false,
		details: {
			role: "AI Engineer",
			status: "Expérimental",
			problem: "La confidentialité des données avec ChatGPT est un problème, et faire tourner un LLM demande un gros GPU.",
			solution: "Utilisation de la quantification (4-bit) via llama.cpp pour faire tourner des modèles 7B paramètres sur un simple CPU grand public.",
			features: [
				"Inférence locale rapide.",
				"Pas de connexion internet requise.",
				"Support de Llama 2 et Mistral.",
				"API compatible OpenAI."
			],
			gallery: [
				"https://placehold.co/1200x800/312e81/818cf8?text=Chat+UI"
			]
		}
	},
	{
		id: 10,
		title: "Cyber UI Kit",
		subtitle: "Bibliothèque de composants React.",
		description: "Set de composants UI réutilisables, accessibles et animés.",
		image: "https://placehold.co/1920x1080/4a044e/e879f9?text=CyberUI",
		tags: [
			{ name: "React", important: true },
			{ name: "Figma", important: true },
			{ name: "Storybook", important: false }
		],
		links: [{ name: "Live", url: "#" }],
		featured: false,
		details: {
			role: "Design System Lead",
			status: "Publié (npm)",
			problem: "Manque de cohérence visuelle entre mes différents projets personnels.",
			solution: "Création d'un Design System complet, documenté sur Storybook, avec une tokensisation des couleurs et des espacements.",
			features: [
				"50+ composants React.",
				"Support complet de l'accessibilité (a11y).",
				"Dark mode natif.",
				"Animations Framer Motion intégrées."
			],
			gallery: [
				"https://placehold.co/1200x800/4a044e/e879f9?text=Component+Library",
				"https://placehold.co/1200x800/4a044e/e879f9?text=Docs"
			]
		}
	},
	{
		id: 11,
		title: "Rust Sniffer",
		subtitle: "Analyseur de paquets réseau.",
		description: "Outil CLI performant écrit en Rust pour capturer et analyser le trafic réseau.",
		image: "https://placehold.co/1920x1080/7c2d12/fb923c?text=Rust+Net",
		tags: [
			{ name: "Rust", important: true },
			{ name: "Network", important: true },
			{ name: "CLI", important: false }
		],
		links: [{ name: "Github", url: "#" }],
		featured: false,

		details: {
			role: "Backend Dev",
			status: "Beta",
			problem: "Wireshark est trop lourd pour des analyses rapides en terminal sur des serveurs distants.",
			solution: "Développement d'un outil CLI en Rust utilisant les raw sockets pour capturer les paquets avec une empreinte mémoire minime.",
			features: [
				"Parsing HTTP/TCP/UDP.",
				"Filtres type BPF.",
				"Export JSON/PCAP.",
				"Interface TUI interactive."
			],
			gallery: [
				"https://placehold.co/1200x800/7c2d12/fb923c?text=Terminal+View"
			]
		}
	},
	{
		id: 12,
		title: "Dreamscape Gen",
		subtitle: "Art génératif procédural.",
		description: "Exploration des algorithmes génératifs pour créer des paysages abstraits infinis.",
		image: "https://placehold.co/1920x1080/701a75/f0abfc?text=Dreamscape",
		tags: [
			{ name: "JavaScript", important: true },
			{ name: "WebGL", important: true },
			{ name: "Art", important: false }
		],
		links: [{ name: "Live", url: "#" }],
		featured: false,
		details: {
			role: "Creative Coder",
			status: "Fini",
			problem: "Explorer la frontière entre code et art.",
			solution: "Utilisation de bruits de Perlin et de shaders GLSL pour générer des terrains et des cieux uniques à chaque rechargement.",
			features: [
				"Génération infinie.",
				"Contrôles MIDI supportés.",
				"Export haute résolution.",
				"Rendu temps réel 60fps."
			],
			gallery: [
				"https://placehold.co/1200x800/701a75/f0abfc?text=Gen+Art+1",
				"https://placehold.co/1200x800/701a75/f0abfc?text=Gen+Art+2"
			]
		}
	},
	{
		id: 13,
		title: "SmartHome Hub",
		subtitle: "Dashboard domotique IoT.",
		description: "Interface centrale pour piloter des objets connectés via un Raspberry Pi.",
		image: "https://placehold.co/1920x1080/134e4a/2dd4bf?text=SmartHome",
		tags: [
			{ name: "Vue.js", important: true },
			{ name: "IoT", important: true },
			{ name: "Node.js", important: false }
		],
		links: [{ name: "Github", url: "#" }],
		featured: false,
		details: {
			role: "Maker",
			status: "Personel",
			problem: "Rassembler toutes les ampoules, prises et capteurs de marques différentes dans une seule app.",
			solution: "Serveur Node.js sur Raspberry Pi agissant comme bridge MQTT. Frontend Vue.js pour le contrôle.",
			features: [
				"Support Zigbee & WiFi.",
				"Automatisations (Scénarios).",
				"Graphiques de consommation.",
				"Contrôle vocal local."
			],
			gallery: [
				"https://placehold.co/1200x800/134e4a/2dd4bf?text=Dashboard"
			]
		}
	},
	{
		id: 14,
		title: "FlowNote",
		subtitle: "Prise de notes pour devs.",
		description: "Application de prise de notes orientée Markdown avec support des diagrammes.",
		image: "https://placehold.co/1920x1080/171717/a3a3a3?text=FlowNote",
		tags: [
			{ name: "Electron", important: true },
			{ name: "React", important: false },
			{ name: "Productivity", important: false }
		],
		links: [],
		featured: false,
		details: {
			role: "Desktop Dev",
			status: "Alpha",
			problem: "Les applis de notes classiques gèrent mal les blocs de code et les diagrammes Mermaid.",
			solution: "Éditeur Markdown WYSIWYG basé sur Electron, optimisé pour la documentation technique.",
			features: [
				"Support Mermaid.js.",
				"Syntax highlighting.",
				"Export PDF/HTML.",
				"Sync Git native."
			],
			gallery: [
				"https://placehold.co/1200x800/171717/a3a3a3?text=Editor+View"
			]
		}
	},
	{
		id: 15,
		title: "Pixel Arena",
		subtitle: "MMO 2D expérimental.",
		description: "Prototype de jeu multijoueur en temps réel dans le navigateur.",
		image: "https://placehold.co/1920x1080/431407/fca5a5?text=PixelArena",
		tags: [
			{ name: "Phaser", important: true },
			{ name: "Socket.io", important: true },
			{ name: "Game", important: false }
		],
		links: [{ name: "Live", url: "#" }],
		featured: false,
		details: {
			role: "Game Dev",
			status: "Prototype",
			problem: "Gérer la latence et la synchronisation dans un jeu navigateur rapide.",
			solution: "Architecture client-serveur autoritaire avec prédiction côté client et interpolation d'états.",
			features: [
				"Moteur physique Arcade.",
				"Chat temps réel.",
				"Système de lobby.",
				"Optimisé pour mobile."
			],
			gallery: [
				"https://placehold.co/1200x800/431407/fca5a5?text=Gameplay"
			]
		}
	}
];


/* ----- FUNCTIONS ----- */
function GetProjects() {
	return MockProjects;
}

function GetProjectById(id: number): IProject | undefined {
	return GetProjects().find(p => p.id === id);
}

function GetNextAndPreviousProject(project: IProject) {
	const index = GetProjects().findIndex(p => p.id === project.id);
	const nextProject = GetProjects()[(index + 1) % GetProjects().length];
	const prevProject = GetProjects()[(index - 1 + GetProjects().length) % GetProjects().length];
	return { nextProject, prevProject };
}


/* ----- EXPORTS ----- */
export { GetProjects, GetProjectById, GetNextAndPreviousProject };
