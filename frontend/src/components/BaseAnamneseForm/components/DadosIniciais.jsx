import "./index.css";

const DadosIniciais = ({ formData, setFormData }) => {
  return (
    <div className="p-4 rounded-3 bg-white border">
      <div className="row g-3">

        {/* DATA DA CONSULTA */}
        <div className="col-md-4">
          <div className="custom-date-container">
            <label htmlFor="data_consulta" className="form-label text-muted small">
              Data da Consulta *
            </label>

            <div className="custom-date-wrapper">
              <input
                type="date"
                className="custom-date-input"
                id="data_consulta"
                value={formData.data_consulta}
                min="1900-01-01"
                max="2100-12-31"
                onChange={(e) =>
                  setFormData({ ...formData, data_consulta: e.target.value })
                }
                required
              />

              <span className="calendar-icon">📅</span>
            </div>
          </div>
        </div>

        {/* NÚMERO DO PRONTUÁRIO */}
        <div className="col-md-4">
          <label htmlFor="numero_prontuario" className="form-label text-muted small">
            Número do Prontuário *
          </label>

          <div className="custom-input-wrapper">
            <input
              type="number"
              className="custom-input"
              id="numero_prontuario"
              placeholder=""
              value={formData.numero_prontuario}
              onKeyDown={(e) => {
                if (["e", "E", "+", "-", "."].includes(e.key)) {
                  e.preventDefault();
                }
              }}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  numero_prontuario: e.target.value,
                })
              }
            />
          </div>
        </div>

        {/* NUTRICIONISTA RESPONSÁVEL */}
        <div className="col-md-4">
          <label htmlFor="nutricionista_responsavel" className="form-label text-muted small">
            Nutricionista Responsável *
          </label>

          <div className="custom-input-wrapper">
            <input
              type="text"
              className="custom-input"
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
    </div>
  );
};

export default DadosIniciais;
