import { useState } from "react"; 
import { useParams } from "react-router-dom";
import DadosSocioEconomicos from "./components/DadosSocioEconomicos.jsx";
import DadosSaude from "./components/DadosSaude.jsx";
import AvaliacaoAntropometrica from "./components/AvaliacaoAntropometrica.jsx";
import DadosBioimpedancia from "./components/DadosBioimpedancia.jsx";
import SinaisSintomasClinicos from "./components/SinaisSintomasClinicos.jsx";
import AvaliacaoBioquimica from "./components/AvaliacaoBioquimica.jsx";
import HistoriaAlimentar from "./components/HistoriaAlimentar.jsx";
import DadosIniciais from "./components/DadosIniciais.jsx";

function BaseAnamneseForm() {
  const { id } = useParams(); 

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
    
      // data_ab: "",
      // avaliacao_bioquimica: "",
    

      // possui_aversoes_alimentares: null,
      // aversoes_alimentares: "",
      // possui_alergias_alimentares: null,
      // alergias_alimentares: "",
      // ingestao_hidrica: "",
      // existe_horario_mais_fome: null,
      // horario_mais_fome: "",
      // apetite: "",
      // diagnostico_conclusivo: "",
    
  });

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
    <div>
      <form onSubmit={handleSubmit} className="p-3">
        <h3 className="text-primary">Cadastro de Anamnese</h3>
        
        
        <DadosIniciais formData={formData} setFormData={setFormData}/>
        <DadosSocioEconomicos formData={formData} setFormData={setFormData}/>
        <DadosSaude formData={formData} setFormData={setFormData}/>
        <AvaliacaoAntropometrica formData={formData} setFormData={setFormData}/>
        <DadosBioimpedancia formData={formData} setFormData={setFormData}/>
        <SinaisSintomasClinicos formData={formData} setFormData={setFormData}/>
        {/*<AvaliacaoBioquimica formData={formData} setFormData={setFormData}/>
        <HistoriaAlimentar formData={formData} setFormData={setFormData}/>  */}
        
      <button type="submit" className="btn btn-success mt-3">Salvar</button>

      </form>
      
    </div>
  );
}

export default BaseAnamneseForm;
