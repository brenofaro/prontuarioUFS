import { useState, useEffect } from "react"; 
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


import TableSchedule from "./components/TableSchedule.jsx";
import DadosIniciaisPlano from "./components/DadosIniciaisPlano.jsx";

function FoodPlanForm() {
  const { pacienteId, anamneseId } = useParams();
  const navigate = useNavigate();

   

  const [formData, setFormData] = useState({
    data_plano_alimentar: "",
    nutricionista_responsavel: "",

    refeicao_um: null,
    alimentos_um: null,
    substituicoes_um: null,

    refeicao_dois: null,
    alimentos_dois: null,
    substituicoes_dois: null,

    refeicao_tres: null,
    alimentos_tres: null,
    substituicoes_tres: null,

    refeicao_quatro: null,
    alimentos_quatro: null,
    substituicoes_quatro: null,

    refeicao_cinco: null,
    alimentos_cinco: null,
    substituicoes_cinco: null,

    refeicao_seis: null,
    alimentos_seis: null,
    substituicoes_seis: null,

    observacoes_plano_alimentar: null,
  });

  useEffect(() => {
    if (anamneseId) {
      fetch(`http://localhost:8080/food-plans/${anamneseId}`)
        .then(res => res.json())
        .then(data => {
          setFormData(data);
        })
        .catch(err => console.error("Erro ao carregar plano alimentar:", err));
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
      ? `http://localhost:8080/food-plans/${anamneseId}`
      : `http://localhost:8080/food-plans/cadastrar`;

    const method = anamneseId ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paciente_id: Number(pacienteId),
          tipo_registro: "Plano Alimentar",
          ...formData
        }),
      });

      if (!response.ok) throw new Error("Erro ao salvar anamnese");

      alert(anamneseId ? "Plano alimentar atualizado!" : "Plano alimentar cadastrado!");
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

          {anamneseId ? "Editar Plano Alimentar" : "Cadastro de Plano Alimentar"}
        </h3>

        <p className="mt-5 mb-3 ms-1" style={{fontFamily:"arial", fontSize:"1.4rem"}}></p>
        <DadosIniciaisPlano formData={formData} setFormData={setFormData} />

        <p className="mt-5 mb-3 ms-1" style={{fontFamily:"arial", fontSize:"1.4rem"}}>Tabela Alimentar</p>
        <TableSchedule formData={formData} setFormData={setFormData} />

        

        

        <div className="d-flex justify-content-between mt-4">
          
         <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClick}
        >
          <i className="bi bi-arrow-left me-2"></i>
          Voltar
        </button>

          <button type="submit" className="btn btn-success rounded-pill px-4 ">
            {anamneseId ? "Atualizar Plano Alimentar" : "Salvar Plano Alimentar"}
          </button>

        </div>
      </form>
    </div>
  );
}

export default FoodPlanForm;
