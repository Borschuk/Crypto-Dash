function FilterInput({ filter, onFilterChange }) {
	return (
		<div className="filter">
			<label htmlFor="filter">Filter:</label>
			<input
				id="filter"
				type="text"
				value={filter}
				placeholder="Search by name or symbol..."
				onChange={(e) => onFilterChange(e.target.value)}
			/>
		</div>
	);
}

export default FilterInput;
