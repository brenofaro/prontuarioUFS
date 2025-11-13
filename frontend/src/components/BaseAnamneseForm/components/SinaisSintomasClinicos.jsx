import React from "react";

const SinaisSintomasClinicos = ({ formData, setFormData }) => {
  // Função genérica para atualizar qualquer campo dentro de sinais_sintomas_clinicos
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    let newValue = value;

    // Converte para boolean se o campo for tipo radio e tiver "true"/"false"
    if (value === "true") newValue = true;
    if (value === "false") newValue = false;

    setFormData({
      ...formData,
      sinais_sintomas_clinicos: {
        ...formData.sinais_sintomas_clinicos,
        [name]: newValue,
      },
    });
  };

  return (
    <>
      <div className="d-flex flex-row">
        <label className="form-check">Dentição:</label>

        <input
          type="radio"
          name="denticao"
          value="natural_completa"
          checked={formData.sinais_sintomas_clinicos.denticao === "natural_completa"}
          onChange={handleChange}
        />
        <label>Natural Completa</label>

        <input
          type="radio"
          name="denticao"
          value="protese_completa"
          checked={formData.sinais_sintomas_clinicos.denticao === "protese_completa"}
          onChange={handleChange}
        />
        <label>Prótese completa</label>

        <input
          type="radio"
          name="denticao"
          value="natural_parcial"
          checked={formData.sinais_sintomas_clinicos.denticao === "natural_parcial"}
          onChange={handleChange}
        />
        <label>Natural parcial</label>

        <input
          type="radio"
          name="denticao"
          value="protese_parcial"
          checked={formData.sinais_sintomas_clinicos.denticao === "protese_parcial"}
          onChange={handleChange}
        />
        <label>Prótese parcial</label>

        <input
          type="radio"
          name="denticao"
          value="edentulo"
          checked={formData.sinais_sintomas_clinicos.denticao === "edentulo"}
          onChange={handleChange}
        />
        <label>Edêntulo</label>
      </div>

      <div>
        <label>Mastigação:</label>
        <input
          type="radio"
          name="mastigacao"
          value="comprometida"
          checked={formData.sinais_sintomas_clinicos.mastigacao === "comprometida"}
          onChange={handleChange}
        />
        <label>Comprometida</label>

        <input
          type="radio"
          name="mastigacao"
          value="normal"
          checked={formData.sinais_sintomas_clinicos.mastigacao === "normal"}
          onChange={handleChange}
        />
        <label>Normal</label>

        <label className="ms-3">Disfalgia:</label>
        <input
          type="radio"
          name="disfalgia"
          value="true"
          checked={formData.sinais_sintomas_clinicos.disfalgia === true}
          onChange={handleChange}
        />
        <label>Sim</label>

        <input
          type="radio"
          name="disfalgia"
          value="false"
          checked={formData.sinais_sintomas_clinicos.disfalgia === false}
          onChange={handleChange}
        />
        <label>Não</label>

        <label className="ms-3">Odinofalgia:</label>
        <input
          type="radio"
          name="odinofalgia"
          value="true"
          checked={formData.sinais_sintomas_clinicos.odinofalgia === true}
          onChange={handleChange}
        />
        <label>Sim</label>

        <input
          type="radio"
          name="odinofalgia"
          value="false"
          checked={formData.sinais_sintomas_clinicos.odinofalgia === false}
          onChange={handleChange}
        />
        <label>Não</label>
      </div>

      {/* Exemplo para campos de texto */}
      <div className="d-flex flex-column align-items-start">
        <label>Pele:</label>
        <input
          type="text"
          name="pele"
          value={formData.sinais_sintomas_clinicos.pele || ""}
          onChange={handleChange}
        />
        <label>Unhas:</label>
        <input
          type="text"
          name="unhas"
          value={formData.sinais_sintomas_clinicos.unhas || ""}
          onChange={handleChange}
        />
        <label>Cabelo:</label>
        <input
          type="text"
          name="cabelo"
          value={formData.sinais_sintomas_clinicos.cabelo || ""}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default SinaisSintomasClinicos;
