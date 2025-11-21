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
      <label className="form-label text-muted small">Percentual de gordura (%)</label>
      <input
        type="text"
        className="form-control"
        name="percentual_gordura"
        value={formData.percentual_gordura || ""}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3">
      <label className="form-label text-muted small">Peso gordura (kg)</label>
      <input
        type="text"
        className="form-control"
        name="peso_gordura"
        value={formData.peso_gordura || ""}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3">
      <label className="form-label text-muted small">Massa magra (kg)</label>
      <input
        type="text"
        className="form-control"
        name="massa_magra"
        value={formData.massa_magra || ""}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3">
      <label className="form-label text-muted small">Gordura alvo (%)</label>
      <input
        type="text"
        className="form-control"
        name="gordura_alvo"
        value={formData.gordura_alvo || ""}
        onChange={handleChange}
      />
    </div>

  </div>


  {/* Linha 2 */}
  <div className="row g-3 mt-2">

    <div className="col-md-3">
      <label className="form-label text-muted small">Peso alvo (kg)</label>
      <input
        type="text"
        className="form-control"
        name="peso_alvo"
        value={formData.peso_alvo || ""}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3"> 
      <label className="form-label text-muted small">TMB (kcal)</label>
      <input
        type="text"
        className="form-control"
        name="tmb"
        value={formData.tmb || ""}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3">
      <label className="form-label text-muted small">Água da massa magra (%)</label>
      <input
        type="text"
        className="form-control"
        name="percentual_agua_massa_magra"
        value={formData.percentual_agua_massa_magra || ""}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3">
      <label className="form-label text-muted small">Água corporal total (L)</label>
      <input
        type="text"
        className="form-control"
        name="agua_corporal_total"
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
