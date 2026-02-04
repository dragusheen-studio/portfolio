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
		id: 0,
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
			],
			version: "3.10.0",
		}
	},
	{
		id: 0,
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
		featured: false,
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
			],
			version: "1.0.0"
		}
	},
	{
		id: 0,
		github_url: "https://github.com/dragusheen/input_manager-library",
		stars: 0,
		last_push: "2024-05-14T12:20:59Z",
		title: "Input Manager Lib",
		subtitle: "Gestion d'entrées Terminal avancée.",
		description: "Une bibliothèque C++ permettant de capturer et gérer les entrées utilisateur dans un terminal avec le confort d'un shell moderne (historique, navigation curseur, auto-complétion, etc).",
		image: "/img/projects/InputManager/Logo.png",
		tags: [
			{ name: "C++", important: true },
			{ name: "CLI", important: true },
			{ name: "Lib", important: true },
			{ name: "Termios", important: true },
			{ name: "Unix", important: false }
		],
		links: [],
		featured: false,
		details: {
			role: "Library Author",
			status: "Terminé",
			problem: "L'entrée standard C++ (`std::cin`) est bloquante et limitée : impossible d'utiliser les flèches pour déplacer le curseur, pas d'historique de commandes, ni d'auto-complétion.",
			solution: "Encapsulation de la structure `termios` pour passer le terminal en mode 'raw'. Implémentation manuelle de la gestion du buffer d'entrée, des séquences d'échappement (flèches) et des raccourcis style Emacs (Ctrl+A, Ctrl+E).",
			features: [
				"Historique de commandes (Haut/Bas)",
				"Auto-complétion (Tabulation)",
				"Édition de ligne et curseur",
				"Raccourcis (Ctrl+A, Ctrl+E, Ctrl+K...)"
			],
			gallery: [],
			version: "1.0.0"
		}
	},
	{
		id: 0,
		github_url: "https://github.com/dragusheen/papaya-library-cpp",
		stars: 1,
		last_push: "2024-12-18T11:12:44Z",
		title: "Papaya Lib (C++)",
		subtitle: "Base de données fichier légère.",
		description: "Une bibliothèque C++ permettant de gérer la persistance de données via le format personnalisé `.papaya`. Elle offre une API complète pour créer, lire, mettre à jour et supprimer (CRUD) des données structurées sans la lourdeur d'un moteur SQL.",
		image: "/img/projects/Papaya/Logo.png",
		tags: [
			{ name: "C++", important: true },
			{ name: "Database", important: true },
			{ name: "Lib", important: true },
			{ name: "Filesystem", important: false },
			{ name: "DataManagement", important: false },
			{ name: "Persistence", important: false },
			{ name: "CRUD", important: false }
		],
		links: [
			{ name: "Version C", url: "./Papaya Lib (C)" }
		],
		featured: true,
		details: {
			role: "Library Author",
			status: "Maintenu",
			problem: "Stocker des données structurées nécessite souvent d'intégrer des moteurs lourds (SQLite) ou de parser manuellement des fichiers CSV/JSON sans validation de schéma.",
			solution: "Création d'un format propriétaire `.papaya` et de son moteur associé. La lib gère la sérialisation, la recherche par clé/valeur et la modification de données en mémoire avant de sauvegarder sur le disque.",
			features: [
				"Opérations CRUD complètes",
				"Recherche par Clé/Valeur",
				"Gestion d'erreurs (Exceptions custom)",
				"Persistance fichier (.papaya)"
			],
			gallery: [],
			version: "1.0.0"
		}
	},
	{
		id: 0,
		github_url: "https://github.com/dragusheen/papaya-library-c",
		stars: 1,
		last_push: "2024-06-10T20:56:16Z",
		title: "Papaya Lib (C)",
		subtitle: "Gestion de données structurées en C.",
		description: "Une bibliothèque légère écrite en C pur pour faciliter la manipulation et la persistance de données dynamiques. Elle permet de définir des schémas (clés), d'ajouter des entrées et de sauvegarder l'état sur le disque via une API simple.",
		image: "/img/projects/Papaya/Logo.png",
		tags: [
			{ name: "C", important: true },
			{ name: "Database", important: true },
			{ name: "Lib", important: true },
			{ name: "Filesystem", important: false },
			{ name: "DataManagement", important: false },
			{ name: "Persistence", important: false },
			{ name: "CRUD", important: false }
		],
		links: [
			{ name: "Version C++", url: "./Papaya Lib (C++)" }
		],
		featured: false,
		details: {
			role: "Library Author",
			status: "Stable",
			problem: "En C, gérer des données dynamiques (listes, paires clé-valeur) et leur sauvegarde fichier implique souvent une gestion complexe de la mémoire (`malloc`/`free`) et l'écriture de parseurs manuels sujets aux erreurs.",
			solution: "Une abstraction 'orientée objet' via des structures opaques (`papaya_t`). La bibliothèque encapsule la complexité des listes doublement chaînées et de la sérialisation, offrant une interface propre (`create`, `add`, `save`, `destroy`).",
			features: [
				"Persistance fichier simple",
				"Gestion mémoire encapsulée",
				"Structure de données dynamique",
				"API style Objet en C"
			],
			gallery: [],
			version: "1.0.0"
		}
	},
	{
		id: 0,
		github_url: "https://github.com/dragusheen/linked_list-library",
		stars: 0,
		last_push: "2024-07-29T09:48:12Z",
		title: "Linked List Lib",
		subtitle: "Implémentation générique en C.",
		description: "Une bibliothèque C robuste proposant une implémentation de listes simplement chaînées génériques (`void *`). Elle fournit une API standardisée utilisant le préfixe `dl_` (Dragusheen Linked-list) pour faciliter la manipulation de données dynamiques.",
		image: "/img/projects/LinkedList/Logo.png",
		tags: [
			{ name: "C", important: true },
			{ name: "Lib", important: true },
			{ name: "DataStructure", important: true },
			{ name: "Generic", important: false }
		],
		links: [],
		featured: false,
		details: {
			role: "Developer",
			status: "Terminé",
			problem: "En C standard, l'absence de conteneurs dynamiques force souvent la réécriture de structures de base pour chaque projet, ce qui est fastidieux et source d'erreurs (memory leaks).",
			solution: "Développement d'une structure générique (`void *`) agnostique du type de données. L'API expose des fonctions de haut niveau (Insert trié, Apply, Random) tout en encapsulant la complexité des pointeurs.",
			features: [
				"Support générique (void*)",
				"Programmation fonctionnelle (Apply)",
				"Insertion triée (Custom Compare)",
				"Sélection aléatoire d'éléments"
			],
			gallery: [],
			version: "1.0.0"
		}
	},
	{
		id: 0,
		github_url: "https://github.com/dragusheen/traductor-library",
		stars: 1,
		last_push: "2024-06-10T21:47:10Z",
		title: "Traductor Lib",
		subtitle: "Moteur i18n avec parsing récursif.",
		description: "Une bibliothèque C++ d'internationalisation basée sur le pattern Singleton. Elle implémente un parser personnalisé capable de lire des structures imbriquées (conteneurs) et supporte le 'Lazy Loading' pour optimiser l'empreinte mémoire.",
		image: "/img/projects/Traductor/Logo.png",
		tags: [
			{ name: "C++", important: true },
			{ name: "Lib", important: true },
			{ name: "i18n", important: true },
			{ name: "Parsing", important: false },
			{ name: "Traduction", important: false },
			{ name: "Recursion", important: false },
			{ name: "Singleton", important: false }
		],
		links: [],
		featured: false,
		details: {
			role: "Library Architect",
			status: "Terminé",
			problem: "Les formats de traduction standards (JSON, PO) nécessitent souvent des librairies tierces lourdes. Je voulais une solution native légère capable de structurer les traductions hiérarchiquement sans dépendance externe.",
			solution: "Création d'un format de fichier propriétaire (`.lang`) supportant l'imbrication (Containers). Le moteur utilise une descente récursive pour parser ces fichiers et offre un accès global via un Singleton. L'option Lazy Loading permet de ne charger que la langue active.",
			features: [
				"Format structuré (.lang)",
				"Support de conteneurs imbriqués",
				"Optimisation Lazy Loading",
				"Accès par Dot-Notation (key.sub.val)"
			],
			gallery: [],
			version: "1.0.0"
		}
	},
	{
		id: 0,
		github_url: "https://github.com/dragusheen/WebTools",
		stars: 0,
		last_push: "2024-01-01T00:00:00Z",
		title: "WebTools",
		subtitle: "Boîte à outils web centralisée.",
		description: "Une application web regroupant tous les utilitaires essentiels du quotidien (manipulation de texte, sécurité, conversion) en une seule interface propre et sans publicité. Plus besoin de chercher 10 sites différents pour des tâches simples.",
		image: "/img/projects/WebTools/Logo.png",
		tags: [
			{ name: "React", important: true },
			{ name: "TypeScript", important: true },
			{ name: "Vite", important: true },
			{ name: "Web App", important: true },
			{ name: "Utils", important: false }
		],
		links: [
			{ name: "Voir le site", url: "https://dragusheen.github.io/WebTools/" }
		],
		featured: false,
		details: {
			role: "Fullstack Developer",
			status: "En pause (Refonte prévue)",
			problem: "Pour des tâches simples (compter des mots, trier une liste, générer un mot de passe), on finit souvent par naviguer sur des sites douteux, remplis de publicités, ou par devoir chercher un outil différent pour chaque besoin.",
			solution: "Développement d'une 'Single Page Application' (SPA) centralisée, rapide et extensible. L'architecture modulaire permet d'ajouter facilement de nouveaux 'Tools' sans toucher au cœur de l'application.",
			features: [
				"Analyseur de texte (Stats)",
				"Suite Sécurité (Générateur/Testeur MDP)",
				"Outils de tri (Ordre alphabétique)",
				"Architecture modulaire (Scalable)"
			],
			gallery: [
				"/img/projects/WebTools/password_generator.png",
				"/img/projects/WebTools/password_checker.png",
				"/img/projects/WebTools/home.png",
				"/img/projects/WebTools/alphabetical_order.png",
			],
			version: "1.0.0"
		}
	},
	{
		id: 0,
		github_url: "https://github.com/dragusheen/raycaster",
		stars: 0,
		last_push: "2024-01-01T00:00:00Z",
		title: "Raycaster Engine",
		subtitle: "Labo de rendu Raycasting.",
		description: "Une implémentation didactique du Raycasting en C++. Le projet affiche simultanément une vue 2D (Debug) montrant les rayons et une vue 3D texturée, permettant de visualiser concrètement le fonctionnement de l'algorithme.",
		image: "/img/projects/Raycaster/Logo.png",
		tags: [
			{ name: "C++", important: true },
			{ name: "SFML", important: true },
			{ name: "Algorithm", important: true },
			{ name: "Math", important: false },
			{ name: "Labo", important: false },
			{ name: "Raycasting", important: false }
		],
		links: [],
		featured: false,
		details: {
			role: "Developer",
			status: "Prototype",
			problem: "Comprendre et implémenter 'from scratch' les mathématiques derrière les moteurs 3D rétro (Wolfenstein 3D) sans utiliser de moteur tout fait.",
			solution: "Création d'un moteur utilisant l'algorithme DDA. Particularité : l'application gère deux fenêtres synchronisées. L'une affiche la carte et les rayons en temps réel pour le debug, l'autre le rendu 3D final. Le tout repose sur une surcouche personnelle de la SFML.",
			features: [
				"Double rendu synchronisé (2D/3D)",
				"Algorithme DDA optimisé",
				"Gestion de caméra (FOV, Rotation)",
				"Encapsulation SFML custom"
			],
			gallery: [
				"/img/projects/Raycaster/2D.png",
				"/img/projects/Raycaster/3D.png"
			],
			version: "1.0.0"
		}
	},
	{
		id: 0,
		github_url: "https://github.com/dragusheen/tic_tac_toe_Bot",
		stars: 0,
		last_push: "2024-01-01T00:00:00Z",
		title: "Tic Tac Toe Bot",
		subtitle: "IA de morpion en Ncurses.",
		description: "Un jeu de Morpion (Tic-Tac-Toe) jouable dans le terminal contre une Intelligence Artificielle. Le projet utilise la librairie graphique Ncurses pour l'interface et un algorithme heuristique inspiré de MinMax pour la prise de décision du bot.",
		image: "/img/projects/TicTacToeBot/Logo.png",
		tags: [
			{ name: "C", important: true },
			{ name: "Ncurses", important: true },
			{ name: "AI", important: true },
			{ name: "Algorithm", important: false },
			{ name: "MinMax", important: false },
			{ name: "Terminal", important: false },
			{ name: "TUI", important: false },
			{ name: "GameDev", important: false }
		],
		links: [],
		featured: false,
		details: {
			role: "Developer",
			status: "Terminé",
			problem: "Créer un jeu interactif en C sans moteur graphique lourd, tout en offrant un adversaire (Bot) capable de jouer intelligemment et non aléatoirement.",
			solution: "Utilisation de Ncurses pour gérer les inputs clavier (flèches) et le rendu graphique ASCII. L'IA analyse le plateau à chaque tour et attribue un score à chaque case libre (+2 pour gagner, +1 pour bloquer, 0 neutre) pour choisir le coup optimal.",
			features: [
				"Interface Terminal (TUI) fluide",
				"IA Stratégique (MinMax simplifié)",
				"Contrôles au clavier",
				"Détection de victoire/nul"
			],
			gallery: [
				"/img/projects/TicTacToeBot/Game.png",
				"/img/projects/TicTacToeBot/Win.png",
				"/img/projects/TicTacToeBot/Lose.png",
				"/img/projects/TicTacToeBot/Equal.png"
			],
			version: "1.0.0"
		}
	}
];

/* ----- FUNCTION ----- */
function GetProjects() {
	if (Projects[0].id === 0) Projects.forEach((p, i) => p.id = -(i + 1));
	return Projects;
}


/* ----- EXPORTS ----- */
export { GetProjects };
