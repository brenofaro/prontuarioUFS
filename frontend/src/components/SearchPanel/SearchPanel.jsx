import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

function SearchPanel() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Carrega todos os pacientes ao montar o componente
  useEffect(() => {
    fetchAllPacientes();
  }, []);

  // Função para buscar todos os pacientes
  const fetchAllPacientes = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/pacientes");
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

  // Função de busca
  const handleSearch = async (query, filter) => {
    // Se a busca estiver vazia, recarrega todos os pacientes
    if (!query.trim()) {
      fetchAllPacientes();
      return;
    }

    setLoading(true);
    try {
      // 🔍 Detecta se o input é um CPF (11 dígitos numéricos)
      const cleaned = query.replace(/\D/g, ""); // remove pontuação
      const isCpf = /^[0-9]{11}$/.test(cleaned);

      // Define o parâmetro da URL
      const param = isCpf
        ? `cpf=${encodeURIComponent(cleaned)}`
        : `nome=${encodeURIComponent(query)}`;

      const url = `http://localhost:8080/pacientes/buscar/?${param}`;

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
        placeholder="Digite o nome ou CPF do paciente..."
        onSearch={handleSearch}
      />
      <SearchResults results={results} loading={loading} />
    </div>
  );
}

export default SearchPanel;