import { getCurrentWindow } from '@tauri-apps/api/window';

const appWindow = getCurrentWindow();


export async function toggleFullscreen() {
	const isFullscreen = await appWindow.isFullscreen();
	await appWindow.setFullscreen(!isFullscreen);
}

function handleKeyPress(e) {
	if (e.key === 'F11') {
		e.preventDefault();
		toggleFullscreen();
	}
}

if (typeof window !== 'undefined') {
	window.addEventListener('keydown', handleKeyPress);
}