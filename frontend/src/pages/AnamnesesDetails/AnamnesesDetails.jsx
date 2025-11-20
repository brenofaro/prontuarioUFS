import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import SocioEconomicosDetails from "./components/SocioEconomicosDetails.jsx";
import SaudeDetails from "./components/SaudeDetails.jsx";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import AntropometricaDetails from "./components/AntropometricaDetails.jsx";
import BioimpedanciaDetails from "./components/BioimpedanciaDetails.jsx";
import SintomasClinicosDetails from "./components/SintomasClinicosDetails.jsx";
import InformacoesGerias from "./components/InformacoesGerias.jsx";
import BioquimicaDetails from "./components/BioquimicaDetails.jsx";
import HistoriaAlimentarDetails from "./components/HistoriaAlimentarDetails.jsx";

const AnamnesesDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [anamnese, setAnamneses] = useState([]);
  const [loading, setLoading] = useState(true); 
  
  const location = useLocation();
  console.log(location.state.id);

  const handleClick = () => {
    navigate(`/pagina-paciente/${location.state.id}`);
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

            <Card.Title className="mb-3 d-flex align-items-center" style={{fontFamily:"arial", fontSize: "1.5rem"}}>
            
              <FaArrowLeft
                  size={22}
                  className="me-2"
                  style={{ cursor: "pointer" }}
                  onClick={handleClick}
                />
              Detalhes da Anamnese
            </Card.Title>


        <Card className="mb-3" key={anamnese.id}>
          <InformacoesGerias anamnese={anamnese} />
          <SocioEconomicosDetails anamnese={anamnese} />
          <SaudeDetails anamnese={anamnese} />
          <AntropometricaDetails anamnese={anamnese} />
          <BioimpedanciaDetails anamnese={anamnese} />
          <SintomasClinicosDetails anamnese={anamnese} />
          <BioquimicaDetails anamnese={anamnese} />
          <HistoriaAlimentarDetails anamnese={anamnese} />
          
          
        </Card>
      
    </div>
  );
};

export default AnamnesesDetails;

