import { useState } from "react"; 
import { useNavigate } from "react-router-dom";

function PatienteForm() {
  const [formData, setFormData] = useState({
    nome: "",
    data_nascimento: "",
    telefone: "",
    cpf: "",
    endereco: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // 📱 Formatar telefone: (79) 99999-9999
  const formatTelefone = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  };

  // 🆔 Formatar CPF: 000.000.000-00
  const formatCPF = (value) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
  };

  // ✅ Validar CPF
  const validarCPF = (cpf) => {
    const numbers = cpf.replace(/\D/g, '');
    if (numbers.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(numbers)) return false;
    
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(numbers.charAt(i)) * (10 - i);
    }
    let digit = 11 - (sum % 11);
    if (digit >= 10) digit = 0;
    if (digit !== parseInt(numbers.charAt(9))) return false;
    
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(numbers.charAt(i)) * (11 - i);
    }
    digit = 11 - (sum % 11);
    if (digit >= 10) digit = 0;
    if (digit !== parseInt(numbers.charAt(10))) return false;
    
    return true;
  };

  // 🎂 Calcular idade
  const calcularIdade = (dataNascimento) => {
    if (!dataNascimento) return null;
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  };

  const handleClick = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "telefone") {
      formattedValue = formatTelefone(value);
    } else if (name === "cpf") {
      formattedValue = formatCPF(value);
    }

    setFormData({
      ...formData,
      [name]: formattedValue,
    });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório";
    }

    if (!formData.data_nascimento) {
      newErrors.data_nascimento = "Data de nascimento é obrigatória";
    } else {
      const idade = calcularIdade(formData.data_nascimento);
      if (idade < 0) {
        newErrors.data_nascimento = "Data de nascimento inválida";
      }
    }

    if (!formData.cpf) {
      newErrors.cpf = "CPF é obrigatório";
    } else if (!validarCPF(formData.cpf)) {
      newErrors.cpf = "CPF inválido";
    }

    if (formData.telefone) {
      const numbers = formData.telefone.replace(/\D/g, '');
      if (numbers.length < 10) {
        newErrors.telefone = "Telefone incompleto";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/pacientes/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        
        // Verificar se é erro de CPF duplicado
        if (response.status === 409 || errorData.message?.includes("CPF já cadastrado")) {
          setErrorMessage("Este CPF já está cadastrado no sistema. Por favor, verifique os dados ou entre em contato com o suporte.");
          setShowErrorModal(true);
          return;
        }
        
        throw new Error(errorData.message || "Erro ao cadastrar paciente");
      }

      const data = await response.json();
      console.log("Paciente cadastrado:", data);

      // Mostrar modal de sucesso
      setShowSuccessModal(true);

      // Limpar formulário
      setFormData({
        nome: "",
        data_nascimento: "",
        telefone: "",
        cpf: "",
        endereco: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Erro ao cadastrar paciente:", error);
      setErrorMessage("Erro ao cadastrar paciente. Por favor, tente novamente.");
      setShowErrorModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate("/");
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  const idade = calcularIdade(formData.data_nascimento);

  return (
    <>
      <div className="container mt-4">
        <div className="card shadow-sm border-0 rounded p-4 bg-white">
          <div className="d-flex align-items-center mb-4">
            <div className="bg-primary rounded-circle p-3 me-3">
              <i className="bi bi-person-plus-fill text-white fs-4"></i>
            </div>
            <h4 className="mb-0 text-dark fw-bold">Cadastrar Paciente</h4>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Nome */}
            <div className="mb-4">
              <label className="form-label fw-semibold">
                Nome completo <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.nome ? 'is-invalid' : ''}`}
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Ex: Maria Silva Santos"
              />
              {errors.nome && <div className="invalid-feedback">{errors.nome}</div>}
            </div>

            <div className="row mb-4">
              {/* Data de nascimento */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Data de Nascimento <span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  className={`form-control ${errors.data_nascimento ? 'is-invalid' : ''}`}
                  name="data_nascimento"
                  value={formData.data_nascimento}
                  onChange={handleChange}
                  max={new Date().toISOString().split('T')[0]}
                />
                {idade !== null && idade >= 0 && (
                  <small className="text-muted">
                    {idade} {idade === 1 ? 'ano' : 'anos'}
                  </small>
                )}
                {errors.data_nascimento && (
                  <div className="invalid-feedback">{errors.data_nascimento}</div>
                )}
              </div>

              {/* CPF */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  CPF <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.cpf ? 'is-invalid' : ''}`}
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  placeholder="000.000.000-00"
                  maxLength="14"
                />
                {errors.cpf && <div className="invalid-feedback">{errors.cpf}</div>}
              </div>
            </div>

            <div className="row mb-4">
              {/* Telefone */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Telefone</label>
                <input
                  type="text"
                  className={`form-control ${errors.telefone ? 'is-invalid' : ''}`}
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(79) 99999-9999"
                  maxLength="15"
                />
                {errors.telefone && <div className="invalid-feedback">{errors.telefone}</div>}
              </div>

              {/* Endereço */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Endereço</label>
                <input
                  type="text"
                  className="form-control"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleChange}
                  placeholder="Rua, número, bairro, cidade"
                />
              </div>
            </div>

            {/* Botões */}
            <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
              <button
                type="button"
                className="btn btn-outline-secondary px-4"
                onClick={handleClick}
              >
                <i className="bi bi-arrow-left me-2"></i>
                Voltar
              </button>

              <button type="submit" className="btn btn-primary px-4 fw-semibold">
                <i className="bi bi-check-lg me-2"></i>
                Salvar Paciente
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal de Sucesso */}
      {showSuccessModal && (
        <div 
          className="modal show d-block" 
          tabIndex="-1" 
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={handleCloseModal}
        >
          <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-body text-center p-5">
                <div className="mb-4">
                  <div 
                    className="rounded-circle bg-success d-inline-flex align-items-center justify-content-center"
                    style={{ width: '80px', height: '80px' }}
                  >
                    <svg width="48" height="48" fill="white" viewBox="0 0 16 16">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                    </svg>
                  </div>
                </div>

                <h4 className="text-success fw-bold mb-3">Paciente Cadastrado!</h4>
                <p className="text-muted mb-4">
                  O cadastro foi realizado com sucesso e já está disponível no sistema.
                </p>

                <div className="d-flex gap-3 justify-content-center">
                  <button
                    type="button"
                    className="btn btn-outline-secondary px-4"
                    onClick={() => setShowSuccessModal(false)}
                  >
                    Cadastrar Outro
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary px-4"
                    onClick={handleCloseModal}
                  >
                    Ir para Lista
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Erro */}
      {showErrorModal && (
  <div 
    className="modal show d-block" 
    tabIndex="-1" 
    style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    onClick={handleCloseErrorModal}
  >
    <div 
      className="modal-dialog modal-dialog-centered"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="modal-content shadow-sm">
        
        <div className="modal-header bg-danger text-white">
          <h5 className="modal-title mb-0">Erro</h5>
          <button 
            type="button" 
            className="btn-close btn-close-white"
            onClick={handleCloseErrorModal}
          ></button>
        </div>

        <div className="modal-body text-center">
          <p className="fw-semibold text-danger mb-2">CPF Já Cadastrado</p>
          <small className="text-muted">{errorMessage}</small>
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-danger px-4"
            onClick={handleCloseErrorModal}
          >
            Ok
          </button>
        </div>

      </div>
    </div>
  </div>
)}

    </>
  );
}

export default PatienteForm;