import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PatienteForm() {

  const [formData, setFormData] = useState({
    nome: "",
    dataNascimento: "",
    telefone: "",
    cpf: "",
    endereco: "",
  });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  }

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

      toast.success("Paciente cadastrado com sucesso!");

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
      <div className="card shadow-sm border-0 rounded-4 p-4 mb-4" style={{ background: "#f8f9fa" }}>
  <h4 className="fw-bold text-dark mb-4">
    👤 Adicionar Paciente
  </h4>

  <h6 className="text-primary fw-semibold mb-3">Informações Gerais</h6>

  <form onSubmit={handleSubmit}>
    {/* Nome */}
    <div className="row mb-3">
      <div className="col-md-8">
        <label className="form-label fw-semibold">
          <i className="bi bi-person me-2 text-primary"></i>Nome*
        </label>
        <input
          type="text"
          className="form-control shadow-sm"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Ex: Rodolfo Botto Garcia"
          required
        />
      </div>
    </div>

    {/* Data de nascimento */}
    <div className="row mb-3">
      <div className="col-md-4">
        <label className="form-label fw-semibold">
          <i className="bi bi-calendar3 me-2 text-primary"></i>Data de Nascimento*
        </label>
        <input
          type="date"
          className="form-control shadow-sm"
          name="dataNascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
          required
        />
      </div>
    </div>

    {/* Telefone */}
    <div className="row mb-3">
      <div className="col-md-6">
        <label className="form-label fw-semibold">
          <i className="bi bi-telephone me-2 text-primary"></i>Telefone
        </label>
        <input
          type="text"
          className="form-control shadow-sm"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          placeholder="(79) 99999-9999"
        />
      </div>
    </div>

    {/* CPF e Endereço */}
    <div className="row mb-4">
      <div className="col-md-6">
        <label className="form-label fw-semibold">
          <i className="bi bi-person-vcard me-2 text-primary"></i>CPF
        </label>
        <input
          type="text"
          className="form-control shadow-sm"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          placeholder="000.000.000-00"
          required
        />
      </div>

      <div className="col-md-6">
        <label className="form-label fw-semibold">
          <i className="bi bi-geo-alt me-2 text-primary"></i>Endereço
        </label>
        <input
          type="text"
          className="form-control shadow-sm"
          name="endereco"
          value={formData.endereco}
          onChange={handleChange}
          placeholder="Rua, número, bairro, cidade"
        />
      </div>
    </div>

    {/* Botões */}
    <div className="d-flex justify-content-between mt-4">
      <button
        type="button"
        className="btn btn-outline-secondary rounded-pill px-4"
        onClick={handleClick}
      >
        ← Voltar
      </button>

      <button type="submit" className="btn btn-primary rounded-pill px-4 fw-semibold">
        💾 Salvar Paciente
      </button>
    </div>
  </form>
</div>


<ToastContainer 
 position="bottom-right"
  autoClose={2000}          // fecha em 3 segundos
  hideProgressBar={false}   // mostra a barrinha de progresso
  newestOnTop={false}       // toasts mais novos não sobrepõem
  closeOnClick              // fecha ao clicar
  pauseOnHover              // pausa se o mouse estiver sobre o toast
  draggable                 // permite arrastar o toast
  
  />
    </div>
  );
}

export default PatienteForm;
