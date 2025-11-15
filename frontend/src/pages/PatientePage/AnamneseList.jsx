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
      <p style={{fontFamily: "Roboto, sans-serif", color: "rgba(53, 64, 78, 1)", fontSize: "1.2rem"}} >
   Lista de Anamneses
     </p>

{anamneses.length === 0 ? (
  <div className="text-muted fst-italic">Nenhuma anamnese cadastrada.</div>
) : (
  <div className="list-group border-0"  style={{
    maxHeight: "400px", 
    minHeight: "300px",   // altura máxima
    overflowY: "auto",       // ativa scroll vertical
    paddingRight: "6px"     // evita scrollbar por cima do conteúdo
  }}>
    {anamneses.map((anamnese) => (
      <div
        key={anamnese.id}
        className="list-group-item border-0 shadow-sm mb-3 rounded-4 p-3 d-flex justify-content-between align-items-center"
        style={{ background: "#f8f9fa"}}
      >
        <div>
          <h6 className="fw-bold text-dark mb-1">
            🩺 Anamnese #{anamnese.id}
          </h6>
          <div className="text-secondary small">
            <p className="mb-1">
              <strong>Tipo:</strong> {anamnese.tipo}
            </p>
            <p className="mb-0">
              <strong>Queixa principal:</strong>{" "}
              {anamnese.queixa_principal || "-"}
            </p>
          </div>
        </div>

        <Button
          variant="outline-primary"
          size="sm"
          className="px-3 py-1 rounded-pill fw-semibold"
          onClick={() => handleClick(anamnese.id)}
        >
          Ver detalhes
        </Button>
      </div>
    ))}
  </div>
)}

    </div>
  );
};

export default AnamneseList;
