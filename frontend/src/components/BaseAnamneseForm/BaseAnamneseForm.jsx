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

      // estado_civil: "",
      // escolaridade: "",
      // ocupacao: "",
      // faz_atividade_dentro_casa: null,
      // atividade_dentro_casa: "",
      // estrutura_familia: [],
      // renda_pessoal: "",
      // gastos_alimentacao: "",
      // faz_atividade_fisica: null,
      // qual_atividade_fisica: "",
      // frequencia_atividade_fisica: "",
      // ja_fez_atividade_fisica: null,
      // tempo_parado_atividade_fisica: "",
      // tem_etilismo: null,
      // tipo_etilismo: "",
      // quanto_etilismo: "",
      // ja_foi_etilista: null,
      // tempo_parado_etilismo: "",
      // tem_tabagismo: null,
      // tipo_tabagismo: "",
      // quanto_tabagismo: "",
      // ja_foi_tabagista: null,
      // tempo_parado_tabagismo: "",
   
      // objetivo_consulta: "",
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
      // outras_patologias: "",
      // faz_uso_medicamentos: null,
      // medicamentos: "",

      // peso_atual: "",
      // peso_usual: "",
      // aj: "",
      // altura_real: "",
      // altura_estimada: "",
      // imc: "",
      // circunferencia_braco: "",
      // comprimento_cotovelo: "",
      // pct: "",
      // pcb: "",
      // pcse: "",
      // pcsi: "",
      // circunferencia_cintura: "",
      // circunferencia_panturrilha: "",
      // diagnostico_antropometrico: "",

      // percentual_gordura: "",
      // peso_gordura: "",
      // massa_magra: "",
      // gordura_alvo: "",
      // peso_alvo: "",
      // tmb: "",
      // percentual_agua_massa_magra: "",
      // agua_corporal_total: "",
    
      // denticao: "",
      // mastigacao: "",
      // disfagia: null,
      // odinofalgia: null,
      // dispepsia: null,
      // nauseas: null,
      // vomitos: null,
      // flatulencia: null,
      // ritmo_intestinal: "",
      // ritmo_urinario: "",
      // pele: "",
      // unhas: "",
      // cabelo: "",
      // mucosas: "",
      // edemas: "",
      // abdomen: "",
    
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
        {/* <DadosSocioEconomicos formData={formData} setFormData={setFormData}/>
        <DadosSaude formData={formData} setFormData={setFormData}/>
        <AvaliacaoAntropometrica formData={formData} setFormData={setFormData}/>
        <DadosBioimpedancia formData={formData} setFormData={setFormData}/>
        <SinaisSintomasClinicos formData={formData} setFormData={setFormData}/>
        <AvaliacaoBioquimica formData={formData} setFormData={setFormData}/>
        <HistoriaAlimentar formData={formData} setFormData={setFormData}/> */}
        
      <button type="submit" className="btn btn-success mt-3">Salvar</button>

      </form>
      
    </div>
  );
}

export default BaseAnamneseForm;
