import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const AnamnesesDetails = () => {
  const { id } = useParams();
  const [anamnese, setAnamneses] = useState([]);
  const [loading, setLoading] = useState(true);  
  const escolaridadeLabels = {
      analfabeto: "Analfabeto",
      alfabetizado: "Alfabetizado",
      fundamental_incompleto_completo: "Ensino Fundamental (completo/incompleto)",
      medio_incompleto_completo: "Ensino Médio (completo/incompleto)",
      superior_incompleto_completo: "Ensino Superior (completo/incompleto)",
  };
  const booleanLabels = {
      true: "Sim",
      false: "Não",
  };

  useEffect(() => {
      const fetchAnamneses = async () => {
        try {
          const response = await fetch(`http://localhost:8080/base-anamneses/${id}`);
          if (!response.ok) {
            throw new Error("Erro ao buscar anamneses");
          }
          const data = await response.json();
          console.log(data);
          setAnamneses(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchAnamneses();
    }, [id]);

  if (loading) return <p>Carregando detalhes...</p>;

  return (
    <div className="container mt-4">
      <h3 className="fw-semibold text-primary mb-3">Detalhes da Anamnese</h3>
      
        <Card className="mb-3" key={anamnese.id}>
          <Card.Body>
  <Card.Title className="mb-4 d-flex align-items-center">
    <span className="bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-2">
      <i className="bi bi-info-circle-fill"></i>
    </span>
    Informações Gerais
  </Card.Title>

  <div className="row g-3">
    <div className="col-md-4">
      <div className="info-item p-3 bg-light rounded-3 h-100">
        <div className="d-flex align-items-center mb-2">
          <i className="bi bi-calendar-event text-primary me-2"></i>
          <small className="text-muted text-uppercase fw-semibold" style={{ fontSize: "0.75rem", letterSpacing: "0.5px" }}>
            Data da Consulta
          </small>
        </div>
        <div className="fw-semibold text-dark">
          {anamnese.data_consulta || <span className="text-muted">Não informado</span>}
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="info-item p-3 bg-light rounded-3 h-100">
        <div className="d-flex align-items-center mb-2">
          <i className="bi bi-file-medical text-primary me-2"></i>
          <small className="text-muted text-uppercase fw-semibold" style={{ fontSize: "0.75rem", letterSpacing: "0.5px" }}>
            Nº Prontuário
          </small>
        </div>
        <div className="fw-semibold text-dark">
          {anamnese.numero_prontuario || <span className="text-muted">Não informado</span>}
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="info-item p-3 bg-light rounded-3 h-100">
        <div className="d-flex align-items-center mb-2">
          <i className="bi bi-person-badge text-primary me-2"></i>
          <small className="text-muted text-uppercase fw-semibold" style={{ fontSize: "0.75rem", letterSpacing: "0.5px" }}>
            Nutricionista
          </small>
        </div>
        <div className="fw-semibold text-dark">
          {anamnese.nutricionista_responsavel || <span className="text-muted">Não informado</span>}
        </div>
      </div>
    </div>
  </div>
</Card.Body>
          <Card.Body>
  <Card.Title className="mb-4 d-flex align-items-center">
    <span className="bg-success bg-opacity-10 text-success rounded-circle p-2 me-2">
      <i className="bi bi-people-fill"></i>
    </span>
    Dados Socioeconômicos
  </Card.Title>

  {/* Informações Pessoais */}
  <div className="mb-4">
    <h6 className="text-primary mb-3 pb-2 border-bottom">
      <i className="bi bi-person-circle me-2"></i>
      Informações Pessoais
    </h6>
    <div className="row g-3">
      <div className="col-md-6">
        <div className="d-flex align-items-start">
          <i className="bi bi-heart text-muted me-2 mt-1"></i>
          <div className="flex-grow-1">
            <small className="text-muted d-block">Estado Civil</small>
            <span className="fw-medium">{anamnese.estado_civil || "-"}</span>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="d-flex align-items-start">
          <i className="bi bi-book text-muted me-2 mt-1"></i>
          <div className="flex-grow-1">
            <small className="text-muted d-block">Escolaridade</small>
            <span className="fw-medium">{escolaridadeLabels[anamnese.escolaridade] || "-"}</span>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="d-flex align-items-start">
          <i className="bi bi-briefcase text-muted me-2 mt-1"></i>
          <div className="flex-grow-1">
            <small className="text-muted d-block">Ocupação</small>
            <span className="fw-medium">{anamnese.ocupacao || "-"}</span>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="d-flex align-items-start">
          <i className="bi bi-house-door text-muted me-2 mt-1"></i>
          <div className="flex-grow-1">
            <small className="text-muted d-block">Atividade em Casa</small>
            <span className="fw-medium">{anamnese.faz_atividade_dentro_casa || "-"}</span>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="d-flex align-items-start">
          <i className="bi bi-people text-muted me-2 mt-1"></i>
          <div className="flex-grow-1">
            <small className="text-muted d-block">Estrutura Familiar</small>
            <span className="fw-medium">{anamnese.estrutura_familia || "-"}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Informações Financeiras */}
  <div className="mb-4">
    <h6 className="text-primary mb-3 pb-2 border-bottom">
      <i className="bi bi-currency-dollar me-2"></i>
      Informações Financeiras
    </h6>
    <div className="row g-3">
      <div className="col-md-6">
        <div className="d-flex align-items-start">
          <i className="bi bi-wallet2 text-muted me-2 mt-1"></i>
          <div className="flex-grow-1">
            <small className="text-muted d-block">Renda Pessoal</small>
            <span className="fw-medium">R$ {anamnese.renda_pessoal || "-"}</span>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="d-flex align-items-start">
          <i className="bi bi-cart3 text-muted me-2 mt-1"></i>
          <div className="flex-grow-1">
            <small className="text-muted d-block">Gastos com Alimentação</small>
            <span className="fw-medium">R$ {anamnese.gastos_alimentacao || "-"}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Atividade Física */}
  <div className="mb-4">
    <h6 className="text-primary mb-3 pb-2 border-bottom">
      <i className="bi bi-activity me-2"></i>
      Atividade Física
    </h6>
    <div className="bg-light rounded-3 p-3">
      <div className="d-flex align-items-center mb-3">
        <i className="bi bi-lightning-charge text-warning me-2"></i>
        <span className="text-muted me-2">Exerce atualmente:</span>
        <span className={`badge ${anamnese.faz_atividade_fisica ? 'bg-success' : 'bg-secondary'}`}>
          {booleanLabels[anamnese.faz_atividade_fisica] ?? "-"}
        </span>
      </div>
      
      {anamnese.faz_atividade_fisica === true && (
        <div className="ms-4 border-start border-2 border-success ps-3">
          <div className="mb-2">
            <small className="text-muted d-block">Atividade</small>
            <span className="fw-medium">{anamnese.qual_atividade_fisica || "-"}</span>
          </div>
          <div>
            <small className="text-muted d-block">Frequência</small>
            <span className="fw-medium">{anamnese.frequencia_atividade_fisica || "-"}</span>
          </div>
        </div>
      )}

      <div className="d-flex align-items-center mt-3">
        <i className="bi bi-clock-history text-muted me-2"></i>
        <span className="text-muted me-2">Já praticou antes:</span>
        <span className={`badge ${anamnese.ja_fez_atividade_fisica ? 'bg-secondary' : 'bg-secondary'}`}>
          {booleanLabels[anamnese.ja_fez_atividade_fisica] ?? "-"}
        </span>
      </div>

      {anamnese.ja_fez_atividade_fisica === true && (
        <div className="ms-4 border-start border-2 border-secondary ps-3 mt-2">
          <small className="text-muted d-block">Tempo parado</small>
          <span className="fw-medium">{anamnese.tempo_parado_atividade_fisica || "-"}</span>
        </div>
      )}
    </div>
  </div>

  {/* Etilismo */}
  <div className="mb-4">
    <h6 className="text-primary mb-3 pb-2 border-bottom">
      <i className="bi bi-cup-straw me-2"></i>
      Consumo de Álcool
    </h6>
    <div className="bg-light rounded-3 p-3">
      <div className="d-flex align-items-center mb-3">
        <i className="bi bi-exclamation-circle text-warning me-2"></i>
        <span className="text-muted me-2">Consome atualmente:</span>
        <span className={`badge ${anamnese.tem_etilismo ? 'bg-success' : 'bg-secondary'}`}>
          {booleanLabels[anamnese.tem_etilismo] ?? "-"}
        </span>
      </div>
      
      {anamnese.tem_etilismo === true && (
        <div className="ms-4 border-start border-2 border-success ps-3">
          <div className="mb-2">
            <small className="text-muted d-block">Tipo</small>
            <span className="fw-medium">{anamnese.tipo_etilismo || "-"}</span>
          </div>
          <div>
            <small className="text-muted d-block">Quantidade</small>
            <span className="fw-medium">{anamnese.quanto_etilismo || "-"}</span>
          </div>
        </div>
      )}

      <div className="d-flex align-items-center mt-3">
        <i className="bi bi-clock-history text-muted me-2"></i>
        <span className="text-muted me-2">Já consumiu antes:</span>
        <span className={`badge ${anamnese.ja_foi_etilista ? 'bg-secondary' : 'bg-secondary'}`}>
          {booleanLabels[anamnese.ja_foi_etilista] ?? "-"}
        </span>
      </div>

      {anamnese.ja_foi_etilista === true && (
        <div className="ms-4 border-start border-2 border-secondary ps-3 mt-2">
          <small className="text-muted d-block">Tempo parado</small>
          <span className="fw-medium">{anamnese.tempo_parado_etilismo || "-"}</span>
        </div>
      )}
    </div>
  </div>

  {/* Tabagismo */}
  <div>
    <h6 className="text-primary mb-3 pb-2 border-bottom">
      <i className="bi bi-lungs me-2"></i>
      Tabagismo
    </h6>
    <div className="bg-light rounded-3 p-3">
      <div className="d-flex align-items-center mb-3">
        <i className="bi bi-exclamation-triangle text-danger me-2"></i>
        <span className="text-muted me-2">Fuma atualmente:</span>
        <span className={`badge ${anamnese.tem_tabagismo ? 'bg-danger' : 'bg-secondary'}`}>
          {booleanLabels[anamnese.tem_tabagismo] ?? "-"}
        </span>
      </div>
      
      {anamnese.tem_tabagismo === true && (
        <div className="ms-4 border-start border-2 border-danger ps-3">
          <div className="mb-2">
            <small className="text-muted d-block">Tipo</small>
            <span className="fw-medium">{anamnese.tipo_tabagismo || "-"}</span>
          </div>
          <div>
            <small className="text-muted d-block">Quantidade</small>
            <span className="fw-medium">{anamnese.quanto_tabagismo || "-"}</span>
          </div>
        </div>
      )}

      <div className="d-flex align-items-center mt-3">
        <i className="bi bi-clock-history text-muted me-2"></i>
        <span className="text-muted me-2">Já fumou antes:</span>
        <span className={`badge ${anamnese.ja_foi_tabagista ? 'bg-info' : 'bg-secondary'}`}>
          {booleanLabels[anamnese.ja_foi_tabagista] ?? "-"}
        </span>
      </div>

      {anamnese.ja_foi_tabagista === true && (
        <div className="ms-4 border-start border-2 border-info ps-3 mt-2">
          <small className="text-muted d-block">Tempo parado</small>
          <span className="fw-medium">{anamnese.tempo_parado_tabagismo || "-"}</span>
        </div>
      )}
    </div>
  </div>
</Card.Body>
        </Card>
      
    </div>
  );
};

export default AnamnesesDetails;

