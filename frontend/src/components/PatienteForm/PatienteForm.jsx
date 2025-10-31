import { useState } from "react"; 

function PatienteForm() {

  const [formData, setFormData] = useState({
    nome: "",
    dataNascimento: "",
    telefone: "",
    cpf: "",
    endereco: "",
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
      const response = await fetch("http://localhost:8080/pacientes/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Erro ao cadastrar paciente");
      }

      const data = await response.json();
      console.log("Paciente cadastrado:", data);

      alert("Paciente cadastrado com sucesso!");
      // Limpar o formulário após o cadastro bem-sucedido
      setFormData({
        nome: "",
        dataNascimento: "",
        telefone: "",
        cpf: "",
        endereco: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar paciente:", error);
      alert("Erro ao cadastrar paciente. Por favor, tente novamente.");


  }
}

  return (
    <div className="container mt-4 border rounded p-4 bg-light">
      <h4>Adicionar Paciente</h4>
      <h6 className="text-primary mt-3 mb-3">GERAL</h6>

      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-8">
            <label className="form-label">Nome*</label>
            <input 
              type="text" 
              className="form-control" 
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required  
            />
          </div>
          
        </div>

        <div className="row mb-3 align-items-center">
          <div className="col-md-4">
            <label className="form-label">Data de nasc.*</label>
            <input 
              type="date" 
              className="form-control" 
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
              required
              />
          </div>

            </div>

        {/* telefone */}
        <div className="row mb-3">
          <div className="col-md-12">
            <label className="form-label">Telefone</label>
            <input 
              type="text" 
              className="form-control" 
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              />
          </div>
        </div>

        {/* CPF e endereço */}
        <div className="row mb-4">
          <div className="col-md-6">
            <label className="form-label">CPF</label>
            <input 
              type="text" 
              className="form-control" 
              name="cpf"
              value={formData.cpf}
              onChange={handleChange} 
              required
              />
          </div>
            <div className="col-md-6">
            <label className="form-label">endereço</label>
            <input 
              type="text" 
              className="form-control" 
              name="endereco"
              value={formData.endereco}
              onChange={handleChange} 
              />
          </div> 
        </div>

        {/* Botão */}
        <button type="submit" className="btn btn-primary">
          Salvar Paciente
        </button>
      </form>
    </div>
  );
}

export default PatienteForm;
