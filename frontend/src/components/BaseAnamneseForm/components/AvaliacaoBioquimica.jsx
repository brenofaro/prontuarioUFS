import React from "react";

const AvaliacaoBioquimica = ({ formData, setFormData }) => {

 const handleChange = (e) => {
    let { name, value, type, checked } = e.target;

    // 1️⃣ Checkbox boolean (não é lista)
    if (type === "checkbox" && !Array.isArray(formData[name])) {
      return setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    }

    // 2️⃣ Radio boolean (value="true"/"false")
    if (type === "radio" && (value === "true" || value === "false")) {
      return setFormData((prev) => ({
        ...prev,
        [name]: value === "true",
      }));
    }

    // 3️⃣ Number (converte string → número)
    if (type === "number") {
  const numericValue = value === "" ? null : Number(value);
  return setFormData((prev) => ({
    ...prev,
    [name]: numericValue,
  }));
}

    // 4️⃣ Datas (YYYY-MM-DD)
    if (type === "date") {
      return setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // 5️⃣ Campos normais (text, select, radio string etc.)
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="mb-4 p-3 border rounded bg-white shadow-sm">


  {/* Data */}
  <div className="d-flex flex-column mb-3" style={{ maxWidth: "250px" }}>
    <label className="form-label" htmlFor="data_ab">Data da Avaliação</label>
    <input
      type="date"
      id="data_ab"
      name="data_ab"
      className="form-control"
      value={formData.data_ab || ""}
      onChange={handleChange}
    />
  </div>

  {/* Descrição */}
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
