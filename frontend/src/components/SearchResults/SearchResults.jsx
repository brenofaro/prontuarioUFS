import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const SearchResults = ({ results, loading }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/pagina-paciente/${id}`);
  };

  // Função para formatar CPF
  const formatCPF = (cpf) => {
    if (!cpf) return "-";
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  // Ordenar pacientes por ordem alfabética
  const sortedResults = [...results].sort((a, b) => {
    const nomeA = a.nome?.toLowerCase() || "";
    const nomeB = b.nome?.toLowerCase() || "";
    return nomeA.localeCompare(nomeB);
  });

  return (
    <div className="mt-4">
      {/* Header com contador */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="d-flex align-items-center">
          <i className="bi bi-people-fill text-secondary me-2" style={{ fontSize: "1.2rem" }}></i>
          <h5 className="mb-0 " style={{fontFamily:"arial"}}>Pacientes Cadastrados</h5>
        </div>
        {!loading && results.length > 0 && (
          <span className="badge bg-primary bg-opacity-10 text-dark rounded-pill px-3 py-2">
            {results.length} {results.length === 1 ? 'paciente' : 'pacientes'}
          </span>
        )}
      </div>

      {/* Container principal */}
      <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
        {/* Estado de loading */}
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary mb-3" role="status" style={{ width: "3rem", height: "3rem" }}>
              <span className="visually-hidden">Carregando...</span>
            </div>
            <p className="text-muted mb-0">Buscando pacientes...</p>
          </div>
        ) : sortedResults.length > 0 ? (
          <>
            {/* Grid de cards */}
            <div className="p-3 overflow-y-auto fina" style={{maxHeight:"400px"}} >
              <div className="row g-3">
                {sortedResults.map((result) => (
                  <div className="col-12 col-md-6 col-lg-4" key={result.id}>
                    <div
                      className="card h-100 border patient-card"
                      style={{ cursor: "pointer", transition: "all 0.3s ease" }}
                      onClick={() => handleClick(result.id)}
                    >
                      <div className="card-body p-3">
                        {/* Avatar e nome */}
                        <div className="d-flex align-items-center mb-3">
                          <div
                            className="bg-secondary bg-gradient text-white rounded-circle d-flex align-items-center justify-content-center fw-bold flex-shrink-0"
                            style={{ width: 50, height: 50, fontSize: "1.1rem" }}
                          >
                            {result.nome
                              ? result.nome
                                  .split(" ")
                                  .filter((word) => word.length > 1)
                                  .slice(0, 2)
                                  .map((word) => word[0].toUpperCase())
                                  .join("")
                              : "??"}
                          </div>
                          <div className="ms-3 flex-grow-1 overflow-hidden">
                            <h6 className="fw-semibold mb-0 text-truncate" title={result.nome}>
                              {result.nome}
                            </h6>
                            <small className="text-muted">
                              <i className="bi bi-person-badge me-1"></i>
                              Paciente
                            </small>
                          </div>
                        </div>

                        {/* Informações */}
                        <div className="mb-2">
                          <div className="d-flex align-items-center text-muted small mb-2">
                            <i className="bi bi-telephone me-2 text-dark" style={{ fontSize: "1rem" }}></i>
                            <span className="text-muted">{result.telefone}</span>
                          </div>
                          <div className="d-flex align-items-center text-muted small">
                            <i className="bi bi-geo-alt me-2 text-secondary mt-1" style={{ fontSize: "1rem" }}></i>
                            <span className="text-truncate" title={result.endereco}>
                              {result.endereco || "Endereço não informado"}
                            </span>
                          </div>
                        </div>

                        {/* Ação */}
                        <div className="pt-2 border-top mt-3">
                          <div className="d-flex align-items-center justify-content-between">
                            <small className="text-primary fw-medium">
                              Ver prontuário
                            </small>
                            <i className="bi bi-arrow-right-circle text-primary"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          // Estado vazio
          <div className="text-center py-5">
            <div className="mb-3">
              <i className="bi bi-inbox text-muted" style={{ fontSize: "4rem" }}></i>
            </div>
            <h5 className="text-muted mb-2">Nenhum paciente encontrado</h5>
            <p className="text-muted small mb-0">
              Tente ajustar os termos da sua busca ou cadastre um novo paciente
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;