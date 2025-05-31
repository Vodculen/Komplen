import { getCurrentWindow } from '@tauri-apps/api/window';

// Probbly going to rename this to Window 
const appWindow = getCurrentWindow();


// Standard flip-flop to switch the theme
export async function toggleFullscreen() {
	const isFullscreen = await appWindow.isFullscreen();
	
	await appWindow.setFullscreen(!isFullscreen);
}


// Checks if the user hit the F11 key if so it flip-flops the theme
function handleKeyPress(e) {
	if (e.key === 'F11') {
		e.preventDefault();
		toggleFullscreen();
	}
}

if (typeof window !== 'undefined') {
	window.addEventListener('keydown', handleKeyPress);
}