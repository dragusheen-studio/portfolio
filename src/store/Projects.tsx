/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { fetchGet } from "@/services/fetch";
import type { IGitHubRepo, IRepoCacheMeta } from "@/types/FetchData";
import type { IProject, IProjectDetails, IProjectLink, IProjectTag } from "@/types/Project";
import { GetProjects } from "@/configs/Projects";


/* ----- CONSTANTS ----- */
const ORGANISATION_NAME = "dragusheen-studio";
const REPOS_LIST_URL = `https://api.github.com/orgs/${ORGANISATION_NAME}/repos?type=public&sort=updated&per_page=100`;
const CONFIG_FILE_PATH = ".portfolio/portfolio.json";
const EXPIRED_TIME = 1000 * 60 * 60; // 1 heure


/* ----- STORAGE STATE ----- */
let lastStorageFetch: number = 0;
let isFetching: boolean = false;

const repositoriesMetaStorage: Map<number, IRepoCacheMeta> = new Map();
const projectStorage: Map<number, IProject> = new Map();


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

function _resolveAssetUrl(path: string | undefined, meta: IRepoCacheMeta): string {
	if (!path) return "https://placehold.co/1920x1080/1e1e1e/white?text=No+Image";

	if (path.startsWith("http") || path.startsWith("data:"))
		return path;

	let cleanFilename = path;
	if (path.startsWith("./")) {
		cleanFilename = path.slice(2);
	} else if (path.startsWith("/")) {
		cleanFilename = path.slice(1);
	}

	return `https://cdn.jsdelivr.net/gh/${ORGANISATION_NAME}/${meta.repo_name}@${meta.default_branch}/.portfolio/${cleanFilename}`;
}

function _formatRepoMeta(ghRepo: IGitHubRepo): IRepoCacheMeta {
	return {
		id: ghRepo.id,
		lastUpdate: ghRepo.pushed_at,
		github_url: ghRepo.html_url,
		repo_name: ghRepo.name,
		default_branch: ghRepo.default_branch,
		stars: ghRepo.stargazers_count
	};
}

function _formatJsonToProject(jsonContent: any, meta: IRepoCacheMeta): IProject {
	const formatTags = (tags: any[]): IProjectTag[] => {
		if (!Array.isArray(tags)) return [];
		return tags.map(t => ({
			name: t.name || "Unknown",
			important: t.important || false
		}));
	};

	const formatLinks = (links: any[]): IProjectLink[] => {
		if (!Array.isArray(links)) return [];
		return links.map(l => ({
			name: l.name || "Link",
			url: l.url || "#"
		}));
	};

	const formatGallery = (images: any[]): string[] => {
		if (!Array.isArray(images)) return [];
		return images.map(img => _resolveAssetUrl(img, meta));
	};

	const formatDetails = (d: any): IProjectDetails => {
		return {
			role: d.role || "Developer",
			client: d.client ? {
				name: d.client.name,
				url: d.client.url,
				description: d.client.description
			} : undefined,
			status: d.status || "Terminé",
			problem: d.problem || "",
			solution: d.solution || "",
			features: Array.isArray(d.features) ? d.features : [],
			gallery: formatGallery(d.gallery)
		};
	};

	return {
		id: meta.id,
		github_url: meta.github_url,
		stars: meta.stars,
		last_push: meta.lastUpdate,
		title: jsonContent.title || meta.repo_name,
		subtitle: jsonContent.subtitle || "",
		description: jsonContent.description || "",
		tags: formatTags(jsonContent.tags),
		image: _resolveAssetUrl(jsonContent.image, meta),
		links: formatLinks(jsonContent.links),
		featured: jsonContent.featured || false,
		details: formatDetails(jsonContent.details || {})
	};
}


/* ----- FETCH ----- */
async function _fetchRepositoriesList() {
	try {
		const response = await fetchGet(REPOS_LIST_URL);
		if (!response.ok) throw new Error(`GitHub API Error: ${response.status}`);

		const jsonResponses = await response.json() as IGitHubRepo[];
		for (const repoRaw of jsonResponses) {
			const meta = _formatRepoMeta(repoRaw);
			const cachedMeta = repositoriesMetaStorage.get(meta.id);

			if (!cachedMeta || cachedMeta.lastUpdate !== meta.lastUpdate)
				await _fetchProjectContent(meta);
		}
	} catch (error) {
		console.error("Error fetching repositories list: ", error);
	}
}

async function _fetchProjectContent(meta: IRepoCacheMeta) {
	try {
		const fileUrl = `https://api.github.com/repos/${ORGANISATION_NAME}/${meta.repo_name}/contents/${CONFIG_FILE_PATH}`;
		const response = await fetchGet(fileUrl);
		if (response.status === 404) return;

		const jsonResponse = await response.json();
		const cleanContent = jsonResponse.content.replace(/\n/g, '');
		const contentDecoded = _b64DecodeUnicode(cleanContent);

		const jsonContent = JSON.parse(contentDecoded);
		const project = _formatJsonToProject(jsonContent, meta);
		projectStorage.set(project.id, project);
		repositoriesMetaStorage.set(meta.id, meta);
	} catch (error) {
		console.warn(`Impossible de charger la config pour ${meta.repo_name}`, error);
	}
}

async function _checkExpired() {
	if (isFetching) return;

	const now = Date.now();
	const isExpired = (now - lastStorageFetch) > EXPIRED_TIME;
	const isEmpty = repositoriesMetaStorage.size === 0;

	if (isEmpty || isExpired) {
		isFetching = true;
		await _fetchRepositoriesList();
		lastStorageFetch = Date.now();
		isFetching = false;
	}
}


/* ----- PUBLIC FUNCTION ----- */
async function getProjects(): Promise<IProject[]> {
	await _checkExpired();
	const githubProjects = Array.from(projectStorage.values());
	const allProjects = [...githubProjects, ...GetProjects()];

	allProjects.sort((a, b) => {
		const dateA = a.last_push ? new Date(a.last_push).getTime() : 0;
		const dateB = b.last_push ? new Date(b.last_push).getTime() : 0;
		return dateB - dateA;
	});
	return allProjects;
}

async function getProject(id: number): Promise<IProject | undefined> {
	if (id < 0) return GetProjects().find(p => p.id === id);

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

export { getProjects, getProject, getProjectNeighbors, getProjectByTitle };
