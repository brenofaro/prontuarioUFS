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
      <div>
        <label htmlFor="data_avaliacao">Data:</label>
        <input
          type="date"
          name="data_ab"
          value={formData.data_ab}
          onChange={handleChange}
        />
      </div>

      <div className="d-flex flex-column mt-2">
        <label htmlFor="descricao_avaliacao">Descrição:</label>
        <textarea
          name="avaliacao_bioquimica"
          value={formData.avaliacao_bioquimica}
          onChange={handleChange}
          rows="4"
          cols="50"
        />
      </div>
    </>
  );
};

export default AvaliacaoBioquimica;
