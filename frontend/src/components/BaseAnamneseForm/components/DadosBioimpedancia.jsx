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
    <div className="mb-3">
      <label htmlFor="gordura">Percentual de gordura (%):</label>
      <input
        type="number"
        id="gordura"
        name="percentual_gordura"
        step="0.1"   // permite casas decimais (ex: 15.5)
        min="0"
        max="100"
        placeholder="Ex: 15.5"
        value={formData.percentual_gordura}
        onChange={handleChange }
      />
      <label htmlFor="">Peso gordura(kg):</label>
      <input 
        type="number" 
        placeholder='Ex: 72.5'
        step="0.1"
        min="0"
        name="peso_gordura"
        value={formData.peso_gordura}
        onChange={handleChange}
      />
      <label htmlFor="">Massa magra(kg):</label>
      <input 
        type="number" 
        placeholder='Ex: 12.5'
        step="0.1"
        min="0"
        name="massa_magra"
        value={formData.massa_magra}
        onChange={handleChange}
      />

    </div>
    <div className="mb-3">
      <label htmlFor="gordura">Gordura alvo (%):</label>
      <input
        type="number"
        id="gordura"
        name="gordura_alvo"
        step="0.1"   // permite casas decimais (ex: 15.5)
        min="0"
        max="100"
        placeholder="Ex: 15.5"
        value={formData.gordura_alvo}
        onChange={handleChange}
      />
      <label htmlFor="">Peso alvo(kg):</label>
      <input 
        type="number" 
        placeholder='Ex: 72.5'
        step="0.1"
        min="0"
        name="peso_alvo"
        value={formData.peso_alvo}
        onChange={handleChange}
      />
      <label htmlFor="">TMB(kcal):</label>
      <input 
        type="number" 
        placeholder='Ex: 125'
        name="tmb"
        min="0"
        value={formData.tmb}
        onChange={handleChange}
      />

    </div>
    <div className="mb-3">
      <label htmlFor="gordura">Percentual de água da massa magra(%):</label>
      <input
        type="number"
        name="percentual_agua_massa_magra"
        step="0.1"   // permite casas decimais (ex: 15.5)
        min="0"
        max="100"
        placeholder="Ex: 15.5"
        value={formData.percentual_agua_massa_magra}
        onChange={handleChange}
      />
      <label htmlFor="">Agua corporal total(l):</label>
      <input 
        type="number" 
        placeholder='Ex: 72.5'
        step="0.1"
        min="0"
        name="agua_corporal_total"
        value={formData.agua_corporal_total}
        onChange={handleChange}
      />
   

    </div>
   </>
  )
}

export default DadosBioimpedancia
