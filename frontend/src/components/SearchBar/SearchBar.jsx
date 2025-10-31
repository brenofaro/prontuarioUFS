import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
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

  return (
    <div className="search-bar-container mt-4 mb-3 p-3 rounded shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="fw-semibold text-primary mb-0">Prontuários</h5>
      </div>

      <InputGroup>
        <FormControl
          placeholder={placeholder || "Digite o nome ou CPF do paciente..."}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="search-input"
        />
        <Button
          variant="light"
          className="border-start"
          onClick={handleSearch}
          style={{
            backgroundColor: "white",
            borderColor: "#ced4da",
          }}
        >
          <FaSearch className="text-muted" />
        </Button>
      </InputGroup>
    </div>
  );
}

export default SearchBar;