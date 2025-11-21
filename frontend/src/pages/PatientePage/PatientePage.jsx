import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CadastrateAnamneseButton from "../../components/CadastrateAnamneseButton/CadastrateAnamneseButton";
import AnamneseList from "./AnamneseList";

const PatientePage = () => {
  const { id } = useParams();
  const [paciente, setPaciente] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchPatiente = async () => {
      try {
        const response = await fetch(`http://localhost:8080/pacientes/${id}`);
        const data = await response.json();
        setPaciente(data);
      } catch (error) {
        console.error("Erro ao buscar paciente:", error);
      }
    };

    fetchPatiente();
  }, [id]);

  if (!paciente) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
          <p className="text-muted mt-3">Carregando informações do paciente...</p>
        </div>
      </div>
    );
  }

  // Função para calcular idade
  const calcularIdade = (data_nascimento) => {
    const hoje = new Date();
    const nascimento = new Date(data_nascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  };

  // Formatar data
  const formatarData = (data) => {
    if (!data) return "-";
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <div className="container mt-4 mb-5">
      {/* Header com breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/" className="text-decoration-none">
              <i className="bi bi-house-door me-1"></i>
              Início
            </a>
          </li>
          <li className="breadcrumb-item active">Paciente</li>
        </ol>
      </nav>

      {/* Card de Informações do Paciente */}
      <div className="card border-0 shadow-sm rounded-3 mb-4">
        <div className="card-body p-4">
          <div className="d-flex align-items-center mb-4 pb-3 border-bottom">
            <div
              className="bg-secondary bg-gradient text-white rounded-circle d-flex align-items-center justify-content-center fw-bold flex-shrink-0"
              style={{ width: 70, height: 70, fontSize: "1.5rem" }}
            >
              {paciente.nome
                ? paciente.nome
                    .split(" ")
                    .filter((word) => word.length > 1)
                    .slice(0, 2)
                    .map((word) => word[0].toUpperCase())
                    .join("")
                : "??"}
            </div>

            <div className="ms-3 flex-grow-1">
              <h4 className="mb-1 text-dark" style={{fontFamily:"arial"}}>{paciente.nome}</h4>
              <div className="d-flex align-items-center text-muted">
                <small>
                  {calcularIdade(paciente.data_nascimento)} anos
                </small>
                <span className="mx-2">•</span>
                <small>
                  Paciente
                </small>
              </div>
            </div>

            
          </div>

          <div className="row g-3">
            <div className="col-md-4">
              <div className="d-flex align-items-start">
                {/* <i className="bi bi-card-text text-secondary me-2 mt-1"></i> */}
                <div>
                  <small className="text-muted d-block">Telefone</small>
                  <span className="fw-medium">{paciente.telefone || "-"}</span>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="d-flex align-items-start">
                {/* <i className="bi bi-calendar-event text-secondary me-2 mt-1"></i> */}
                <div>
                  <small className="text-muted d-block">Data de Nascimento</small>
                  <span className="fw-medium">
                    {formatarData(paciente.data_nascimento)}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="d-flex align-items-start">
                <i className="bi bi-geo-alt text-secondary me-2 mt-1"></i>
                <div>
                  <small className="text-muted d-block">Endereço</small>
                  <span className="fw-medium">{paciente.endereco || "-"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Título da seção de anamneses */}
      <div>
        <CadastrateAnamneseButton pacienteId={id} />
      </div>

      {/* Lista de anamneses */}
      <div className="mb-4">
        <AnamneseList />
      </div>

      {/* Botão Voltar */}
      <div className="d-flex justify-content-start mt-5">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClick}
        >
          <i className="bi bi-arrow-left me-2"></i>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default PatientePage;