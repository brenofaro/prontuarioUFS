const AvaliacaoAntropometrica = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;

    if (type === "checkbox" && !Array.isArray(formData[name])) {
      return setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    }

    if (type === "radio" && (value === "true" || value === "false")) {
      return setFormData((prev) => ({
        ...prev,
        [name]: value === "true",
      }));
    }

    if (type === "number") {
      const numericValue = value === "" ? null : Number(value);
      return setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
    }

    if (type === "date") {
      return setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="mb-4 p-4 border rounded bg-white shadow-sm">
      <div className="mb-4">
        <div className="row g-3">
          <div className="col-md-3">
            <label className="form-label text-muted small">
              Peso atual (kg)
            </label>
            <input
              type="text"
              name="peso_atual"
              className="form-control"
              value={formData.peso_atual || ""}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">
              Peso usual (kg)
            </label>
            <input
              type="text"
              name="peso_usual"
              className="form-control"
              value={formData.peso_usual || ""}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">
              Altura real (m)
            </label>
            <input
              type="text"
              name="altura_real"
              className="form-control"
              value={formData.altura_real || ""}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">
              Altura da joelho (cm)
            </label>
            <div className="input-group">
              <input
                type="text"
                name="aj"
                className="form-control"
                value={formData.aj || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">
              Altura estimada (m)
            </label>
            <input
              type="text"
              name="altura_estimada"
              className="form-control"
              value={formData.altura_estimada || ""}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">IMC (kg/m²)</label>
            <input
              type="text"
              name="imc"
              className="form-control"
              value={formData.imc || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="row g-3">
          <div className="col-md-3">
            <label className="form-label text-muted small">Braço</label>
            <input
              type="text"
              name="circunferencia_braco"
              className="form-control"
              value={formData.circunferencia_braco || ""}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">Cintura</label>
            <input
              type="text"
              name="circunferencia_cintura"
              className="form-control"
              value={formData.circunferencia_cintura || ""}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">Panturrilha</label>
            <input
              type="text"
              name="circunferencia_panturrilha"
              className="form-control"
              value={formData.circunferencia_panturrilha || ""}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">Pescoço</label>
            <input
              type="text"
              name="comprimento_pescoco"
              className="form-control"
              value={formData.comprimento_pescoco || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="row g-3">
          <div className="col-md-3">
            <label className="form-label text-muted small">
              Tricipital (PCT)
            </label>
            <input
              type="text"
              name="pct"
              className="form-control"
              value={formData.pct || ""}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">
              Bicipital (PCB)
            </label>
            <input
              type="text"
              name="pcb"
              className="form-control"
              value={formData.pcb || ""}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">
              Subescapular (PCSE)
            </label>
            <input
              type="text"
              name="pcse"
              className="form-control"
              value={formData.pcse || ""}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">
              Suprailíaca (PCSI)
            </label>
            <input
              type="text"
              name="pcsi"
              className="form-control"
              value={formData.pcsi || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label
          htmlFor="diagnostico_antropometrico"
          className="form-label text-muted small"
        >
          Diagnóstico Antropométrico
        </label>
        <textarea
          className="form-control"
          id="diagnostico_antropometrico"
          name="diagnostico_antropometrico"
          placeholder="Descreva a avaliação dos dados antropométricos, classificações e observações relevantes..."
          rows="5"
          value={formData.diagnostico_antropometrico || ""}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default AvaliacaoAntropometrica;
