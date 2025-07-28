import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const supportedLanguages = ["en", "fr", "de", "es"];

export default function LanguageSelector() {
	const navigate = useNavigate();
	const location = useLocation();
	const dropdownRef = useRef(null);
	const [open, setOpen] = useState(false);

	const currentLang = location.pathname.split("/")[1] || "en";

	const toggleDropdown = () => setOpen(prev => !prev);

	const handleSelect = (lang) => {
		const parts = location.pathname.split("/");
		parts[1] = lang;
		const newPath = parts.join("/");
		navigate(newPath);
		setOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!dropdownRef.current?.contains(event.target)) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div ref={dropdownRef}>
			<button className="lang-icon-button" onClick={toggleDropdown} aria-label="Select language">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m603-202-34 97q-4 11-14 18t-22 7q-20 0-32.5-16.5T496-133l152-402q5-11 15-18t22-7h30q12 0 22 7t15 18l152 403q8 19-4 35.5T868-80q-13 0-22.5-7T831-106l-34-96H603ZM362-401 188-228q-11 11-27.5 11.5T132-228q-11-11-11-28t11-28l174-174q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H80q-17 0-28.5-11.5T40-760q0-17 11.5-28.5T80-800h240v-40q0-17 11.5-28.5T360-880q17 0 28.5 11.5T400-840v40h240q17 0 28.5 11.5T680-760q0 17-11.5 28.5T640-720h-76q-21 72-63 148t-83 116l96 98-30 82-122-125Zm266 129h144l-72-204-72 204Z"/></svg>
			</button>

			{open && (
				<ul className="languageDropdown">
					{supportedLanguages.map((lang) => (
						<li key={lang} onClick={() => handleSelect(lang)} className={lang === currentLang ? "link active" : "link"}>
							{lang.toUpperCase()}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
