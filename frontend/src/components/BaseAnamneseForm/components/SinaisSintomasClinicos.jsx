import React from "react";

const SinaisSintomasClinicos = ({ formData, setFormData }) => {
  // Função genérica para atualizar qualquer campo dentro de sinais_sintomas_clinicos
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
      <div className="d-flex flex-row">
        <label className="form-check">Dentição:</label>

        <input
          type="radio"
          name="denticao"
          value="natural_completa"
          checked={formData.denticao === "natural_completa"}
          onChange={handleChange}
        />
        <label>Natural Completa</label>

        <input
          type="radio"
          name="denticao"
          value="protese_completa"
          checked={formData.denticao === "protese_completa"}
          onChange={handleChange}
        />
        <label>Prótese completa</label>

        <input
          type="radio"
          name="denticao"
          value="natural_parcial"
          checked={formData.denticao === "natural_parcial"}
          onChange={handleChange}
        />
        <label>Natural parcial</label>

        <input
          type="radio"
          name="denticao"
          value="protese_parcial"
          checked={formData.denticao === "protese_parcial"}
          onChange={handleChange}
        />
        <label>Prótese parcial</label>

        <input
          type="radio"
          name="denticao"
          value="edentulo"
          checked={formData.denticao === "edentulo"}
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
          checked={formData.mastigacao === "comprometida"}
          onChange={handleChange}
        />
        <label>Comprometida</label>

        <input
          type="radio"
          name="mastigacao"
          value="normal"
          checked={formData.mastigacao === "normal"}
          onChange={handleChange}
        />
        <label>Normal</label>

        <label className="ms-3">Disfagia:</label>
        <input
          type="radio"
          name="disfagia"
          value="true"
          checked={formData.disfagia === true}
          onChange={handleChange}
        />
        <label>Sim</label>

        <input
          type="radio"
          name="disfagia"
          value="false"
          checked={formData.disfagia === false}
          onChange={handleChange}
        />
        <label>Não</label>

        <label className="ms-3">Odinofagia:</label>
        <input
          type="radio"
          name="odinofagia"
          value="true"
          checked={formData.odinofagia === true}
          onChange={handleChange}
        />
        <label>Sim</label>

        <input
          type="radio"
          name="odinofalgia"
          value="false"
          checked={formData.odinofalgia === false}
          onChange={handleChange}
        />
        <label>Não</label>
      </div>

      <div>
        <label>Dispepsia:</label>
        <input
          type="radio"
          name="dispepsia"
          value="true"
          checked={formData.dispepsia === true}
          onChange={handleChange}
        />
        <label>Sim</label>

        <input
          type="radio"
          name="dispepsia"
          value="false"
          checked={formData.dispepsia === false}
          onChange={handleChange}
        />
        <label>Não</label>

        <label className="ms-3">Náuseas:</label>
        <input
          type="radio"
          name="nauseas"
          value="true"
          checked={formData.nauseas === true}
          onChange={handleChange}
        />
        <label>Sim</label>

        <input
          type="radio"
          name="nauseas"
          value="false"
          checked={formData.nauseas === false}
          onChange={handleChange}
        />
        <label>Não</label>

        <label className="ms-3">Vômitos:</label>
        <input
          type="radio"
          name="vomitos"
          value="true"
          checked={formData.vomitos === true}
          onChange={handleChange}
        />
        <label>Sim</label>

        <input
          type="radio"
          name="vomitos"
          value="false"
          checked={formData.vomitos === false}
          onChange={handleChange}
        />
        <label>Não</label>
      </div>

      <div>
        <label>Flatulência:</label>
        <input
          type="radio"
          name="flatulencia"
          value="true"
          checked={formData.flatulencia === true}
          onChange={handleChange}
        />
        <label>Sim</label>

        <input
          type="radio"
          name="flatulencia"
          value="false"
          checked={formData.flatulencia === false}
          onChange={handleChange}
        />
        <label>Não</label>

        <label className="ms-3">Ritmo Intestinal:</label>
        <input
          type="radio"
          name="ritmo_intestinal"
          value="normal"
          checked={formData.ritmo_intestinal === "normal"}
          onChange={handleChange}
        />
        <label>Normal</label>

        <input
          type="radio"
          name="ritmo_intestinal"
          value="diarreia"
          checked={formData.ritmo_intestinal === "diarreia"}
          onChange={handleChange}
        />
        <label>Diarréia</label>

        <input
          type="radio"
          name="ritmo_intestinal"
          value="obstipacao"
          checked={formData.ritmo_intestinal === "obstipacao"}
          onChange={handleChange}
        />
        <label>Obstipação</label>

         <label className="ms-3">Ritmo Urinário:</label>
        <input
          type="radio"
          name="ritmo_urinario"
          value="oliguria"
          checked={formData.ritmo_urinario === "oliguria"}
          onChange={handleChange}
        />
        <label>Oligúria</label>

        <input
          type="radio"
          name="ritmo_urinario"
          value="anuria"
          checked={formData.ritmo_urinario === "anuria"}
          onChange={handleChange}
        />
        <label>Anúria</label>

        <input
          type="radio"
          name="ritmo_urinario"
          value="poliuria"
          checked={formData.ritmo_urinario === "poliuria"}
          onChange={handleChange}
        />
        <label>Poliúria</label>

        <input
          type="radio"
          name="ritmo_urinario"
          value="normal"
          checked={formData.ritmo_urinario === "normal"}
          onChange={handleChange}
        />
        <label>Normal</label>
        
      </div>

      {/* Exemplo para campos de texto */}
      <div className="d-flex flex-column align-items-start">
        <label>Pele:</label>
        <input
          type="text"
          name="pele"
          value={formData.pele}
          onChange={handleChange}
        />
        <label>Unhas:</label>
        <input
          type="text"
          name="unhas"
          value={formData.unhas}
          onChange={handleChange}
        />
        <label>Cabelo:</label>
        <input
          type="text"
          name="cabelo"
          value={formData.cabelo}
          onChange={handleChange}
        />
      </div>

      <div className="d-flex flex-column align-items-start">
        <label>Mucosas:</label>
        <input
          type="text"
          name="mucosas"
          value={formData.mucosas}
          onChange={handleChange}
        />
        <label>Edemas:</label>
        <input
          type="text"
          name="edemas"
          value={formData.edemas}
          onChange={handleChange}
        />
        <label>Abdomen:</label>
        <input
          type="text"
          name="abdomen"
          value={formData.abdomen}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default SinaisSintomasClinicos;
