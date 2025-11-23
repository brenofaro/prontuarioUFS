import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import SocioEconomicosChild from "./components/SocioEconomicosChild";
import SaudeChild from "./components/SaudeChild";
import AntropometricaChild from "./components/AntropometricaChild";
import SinaisSintomasChild from "./components/SinaisSintomasChild";
import BioquimicaChild from "./components/BioquimicaChild";
import HistoriaAlimentarChild from "./components/HistoriaAlimentarChild";
import DiagnosticoConclusivoChild from "./components/DiagnosticoConclusivoChild";
import DadosIniciaisChild from "./components/DadosIniciaisChild";

function ChildAnamneseForm() {
  const { pacienteId, anamneseId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (anamneseId) {
      fetch(`http://localhost:8080/child-anamneses/${anamneseId}`)
        .then((res) => res.json())
        .then((data) => {
          setFormData(data);
        })
        .catch((err) => console.error("Erro ao carregar anamnese:", err));
    }
  }, [anamneseId]);

  // 🔙 Botão voltar
  const handleClick = () => {
    navigate(`/pagina-paciente/${pacienteId}`);
  };

  // 🔥 SALVAR OU EDITAR (POST ou PUT)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = anamneseId
      ? `http://localhost:8080/child-anamneses/${anamneseId}`
      : `http://localhost:8080/child-anamneses/cadastrar`;

    const method = anamneseId ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paciente_id: Number(pacienteId),
          tipo_registro: "Anamnese Infantil",
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
            ? "Editar Anamnese Infantil"
            : "Cadastro de Anamnese Infantil"}
        </h3>

        <p
          className="mt-5 mb-3 ms-1"
          style={{ fontFamily: "arial", fontSize: "1.4rem" }}
        >
          Dados Iniciais
        </p>
        <DadosIniciaisChild formData={formData} setFormData={setFormData} />

        <h4
          className="mt-5 mb-3"
          style={{ fontFamily: "arial", fontSize: "1.4rem" }}
        >
          Dados Demográficos
        </h4>
        <SocioEconomicosChild formData={formData} setFormData={setFormData} />

        <h4
          className="mt-5 mb-3"
          style={{ fontFamily: "arial", fontSize: "1.4rem" }}
        >
          Dados de Saúde
        </h4>
        <SaudeChild formData={formData} setFormData={setFormData} />

        <h4
          className="mt-5 mb-3"
          style={{ fontFamily: "arial", fontSize: "1.4rem" }}
        >
          Avaliação Antropométrica
        </h4>
        <AntropometricaChild formData={formData} setFormData={setFormData} />

        <h4
          className="mt-5 mb-3"
          style={{ fontFamily: "arial", fontSize: "1.4rem" }}
        >
          Sinais e Sintomas
        </h4>
        <SinaisSintomasChild formData={formData} setFormData={setFormData} />

        <h4
          className="mt-5 mb-3"
          style={{ fontFamily: "arial", fontSize: "1.4rem" }}
        >
          Avaliação Bioquímica
        </h4>
        <BioquimicaChild formData={formData} setFormData={setFormData} />

        <h4
          className="mt-5 mb-3"
          style={{ fontFamily: "arial", fontSize: "1.4rem" }}
        >
          História Alimentar
        </h4>
        <HistoriaAlimentarChild formData={formData} setFormData={setFormData} />

        <h4
          className="mt-5 mb-3"
          style={{ fontFamily: "arial", fontSize: "1.4rem" }}
        >
          Diagnóstico Conclusivo
        </h4>
        <DiagnosticoConclusivoChild
          formData={formData}
          setFormData={setFormData}
        />

        <div className="d-flex justify-content-between mt-4">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClick}
          >
            <i className="bi bi-arrow-left me-2"></i>
            Voltar
          </button>

          <button
            type="submit"
            className="btn btn-success rounded-pill px-4 fw-semibold"
          >
            {anamneseId ? "Atualizar Anamnese" : "Salvar Anamnese"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChildAnamneseForm;
