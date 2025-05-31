import { useEffect } from "react";

export default function RememberPosition({ scrollContainerRef }) {
	useEffect(() => {
		const scrollContainer = scrollContainerRef.current;
		if (!scrollContainer) {
			return;
		} 

		const savedScroll = localStorage.getItem("sidebarScroll");
		if (savedScroll) {
			scrollContainer.scrollTop = parseInt(savedScroll, 10);
		}

		const handleScroll = () => {
			localStorage.setItem("sidebarScroll", scrollContainer.scrollTop);
		};

		scrollContainer.addEventListener("scroll", handleScroll);

		return () => {
			scrollContainer.removeEventListener("scroll", handleScroll);
		};
	}, [scrollContainerRef]);

	return null;
}
