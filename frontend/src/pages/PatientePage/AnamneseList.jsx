import React, { useEffect, useState } from "react";
import { Modal, Button, Dropdown } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const AnamneseList = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [anamnesesBase, setAnamnesesBase] = useState([]);
  const [anamnesesChild, setAnamnesesChild] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Modais
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // ---------- MODAL DE CONFIRMAÇÃO ----------
  const ModalExcluir = ({ show, handleClose, handleConfirm }) => (
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

  // ---------- MODAL DE SUCESSO ----------
  const ModalSucesso = ({ show, handleClose }) => (
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

  // Abrir modal de confirmação
  const handleOpenConfirm = (item) => {
    setSelectedItem(item);
    setShowConfirm(true);
  };

  // Confirmar exclusão
  const handleConfirmDelete = async () => {
    setShowConfirm(false);

    const { id: registroId, tipo } = selectedItem;

    const endpoint =
      tipo === "child"
        ? `http://localhost:8080/child-anamneses/${registroId}`
        : `http://localhost:8080/base-anamneses/${registroId}`;

    try {
      const response = await fetch(endpoint, { method: "DELETE" });
      if (!response.ok) throw new Error("Erro ao excluir");

      if (tipo === "child") {
        setAnamnesesChild((prev) => prev.filter((a) => a.id !== registroId));
      } else {
        setAnamnesesBase((prev) => prev.filter((a) => a.id !== registroId));
      }

      setShowSuccess(true);
    } catch (err) {
      alert("Erro ao excluir.");
    }
  };

  // Buscar anamneses base
  useEffect(() => {
    const fetchBase = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/base-anamneses/paciente/${id}`
        );
        if (!response.ok) throw new Error("Erro ao buscar base");

        const data = await response.json();
        setAnamnesesBase(
          data.map((d) => ({ ...d, tipo: "base" })) // marcamos como base
        );
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBase();
  }, [id]);

  // Buscar anamneses child
  useEffect(() => {
    const fetchChild = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/child-anamneses/paciente/${id}`
        );
        if (!response.ok) throw new Error("Erro ao buscar child");

        const data = await response.json();
        setAnamnesesChild(
          data.map((d) => ({ ...d, tipo: "child" })) // marcamos como child
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChild();
  }, [id]);

  const formatarData = (data) => {
    if (!data) return "-";
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  // Mesclar os dois tipos de anamnese em uma única lista
  const todasAsAnamneses = [...anamnesesBase, ...anamnesesChild];

  return (
    <div className="container mt-4">
      {todasAsAnamneses.length > 0 && (
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

      {todasAsAnamneses.length === 0 ? (
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
          {todasAsAnamneses.map((item) => (
            <div
              key={`${item.tipo}-${item.id}`}
              className="list-group-item border-0 shadow-sm mb-3 rounded-4 p-3 d-flex justify-content-between align-items-center"
              style={{ background: "#f8f9fa" }}
            >
              <div className="bg-light rounded-3 p-3 border-start border-primary border-4">
                <div className="row g-2">
                  <div className="col">
                    <small className="text-muted d-block">Data</small>
                    <span className="fw-semibold">
                      {formatarData(item.data_consulta)}
                    </span>
                  </div>

                  <div className="col">
                    <small className="text-muted d-block">Nutricionista</small>
                    <span className="fw-semibold">
                      {item.nutricionista_responsavel}
                    </span>
                  </div>

                  <div className="col">
                    <small className="text-muted d-block">Tipo</small>
                    <span className="fw-semibold">{item.tipo_registro}</span>
                  </div>
                </div>
              </div>

              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="light"
                  size="sm"
                  className="border-0 p-0"
                  style={{ boxShadow: "none" }}
                >
                  <span style={{ fontSize: "22px", lineHeight: "0" }}>⋮</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() =>
                      navigate(
                        item.tipo === "child"
                          ? `/detalhes-child-anamnese/${item.id}`
                          : `/detalhes-anamnese/${item.id}`,
                        { state: { id } }
                      )
                    }
                  >
                    Ver detalhes
                  </Dropdown.Item>

                  <Dropdown.Item
                    onClick={() =>
                      navigate(
                        item.tipo === "child"
                          ? `/child-anamnese/editar/${id}/${item.id}`
                          : `/base-anamnese/editar/${id}/${item.id}`
                      )
                    }
                  >
                    Editar
                  </Dropdown.Item>

                  <Dropdown.Item
                    className="text-danger"
                    onClick={() => handleOpenConfirm(item)}
                  >
                    Excluir
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ))}
        </div>
      )}

      {/* Modais */}
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
