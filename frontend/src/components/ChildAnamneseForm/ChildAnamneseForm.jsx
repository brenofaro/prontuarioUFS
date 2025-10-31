import { useState } from "react"; 
import { useParams } from "react-router-dom";

function ChildAnamneseForm() {
  const { id } = useParams(); 

  const [formData, setFormData] = useState({
    tipo: "",
    nome_da_crianca: "",
    historico_gripe: "",
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
      const response = await fetch("http://localhost:8080/child-anamneses/cadastrar", {
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
        nome_da_crianca: "",
        historico_gripe: "",
        habitos: "",
        observacoes: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar anamnese:", error);
      alert("Erro ao cadastrar anamnese. Por favor, tente novamente.");


  }
}

  return (
    <>
    <h4 className="ms-5 mt-3">Anamnese Infantil</h4>
    <div className="container mt-4 border rounded p-4 bg-light">
      
      <h6 className="text-primary mt-3 mb-3">GERAL</h6>

      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-8">
            <label className="form-label">tipo*</label>
            <input 
              type="text" 
              className="form-control" 
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              required  
            />
          </div>
          <div>

          </div>
          
        </div>

        <div className="row mb-3 align-items-center">
          <div className="col-md-4">
            <label className="form-label">nome_da_crianca.*</label>
            <input 
              type="text" 
              className="form-control" 
              name="nome_da_crianca"
              value={formData.nome_da_crianca}
              onChange={handleChange}
              required
              />
          </div>

            </div>

        {/* telefone */}
        <div className="row mb-3">
          <div className="col-md-12">
            <label className="form-label">historico_gripe</label>
            <input 
              type="text" 
              className="form-control" 
              name="historico_gripe"
              value={formData.historico_gripe}
              onChange={handleChange}
              />
          </div>
        </div>

        {/* CPF e endereço */}
        <div className="row mb-4">
          <div className="col-md-6">
            <label className="form-label">habitos</label>
            <input 
              type="text" 
              className="form-control" 
              name="habitos"
              value={formData.habitos}
              onChange={handleChange} 
              required
              />
          </div>
            <div className="col-md-6">
            <label className="form-label">observacoes</label>
            <input 
              type="text" 
              className="form-control" 
              name="observacoes"
              value={formData.observacoes}
              onChange={handleChange} 
              />
          </div> 
        </div>

        {/* Botão */}
        <button type="submit" className="btn btn-primary">
          Salvar Anmanese
        </button>
      </form>
    </div>
    </>
  );
}

export default ChildAnamneseForm;
