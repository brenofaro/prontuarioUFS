import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import PacienteForm from "../../components/PacienteForm";
import AnamneseForm from "../../components/AnamneseForm";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResults from "../../components/SearchResults/SearchResults";

const InitialPage = () => {
  const [results, setResults] = useState([]);
  //const navigate = useNavigate(); // 👈 hook pra navegar entre páginas

  const handleSearch = () => {
    const fakeResults = [
      { nome: "Ayrton Senna", telefone: "Piloto de Fórmula 1", codigo: "15234", convenio: "particular" },
      { nome: "Vini Jr", telefone: "Jogador do Real Madrid", codigo: "67890", convenio: "particular" },
      { nome: "Rafael Nascimento", telefone: "Desenvolvedor", codigo: "11223", convenio: "particular" },
    ];
    setResults(fakeResults);
  };

  return (
    <>
      <button onClick={handleSearch} className="btn btn-secondary mb-3">
        Buscar
      </button>

      <div className="d-flex justify-content-end mb-3">
        {/* <button
          className="btn btn-primary me-3"
          onClick={() => navigate("/cadastrar-paciente")} // 👈 redireciona
        >
          Cadastrar paciente
        </button> */}
      </div>

      <SearchBar />
      <SearchResults results={results} />
    </>
  );
};

export default InitialPage;
