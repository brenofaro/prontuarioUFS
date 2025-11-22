import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./SearchBar.css";

function SearchBar({ placeholder, onSearch, onFilterChange }) {
  const [filter, setFilter] = React.useState("Todos os profissionais");
  const [query, setQuery] = React.useState("");

  const handleSearch = () => {
    if (onSearch) onSearch(query, filter);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
    if (onFilterChange) onFilterChange(newFilter);
  };

  const handleClear = () => {
    setQuery("");
    if (onSearch) onSearch("", filter);
  };

  return (
    <div className="search-bar-wrapper">
      <h4 className=" mb-3" style={{fontFamily:"arial"}}>Prontuários</h4>

      <div className="search-container">
        <InputGroup className="search-input-group">
          <span className="input-group-text bg-transparent border-0">
            <i className="bi bi-search text-muted"></i>
          </span>
          <FormControl
            placeholder={placeholder || "Buscar paciente..."}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="border-0 search-input"
          />
          {query && (
            <Button
              variant="link"
              className="border-0 text-muted clear-btn"
              onClick={handleClear}
            >
              <i className="bi bi-x-lg"></i>
            </Button>
          )}
        </InputGroup>
      </div>
    </div>
  );
}

export default SearchBar;