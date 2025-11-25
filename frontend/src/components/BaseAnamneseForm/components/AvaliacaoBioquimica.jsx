import React from "react";

const AvaliacaoBioquimica = ({ formData, setFormData }) => {
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
    <>
      <div className="mb-4 p-3 border rounded bg-white shadow-sm">
        <div className="d-flex flex-column mb-3" style={{ maxWidth: "250px" }}>
          <div className="custom-date-container">
            <label htmlFor="data_consulta" className="form-label text-muted small">
              Data da Avaliação Bioquímica 
            </label>

            <div className="custom-date-wrapper">
              <input
                type="date"
                className="custom-date-input"
                id="data_ab"
                value={formData.data_ab}
                min="1900-01-01"
                max="2100-12-31"
                onChange={(e) =>
                  setFormData({ ...formData, data_ab: e.target.value })
                }
                required
              />

              <span className="calendar-icon">📅</span>
            </div>
          </div>
        </div>

        <div className="form-floating mb-4">
          <textarea
            className="form-control"
            id="avaliacao_bioquimica"
            name="avaliacao_bioquimica"
            placeholder="Descreva os resultados, observações ou detalhes relevantes..."
            style={{ height: "150px" }}
            value={formData.avaliacao_bioquimica || ""}
            onChange={handleChange}
          ></textarea>

          <label htmlFor="avaliacao_bioquimica">
            Descrição da avaliação bioquímica
          </label>
        </div>
      </div>
    </>
  );
};

export default AvaliacaoBioquimica;
