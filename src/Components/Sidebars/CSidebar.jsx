import Chapters from "../Chapters";


export default function CSidebar() {
	return(
		<Chapters list={[
			{
				title: "C Basics", 
				tabs: [
					{ tab: "C Homepage", link: "/c/homepage", active: "active", id: "c0"}, 
					{ tab: "C Getting Started", link: "", active: "", id: "c1"}
				],
				id: "s0"
			},
			{
				title: "C Functions", 
				tabs: [
					{ tab: "Hello", link: "", active: "", id: "c2"}, 
					{ tab: "Hello", link: "", active: "", id: "c3"}
				],
				id: "s1"
			}
		]} />
	);
}