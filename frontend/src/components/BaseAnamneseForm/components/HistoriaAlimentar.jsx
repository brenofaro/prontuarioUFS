import React from "react";

const HistoriaAlimentar = ({ formData, setFormData }) => {
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
        <label>Aversões alimentares:</label>
        <input
          type="radio"
          name="possui_aversoes_alimentares"
          value="true"
          checked={formData.possui_aversoes_alimentares === true}
          onChange={handleChange}
        />
        <label>Sim</label>
        <input
          type="radio"
          name="possui_aversoes_alimentares"
          value="false"
          checked={formData.possui_aversoes_alimentares === false}
          onChange={handleChange}
        />
        <label>Não</label>

        <label>Quais:</label>
        <input
          type="text"
          name="aversoes_alimentares"
          value={formData.aversoes_alimentares}
          onChange={handleChange}
        />

        <label>Alergias/intolerâncias alimentares:</label>
        <input
          type="radio"
          name="possui_alergias_alimentares"
          value="true"
          checked={formData.possui_alergias_alimentares === true}
          onChange={handleChange}
        />
        <label>Sim</label>
        <input
          type="radio"
          name="possui_alergias_alimentares"
          value="false"
          checked={formData.possui_alergias_alimentares === false}
          onChange={handleChange}
        />
        <label>Não</label>

        <label>Quais:</label>
        <input
          type="text"
          name="alergias_alimentares"
          value={formData.alergias_alimentares}
          onChange={handleChange}
        />
      </div>

      <div className="mt-3">
        <label>Ingestão hídrica:</label>
        <input
          type="text"
          name="ingestao_hidrica"
          value={formData.ingestao_hidrica}
          onChange={handleChange}
        />
      </div>

      <div className="mt-3">
        <label>Existe algum horário que sente mais fome:</label>
        <input
          type="radio"
          name="existe_horario_mais_fome"
          value="true"
          checked={formData.existe_horario_mais_fome === true}
          onChange={handleChange}
        />
        <label>Sim</label>
        <input
          type="radio"
          name="existe_horario_mais_fome"
          value="false"
          checked={formData.existe_horario_mais_fome === false}
          onChange={handleChange}
        />
        <label>Não</label>

        <label>Quais:</label>
        <input
          type="text"
          name="horario_mais_fome"
          value={formData.horario_mais_fome}
          onChange={handleChange}
        />

        <label>Apetite:</label>
        <input
          type="radio"
          name="apetite"
          value="normal"
          checked={formData.apetite === "normal"}
          onChange={handleChange}
        />
        <label>Normal</label>

        <input
          type="radio"
          name="apetite"
          value="aumentado"
          checked={formData.apetite === "aumentado"}
          onChange={handleChange}
        />
        <label>Aumentado</label>

        <input
          type="radio"
          name="apetite"
          value="diminuido"
          checked={formData.apetite === "diminuido"}
          onChange={handleChange}
        />
        <label>Diminuído</label>
      </div>

      <div className="mt-3">
        <label>Diagnóstico nutricional conclusivo:</label>
        <textarea
          name="diagnostico_conclusivo"
          value={formData.diagnostico_conclusivo}
          onChange={handleChange}
          rows="4"
          cols="50"
        />
      </div>
    </>
  );
};

export default HistoriaAlimentar;
