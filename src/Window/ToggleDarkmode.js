import { load } from '@tauri-apps/plugin-store';


// We just need to find the stupid store.json
const store = await load('store.json', { autoSave: false });


// Could we merge these into one method, No
export async function ToggleDarkmode() {
	const body = document.body;
	const isDark = !body.classList.contains('darkmode');

	body.classList.toggle('darkmode', isDark);

	// Please always remember to set and save forgeting it messes everything up
	await store.set('darkmode', isDark);
	await store.save();
}


// This is what loads in the theme on the startup
export async function LoadTheme() {
	const saved = await store.get('darkmode');
	
	if (saved === true) {
		document.body.classList.add('darkmode');
	}
}
