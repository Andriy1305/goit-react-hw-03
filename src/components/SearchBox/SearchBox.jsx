const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div>
      <label htmlFor="search">Find contacts by name</label>
      <input
        id="search"
        type="text"
        value={filter}
        onChange={onFilterChange}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;
