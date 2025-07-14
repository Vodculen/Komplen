import LanguageProfile from "@components/page/LanguageProfile";
import Title from "@components/page/Title";
import "@stylesheets/Languages.css";


/**
 * 
 * @returns The Language page contents
 * 
 */
export default function languages() {
	// This is to make icons that blend it with the backgrounds on diffrent themes visible
	const isDarkMode = document.body.classList.contains('darkmode');

	return(
		<div className="languagesPage">
			<Title title={"Programming Languages"} />
			
			{/* This is so the flexbox looks good at least */}
			<div className="languageProfiles">
				<LanguageProfile link={"/c/homepage"} image={"src/assets/languages/C.svg"} alternate={"C Logo"} name={"C"} bio={"[Language's bio]"} />
				<LanguageProfile link={"*"} image={"src/assets/languages/C++.svg"} alternate={"C++ Logo"} name={"C++"} bio={"[Language's bio]"} />
				<LanguageProfile link={"*"} image={"src/assets/languages/CSharp.svg"} alternate={"C# Logo"} name={"C#"} bio={"[Language's bio]"} />

				<LanguageProfile link={"/java/homepage"} image={"src/assets/languages/Java.svg"} alternate={"Java Logo"} name={"Java"} bio={"[Language's bio]"} />
				<LanguageProfile link={"*"} image={"src/assets/languages/JS.svg"} alternate={"JavaScript Logo"} name={"JavaScript"} bio={"[Language's bio]"} />
				<LanguageProfile link={"*"} image={"src/assets/languages/TS.svg"} alternate={"TypeScript Logo"} name={"TypeScript"} bio={"[Language's bio]"} />

				<LanguageProfile link={"*"} image={"src/assets/languages/Python.svg"} alternate={"Python Logo"} name={"Python"} bio={"[Language's bio]"} />
				<LanguageProfile link={"*"} image={"src/assets/languages/GDScript.svg"} alternate={"GDScript Logo"} name={"GDScript"} bio={"[Language's bio]"} />
				<LanguageProfile link={"*"} image={"src/assets/languages/Kotlin.svg"} alternate={"Kotlin Logo"} name={"Kotlin"} bio={"[Language's bio]"} />
				<LanguageProfile link={"*"} image={"src/assets/languages/Lua.svg"} alternate={"Lua Logo"} name={"Lua"} bio={"[Language's bio]"} />
				<LanguageProfile link={"*"} image={isDarkMode ? "src/assets/languages/RustDark.svg" : "src/assets/languages/Rust.svg"} alternate={"Rust Logo"} name={"Rust"} bio={"[Language's bio]"} />
				<LanguageProfile link={"*"} image={"src/assets/languages/Nasm.svg"} alternate={"Assembly Logo"} name={"Assembly"} bio={"[Language's bio]"} />

				<LanguageProfile link={"*"} image={isDarkMode ? "src/assets/languages/NADark.svg" : "src/assets/languages/NA.svg"} alternate={"??? Logo"} name={"???"} bio={"[Give me a few years!]"} />
				<LanguageProfile link={"*"} image={isDarkMode ? "src/assets/languages/NADark.svg" : "src/assets/languages/NA.svg"} alternate={"Computer Science Logo"} name={"Computer Science"} bio={"[Language's bio]"} />
				<LanguageProfile link={"*"} image={isDarkMode ? "src/assets/languages/NADark.svg" : "src/assets/languages/NA.svg"} alternate={"Data Structures Logo"} name={"Data Structures"} bio={"[Language's bio]"} />
			</div>
		</div>
	);
}