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
          <label className="form-label" htmlFor="data_ab">
            Data da Avaliação
          </label>
          <input
            type="date"
            id="data_ab"
            name="data_ab"
            className="form-control"
            value={formData.data_ab || ""}
            onChange={handleChange}
          />
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
