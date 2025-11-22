import React from 'react'
import DadosIniciaisReturn from './componentes/DadosIniciaisReturn'
import { useState, useEffect } from "react"; 
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import DadosClinicos from './componentes/DadosClinicos';
import InqueritoRetorno from './componentes/InqueritoRetorno';
import ExameFisico from './componentes/ExameFisico';
import AntropometricaReturn from './componentes/AntropometricaReturn';
import ExameBioquimico from './componentes/ExameBioquimico';

const ReturnAnameseForm = () => {
  const { pacienteId, anamneseId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
     
  });

  // 🔥 CARREGA ANAMNESE SE ESTIVER EDITANDO
  useEffect(() => {
    if (anamneseId) {
      fetch(`http://localhost:8080/return-anamneses/${anamneseId}`)
        .then(res => res.json())
        .then(data => {
          setFormData(data);
        })
        .catch(err => console.error("Erro ao carregar anamnese:", err));
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
      ? `http://localhost:8080/return-anamneses/${anamneseId}`
      : `http://localhost:8080/return-anamneses/cadastrar`;

    const method = anamneseId ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paciente_id: Number(pacienteId),
          tipo_registro: "Ficha de Retorno",
          ...formData
        }),
      });

      if (!response.ok) throw new Error("Erro ao salvar anamnese");

      alert(anamneseId ? "Ficha de retorno atualizada!" : "Ficha de retorno cadastrada!");
      navigate(`/pagina-paciente/${pacienteId}`);

    } catch (error) {
      console.error(error);
      alert("Erro ao salvar anamnese.");
    }
  };

  return (
    <div className="container mt-4 border rounded p-4 bg-light">
      <form onSubmit={handleSubmit} className="p-3">

        <h3 className="d-flex align-items-center" style={{ fontFamily: "arial" }}>
          <FaArrowLeft
            size={22}
            className="me-2"
            style={{ cursor: "pointer" }}
            onClick={handleClick}
          />

          {anamneseId ? "Editar Ficha de retorno" : "Ficha de retorno"}
        </h3>



        <p className="mt-5 mb-3 ms-1" style={{fontFamily:"arial", fontSize:"1.4rem"}}>Dados Iniciais</p>
        <DadosIniciaisReturn formData={formData} setFormData={setFormData} />

        <h4 className="mt-5 mb-3" style={{fontFamily:"arial", fontSize:"1.4rem"}}>Dados Clínicos</h4>
        <DadosClinicos formData={formData} setFormData={setFormData} />

        <h4 className="mt-5 mb-3" style={{fontFamily:"arial", fontSize:"1.4rem"}}>Inquérito de Retorno</h4>
        <InqueritoRetorno formData={formData} setFormData={setFormData} />


        <h4 className="mt-5 mb-3" style={{fontFamily:"arial", fontSize:"1.4rem"}}>Exame Físico</h4>
        <ExameFisico formData={formData} setFormData={setFormData} />


        <h4 className="mt-5 mb-3" style={{fontFamily:"arial", fontSize:"1.4rem"}}>Avaliação Antropométrica</h4>
        <AntropometricaReturn formData={formData} setFormData={setFormData} />


        <h4 className="mt-5 mb-3" style={{fontFamily:"arial", fontSize:"1.4rem"}}>Exame Bioquímico</h4>
        <ExameBioquimico formData={formData} setFormData={setFormData} />



        <div className="d-flex justify-content-between mt-4">
          
          <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClick}
        >
          <i className="bi bi-arrow-left me-2"></i>
          Voltar
        </button>

          <button type="submit" className="btn btn-success rounded-pill px-4 fw-semibold">
            {anamneseId ? "Atualizar Ficha" : "Salvar Ficha"}
          </button>

        </div>
      </form>
    </div>
  );
}

export default ReturnAnameseForm
