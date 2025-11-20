import React from "react";
import { useNavigate } from "react-router-dom";

function CadastrarPacienteButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cadastrar-paciente");
  };

  return (
    <div className="d-flex justify-content-end mt-3">
      <button
        className="btn btn-success me-3 mt-2"
        onClick={handleClick}
      >
        Cadastrar Paciente
      </button>
    </div>
  );
}

export default CadastrarPacienteButton;
