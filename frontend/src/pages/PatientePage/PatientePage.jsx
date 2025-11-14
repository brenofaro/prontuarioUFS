import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CadastrateAnamneseButton from "../../components/CadastrateAnamneseButton/CadastrateAnamneseButton";
import AnamneseList from "./AnamneseList";

const PatientePage = () => {
  const { id } = useParams(); // pega o ID da URL
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
    return <p className="text-center mt-4">Carregando informações do paciente...</p>;
  }

  return (
    <div className="container mt-4 border rounded p-4 bg-light">
  <div className="card border-0 shadow p-4 rounded-4 mb-3" style={{ background: "#f8f9fa" }}>
  <div className="d-flex align-items-center border-bottom pb-3 mb-3">
    <div
      className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
      style={{ width: 60, height: 60, fontSize: "1.2rem" }}
    >
      {paciente.nome
        ? paciente.nome
            .split(" ")
            .filter((word) => word.length > 1) // evita pegar preposições tipo "da", "de"
            .slice(0, 2) // pega só nome e sobrenome
            .map((word) => word[0].toUpperCase())
            .join("")
        : "??"}
    </div>

    <div className="ms-3">
      <h4 className="fw-bold mb-0 text-dark">{paciente.nome}</h4>
      <small className="text-muted">Dados do paciente</small>
    </div>
  </div>

  <div className="row text-secondary">
    <div className="col-md-6 mb-2">
      <strong>CPF:</strong> {paciente.cpf}
    </div>
    <div className="col-md-6 mb-2">
      <strong>Data de Nascimento:</strong> {paciente.dataNascimento}
    </div>
    <div className="col-12">
      <strong>Endereço:</strong> {paciente.endereco}
    </div>
  </div>
</div>


      <CadastrateAnamneseButton pacienteId={paciente.id} />
       {/* 📋 Lista de anamneses */}
      <AnamneseList/>
  <button
        type="button"
        className="btn btn-outline-secondary rounded-pill px-4"
        onClick={handleClick}
      >
        ← Voltar
      </button>
    
    </div>

    
  );
};

export default PatientePage;
