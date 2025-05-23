import { load } from '@tauri-apps/plugin-store';

const store = await load('store.json', { autoSave: false });

export async function ToggleDarkmode() {
	const body = document.body;
	const isDark = !body.classList.contains('darkmode');

	body.classList.toggle('darkmode', isDark);

	await store.set('darkmode', isDark);
	await store.save();
}

export async function InitDarkmode() {
	const saved = await store.get('darkmode');
	
	if (saved === true) {
		document.body.classList.add('darkmode');
	}
}
