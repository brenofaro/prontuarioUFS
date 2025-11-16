import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import SocioEconomicosDetails from "./components/SocioEconomicosDetails.jsx";
import SaudeDetails from "./components/SaudeDetails.jsx";


const AnamnesesDetails = () => {
  const { id } = useParams();
  const [anamnese, setAnamneses] = useState([]);
  const [loading, setLoading] = useState(true);  
 

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
  <Card.Title className="mb-4 d-flex align-items-center" style={{fontFamily:"arial"}}>
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
        <div className="fw-semibold text-dark ms-2">
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
        <div className="fw-semibold text-dark ms-2">
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
        <div className="fw-semibold text-dark ms-2">
          {anamnese.nutricionista_responsavel || <span className="text-muted">Não informado</span>}
        </div>
      </div>
    </div>
  </div>
</Card.Body>
          <SocioEconomicosDetails anamnese={anamnese} />
          <SaudeDetails anamnese={anamnese} />
        </Card>
      
    </div>
  );
};

export default AnamnesesDetails;

