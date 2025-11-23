import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import TableDetails from "./components/tableDetails";

import InformacoesGerais from "./components/InformacoesGerais";

const FoodPlanDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [anamnese, setAnamnese] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  const handleClick = () => {
    navigate(`/pagina-paciente/${anamnese.paciente_id}`);
  };

  useEffect(() => {
    const fetchAnamnese = async () => {
      try {
        const response = await fetch(`http://localhost:8080/food-plans/${id}`);
        if (!response.ok) throw new Error("Erro ao buscar plano alimentar");

        const data = await response.json();
        setAnamnese(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnamnese();
  }, [id]);

  if (loading) return <p>Carregando detalhes...</p>;
  if (error) return <p className="text-danger">Erro: {error}</p>;
  if (!anamnese) return <p>Nenhuma informação encontrada.</p>;

  return (
    <div className="container mt-4">
      <Card.Title
        className="mb-3 d-flex align-items-center"
        style={{ fontFamily: "arial", fontSize: "1.5rem" }}
      >
        <FaArrowLeft
          size={22}
          className="me-2"
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        />
        Detalhes do Plano Alimentar
      </Card.Title>

      <Card className="mb-3">
        <InformacoesGerais anamnese={anamnese} />
        <TableDetails anamnese={anamnese} />
      </Card>
    </div>
  );
};

export default FoodPlanDetails;
