import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

function SearchPanel() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllPacientes();
  }, []);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchAllPacientes = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/pacientes`);
      if (!response.ok) throw new Error(`Erro: ${response.status}`);

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Erro ao buscar pacientes:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query, filter) => {
    if (!query.trim()) {
      fetchAllPacientes();
      return;
    }

    setLoading(true);
    try {
      const cleaned = query.replace(/\D/g, ""); 
      const isCpf = /^[0-9]{11}$/.test(cleaned);

      const param = isCpf
        ? `cpf=${encodeURIComponent(cleaned)}`
        : `nome=${encodeURIComponent(query)}`;

      const url = `${API_URL}/pacientes/buscar/?${param}`;

      console.log("Buscando em:", url);

      const response = await fetch(url);
      if (!response.ok) throw new Error(`Erro: ${response.status}`);

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Erro ao buscar pacientes:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-panel-container">
      <SearchBar
        placeholder="Digite o nome paciente..."
        onSearch={handleSearch}
      />
      <SearchResults results={results} loading={loading} />
    </div>
  );
}

export default SearchPanel;
