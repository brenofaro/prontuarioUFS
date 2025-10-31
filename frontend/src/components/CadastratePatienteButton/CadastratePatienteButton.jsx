import React from "react";
import { useNavigate } from "react-router-dom";

function CadastrarPacienteButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cadastrar-paciente");
  };

  return (
    <div className="d-flex justify-content-end mb-3">
      <button
        className="btn btn-primary me-3 mt-3"
        onClick={handleClick}
      >
        Cadastrar Paciente
      </button>
    </div>
  );
}

export default CadastrarPacienteButton;
