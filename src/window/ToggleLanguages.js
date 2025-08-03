import { load } from "@tauri-apps/plugin-store";


const store = await load("store.json", { autoSave: false });

/**
 * @param {language} language The language we now want to store in the storage
 */
export async function setLanguage(language) {
	await store.set("language", language);
	await store.save();
}

/**
 * @returns The language from storage
 */
export async function getLanguage() {
	const language = await store.get("language");
	
	return language || "en";
}