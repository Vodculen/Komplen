import Title from "@components/page/Title";
import { useLoaderData } from "react-router-dom";
import Section from "@components/page/Section";
import Program from "@components/page/Program";
import Code from "@components/page/Code";
import List from "@components/libraries/List";
import Table from "@components/libraries/Table";


/**
 * @returns A fully decorated and functional page from reading a JSON file
 */
export default function Page() {
	const output = useLoaderData();

	return (
		<>
			<Title title={output.page} />
			
			{output.content.map((sec, index) => (
				<Section key={index} title={sec.title} content={sec.section.map((item, sectionIndex) => {
					// When the text field has multiple fields in it (It's a waste of space if you provide a list of text and not other fields)
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
						// Incorporate a list of fields capabilities  
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
