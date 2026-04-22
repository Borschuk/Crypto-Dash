function LimitSelector({ limit, onLimitChange }) {
	return (
		<div className="controls">
			<label htmlFor="limit">Number of coins:</label>
			<select
				id="limit"
				value={limit}
				onChange={(e) => onLimitChange(Number(e.target.value))}
			>
				<option value="5">Top 5</option>
				<option value="10">Top 10</option>
				<option value="20">Top 20</option>
				<option value="50">Top 50</option>
				<option value="100">Top 100</option>
			</select>
		</div>
	);
}

export default LimitSelector;
