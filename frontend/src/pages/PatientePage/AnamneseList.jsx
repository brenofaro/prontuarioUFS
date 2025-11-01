import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AnamneseList = () => {
    const navigate = useNavigate();

    
    const { id } = useParams();
    const [anamneses, setAnamneses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
    const handleClick = (anamneseID) => {
        navigate(`/detalhes-anamnese/${anamneseID}`);
    };

  useEffect(() => {
    const fetchAnamneses = async () => {
      try {
        const response = await fetch(`http://localhost:8080/base-anamneses/paciente/${id}`);
        if (!response.ok) {
          throw new Error("Erro ao buscar anamneses");
        }
        const data = await response.json();
        setAnamneses(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnamneses();
  }, [id]);

  if (loading) return <p>Carregando anamneses...</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!anamneses.length) return <p>Nenhuma anamnese encontrada.</p>;

  return (
    <div className="container mt-4">
      <h5 className="fw-semibold text-primary mb-3">📋 Lista de Anamneses</h5>
      <ul className="list-group">
        {anamneses.map((anamnese) => (
          <li
            key={anamnese.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>ID:</strong> {anamnese.id} <br />
              <strong>Tipo:</strong> {anamnese.tipo} <br />
              <strong>Queixa principal:</strong>{" "}
              {anamnese.queixa_principal || "-"}
            </div>
            <Button
              variant="outl
              ine-primary"
              size="sm"
              onClick={() => handleClick(anamnese.id)}
            >
              Ver detalhes
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnamneseList;
