import { useState } from "react"; 
import { useParams, useNavigate } from "react-router-dom";
import DadosSocioEconomicos from "./components/DadosSocioEconomicos.jsx";
import DadosSaude from "./components/DadosSaude.jsx";
import AvaliacaoAntropometrica from "./components/AvaliacaoAntropometrica.jsx";
import DadosBioimpedancia from "./components/DadosBioimpedancia.jsx";
import SinaisSintomasClinicos from "./components/SinaisSintomasClinicos.jsx";
import AvaliacaoBioquimica from "./components/AvaliacaoBioquimica.jsx";
import HistoriaAlimentar from "./components/HistoriaAlimentar.jsx";
import DadosIniciais from "./components/DadosIniciais.jsx";
import DiagnosticoConclusivo from "./components/DiagnosticoConclusivo.jsx";

function BaseAnamneseForm() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      data_consulta : "",
      numero_prontuario: "",
      nutricionista_responsavel: "",

      estado_civil: null,
      escolaridade: null,
      ocupacao: null,
      faz_atividade_dentro_casa: null,
      atividade_dentro_casa: null,
      estrutura_familia: [],
      outros_estrutura_familia: null,
      renda_pessoal: null,
      gastos_alimentacao: null,
      faz_atividade_fisica: null,
      qual_atividade_fisica: null,
      frequencia_atividade_fisica: null,
      ja_fez_atividade_fisica: null,
      tempo_parado_atividade_fisica: null,
      tem_etilismo: null,
      tipo_etilismo: null,
      quanto_etilismo: null,
      ja_foi_etilista: null,
      tempo_parado_etilismo: null,
      tem_tabagismo: null,
      tipo_tabagismo: null,
      quanto_tabagismo: null,
      ja_foi_tabagista: null,
      tempo_parado_tabagismo: null,
   
      objetivo_consulta: null,
      historia_doenca: null,
      diabetes_hma: null,
      diabetes_hf: null,
      hipertencao_hma: null,
      hipertencao_hf: null,
      doenca_cardiovascular_hma: null,
      doenca_cardiovascular_hf: null,
      dislipidemia_hma: null,
      dislipidemia_hf: null,
      cancer_hma: null,
      cancer_hf: null,
      osteoporose_hma: null,
      osteoporose_hf: null,
      depressao_hma: null,
      depressao_hf: null,
      sop_hma: null,
      sop_hf: null,
      outras_patologias: null,
      faz_uso_medicamentos: null,
      medicamentos: null,

      peso_atual: null,
      peso_usual: null,
      aj: null,
      altura_real: null,
      altura_estimada: null,
      imc: null,
      circunferencia_braco: null,
      comprimento_cotovelo: null,
      pct: null,
      pcb: null,
      pcse: null,
      pcsi: null,
      circunferencia_cintura: null,
      circunferencia_panturrilha: null,
      diagnostico_antropometrico: null,

      percentual_gordura: null,
      peso_gordura: null,
      massa_magra: null,
      gordura_alvo: null,
      peso_alvo: null,
      tmb: null,
      percentual_agua_massa_magra: null,
      agua_corporal_total: null,
    
      denticao: null,
      mastigacao: null,
      disfagia: null,
      odinofalgia: null,
      dispepsia: null,
      nauseas: null,
      vomitos: null,
      flatulencia: null,
      ritmo_intestinal: null,
      ritmo_urinario: null,
      pele: null,
      unhas: null,
      cabelo: null,
      mucosas: null,
      edemas: null,
      abdomen: null,
    
      data_ab: null,
      avaliacao_bioquimica: null,
    

      possui_aversoes_alimentares: null,
      aversoes_alimentares: null,
      possui_alergias_alimentares: null,
      alergias_alimentares: null,
      ingestao_hidrica: null,
      existe_horario_mais_fome: null,
      horario_mais_fome: null,
      apetite: null,
      diagnostico_conclusivo: null,
    
  });

const handleClick = () => {
  navigate(`/pagina-paciente/${id}`);
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/base-anamneses/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paciente_id: Number(id),
          ...formData
        
}),
      })

      if (!response.ok) {
        throw new Error("Erro ao cadastrar Anamnese");
      }

      const data = await response.json();
      console.log("Anamnese cadastrada:", data);

      alert("Anamnese cadastrada com sucesso!");
      // setFormData({
      //   tipo: "",
      //   queixa_principal: "",
      //   historico_doenca: "",
      //   habitos: "",
      //   observacoes: "",
      // });
    } catch (error) {
      console.error("Erro ao cadastrar anamnese:", error);
      alert("Erro ao cadastrar anamnese. Por favor, tente novamente.");


  }
}

  return (
    <div className="container mt-4 border rounded p-4 bg-light">
      <form onSubmit={handleSubmit} className="p-3">
        <h3 className="text-primary">Cadastro de Anamnese</h3>
        
        <h4 className="mt-5 mb-3">Dados Iniciais</h4>
        <DadosIniciais formData={formData} setFormData={setFormData}/>
        <h4 className="mt-5 mb-3">Dados Demográficos</h4>
        <DadosSocioEconomicos formData={formData} setFormData={setFormData}/>
        <h4 className="mt-5 mb-3">Dados de Saúde</h4>
        <DadosSaude formData={formData} setFormData={setFormData}/>
        <h4 className="mt-5 mb-3">Avaliação Antropometrica</h4>
        <AvaliacaoAntropometrica formData={formData} setFormData={setFormData}/>
        <h4 className="mt-5 mb-3">Dados Bioimpedancia</h4>
        <DadosBioimpedancia formData={formData} setFormData={setFormData}/>
        <h4 className="mt-5 mb-3">Sinais e Sintomas</h4>
        <SinaisSintomasClinicos formData={formData} setFormData={setFormData}/>
        <h4 className="mt-5 mb-3">Avaliação Bioquímica</h4>
        <AvaliacaoBioquimica formData={formData} setFormData={setFormData}/>
        <h4 className="mt-5 mb-3">História Alimentar</h4>
        <HistoriaAlimentar formData={formData} setFormData={setFormData}/>  
        <h4 className="mt-5 mb-3">Diagnostico Conclusivo</h4>
        <DiagnosticoConclusivo formData={formData} setFormData={setFormData}/>
        
      <div className="d-flex justify-content-between mt-4">
      <button
        type="button"
        className="btn btn-outline-secondary rounded-pill px-4"
        onClick={handleClick}
      >
        ← Voltar
      </button>

      <button type="submit" className="btn btn-primary rounded-pill px-4 fw-semibold">
         Salvar Anamnese
      </button>
    </div>
      </form>
      
    </div>
  );
}

export default BaseAnamneseForm;

  