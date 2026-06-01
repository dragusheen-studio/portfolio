/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { fetchGet } from "@/services/fetch";
import type { IProject, IProjectLink, IProjectTag } from "@/types/Project";


/* ----- CONSTANTS ----- */
const CMS_OWNER = "dragusheen-studio";
const CMS_REPO = "portfolio-cms";
const CMS_BRANCH = "main";
const CMS_ROOT_URL = `https://api.github.com/repos/${CMS_OWNER}/${CMS_REPO}/contents/`;
const EXPIRED_TIME = 1000 * 60 * 60;


/* ----- STORAGE STATE ----- */
let lastStorageFetch: number = 0;
let isFetching: boolean = false;

const projectStorage: Map<number, IProject> = new Map();

type ProjectListener = (projects: IProject[]) => void;
const listeners: Set<ProjectListener> = new Set();


/* ----- PRIVATE ----- */
function _b64DecodeUnicode(str: string) {
	try {
		return decodeURIComponent(
			atob(str).split('').map(function (c) {
				return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
			}).join('')
		);
	} catch (e) {
		console.warn("Erreur décodage Base64", e);
		return "Erreur décodage";
	}
}

function _resolveAssetUrl(path: string | undefined, projectName: string): string {
	if (!path) return "https://placehold.co/1920x1080/1e1e1e/white?text=No+Image";
	if (path.startsWith("http") || path.startsWith("data:")) return path;

	let cleanFilename = path;
	if (path.startsWith("./")) cleanFilename = path.slice(2);
	else if (path.startsWith("/")) cleanFilename = path.slice(1);

	return `https://cdn.jsdelivr.net/gh/${CMS_OWNER}/${CMS_REPO}@${CMS_BRANCH}/${projectName}/${cleanFilename}`;
}

function _generateHashId(str: string): number {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash = (hash << 5) - hash + str.charCodeAt(i);
		hash |= 0;
	}
	return Math.abs(hash);
}

function _formatJsonToProject(jsonContent: any, projectName: string, projectId: number, targetStars: number, targetLastPush: string, targetGithubUrl: string): IProject {
	const formatTags = (tags: any[]): IProjectTag[] => {
		if (!Array.isArray(tags)) return [];
		return tags.map(t => ({ name: t.name || "Unknown", important: t.important || false }));
	};

	const formatLinks = (links: any[]): IProjectLink[] => {
		if (!Array.isArray(links)) return [];
		return links.map(l => ({ name: l.name || "Link", url: l.url || "#" }));
	};

	const formatGallery = (images: any[]): string[] => {
		if (!Array.isArray(images)) return [];
		return images.map(img => _resolveAssetUrl(img, projectName));
	};

	return {
		id: projectId,
		github_url: targetGithubUrl,
		stars: targetStars,
		last_push: targetLastPush,
		title: jsonContent.title || projectName,
		subtitle: jsonContent.subtitle || "",
		description: jsonContent.description || "",
		tags: formatTags(jsonContent.tags),
		image: _resolveAssetUrl(jsonContent.image, projectName),
		links: formatLinks(jsonContent.links),
		featured: jsonContent.featured || false,
		details: {
			role: jsonContent.details?.role || "Developer",
			client: jsonContent.details?.client ? {
				name: jsonContent.details.client.name,
				url: jsonContent.details.client.url,
				description: jsonContent.details.client.description
			} : undefined,
			status: jsonContent.details?.status || "Terminé",
			problem: jsonContent.details?.problem || "",
			solution: jsonContent.details?.solution || "",
			features: Array.isArray(jsonContent.details?.features) ? jsonContent.details.features : [],
			gallery: formatGallery(jsonContent.details?.gallery),
			version: jsonContent.details?.version || "0.0.0"
		}
	};
}

function _notifyListeners() {
	const allProjects = Array.from(projectStorage.values());
	allProjects.sort((a, b) => {
		const dateA = a.last_push ? new Date(a.last_push).getTime() : 0;
		const dateB = b.last_push ? new Date(b.last_push).getTime() : 0;
		return dateB - dateA;
	});
	listeners.forEach(listener => listener([...allProjects]));
}


/* ----- FETCH ----- */
async function _fetchCmsProjects() {
	try {
		const response = await fetchGet(CMS_ROOT_URL);
		if (!response.ok) throw new Error(`CMS API Error: ${response.status}`);

		const contents = await response.json();
		const projectFolders = contents.filter((item: any) => item.type === "dir");

		await Promise.all(
			projectFolders.map((folder: any) => _fetchSingleCmsProject(folder.name))
		);

	} catch (error) {
		console.error("Error fetching CMS contents: ", error);
	}
}

async function _fetchSingleCmsProject(projectName: string) {
	try {
		const fileUrl = `${CMS_ROOT_URL}${projectName}/portfolio.json`;
		const response = await fetchGet(fileUrl);
		if (response.status === 404) return;

		const jsonResponse = await response.json();
		const cleanContent = jsonResponse.content.replace(/\n/g, '');
		const contentDecoded = _b64DecodeUnicode(cleanContent);
		const jsonContent = JSON.parse(contentDecoded);

		let stars = 0;
		let lastUpdate = new Date().toISOString();
		let githubUrl = "";

		if (jsonContent.repo_target) {
			const targetUrl = `https://api.github.com/repos/${jsonContent.repo_target}`;
			const targetResponse = await fetchGet(targetUrl);

			if (targetResponse.ok) {
				const targetData = await targetResponse.json();
				stars = targetData.stargazers_count;
				lastUpdate = targetData.pushed_at;
				githubUrl = targetData.html_url;
			}
		}

		const projectId = _generateHashId(projectName);
		const project = _formatJsonToProject(jsonContent, projectName, projectId, stars, lastUpdate, githubUrl);

		projectStorage.set(project.id, project);

		_notifyListeners();

	} catch (error) {
		console.warn(`Impossible de charger la config pour le projet ${projectName}`, error);
	}
}

async function _checkExpired() {
	if (isFetching) return;

	const now = Date.now();
	const isExpired = (now - lastStorageFetch) > EXPIRED_TIME;
	const isEmpty = projectStorage.size === 0;

	if (isEmpty || isExpired) {
		isFetching = true;
		projectStorage.clear();
		_notifyListeners();

		await _fetchCmsProjects();

		lastStorageFetch = Date.now();
		isFetching = false;
		_notifyListeners();
	}
}


/* ----- PUBLIC FUNCTION ----- */
function subscribeToProjects(listener: ProjectListener) {
	listeners.add(listener);
	_notifyListeners();
	return () => listeners.delete(listener);
}

async function getProjects(): Promise<IProject[]> {
	await _checkExpired();
	const allProjects = Array.from(projectStorage.values());
	allProjects.sort((a, b) => {
		const dateA = a.last_push ? new Date(a.last_push).getTime() : 0;
		const dateB = b.last_push ? new Date(b.last_push).getTime() : 0;
		return dateB - dateA;
	});
	return allProjects;
}

async function getProject(id: number): Promise<IProject | undefined> {
	await _checkExpired();
	return projectStorage.get(id);
}

async function getProjectNeighbors(currentProject: IProject) {
	const allProjects = await getProjects();
	const total = allProjects.length;
	if (total <= 1) return null;

	const currentIndex = allProjects.findIndex(p => p.id === currentProject.id);
	if (currentIndex === -1) return null;

	const prevIndex = (currentIndex - 1 + total) % total;
	const nextIndex = (currentIndex + 1) % total;

	return {
		prev: allProjects[prevIndex],
		next: allProjects[nextIndex],
		isSingleNeighbor: total === 2
	};
}

async function getProjectByTitle(title: string): Promise<number | undefined> {
	const allProjects = await getProjects();
	const project = allProjects.find(p => p.title === title);
	return project?.id;
}

export { getProjects, getProject, getProjectNeighbors, getProjectByTitle, subscribeToProjects };
