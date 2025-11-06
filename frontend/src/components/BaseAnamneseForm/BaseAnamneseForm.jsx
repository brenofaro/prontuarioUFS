import { useState } from "react"; 
import { useParams } from "react-router-dom";
import DadosSocioEconomicos from "./components/DadosSocioEconomicos.jsx";

function BaseAnamneseForm() {
  const { id } = useParams(); 

  const [formData, setFormData] = useState({
    tipo: "",
    queixa_principal: "",
    historico_doenca: "",
    habitos: "",
    observacoes: "",
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
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o backend ou processá-los conforme necessário
    try {
      const response = await fetch("http://localhost:8080/base-anamneses/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        ...formData,
        paciente_id: Number(id),
      }),
      })

      if (!response.ok) {
        throw new Error("Erro ao cadastrar Anamnese");
      }

      const data = await response.json();
      console.log("Anamnese cadastrada:", data);

      alert("Anamnese cadastrada com sucesso!");
      // Limpar o formulário após o cadastro bem-sucedido
      setFormData({
        tipo: "",
        queixa_principal: "",
        historico_doenca: "",
        habitos: "",
        observacoes: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar anamnese:", error);
      alert("Erro ao cadastrar anamnese. Por favor, tente novamente.");


  }
}

  return (
    <DadosSocioEconomicos/>
  );
}

export default BaseAnamneseForm;
