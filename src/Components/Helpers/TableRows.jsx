export default function TableRows({ row, header }) {
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
