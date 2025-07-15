import SyntaxHighlight from "../lexer/SyntaxHighlighter";

export default function Table({ table }) {
	if (!table || table.length === 0) return null;

	// Separate header and body rows
	const headerRow = table.find(item => item.header);
	const bodyRows = table.filter(item => !item.header);

	return (
		<table className="table">
			{headerRow && (
				<thead>
					<TableRows row={headerRow.row} header={true} />
				</thead>
			)}
			<tbody>
				{bodyRows.map(item => (
					<TableRows key={item.id} row={item.row} header={false} />
				))}
			</tbody>
		</table>
	);
}

function TableRows({ row, header }) {
	if (!Array.isArray(row)) return null;

	const rows = row.map((item, index) => {
		if (!item) {
			return <td key={Math.random()}>—</td>;
		}

		// Header row: render <th>
		if (header) {
			return <th key={item.id}>{item.cell}</th>;
		}

		// First cell in a body row: no syntax highlighting
		const isFirstBodyCell = index === 0;

		return (
			<td key={item.id}>
				{isFirstBodyCell ? <SyntaxHighlight language="c" input={item.cell} /> : item.cell }
			</td>
		);
	});

	return <tr className="row">{rows}</tr>;
}
