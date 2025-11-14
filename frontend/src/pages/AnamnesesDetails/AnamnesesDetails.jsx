import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

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
            <Card.Title>Anamnese ID: {anamnese.id}</Card.Title>
            <Card.Text>
              <strong>Data:</strong> {anamnese.data_consulta} <br />
              <strong>Número prontuário:</strong> {anamnese.numero_prontuario || "-"} <br />
              <strong>nutricionista_responsavel:</strong> {anamnese.nutricionista_responsavel || "-"} <br />
              <strong>estado_civil:</strong> {anamnese.estado_civil || "-"} <br />
              <strong>estrutura_familia:</strong> {anamnese.estrutura_familia || "-"} <br />  
            </Card.Text>
          </Card.Body>
        </Card>
      
    </div>
  );
};

export default AnamnesesDetails;

