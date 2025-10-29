import { useState } from "react";

export default function AnamneseForm() {
  const [formData, setFormData] = useState({
    tipo: "",
    queixa_principal: "",
    id_paciente: "",
    historico_doenca: "",
    habitos: "",
    observacoes: "",
  });

  const [mensagem, setMensagem] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem("Enviando...");

    try {
      const response = await fetch("http://localhost:8080/anamneses/cadastrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setMensagem(`✅ Anamnese (${data.tipo}) cadastrada com sucesso!`);
      } else {
        const error = await response.json();
        setMensagem(`❌ Erro: ${error.detail}`);
      }
    } catch (error) {
      setMensagem(`❌ Erro: ${error.message}`);
    }
  };

  return (
    <>
    <div>
      <h2>Formulário de Anamnese</h2>
    </div>
    <form onSubmit={handleSubmit}>
      <h3>Cadastrar Anamnese</h3>

      <label>Tipo de anamnese</label>
      <select name="tipo" value={formData.tipo} onChange={handleChange} required>
        <option value="">Selecione...</option>
        <option value="Médica">Médica</option>
        <option value="Odontológica">Odontológica</option>
        <option value="Nutricional">Nutricional</option>
        <option value="Psicológica">Psicológica</option>
      </select>

      <label>Queixa principal</label>
      <input
        name="queixa_principal"
        value={formData.queixa_principal}
        onChange={handleChange}
        required
      />

      <label>Histórico da doença</label>
      <input name="historico_doenca" value={formData.historico_doenca} onChange={handleChange} />

      <label>ID do Paciente</label>
      <input name="id_paciente" value={formData.id_paciente} onChange={handleChange} required />

      <label>Hábitos</label>
      <input name="habitos" value={formData.habitos} onChange={handleChange} />

      <label>Observações</label>
      <input name="observacoes" value={formData.observacoes} onChange={handleChange} />

      <button type="submit">Cadastrar</button>
      {mensagem && <p>{mensagem}</p>}
    </form>
    
    </>
  );
}
