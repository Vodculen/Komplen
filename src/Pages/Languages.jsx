import LanguageProfile from "../Components/Page/LanguageProfile";
import "./../Stylesheets/Languages.css";

// This is staying this way as I don't want to make a list for this
export default function Languages() {
	// This is so logos who look bad in the diffrent modes look good again
	const isDarkMode = document.body.classList.contains('darkmode');

	return(
		<div className="languagesPage">
			<h1 className="title">Programming Languages</h1>
			<div className="divider" ></div>
			
			<div className="languageProfiles">
				<LanguageProfile link={"/c/homepage"} image={"src/Assets/Languages/C.svg"} alternate={"C Logo"} name={"C"} bio={"[Language's bio]"} />
				<LanguageProfile link={"*"} image={"src/Assets/Languages/C++.svg"} alternate={"C++ Logo"} name={"C++"} bio={"[Language's bio]"} />
				<LanguageProfile link={"*"} image={"src/Assets/Languages/CSharp.svg"} alternate={"C# Logo"} name={"C#"} bio={"[Language's bio]"} />

				<LanguageProfile link={"*"} image={"src/Assets/Languages/Java.svg"} alternate={"Java Logo"} name={"Java"} bio={"[Language's bio]"} />
				<LanguageProfile link={"*"} image={"src/Assets/Languages/JS.svg"} alternate={"JavaScript Logo"} name={"JavaScript"} bio={"[Language's bio]"} />
				<LanguageProfile link={"*"} image={"src/Assets/Languages/TS.svg"} alternate={"TypeScript Logo"} name={"TypeScript"} bio={"[Language's bio]"} />

				<LanguageProfile link={"*"} image={"src/Assets/Languages/Python.svg"} alternate={"Python Logo"} name={"Python"} bio={"[Language's bio]"} />
				<LanguageProfile link={"*"} image={"src/Assets/Languages/GDScript.svg"} alternate={"GDScript Logo"} name={"GDScript"} bio={"[Language's bio]"} />
				<LanguageProfile link={"*"} image={"src/Assets/Languages/Kotlin.svg"} alternate={"Kotlin Logo"} name={"Kotlin"} bio={"[Language's bio]"} />
				<LanguageProfile link={"*"} image={"src/Assets/Languages/Lua.svg"} alternate={"Lua Logo"} name={"Lua"} bio={"[Language's bio]"} />
				<LanguageProfile link={"*"} image={isDarkMode ? "src/Assets/Languages/RustDark.svg" : "src/Assets/Languages/Rust.svg"} alternate={"Rust Logo"} name={"Rust"} bio={"[Language's bio]"} />
				<LanguageProfile link={"*"} image={"src/Assets/Languages/Nasm.svg"} alternate={"Assembly Logo"} name={"Assembly"} bio={"[Language's bio]"} />

				<LanguageProfile link={"*"} image={isDarkMode ? "src/Assets/Languages/NADark.svg" : "src/Assets/Languages/NA.svg"} alternate={"??? Logo"} name={"???"} bio={"[Give me a few years!]"} />
				<LanguageProfile link={"*"} image={isDarkMode ? "src/Assets/Languages/NADark.svg" : "src/Assets/Languages/NA.svg"} alternate={"Computer Science Logo"} name={"Computer Science"} bio={"[Language's bio]"} />
				<LanguageProfile link={"*"} image={isDarkMode ? "src/Assets/Languages/NADark.svg" : "src/Assets/Languages/NA.svg"} alternate={"Data Structures Logo"} name={"Data Structures"} bio={"[Language's bio]"} />
			</div>
		</div>
	);
}