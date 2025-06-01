import { useEffect } from "react";


/**
 * 
 * @param {*} scrollContainerRef The sidebar of that we want to remember where the user was when switching to another page with the same sidebar 
 * @returns The position on the sidebar the user was at, If we couldn't get the positon we return null
 * 
 */
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
