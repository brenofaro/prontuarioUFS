import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

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
          {/* <div style={{ width: "2rem" }}></div> */}
          <div className="col-4">Nome</div>
          <div className="col-4">CPF</div>
          <div className="col-4">Endereço</div>
        </li>

        <div className="overflow-auto custom-scroll" style={{ minHeight: "230px", maxHeight: "230px" }}>
          {loading ? (
            <li className="text-center text-muted py-3">Carregando...</li>
          ) : results.length > 0 ? (
            results.map((result, index) => (
              <li
                key={index}
                className="d-flex align-items-center ps-2 py-2 border-bottom hover-row"
              >
                {/* <input type="checkbox" className="form-check-input me-3" /> */}
                <div className="col-4">
                  <button onClick={() => handleClick(result.id)} className="btn btn-link text-decoration-none p-0 text-primary fw-semibold">
                    {result.nome}
                  </button>
                </div>
                <div className="col-4">{result.cpf}</div>
                <div className="col-4">{result.endereco}</div>
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
