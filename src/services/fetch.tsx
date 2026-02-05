/*
    Authors:
    >> Nathan TIROLF - { ntirolf@etu.uqac.cq }

    („• ֊ •„)❤    <    Have a good day !
    --U-----U------------------------
*/


/* ----- PUBLIC FUNCTIONS ----- */

function fetchGet(targetUrl: string) {
    const encodedUrl = encodeURIComponent(targetUrl);
    const proxyUrl = `/.netlify/functions/github-api?url=${encodedUrl}`;

    return fetch(proxyUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
}


/* ----- EXPORT ----- */
export { fetchGet }
