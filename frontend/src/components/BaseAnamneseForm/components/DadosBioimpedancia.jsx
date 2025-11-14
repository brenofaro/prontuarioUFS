import React from 'react'

const DadosBioimpedancia = ({formData, setFormData}) => {
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


  {/* Linha 1 */}
  <div className="row g-3">

    <div className="col-md-3">
      <label className="form-label">Percentual de gordura (%)</label>
      <input
        type="number"
        className="form-control"
        name="percentual_gordura"
        step="0.1"
        min="0"
        max="100"
        placeholder="Ex: 15.5"
        value={formData.percentual_gordura || ""}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3">
      <label className="form-label">Peso gordura (kg)</label>
      <input
        type="number"
        className="form-control"
        name="peso_gordura"
        step="0.1"
        min="0"
        placeholder="Ex: 10.5"
        value={formData.peso_gordura || ""}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3">
      <label className="form-label">Massa magra (kg)</label>
      <input
        type="number"
        className="form-control"
        name="massa_magra"
        step="0.1"
        min="0"
        placeholder="Ex: 58.2"
        value={formData.massa_magra || ""}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3">
      <label className="form-label">Gordura alvo (%)</label>
      <input
        type="number"
        className="form-control"
        name="gordura_alvo"
        step="0.1"
        min="0"
        max="100"
        placeholder="Ex: 12.5"
        value={formData.gordura_alvo || ""}
        onChange={handleChange}
      />
    </div>

  </div>


  {/* Linha 2 */}
  <div className="row g-3 mt-2">

    <div className="col-md-3">
      <label className="form-label">Peso alvo (kg)</label>
      <input
        type="number"
        className="form-control"
        name="peso_alvo"
        step="0.1"
        min="0"
        placeholder="Ex: 70.0"
        value={formData.peso_alvo || ""}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3">
      <label className="form-label">TMB (kcal)</label>
      <input
        type="number"
        className="form-control"
        name="tmb"
        min="0"
        placeholder="Ex: 1500"
        value={formData.tmb || ""}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3">
      <label className="form-label">Água da massa magra (%)</label>
      <input
        type="number"
        className="form-control"
        name="percentual_agua_massa_magra"
        step="0.1"
        min="0"
        max="100"
        placeholder="Ex: 73.0"
        value={formData.percentual_agua_massa_magra || ""}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3">
      <label className="form-label">Água corporal total (L)</label>
      <input
        type="number"
        className="form-control"
        name="agua_corporal_total"
        step="0.1"
        min="0"
        placeholder="Ex: 40.5"
        value={formData.agua_corporal_total || ""}
        onChange={handleChange}
      />
    </div>

  </div>

</div>

   </>
  )
}

export default DadosBioimpedancia
