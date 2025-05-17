import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="search" className={styles.label}>
        Find contacts by name
      </label>
      <input
        id="search"
        type="text"
        value={filter}
        onChange={onFilterChange}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
