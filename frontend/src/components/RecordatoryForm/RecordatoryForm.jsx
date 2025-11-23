import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import RecordatoryTable from "./components/RecordatoryTable.jsx";

function RecordatoryForm() {
  const { pacienteId, anamneseId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ });

  useEffect(() => {
    if (anamneseId) {
      fetch(`http://localhost:8080/base-anamneses/${anamneseId}`)
        .then((res) => res.json())
        .then((data) => {
          setFormData(data);
        })
        .catch((err) => console.error("Erro ao carregar anamnese:", err));
    }
  }, [anamneseId]);

  const handleClick = () => {
    navigate(`/pagina-paciente/${pacienteId}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const url = anamneseId
      ? `http://localhost:8080/base-anamneses/${anamneseId}`
      : `http://localhost:8080/base-anamneses/cadastrar`;

    const method = anamneseId ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paciente_id: Number(pacienteId),
          ...formData,
        }),
      });

      if (!response.ok) throw new Error("Erro ao salvar anamnese");

      alert(anamneseId ? "Anamnese atualizada!" : "Anamnese cadastrada!");
      navigate(`/pagina-paciente/${pacienteId}`);
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar anamnese.");
    }
  };

  return (
    <div className="container mt-4 border rounded p-4 bg-light">
      <form onSubmit={handleSubmit} className="p-3">
        <h3
          className="d-flex align-items-center"
          style={{ fontFamily: "arial" }}
        >
          <FaArrowLeft
            size={22}
            className="me-2"
            style={{ cursor: "pointer" }}
            onClick={handleClick}
          />

          {anamneseId
            ? "Editar Recordatório Alimentar"
            : "Cadastro de Ficha de Recordatório Alimentar"}
        </h3>

        <p
          className="mt-5 mb-3 ms-1"
          style={{ fontFamily: "arial", fontSize: "1.4rem" }}
        >
          Tabela Alimentar
        </p>
        <RecordatoryTable formData={formData} setFormData={setFormData} />

        <div className="d-flex justify-content-between mt-4">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClick}
          >
            <i className="bi bi-arrow-left me-2"></i>
            Voltar
          </button>

          <button type="submit" className="btn btn-success rounded-pill px-4 ">
            {anamneseId
              ? "Atualizar Ficha de Recordatório"
              : "Salvar Ficha de Recordatório"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default RecordatoryForm;
