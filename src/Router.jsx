// src/router.js
import { createBrowserRouter } from "react-router-dom";

// Layouts
import { DefaultLayout } from "@components/layout/Layouts";
import { ExclusiveLayout } from "@components/layout/Layouts";

// Pages
import Welcome from "@pages/Welcome";
import Languages from "@pages/Languages";
import Unavailable from "@pages/Unavailable";
import Page from "@components/page/Page";

// Route Loaders
const deep2Loader = (deep1, deep2) => async () => {
	const module = await import(`@data/${deep1}/${deep2}.json`);
	return module.default;
};

const router = createBrowserRouter([
	{
		element: <ExclusiveLayout />,
		children: [
			{ index: true, element: <Welcome /> },
			{ path: "/languages", element: <Languages /> },
			{ path: "*", element: <Unavailable /> },
		],
	},
	{
		element: <DefaultLayout />,
		children: [
			{ path: "/c/homepage", element: <Page />, loader: deep2Loader("c", "Output") },
		],
	},
]);

export default router;