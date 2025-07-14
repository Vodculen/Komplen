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

	const rows = row.map(item =>
		header ? (
			<th key={item.id}>{item.cell}</th>
		) : (
			<td key={item.id}>{item.cell}</td>
		)
	);

	return (
		<tr className="row">
			{rows}
		</tr>
	);
}
