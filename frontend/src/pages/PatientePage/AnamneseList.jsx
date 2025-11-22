import React, { useEffect, useState } from "react";
import { Modal, Button, Dropdown } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import {state} from "react";


const AnamneseList = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [anamneses, setAnamneses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estados dos modais
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // ---------- MODAL DE CONFIRMAÇÃO ----------
  function ModalExcluir({ show, handleClose, handleConfirm }) {
    return (
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Tem certeza que deseja excluir este registro?
          <br />
          <strong>Essa ação não pode ser desfeita.</strong>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleConfirm}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  // ---------- MODAL DE SUCESSO ----------
  function ModalSucesso({ show, handleClose }) {
    return (
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sucesso</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-success fw-semibold">
          Registro excluído com sucesso!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  // ABRIR MODAL DE CONFIRMAÇÃO
  const handleOpenConfirm = (id) => {
    setSelectedId(id);
    setShowConfirm(true);
  };

  // CONFIRMAR EXCLUSÃO
  const handleConfirmDelete = async () => {
    setShowConfirm(false); // fecha modal de confirmação

    try {
      const response = await fetch(
        `http://localhost:8080/base-anamneses/${selectedId}`,
        { method: "DELETE" }
      );

      if (!response.ok) throw new Error("Erro ao excluir anamnese");

      // Remove item da lista sem reload
      setAnamneses((prev) => prev.filter((a) => a.id !== selectedId));

      setShowSuccess(true); // abre modal de sucesso
    } catch (err) {
      console.error(err);
      alert("Erro ao excluir anamnese.");
    }
  };

  // BUSCAR DADOS
  useEffect(() => {
    const fetchAnamneses = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/base-anamneses/paciente/${id}`
        );

        if (!response.ok) throw new Error("Erro ao buscar anamneses");

        const data = await response.json();
        setAnamneses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnamneses();
  }, [id]);

  const formatarData = (data) => {
    if (!data) return "-";
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  };
  // ----------- RENDERIZAÇÃO -----------
  if (loading) return <p>Carregando anamneses...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="container mt-4 ">
      {anamneses.length > 0 && (
          <p
        style={{
          fontFamily: "Roboto, sans-serif",
          color: "rgba(53, 64, 78, 1)",
          fontSize: "1.2rem",
          marginLeft: "10px",
        }}
      >
        Registros encontrados
      </p>
      )}
    

      {anamneses.length === 0 ? (
        <div className="text-muted fst-italic">
          Nenhum registro encontrado.
        </div>
      ) : (
        <div
          className="list-group border-0"
          style={{
            maxHeight: "400px",
            minHeight: "200px",
            overflowY: "auto",
            paddingRight: "6px",
          }}
        >
          {anamneses.map((anamnese) => (
            <div
              key={anamnese.id}
              className="list-group-item border-0 shadow-sm mb-3 rounded-4 p-3 d-flex justify-content-between align-items-center"
              style={{ background: "#f8f9fa" }}
            >
             <div className="bg-light rounded-3 p-3 border-start border-primary border-4">
  <div className="row g-2" >
    <div className="col">
      <div className="d-flex align-items-center">
        {/* <i className="bi bi-calendar-check text-primary me-2"></i> */}
        <div>
          <small className="text-muted d-block">Data</small>
          <span className="fw-semibold">{formatarData(anamnese.data_consulta)}</span>
        </div>
      </div>
    </div>
  
    
    <div className="col">
      <div className="d-flex align-items-center">
        {/* <i className="bi bi-person-badge text-primary me-2"></i> */}
        <div>
          <small className="text-muted d-block">Nutricionista</small>
          <span className="fw-semibold">{anamnese.nutricionista_responsavel}</span>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="d-flex align-items-center">
        {/* <i className="bi bi-person-badge text-primary me-2"></i> */}
        <div>
          <small className="text-muted d-block">Tipo</small>
          <span className="fw-semibold">{anamnese.tipo_registro}</span>
        </div>
      </div>
    </div>
  </div>
</div>

              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="light"
                  size="sm"
                  className="border-0 p-0"
                  id="dropdown-basic"
                  style={{ boxShadow: "none" }}
                >
                  <span style={{ fontSize: "22px", lineHeight: "0" }}>⋮</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() =>
                      navigate(`/detalhes-anamnese/${anamnese.id}`, {
                        state: { id }
                      })
                    }
                  >
                    Ver detalhes
                  </Dropdown.Item>

                  <Dropdown.Item
                    onClick={() =>
                      navigate(
                        `/base-anamnese/editar/${id}/${anamnese.id}`
                      )
                    }
                  >
                    Editar
                  </Dropdown.Item>

                  <Dropdown.Item
                    className="text-danger"
                    onClick={() => handleOpenConfirm(anamnese.id)}
                  >
                    Excluir
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ))}
        </div>
      )}

      {/* MODAIS (fora do map) */}
      <ModalExcluir
        show={showConfirm}
        handleClose={() => setShowConfirm(false)}
        handleConfirm={handleConfirmDelete}
      />

      <ModalSucesso
        show={showSuccess}
        handleClose={() => setShowSuccess(false)}
      />
    </div>
  );
};

export default AnamneseList;
