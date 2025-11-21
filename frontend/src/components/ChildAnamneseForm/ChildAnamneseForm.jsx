import { useState, useEffect } from "react"; 
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import SocioEconomicosChild from "./components/SocioEconomicosChild";
import SaudeChild from "./components/SaudeChild";
import AntropometricaChild from "./components/AntropometricaChild";
import SinaisSintomasChild from "./components/SinaisSintomasChild";
import BioquimicaChild from "./components/BioquimicaChild";
import HistoriaAlimentarChild from "./components/HistoriaAlimentarChild";
import DiagnosticoConclusivoChild from "./components/DiagnosticoConclusivoChild";
import DadosIniciaisChild from "./components/DadosIniciaisChild";

function ChildAnamneseForm() {
  const { pacienteId, anamneseId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      // data_consulta : "",
      // numero_prontuario: "",
      // nutricionista_responsavel: "",

      // estado_civil: null,
      // escolaridade: null,
      // ocupacao: null,
      // faz_atividade_dentro_casa: null,
      // atividade_dentro_casa: null,
      // estrutura_familia: [],
      // outros_estrutura_familia: null,
      // renda_pessoal: null,
      // gastos_alimentacao: null,
      // faz_atividade_fisica: null,
      // qual_atividade_fisica: null,
      // frequencia_atividade_fisica: null,
      // ja_fez_atividade_fisica: null,
      // tempo_parado_atividade_fisica: null,
      // tem_etilismo: null,
      // tipo_etilismo: null,
      // quanto_etilismo: null,
      // ja_foi_etilista: null,
      // tempo_parado_etilismo: null,
      // tem_tabagismo: null,
      // tipo_tabagismo: null,
      // quanto_tabagismo: null,
      // ja_foi_tabagista: null,
      // tempo_parado_tabagismo: null,

      // objetivo_consulta: null,
      // historia_doenca: null,
      // diabetes_hma: null,
      // diabetes_hf: null,
      // hipertencao_hma: null,
      // hipertencao_hf: null,
      // doenca_cardiovascular_hma: null,
      // doenca_cardiovascular_hf: null,
      // dislipidemia_hma: null,
      // dislipidemia_hf: null,
      // cancer_hma: null,
      // cancer_hf: null,
      // osteoporose_hma: null,
      // osteoporose_hf: null,
      // depressao_hma: null,
      // depressao_hf: null,
      // sop_hma: null,
      // sop_hf: null,
      // outras_patologias: null,
      // faz_uso_medicamentos: null,
      // medicamentos: null,

      // peso_atual: null,
      // peso_usual: null,
      // aj: null,
      // altura_real: null,
      // altura_estimada: null,
      // imc: null,
      // circunferencia_braco: null,
      // comprimento_cotovelo: null,
      // pct: null,
      // pcb: null,
      // pcse: null,
      // pcsi: null,
      // circunferencia_cintura: null,
      // circunferencia_panturrilha: null,
      // diagnostico_antropometrico: null,

      // percentual_gordura: null,
      // peso_gordura: null,
      // massa_magra: null,
      // gordura_alvo: null,
      // peso_alvo: null,
      // tmb: null,
      // percentual_agua_massa_magra: null,
      // agua_corporal_total: null,

      // denticao: null,
      // mastigacao: null,
      // disfagia: null,
      // odinofalgia: null,
      // dispepsia: null,
      // nauseas: null,
      // vomitos: null,
      // flatulencia: null,
      // ritmo_intestinal: null,
      // ritmo_urinario: null,
      // pele: null,
      // unhas: null,
      // cabelo: null,
      // mucosas: null,
      // edemas: null,
      // abdomen: null,

      // data_ab: null,
      // avaliacao_bioquimica: null,

      // possui_aversoes_alimentares: null,
      // aversoes_alimentares: null,
      // possui_alergias_alimentares: null,
      // alergias_alimentares: null,
      // ingestao_hidrica: null,
      // existe_horario_mais_fome: null,
      // horario_mais_fome: null,
      // apetite: null,
      // diagnostico_conclusivo: null,
  });

  // 🔥 CARREGA ANAMNESE SE ESTIVER EDITANDO
  // useEffect(() => {
  //   if (anamneseId) {
  //     fetch(`http://localhost:8080/base-anamneses/${anamneseId}`)
  //       .then(res => res.json())
  //       .then(data => {
  //         setFormData(data);
  //       })
  //       .catch(err => console.error("Erro ao carregar anamnese:", err));
  //   }
  // }, [anamneseId]);

  // 🔙 Botão voltar
  const handleClick = () => {
    navigate(`/pagina-paciente/${pacienteId}`);
  };

  // 🔥 SALVAR OU EDITAR (POST ou PUT)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = anamneseId
      ? `http://localhost:8080/base-anamneses/${anamneseId}`
      : `http://localhost:8080/base-anamneses/cadastrar`;

    const method = anamneseId ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paciente_id: Number(pacienteId),
          ...formData
        }),
      });

      if (!response.ok) throw new Error("Erro ao salvar anamnese");

      alert(anamneseId ? "Anamnese atualizada!" : "Anamnese cadastrada!");
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

          {anamneseId ? "Editar Anamnese Infantil" : "Cadastro de Anamnese Infantil"}
        </h3>



        <p className="mt-5 mb-3 ms-1" style={{fontFamily:"arial", fontSize:"1.4rem"}}>Dados Iniciais</p>
        <DadosIniciaisChild formData={formData} setFormData={setFormData} />

        <h4 className="mt-5 mb-3" style={{fontFamily:"arial", fontSize:"1.4rem"}}>Dados Demográficos</h4>
        <SocioEconomicosChild formData={formData} setFormData={setFormData} />

        <h4 className="mt-5 mb-3" style={{fontFamily:"arial", fontSize:"1.4rem"}}>Dados de Saúde</h4>
        <SaudeChild formData={formData} setFormData={setFormData} />

        <h4 className="mt-5 mb-3" style={{fontFamily:"arial", fontSize:"1.4rem"}}>Avaliação Antropométrica</h4>
        <AntropometricaChild formData={formData} setFormData={setFormData} />

        <h4 className="mt-5 mb-3" style={{fontFamily:"arial", fontSize:"1.4rem"}}>Sinais e Sintomas</h4>
        <SinaisSintomasChild formData={formData} setFormData={setFormData} />

        <h4 className="mt-5 mb-3" style={{fontFamily:"arial", fontSize:"1.4rem"}}>Avaliação Bioquímica</h4>
        <BioquimicaChild formData={formData} setFormData={setFormData} />

        <h4 className="mt-5 mb-3" style={{fontFamily:"arial", fontSize:"1.4rem"}}>História Alimentar</h4>
        <HistoriaAlimentarChild formData={formData} setFormData={setFormData} />

        <h4 className="mt-5 mb-3" style={{fontFamily:"arial", fontSize:"1.4rem"}}>Diagnóstico Conclusivo</h4>
        <DiagnosticoConclusivoChild formData={formData} setFormData={setFormData} />

        <div className="d-flex justify-content-between mt-4">
          
         <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClick}
        >
          <i className="bi bi-arrow-left me-2"></i>
          Voltar
        </button>

          <button type="submit" className="btn btn-primary rounded-pill px-4 fw-semibold">
            {anamneseId ? "Atualizar Anamnese" : "Salvar Anamnese"}
          </button>

        </div>
      </form>
    </div>
  );
}

export default ChildAnamneseForm;
