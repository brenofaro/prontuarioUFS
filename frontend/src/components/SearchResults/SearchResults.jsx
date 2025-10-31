import React from "react";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ results, loading }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
  navigate(`/pagina-paciente/${id}`);
};


  return (
    <div className="search-results-container mt-4 p-3 rounded shadow-sm">
      <p className="mb-3 fw-semibold text-primary">Pacientes Cadastrados</p>

      <ul className="list-unstyled border rounded bg-white">
        <li className="d-flex fw-bold border-bottom bg-light p-2">
          <div style={{ width: "2rem" }}></div>
          <div className="col-3">Nome</div>
          <div className="col-3">CPF</div>
          <div className="col-2">Endereço</div>
          <div className="col-3">Data Nascimento</div>
        </li>

        <div className="overflow-auto" style={{ maxHeight: "400px" }}>
          {loading ? (
            <li className="text-center text-muted py-3">Carregando...</li>
          ) : results.length > 0 ? (
            results.map((result, index) => (
              <li
                key={index}
                className="d-flex align-items-center ps-2 py-2 border-bottom hover-row"
              >
                <input type="checkbox" className="form-check-input me-3" />
                <div className="col-3">
                  <button onClick={() => handleClick(result.id)} className="btn btn-link text-decoration-none p-0 text-primary fw-semibold">
                    {result.nome}
                  </button>
                </div>
                <div className="col-3">{result.cpf}</div>
                <div className="col-2">{result.endereco}</div>
                <div className="col-3">{result.dataNascimento}</div>
              </li>
            ))
          ) : (
            <li className="text-center text-muted py-3">
              Nenhum resultado encontrado.
            </li>
          )}
        </div>
      </ul>
    </div>
  );
};

export default SearchResults;
