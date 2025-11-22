import React, { useEffect, useState } from "react";
import { Modal, Button, Dropdown } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const AnamneseList = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [anamnesesBase, setAnamnesesBase] = useState([]);
  const [anamnesesChild, setAnamnesesChild] = useState([]);
  const [returnAnamnese, setReturnAnamnese] = useState([]);
  const [foodPlan, setFoodPlan] = useState([]);

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

  
  // ---------------------- MAPAS DE ROTAS ----------------------

  const detalhesRotas = {
    base: (id) => `/detalhes-anamnese/${id}`,
    child: (id) => `/detalhes-child-anamnese/${id}`,
    retorno: (id) => `/detalhes-return-anamnese/${id}`,
    plano: (id) => `/detalhes-food-plan/${id}`, // NOVO
  };

  const editarRotas = {
    base: (pacienteId, anamneseId) =>
      `/base-anamnese/editar/${pacienteId}/${anamneseId}`,

    child: (pacienteId, anamneseId) =>
      `/child-anamnese/editar/${pacienteId}/${anamneseId}`,

    retorno: (pacienteId, anamneseId) =>
      `/anamnese-retorno/editar/${pacienteId}/${anamneseId}`,

    plano: (pacienteId, anamneseId) =>
      `/food-plan/editar/${pacienteId}/${anamneseId}`, // NOVO
  };

  const deleteEndpoints = {
    base: (id) => `http://localhost:8080/base-anamneses/${id}`,
    child: (id) => `http://localhost:8080/child-anamneses/${id}`,
    retorno: (id) => `http://localhost:8080/return-anamneses/${id}`,
    plano: (id) => `http://localhost:8080/food-plans/${id}`, // NOVO
  };

  // ------------------------- FUNÇÕES -------------------------

  const handleOpenConfirm = (item) => {
    setSelectedItem(item);
    setShowConfirm(true);
  };

  const handleConfirmDelete = async () => {
    setShowConfirm(false);

    const { id: registroId, tipo } = selectedItem;

    const endpoint = deleteEndpoints[tipo]?.(registroId);
    if (!endpoint) return alert("Tipo não suportado para exclusão.");

    try {
      const response = await fetch(endpoint, { method: "DELETE" });
      if (!response.ok) throw new Error("Erro ao excluir");

      // Atualizar listas
      if (tipo === "base")
        setAnamnesesBase((prev) => prev.filter((a) => a.id !== registroId));
      else if (tipo === "child")
        setAnamnesesChild((prev) => prev.filter((a) => a.id !== registroId));
      else if (tipo === "retorno")
        setReturnAnamnese((prev) => prev.filter((a) => a.id !== registroId));
      else if (tipo === "plano")
        setFoodPlan((prev) => prev.filter((a) => a.id !== registroId));

      setShowSuccess(true);
    } catch (err) {
      alert("Erro ao excluir.");
    }
  };

  // ---------------------- FETCH DATA (PARALELO) ----------------------

  useEffect(() => {
    const loadData = async () => {
      try {
        const [baseRes, childRes, returnRes, planRes] = await Promise.all([
          fetch(`http://localhost:8080/base-anamneses/paciente/${id}`),
          fetch(`http://localhost:8080/child-anamneses/paciente/${id}`),
          fetch(`http://localhost:8080/return-anamneses/paciente/${id}`),
          fetch(`http://localhost:8080/food-plans/paciente/${id}`),
        ]);

        if (!baseRes.ok || !childRes.ok || !returnRes.ok || !planRes.ok)
          throw new Error("Erro ao carregar dados");

        const baseData = await baseRes.json();
        const childData = await childRes.json();
        const retornoData = await returnRes.json();
        const planData = await planRes.json();

        setAnamnesesBase(baseData.map((d) => ({ ...d, tipo: "base" })));
        setAnamnesesChild(childData.map((d) => ({ ...d, tipo: "child" })));
        setReturnAnamnese(retornoData.map((d) => ({ ...d, tipo: "retorno" })));
        setFoodPlan(planData.map((d) => ({ ...d, tipo: "plano" })));

      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  // ------------------------- UTILS -------------------------

  const formatarData = (data) => {
    if (!data) return "-";
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  // Lista única
  const todasAsAnamneses = [
    ...anamnesesBase,
    ...anamnesesChild,
    ...returnAnamnese,
    ...foodPlan,
  ];

  return (
    <div className="container mt-4">

      {todasAsAnamneses.length > 0 && (
        <p className="fw-semibold text-secondary" style={{ marginLeft: "10px" }}>
          Registros encontrados
        </p>
      )}

      {todasAsAnamneses.length === 0 ? (
        <div className="text-muted fst-italic">Nenhum registro encontrado.</div>
      ) : (
        <div
          className="list-group border-0"
          style={{ maxHeight: "400px", overflowY: "auto", paddingRight: "6px" }}
        >
          {todasAsAnamneses.map((item) => (
            <div
              key={`${item.tipo}-${item.id}`}
              className="list-group-item border-0 shadow-sm mb-3 rounded-4 p-3 d-flex justify-content-between align-items-center"
              style={{ background: "#f8f9fa" }}
            >
              {/* INFORMAÇÕES */}
              <div className="bg-light rounded-3 p-3 border-start border-primary border-4">
                <div className="row g-2">

                  <div className="col">
                    <small className="text-muted d-block">Data</small>
                    <span className="fw-semibold">
                      {formatarData(item.data_consulta || item.data_plano_alimentar)}
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

                  <div className="col">
                    <small className="text-muted d-block">Categoria</small>
                    <span className="fw-semibold">{item.tipo}</span>
                  </div>

                </div>
              </div>

              {/* DROPDOWN */}
              <Dropdown align="end">
                <Dropdown.Toggle variant="light" size="sm" className="border-0 p-0">
                  <span style={{ fontSize: "22px", lineHeight: "0" }}>⋮</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>

                  {/* DETALHES */}
                  <Dropdown.Item
                    onClick={() => navigate(detalhesRotas[item.tipo](item.id), {
                       state: { id }
            })}
                  >
                    Ver detalhes
                  </Dropdown.Item>

                  {/* EDITAR */}
                  <Dropdown.Item
                    onClick={() =>
                      navigate(editarRotas[item.tipo](id, item.id))
                    }
                  >
                    Editar
                  </Dropdown.Item>

                  {/* EXCLUIR */}
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
