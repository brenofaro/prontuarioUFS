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
      <div className="mb-4 p-3 border rounded bg-white shadow-sm">
        <label className="form-label fw-semibold mb-2 d-block">Dentição:</label>
          <div className="d-flex flex-wrap gap-3">
            <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="denticao"
                  value="natural_completa"
                  id="natural_completa"
                  checked={formData.denticao === "natural_completa"}
                  onChange={handleChange}
                />
                <label className="form-check-label ms-1" htmlFor="natural_completa">Natural Completa</label>
            </div>
            <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="denticao"
                  value="protese_completa"
                  id="protese_completa"
                  checked={formData.denticao === "protese_completa"}
                  onChange={handleChange}
                />
                <label className="form-check-label ms-1" htmlFor="protese_completa">Prótese completa</label>
            </div>
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
          </div>
      <div className="mb-4 p-3 border rounded bg-white shadow-sm">
        <label className="form-label fw-semibold mb-2 d-block">Mastigação:</label>
        <div className="d-flex flex-wrap gap-3">
        <input
          type="radio"
          className="form-check-input"
          name="mastigacao"
          value="comprometida"
          checked={formData.mastigacao === "comprometida"}
          onChange={handleChange}
        />
        <label>Comprometida</label>

        <input
          type="radio"
          className="form-check-input"
          name="mastigacao"
          value="normal"
          checked={formData.mastigacao === "normal"}
          onChange={handleChange}
        />
        <label>Normal</label>
        </div>
        </div>

       <div className="mb-4 p-3 border rounded bg-white shadow-sm">



  {/* Linha 1 */}
  <div className="row g-3">

    {/* Disfagia */}
    <div className="col-md-4">
      <label className="form-label fw-semibold">Disfagia</label>
      <div className="d-flex align-items-center gap-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="disfagia"
            value="true"
            checked={formData.disfagia === true}
            onChange={handleChange}
          />
          <label className="form-check-label ms-1">Sim</label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="disfagia"
            value="false"
            checked={formData.disfagia === false}
            onChange={handleChange}
          />
          <label className="form-check-label ms-1">Não</label>
        </div>
      </div>
    </div>

    {/* Odinofagia */}
    <div className="col-md-4">
      <label className="form-label fw-semibold">Odinofagia</label>
      <div className="d-flex align-items-center gap-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="odinofagia"
            value="true"
            checked={formData.odinofagia === true}
            onChange={handleChange}
          />
          <label className="form-check-label ms-1">Sim</label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="odinofagia"
            value="false"
            checked={formData.odinofagia === false}
            onChange={handleChange}
          />
          <label className="form-check-label ms-1">Não</label>
        </div>
      </div>
    </div>

    {/* Dispepsia */}
    <div className="col-md-4">
      <label className="form-label fw-semibold">Dispepsia</label>
      <div className="d-flex align-items-center gap-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="dispepsia"
            value="true"
            checked={formData.dispepsia === true}
            onChange={handleChange}
          />
          <label className="form-check-label ms-1">Sim</label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="dispepsia"
            value="false"
            checked={formData.dispepsia === false}
            onChange={handleChange}
          />
          <label className="form-check-label ms-1">Não</label>
        </div>
      </div>
    </div>

  </div>


  {/* Linha 2 */}
  <div className="row g-3 mt-2">

    {/* Náuseas */}
    <div className="col-md-4">
      <label className="form-label fw-semibold">Náuseas</label>
      <div className="d-flex align-items-center gap-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="nauseas"
            value="true"
            checked={formData.nauseas === true}
            onChange={handleChange}
          />
          <label className="form-check-label ms-1">Sim</label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="nauseas"
            value="false"
            checked={formData.nauseas === false}
            onChange={handleChange}
          />
          <label className="form-check-label ms-1">Não</label>
        </div>
      </div>
    </div>

    {/* Vômitos */}
    <div className="col-md-4">
      <label className="form-label fw-semibold">Vômitos</label>
      <div className="d-flex align-items-center gap-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="vomitos"
            value="true"
            checked={formData.vomitos === true}
            onChange={handleChange}
          />
          <label className="form-check-label ms-1">Sim</label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="vomitos"
            value="false"
            checked={formData.vomitos === false}
            onChange={handleChange}
          />
          <label className="form-check-label ms-1">Não</label>
        </div>
      </div>
    </div>

    {/* Flatulência */}
    <div className="col-md-4">
      <label className="form-label fw-semibold">Flatulência</label>
      <div className="d-flex align-items-center gap-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flatulencia"
            value="true"
            checked={formData.flatulencia === true}
            onChange={handleChange}
          />
          <label className="form-check-label ms-1">Sim</label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flatulencia"
            value="false"
            checked={formData.flatulencia === false}
            onChange={handleChange}
          />
          <label className="form-check-label ms-1">Não</label>
        </div>
      </div>
    </div>

  </div>

</div>


        <div className="mb-4 p-3 border rounded bg-white shadow-sm">
        <label className="form-label fw-semibold mb-2 d-block">Ritmo Intestinal:</label>
        <div className="d-flex flex-wrap gap-3">

        <input
          type="radio"
          name="ritmo_intestinal"
          className="form-check-input"
          value="normal"
          id="ritmo_normal"
          checked={formData.ritmo_intestinal === "normal"}
          onChange={handleChange}
        />
        <label className="form-check-label ms-1" htmlFor="ritmo_normal">Normal</label>

        <input
          type="radio"
          name="ritmo_intestinal"
          value="diarreia"
          className="form-check-input"
          id="ritmo_diarreia"
          checked={formData.ritmo_intestinal === "diarreia"}
          onChange={handleChange}
        />
        <label className="form-check-label " htmlFor="ritmo_diarreia">Diarréia</label>

        <input
          type="radio"
          name="ritmo_intestinal"
          value="obstipacao"
          className="form-check-input"
          id="ritmo_obstipacao"
          checked={formData.ritmo_intestinal === "obstipacao"}
          onChange={handleChange}
        />
        <label className="form check-label" htmlFor="ritmo_obstipacao">Obstipação</label>
        </div>
        </div>

     <div className="mb-4 p-3 border rounded bg-white shadow-sm">

  <label className="form-label fw-semibold mb-2 d-block">
    Ritmo Urinário
  </label>

  <div className="d-flex flex-wrap gap-4">

    {/* Oligúria */}
    <div className="form-check d-flex align-items-center gap-2">
      <input
        className="form-check-input"
        type="radio"
        name="ritmo_urinario"
        id="oliguria"
        value="oliguria"
        checked={formData.ritmo_urinario === "oliguria"}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor="oliguria">Oligúria</label>
    </div>

    {/* Anúria */}
    <div className="form-check d-flex align-items-center gap-2">
      <input
        className="form-check-input"
        type="radio"
        name="ritmo_urinario"
        id="anuria"
        value="anuria"
        checked={formData.ritmo_urinario === "anuria"}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor="anuria">Anúria</label>
    </div>

    {/* Poliúria */}
    <div className="form-check d-flex align-items-center gap-2">
      <input
        className="form-check-input"
        type="radio"
        name="ritmo_urinario"
        id="poliuria"
        value="poliuria"
        checked={formData.ritmo_urinario === "poliuria"}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor="poliuria">Poliúria</label>
    </div>

    {/* Normal */}
    <div className="form-check d-flex align-items-center gap-2">
      <input
        className="form-check-input"
        type="radio"
        name="ritmo_urinario"
        id="normal"
        value="normal"
        checked={formData.ritmo_urinario === "normal"}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor="normal">Normal</label>
    </div>

  </div>

</div>


    <div className="mb-4 p-3 border rounded bg-white shadow-sm">


  {/* Linha 1 - Pele / Unhas / Cabelo */}
  <div className="d-flex flex-wrap gap-4">

    <div className="d-flex flex-column">
      <label className="form-label">Pele</label>
      <input
        type="text"
        name="pele"
        className="form-control"
        placeholder="Ex: íntegra"
        value={formData.pele || ""}
        onChange={handleChange}
      />
    </div>

    <div className="d-flex flex-column">
      <label className="form-label">Unhas</label>
      <input
        type="text"
        name="unhas"
        className="form-control"
        placeholder="Ex: normais"
        value={formData.unhas || ""}
        onChange={handleChange}
      />
    </div>

    <div className="d-flex flex-column">
      <label className="form-label">Cabelo</label>
      <input
        type="text"
        name="cabelo"
        className="form-control"
        placeholder="Ex: forte"
        value={formData.cabelo || ""}
        onChange={handleChange}
      />
    </div>

  </div>

  {/* Linha 2 - Mucosas / Edemas / Abdome */}
  <div className="d-flex flex-wrap gap-4 mt-3">

    <div className="d-flex flex-column">
      <label className="form-label">Mucosas</label>
      <input
        type="text"
        name="mucosas"
        className="form-control"
        placeholder="Ex: úmidas"
        value={formData.mucosas || ""}
        onChange={handleChange}
      />
    </div>

    <div className="d-flex flex-column">
      <label className="form-label">Edemas</label>
      <input
        type="text"
        name="edemas"
        className="form-control"
        placeholder="Ex: ausentes"
        value={formData.edemas || ""}
        onChange={handleChange}
      />
    </div>

    <div className="d-flex flex-column">
      <label className="form-label">Abdome</label>
      <input
        type="text"
        name="abdomen"
        className="form-control"
        placeholder="Ex: plano"
        value={formData.abdomen || ""}
        onChange={handleChange}
      />
    </div>

  </div>

</div>

    </>
  );
};

export default SinaisSintomasClinicos;
