export default async (req, context) => {
	const url = new URL(req.url);
	const targetUrl = url.searchParams.get("url");

	if (!targetUrl) {
		return new Response("Missing 'url' query parameter", { status: 400 });
	}

	try {
		const response = await fetch(targetUrl, {
			headers: {
				"Authorization": `token ${Netlify.env.get("GITHUB_TOKEN")}`,
				"Accept": "application/vnd.github.v3+json"
			}
		});

		const data = await response.json();

		return new Response(JSON.stringify(data), {
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*"
			}
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: 500 });
	}
};
