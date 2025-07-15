import React from "react";
import Title from "@components/page/Title";
import output from "@data/c/Output";
import Section from "./Section";
import Program from "./Program";
import Code from "./Code";
import List from "../libraries/List";
import Table from "../libraries/Table";

export default function Page() {

	return (
		<>
			<Title title={output.page} />
			
			{output.content.map((sec, index) => (
				<Section key={index} title={sec.title} content={sec.section.map((item, sectionIndex) => {
					if (item.text && Array.isArray(item.text)) {
						return (
							<p key={sectionIndex} className="text">
								{item.text.map((part, textIndex) => {
									if (typeof part === "string") {
										return part;
									} else if (part.codeBlock) {
										return <Code key={textIndex} codeBlock={part.codeBlock} />
									} else {
										return null;
									}
								})}
							</p>
						);
					}

					if (typeof item.text === "string") {
						return <p key={sectionIndex} className="text">{item.text}</p>;
					} else if (item.program) {
						return <Program key={sectionIndex} program={item.program} />;
					} else if (item.list) {
						return <List key={sectionIndex} list={item.list} />
					} else if (item.table) {
						return <Table key={sectionIndex} table={item.table} />
					}

					return null;
				})} />
							
			))}
		</>
	);
}
