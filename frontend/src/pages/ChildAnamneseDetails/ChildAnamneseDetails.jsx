import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import InformacoesGerais from "./components/InformacoesGerais";
import SocioEconomicosChildDetails from "./components/SocioEconomicosChildDetails";
import SaudeChildDetails from "./components/SaudeChildDetails";
import AntropometricaChildDetails from "./components/AntropometricaChildDetails";
import SintomasClinicosChildDetails from "./components/SintomasClinicosChildDetails";
import HistoriaAlimentarChildDetails from "./components/HistoriaAlimentarChildDetails";
import BioquimicaChildDetails from "./components/BioquimicaChildDetails";

const ChildAnamneseDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [anamnese, setAnamnese] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  const handleClick = () => {
    navigate(`/pagina-paciente/${anamnese.paciente_id}`);
  };

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchAnamnese = async () => {
      try {
        const response = await fetch(
          `${API_URL}/child-anamneses/${id}`,
        );
        if (!response.ok) throw new Error("Erro ao buscar anamnese infantil");

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
  if (!anamnese) return <p>Nenhum registro encontrado.</p>;

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
        Detalhes da Anamnese Infantil
      </Card.Title>

      <Card className="mb-3">
        <InformacoesGerais anamnese={anamnese} />
        <SocioEconomicosChildDetails anamnese={anamnese} />
        <SaudeChildDetails anamnese={anamnese} />
        <AntropometricaChildDetails anamnese={anamnese} />
        <SintomasClinicosChildDetails anamnese={anamnese} />
        <BioquimicaChildDetails anamnese={anamnese} />
        <HistoriaAlimentarChildDetails anamnese={anamnese} />
      </Card>
    </div>
  );
};

export default ChildAnamneseDetails;
