// Experimental!!

import { load } from '@tauri-apps/plugin-store';

const theme = await load('theme.json', { autoSave: false });

async function Theme() {
	const setTheme = await theme.get('theme');
	
	if (setTheme?.value == "darkmode") {
		document.getElementById("software").classList = "darkmode";
	} else if (setTheme?.value == "lightmode") {
		document.getElementById("software").classList = "";
	}
}

export async function toggleDarkmode() {
	await theme.set("theme", { value: "darkmode" });

	const setTheme = await theme.get("theme");

	console.log(setTheme?.value);

	Theme();


	await theme.save();
}
