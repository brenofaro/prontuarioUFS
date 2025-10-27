import { useState } from "react";

export default function PacienteForm() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    data_nascimento: "",
    telefone: "",
    endereco: "",
  });

  const [mensagem, setMensagem] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem("Enviando...");

    try {
      const response = await fetch("http://localhost:8080/pacientes/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setMensagem(`✅ Paciente ${data.nome} cadastrado com sucesso!`);
        setFormData({
          nome: "",
          cpf: "",
          data_nascimento: "",
          telefone: "",
          endereco: "",
        });
      } else {
        const error = await response.json();
        setMensagem(`❌ Erro: ${error.detail}`);
      }
    } catch (error) {
      setMensagem(`❌ Erro na requisição: ${error.message}`);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Cadastrar Paciente</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input name="nome" value={formData.nome} onChange={handleChange} required />

        <label>CPF:</label>
        <input name="cpf" value={formData.cpf} onChange={handleChange} required />

        <label>Data de Nascimento:</label>
        <input
          type="date"
          name="data_nascimento"
          value={formData.data_nascimento}
          onChange={handleChange}
        />

        <label>Telefone:</label>
        <input name="telefone" value={formData.telefone} onChange={handleChange} />

        <label>Endereço:</label>
        <input name="endereco" value={formData.endereco} onChange={handleChange} />

        <button type="submit" style={{ marginTop: "10px" }}>
          Cadastrar
        </button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}
