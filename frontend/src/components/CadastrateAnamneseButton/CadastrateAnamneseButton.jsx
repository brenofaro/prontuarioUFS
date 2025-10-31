import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

function CadastrateAnamneseButton({ pacienteId }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSelect = (tipo) => {
    setShowModal(false);

    // redireciona de acordo com o tipo e ID do paciente
    if (tipo === "infantil") navigate(`/anamnese-infantil/${pacienteId}`);
    else if (tipo === "padrao") navigate(`/anamnese-padrao/${pacienteId}`);
    else if (tipo === "retorno") navigate(`/anamnese-retorno/${pacienteId}`);
  };

  return (
    <>
      <div className="d-flex justify-content-end mb-3">
        <button
          className="btn btn-primary me-3 mt-3"
          onClick={handleOpenModal}
        >
          Cadastrar Anamnese
        </button>
      </div>

      {/* Modal Bootstrap */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Selecionar Tipo de Anamnese</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>Escolha o tipo de anamnese que deseja cadastrar:</p>

          <div className="d-flex justify-content-around mt-4 flex-wrap gap-2">
            <Button
              variant="outline-primary"
              onClick={() => handleSelect("infantil")}
            >
              Infantil
            </Button>
            <Button
              variant="primary"
              onClick={() => handleSelect("padrao")}
            >
              Padrão
            </Button>
            <Button
              variant="success"
              onClick={() => handleSelect("retorno")}
            >
              Retorno
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CadastrateAnamneseButton;
