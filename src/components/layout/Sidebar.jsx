import Chapters from "./Chapters";
import { defaultJsonLoader } from "@components/libraries/JsonLoaders";


/**
 * @returns A fully filled out and stylized sidebar
 */
export default function Sidebar() {
	const load = defaultJsonLoader("Sidebar");
	
	if (!load) {
		return null;
	}

	return <Chapters list={load} />;
}
