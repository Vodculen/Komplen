import TableRows from "./TableRows";

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
