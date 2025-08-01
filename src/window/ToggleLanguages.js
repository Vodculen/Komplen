import { load } from '@tauri-apps/plugin-store';

const store = await load('store.json', { autoSave: false });

export async function setLanguage(language) {
	await store.set('language', language);
	await store.save();
}

export async function getLanguage() {
	const language = await store.get('language');
	
	return language || "en";
}