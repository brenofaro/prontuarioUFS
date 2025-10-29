import React from "react";
import { InputGroup, FormControl, Dropdown, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

function SearchBar({ placeholder, onSearch, onFilterChange }) {
  const [filter, setFilter] = React.useState("Todos os profissionais");
  const [query, setQuery] = React.useState("");

  const handleSearch = () => {
    if (onSearch) onSearch(query, filter);
  };

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
    if (onFilterChange) onFilterChange(newFilter);
  };

  return (
    <div className="m-3">
      <h5 className="botao mb-3">Prontuários</h5>

      <InputGroup>
        <FormControl
          placeholder={placeholder || "Digite o nome ou CPF do paciente..."}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <Button
          variant="light"
          className="border-start"
          onClick={handleSearch}
          style={{ backgroundColor: "white" }}
        >
          <FaSearch className="text-muted" />
        </Button>
      </InputGroup>
    </div>
  );
}

export default SearchBar;
