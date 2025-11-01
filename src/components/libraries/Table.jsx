import SyntaxHighlight from "../lexer/SyntaxHighlighter";


/**
 * @param {table} table The table we want to make and stylize
 * 
 * @returns The table all stylize with data
 */
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
					<TableRows key={crypto.randomUUID()} row={item.row} header={false} />
				))}
			</tbody>
		</table>
	);
}

/**
 * @param {row} row The row to stylize
 * @param {header} header To see if its a header or not 
 * 
 * @returns The stylized rows
 */
function TableRows({ row, header }) {
	if (!Array.isArray(row)) {
		return null;
	}

	const rows = row.map((item, index) => {
		if (!item) {
			return <td key={crypto.randomUUID()}>—</td>;
		}

		// Keep the theming of the block behind it
		if (header) {
			return <th key={crypto.randomUUID()}>{item.cell}</th>;
		}

		// Assuming that every table uses the first column for code 
		const isFirstBodyCell = index === 0;

		return (
			<td key={crypto.randomUUID()}>
				{isFirstBodyCell ? <SyntaxHighlight language="c" input={item.cell} /> : item.cell }
			</td>
		);
	});

	return <tr className="row">{rows}</tr>;
}
