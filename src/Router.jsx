import { createBrowserRouter } from "react-router-dom";

// Layouts
import { DefaultLayout } from "@components/layout/Layouts";
import { ExclusiveLayout } from "@components/layout/Layouts";

// Pages
import Welcome from "@pages/Welcome";
import Languages from "@pages/Languages";
import Unavailable from "@pages/Unavailable";
import Page from "@pages/Page";

const dynamicRouteLoader = async ({ request }) => {
	const url = new URL(request.url);
	const [lang, tech, page] = url.pathname.split("/").filter(Boolean);

	if (!lang || !tech || !page) {
		throw new Response("Invalid route structure", { status: 400 });
	}

	try {
		const module = await import(`@data/${lang}/${tech}/${capitalize(page)}.json`);
		return module.default;
	} catch (err) {
		console.error("Failed to import file:", err);
		throw new Response("Page data not found", { status: 404 });
	}
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);


// Router definition
const router = createBrowserRouter([
	{
		element: <ExclusiveLayout />,
		children: [
			{ index: true, element: <Welcome /> },
			{ path: "/:lang/welcome", element: <Welcome /> },
			{ path: "/:lang/languages", element: <Languages /> },
			{ path: "/:lang/*", element: <Unavailable /> },
		],
	},
	{
		element: <DefaultLayout />,
		children: [
			{ path: "/:lang/:tech/:page", element: <Page />, loader: dynamicRouteLoader },
		],
	},
]);

export default router;
