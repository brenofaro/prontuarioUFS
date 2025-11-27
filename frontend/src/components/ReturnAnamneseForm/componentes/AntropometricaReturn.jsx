const AntropometricaReturn = ({ formData, setFormData }) => {
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

  const toggleBooleanField = (fieldName, newValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: prev[fieldName] === newValue ? null : newValue,
    }));
  };

  return (
    <div className="mb-4 p-4 border rounded bg-white shadow-sm">
      <div className="mb-4">
        <div className="row g-3">
          <div className="d-flex align-items-center gap-2 col-md-3">
            <label className="form-label form-side text-muted small">Peso (kg):</label>
            <input
              type="text"
              name="peso"
              className="form-control form-control-sm"
              style={{width:"100px"}}
              value={formData.peso || ""}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex align-items-center gap-2 col-md-3">
            <label className="form-label form-side text-muted small">Altura (m):</label>
            <input
              type="text"
              name="altura"
              className="form-control form-control-sm"
              style={{width:"100px"}}
              value={formData.altura || ""}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex align-items-center gap-2 col-md-3">
            <label className="form-label form-side text-muted small">IMC/I:</label>
            <input
              type="text"
              name="imc_i"
              className="form-control form-control-sm"
              style={{width:"100px"}}
              value={formData.imc_i || ""}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex align-items-center gap-2 col-md-3">
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

          <div className="d-flex align-items-center gap-1 col-md-4">
            <label className="form-label form-side text-muted small">
              Circunferência da cabeça (cm):
            </label>
            <input
              type="text"
              name="circunferencia_cabeca"
              className="form-control form-control-sm"
              style={{width:"100px"}}
              value={formData.circunferencia_cabeca || ""}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex align-items-center gap-1 col-md-4">
            <label className="form-label form-side text-muted small">
              Circunferência da coxa (cm):
            </label>
            <input
              type="text"
              name="circunferencia_coxa"
              className="form-control form-control-sm"
              style={{width:"100px"}}
              value={formData.circunferencia_coxa || ""}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex align-items-center gap-1 col-md-3">
            <label className="form-label form-side text-muted small">
              Prega cutânea triciptal (mm):
            </label>
            <input
              type="text"
              name="pct"
              className="form-control form-control-sm"
              style={{width:"100px"}}
              value={formData.pct || ""}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex align-items-center gap-2 col-md-4">
            <label className="form-label form-side text-muted small">
              Circunferência do braço (cm):
            </label>
            <input
              type="text"
              name="circunferencia_braco"
              className="form-control form-control-sm"
              style={{width:"100px"}}
              value={formData.circunferencia_braco || ""}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex align-items-center gap-2 col-md-3">
            <label className="form-label form-side text-muted small">IMC:</label>
            <input
              type="text"
              name="imc"
              className="form-control form-control-sm"
              style={{width:"100px"}}
              value={formData.imc || ""}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex flex-wrap gap-3 mt-4">
            <div className="form-check d-flex align-items-center gap-1">
              <input
                className="form-check-input"
                type="radio"
                name="grau_imc"
                id="desnutricao_grau_i"
                value="desnutricao_grau_i"
                checked={formData.grau_imc === "desnutricao_grau_i"}
                onChange={handleChange}
                onClick={() => toggleBooleanField("grau_imc", "desnutricao_grau_i")}
              />
              <label
                className="form-check-label text-muted small "
                htmlFor="desnutricao_grau_i"
              >
                Desnutrição Grau 1
              </label>
            </div>

            <div className="form-check d-flex align-items-center gap-1">
              <input
                className="form-check-input"
                type="radio"
                name="grau_imc"
                id="desnutricao_grau_ii"
                value="desnutricao_grau_ii"
                checked={formData.grau_imc === "desnutricao_grau_ii"}
                onChange={handleChange}
                onClick={() => toggleBooleanField("grau_imc", "desnutricao_grau_ii")}
              />
              <label
                className="form-check-label text-muted small"
                htmlFor="desnutricao_grau_ii"
              >
                Desnutrição Grau 2
              </label>
            </div>

            <div className="form-check d-flex align-items-center gap-1">
              <input
                className="form-check-input"
                type="radio"
                name="grau_imc"
                id="desnutricao_grau_iii"
                value="desnutricao_grau_iii"
                checked={formData.grau_imc === "desnutricao_grau_iii"}
                onChange={handleChange}
                onClick={() => toggleBooleanField("grau_imc", "desnutricao_grau_iii")}
              />
              <label
                className="form-check-label text-muted small"
                htmlFor="desnutricao_grau_iii"
              >
                Desnutrição Grau 3
              </label>
            </div>

            <div className="form-check d-flex align-items-center gap-1">
              <input
                className="form-check-input"
                type="radio"
                name="grau_imc"
                id="eutrofia"
                value="eutrofia"
                checked={formData.grau_imc === "eutrofia"}
                onChange={handleChange}
                onClick={() => toggleBooleanField("grau_imc", "eutrofia")}
              />
              <label
                className="form-check-label text-muted small"
                htmlFor="eutrofia"
              >
                Eutrofia
              </label>
            </div>

            <div className="form-check d-flex align-items-center gap-1">
              <input
                className="form-check-input"
                type="radio"
                name="grau_imc"
                id="sobrepeso"
                value="sobrepeso"
                checked={formData.grau_imc === "sobrepeso"}
                onChange={handleChange}
                onClick={() => toggleBooleanField("grau_imc", "sobrepeso")}
              />
              <label
                className="form-check-label text-muted small "
                htmlFor="sobrepeso"
              >
                Sobrepeso
              </label>
            </div>

            <div className="form-check d-flex align-items-center gap-1">
              <input
                className="form-check-input"
                type="radio"
                name="grau_imc"
                id="obesidade_grau_i"
                value="obesidade_grau_i"
                checked={formData.grau_imc === "obesidade_grau_i"}
                onChange={handleChange}
                onClick={() => toggleBooleanField("grau_imc", "obesidade_grau_i")}
              />
              <label
                className="form-check-label text-muted small"
                htmlFor="obesidade_grau_i"
              >
                Obesidade Grau 1
              </label>
            </div>

            <div className="form-check d-flex align-items-center gap-1">
              <input
                className="form-check-input"
                type="radio"
                name="grau_imc"
                id="obesidade_grau_ii"
                value="obesidade_grau_ii"
                checked={formData.grau_imc === "obesidade_grau_ii"}
                onChange={handleChange}
                onClick={() => toggleBooleanField("grau_imc", "obesidade_grau_ii")}
              />
              <label
                className="form-check-label text-muted small "
                htmlFor="obesidade_grau_ii"
              >
                Obesidade Grau 2
              </label>
            </div>

            <div className="form-check d-flex align-items-center gap-1">
              <input
                className="form-check-input"
                type="radio"
                name="grau_imc"
                id="obesidade_grau_iii"
                value="obesidade_grau_iii"
                checked={formData.grau_imc === "obesidade_grau_iii"}
                onChange={handleChange}
                onClick={() => toggleBooleanField("grau_imc", "obesidade_grau_iii")}
              />
              <label
                className="form-check-label text-muted small"
                htmlFor="obesidade_grau_iii"
              >
                Obesidade Grau 3
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntropometricaReturn;
