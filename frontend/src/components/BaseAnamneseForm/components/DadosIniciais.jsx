const DadosIniciais = ({ formData, setFormData }) => {
  return (
    <div className="p-4 rounded-3 bg-white border">
      <div className="row g-3">
        <div className="col-md-4">
          <label
            htmlFor="data_consulta"
            className="form-label text-muted small"
          >
            Data da Consulta *
          </label>
          <input
            type="date"
            className="form-control"
            id="data_consulta"
            value={formData.data_consulta}
            onChange={(e) =>
              setFormData({
                ...formData,
                data_consulta: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="col-md-4">
          <label
            htmlFor="numero_prontuario"
            className="form-label text-muted small"
          >
            Número do Prontuário *
          </label>
          <input
            type="text"
            className="form-control"
            id="numero_prontuario"
            value={formData.numero_prontuario}
            onChange={(e) =>
              setFormData({
                ...formData,
                numero_prontuario: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="col-md-4">
          <label
            htmlFor="nutricionista_responsavel"
            className="form-label text-muted small"
          >
            Nutricionista Responsável *
          </label>
          <input
            type="text"
            className="form-control"
            id="nutricionista_responsavel"
            placeholder="Nome completo"
            value={formData.nutricionista_responsavel}
            onChange={(e) =>
              setFormData({
                ...formData,
                nutricionista_responsavel: e.target.value,
              })
            }
            required
          />
        </div>
      </div>
    </div>
  );
};

export default DadosIniciais;
