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
    else if (tipo === "plano_alimentar") navigate(`/anamnese-plano-alimentar/${pacienteId}`);
    else if (tipo === "ficha_recordatorio") navigate(`/anamnese-ficha-recordatorio/${pacienteId}`);
  };

  const anamneseTypes = [
    {
      tipo: "padrao",
      titulo: "",
      descricao: "Anamnese Padrão",
      icon: "bi-person",
      variant: "success",
      color: "#198754"
    },
    {
      tipo: "infantil",
      titulo: "",
      descricao: "Anamnese Infantil",
      icon: "bi-bandaid",
      variant: "primary",
      color: "#0d6efd"
    },
    {
      tipo: "retorno",
      titulo: "",
      descricao: "Ficha de Retorno",
      icon: "bi-arrow-repeat",
      variant: "info",
      color: "#0dcaf0"
    },
    {
      tipo: "plano_alimentar",
      titulo: "",
      descricao: "Plano Alimentar",
      icon: "bi-cart2",
      variant: "secondary",
      color: "#426461ff"
    },
    {
      tipo: "ficha_recordatorio",
      titulo: "",
      descricao: "Ficha de Recordatório",
      icon: "bi-card-checklist",
      variant: "dark",
      color: "#252a2bff"
    }
  ];

  return (
    <>
      <div className="d-flex justify-content-end mb-3">
        <button
          className="btn btn-success me-3 mt-3"
          onClick={handleOpenModal}
        >
          <i className="bi bi-plus-circle me-2"></i>
          Adicionar Registro
        </button>
      </div>

      {/* Modal Bootstrap */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="w-100 text-center">
            <div className="mb-2">
              <i className="bi bi-clipboard2-pulse text-secondary" style={{ fontSize: "2.5rem" }}></i>
            </div>
            <h5 className="mb-1">Selecionar Tipo de Registro</h5>
            <small className="text-muted fw-normal">
              
            </small>
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body className="px-4 py-4">
          <div className="row g-3">
            {anamneseTypes.map((item) => (
              <div className="col" key={item.tipo}>
                <div
                  className="card h-100 border-0 shadow-sm hover-card"
                  style={{ 
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onClick={() => handleSelect(item.tipo)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 .5rem 1rem rgba(0,0,0,.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 .125rem .25rem rgba(0,0,0,.075)";
                  }}
                >
                  <div className="card-body text-center p-4">
                    <div 
                      className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: "70px",
                        height: "70px",
                        // backgroundColor: `${item.color}15`
                      }}
                    >
                      <i 
                        className={`bi ${item.icon}`}
                        style={{ 
                          fontSize: "2rem",
                          color: item.color
                        }}
                      ></i>
                    </div>
                    <h6 className="fw-semibold mb-2">{item.titulo}</h6>
                    <p className="text-muted small mb-0">
                      {item.descricao}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4 pt-3 border-top">
            <small className="text-muted">
              <i className="bi bi-info-circle me-1"></i>
              Clique no card para iniciar o cadastro
            </small>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CadastrateAnamneseButton;