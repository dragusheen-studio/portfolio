/*
    Authors:
    >> Clément Lacroix - { clacroix2@etu.uqac.cq }
    >> Lucas Aubriet - { laubriet@etu.uqac.cq }
    >> Martin Vidal - { mvidal@etu.uqac.cq }
    >> Nathan TIROLF - { ntirolf@etu.uqac.cq }
    >> Romane Lesueur - { rlesueur@etu.uqac.cq }

    („• ֊ •„)❤    <    Have a good day !
    --U-----U------------------------
*/


/* ----- PRIVATE FUNCTIONS ----- */
const _getHeaders = (contentType: string | null = "application/json") => {
    let headers: HeadersInit = {};

    if (contentType) {
        headers = { ...headers, "Content-Type": contentType };
    }

    const token = import.meta.env.VITE_GITHUB_TOKEN;
    if (token) {
        headers = {
            ...headers,
            "Authorization": `Bearer ${token}`,
        };
    }

    return headers;
};


/* ----- PUBLIC FUNCTIONS ----- */
function fetchGet(url: string) {
    return fetch(url, {
        method: "GET",
        headers: _getHeaders(),
    });
}


/* ----- EXPORT ----- */
export { fetchGet }
