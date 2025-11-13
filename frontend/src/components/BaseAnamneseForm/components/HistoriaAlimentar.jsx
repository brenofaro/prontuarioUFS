import React from "react";

const HistoriaAlimentar = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    let newValue = value;

    if (value === "true") newValue = true;
    if (value === "false") newValue = false;

    setFormData({
      ...formData,
      historia_alimentar: {
        ...formData.historia_alimentar,
        [name]: newValue,
      },
    });
  };

  return (
    <>
      <div>
        <label>Aversões alimentares:</label>
        <input
          type="radio"
          name="aversoes"
          value="true"
          checked={formData.historia_alimentar.aversoes === true}
          onChange={handleChange}
        />
        <label>Sim</label>
        <input
          type="radio"
          name="aversoes"
          value="false"
          checked={formData.historia_alimentar.aversoes === false}
          onChange={handleChange}
        />
        <label>Não</label>

        <label>Quais:</label>
        <input
          type="text"
          name="aversoes_quais"
          value={formData.historia_alimentar.aversoes_quais || ""}
          onChange={handleChange}
        />

        <label>Alergias/intolerâncias alimentares:</label>
        <input
          type="radio"
          name="intolerancia"
          value="true"
          checked={formData.historia_alimentar.intolerancia === true}
          onChange={handleChange}
        />
        <label>Sim</label>
        <input
          type="radio"
          name="intolerancia"
          value="false"
          checked={formData.historia_alimentar.intolerancia === false}
          onChange={handleChange}
        />
        <label>Não</label>

        <label>Quais:</label>
        <input
          type="text"
          name="intolerancia_quais"
          value={formData.historia_alimentar.intolerancia_quais || ""}
          onChange={handleChange}
        />
      </div>

      <div className="mt-3">
        <label>Ingestão hídrica:</label>
        <input
          type="text"
          name="ingestao_hidrica"
          value={formData.historia_alimentar.ingestao_hidrica || ""}
          onChange={handleChange}
        />
      </div>

      <div className="mt-3">
        <label>Existe algum horário que sente mais fome:</label>
        <input
          type="radio"
          name="horario_fome"
          value="true"
          checked={formData.historia_alimentar.horario_fome === true}
          onChange={handleChange}
        />
        <label>Sim</label>
        <input
          type="radio"
          name="horario_fome"
          value="false"
          checked={formData.historia_alimentar.horario_fome === false}
          onChange={handleChange}
        />
        <label>Não</label>

        <label>Quais:</label>
        <input
          type="text"
          name="horario_fome_quais"
          value={formData.historia_alimentar.horario_fome_quais || ""}
          onChange={handleChange}
        />

        <label>Apetite:</label>
        <input
          type="radio"
          name="apetite"
          value="normal"
          checked={formData.historia_alimentar.apetite === "normal"}
          onChange={handleChange}
        />
        <label>Normal</label>

        <input
          type="radio"
          name="apetite"
          value="aumentado"
          checked={formData.historia_alimentar.apetite === "aumentado"}
          onChange={handleChange}
        />
        <label>Aumentado</label>

        <input
          type="radio"
          name="apetite"
          value="diminuido"
          checked={formData.historia_alimentar.apetite === "diminuido"}
          onChange={handleChange}
        />
        <label>Diminuído</label>
      </div>

      <div className="mt-3">
        <label>Diagnóstico nutricional conclusivo:</label>
        <textarea
          name="diagnostico"
          value={formData.historia_alimentar.diagnostico || ""}
          onChange={handleChange}
          rows="4"
          cols="50"
        />
      </div>
    </>
  );
};

export default HistoriaAlimentar;
