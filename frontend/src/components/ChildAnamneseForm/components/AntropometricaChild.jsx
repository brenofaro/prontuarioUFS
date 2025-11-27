const AntropometricaChild = ({ formData, setFormData }) => {
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
          <div className="d-flex align-items-center gap-2 col-md-3">
            <label className="form-label form-side text-muted small">
              Peso atual (kg):
            </label>
            <input
              type="text"
              name="peso_atual"
              className="form-control form-control-sm"
              style={{width:"100px"}}
              value={formData.peso_atual || ""}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex align-items-center gap-2 col-md-4">
            <label className="form-label form-side text-muted small">
              Peso ao nascer (kg):
            </label>
            <input
              type="text"
              name="peso_ao_nascer"
              className="form-control form-control-sm"
              style={{width:"100px"}}
              value={formData.peso_ao_nascer || ""}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex align-items-center gap-2 col-md-4 mb-3">
            <label className="form-label form-side text-muted small">
              Comprimento ao nascer(cm):
            </label>
              <input
                type="text"
                name="comprimento_ao_nascer"
                className="form-control form-control-sm"
                style={{width:"100px"}}
                value={formData.comprimento_ao_nascer || ""}
                onChange={handleChange}
              />
          </div>

          <div className="d-flex align-items-center gap-2 col-md-3">
            <label className="form-label  form-side text-muted small">
              Altura (m): 
            </label>
            <input
              type="text"
              name="altura"
              className="form-control form-control-sm"
              style={{width:"100px"}}
              value={formData.altura || ""}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex align-items-center gap-2 col-md-2">
            <label className="form-label form-side text-muted small">E/I:</label>
            <input
              type="text"
              name="e_i"
              className="form-control form-control-sm"
              style={{width:"100px"}}
              value={formData.e_i || ""}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex align-items-center gap-2 col-md-2">
            <label className="form-label form-side text-muted small">P/I:</label>
            <input
              type="text"
              name="p_i"
              className="form-control form-control-sm"
              style={{width:"100px"}}
              value={formData.p_i || ""}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex align-items-center gap-2 col-md-4">
            <label className="form-label form-side text-muted small">
              Peso para comprimento:
            </label>
              <input
                type="text"
                name="peso_para_comprimento"
                className="form-control form-control-sm"
                style={{width:"100px"}}
                value={formData.peso_para_comprimento || ""}
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

export default AntropometricaChild;
