import React from "react";
import LanguageProfile from "../Components/LanguageProfile";
import "./../Stylesheets/Languages.css";


export default function Languages() {
	return(
		<div className="languagesPage">
			<h1 className="title">Programming Languages</h1>
			<div className="divider" ></div>
			<div className="languageProfiles">
				<LanguageProfile link={"/c/homepage"} image={""} alternate={"C Logo"} name={"C"} bio={"[Language's bio]"} />
				<LanguageProfile link={"/"} image={""} alternate={"C++ Logo"} name={"C++"} bio={"[Language's bio]"} />
				<LanguageProfile link={"/"} image={""} alternate={"C# Logo"} name={"C#"} bio={"[Language's bio]"} />

				<LanguageProfile link={"/"} image={""} alternate={"Java Logo"} name={"Java"} bio={"[Language's bio]"} />
				<LanguageProfile link={"/"} image={""} alternate={"JavaScript Logo"} name={"JavaScript"} bio={"[Language's bio]"} />
				<LanguageProfile link={"/"} image={""} alternate={"TypeScript Logo"} name={"TypeScript"} bio={"[Language's bio]"} />

				<LanguageProfile link={"/"} image={""} alternate={"Python Logo"} name={"Python"} bio={"[Language's bio]"} />
				<LanguageProfile link={"/"} image={""} alternate={"GDScript Logo"} name={"GDScript"} bio={"[Language's bio]"} />
				<LanguageProfile link={"/"} image={""} alternate={"Kotlin Logo"} name={"Kotlin"} bio={"[Language's bio]"} />
				<LanguageProfile link={"/"} image={""} alternate={"Go Logo"} name={"Go"} bio={"[Language's bio]"} />
				<LanguageProfile link={"/"} image={""} alternate={"Rust Logo"} name={"Rust"} bio={"[Language's bio]"} />
				<LanguageProfile link={"/"} image={""} alternate={"Assembly Logo"} name={"Assembly"} bio={"[Language's bio]"} />

				<LanguageProfile link={"/"} image={""} alternate={"??? Logo"} name={"???"} bio={"[Give me a few years!]"} />
				<LanguageProfile link={"/"} image={""} alternate={"Computer Science Logo"} name={"Computer Science"} bio={"[Language's bio]"} />
				<LanguageProfile link={"/"} image={""} alternate={"Data Structures Logo"} name={"Data Structures"} bio={"[Language's bio]"} />
			</div>
			
		</div>
	);
}