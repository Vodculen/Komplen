import { getCurrentWindow } from "@tauri-apps/api/window";


const window = getCurrentWindow();

// Standard flip-flop to switch the fullscreen
export async function toggleFullscreen() {
	const isFullscreen = await window.isFullscreen();
	
	await window.setFullscreen(!isFullscreen);
}

// Checks if the user hit the F11 key if so it flip-flops the fullscreen
function handleKeyPress(e) {
	if (e.key === "F11") {
		e.preventDefault();
		toggleFullscreen();
	}
}

// Make sure that the window exists
if (typeof window !== "undefined") {
	window.addEventListener("keydown", handleKeyPress);
}