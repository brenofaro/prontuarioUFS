const AvaliacaoAntropometrica = ({formData, setFormData}) => {
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
      <label className="form-label">Peso atual (kg)</label>
      <input 
        type="number"
        name="peso_atual"
        className="form-control"
        placeholder="Ex: 72.5"
        step="0.1"
        min="0"
        value={formData.peso_atual}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3">
      <label className="form-label">Peso usual (kg)</label>
      <input 
        type="number"
        name="peso_usual"
        className="form-control"
        placeholder="Ex: 70.0"
        step="0.1"
        min="0"
        value={formData.peso_usual}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3">
      <label className="form-label">AJ (cm)</label>
      <input 
        type="number"
        name="aj"
        className="form-control"
        placeholder="Ex: 120"
        min="0"
        value={formData.aj}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3">
      <label className="form-label">Altura real (m)</label>
      <input 
        type="number"
        name="altura_real"
        className="form-control"
        placeholder="Ex: 1.75"
        step="0.01"
        min="0"
        value={formData.altura_real}
        onChange={handleChange}
      />
    </div>

  </div>


  {/* Linha 2 */}
  <div className="row g-3 mt-2">

    <div className="col-md-3">
      <label className="form-label">Altura estimada (m)</label>
      <input 
        type="number"
        name="altura_estimada"
        className="form-control"
        placeholder="Ex: 1.70"
        step="0.01"
        min="0"
        value={formData.altura_estimada}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3">
      <label className="form-label">IMC (kg/m²)</label>
      <input 
        type="number"
        name="imc"
        className="form-control"
        placeholder="Ex: 23.6"
        step="0.1"
        min="0"
        value={formData.imc}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3">
      <label className="form-label">Circunferência do braço (cm)</label>
      <input 
        type="number"
        name="circunferencia_braco"
        className="form-control"
        placeholder="Ex: 30"
        min="0"
        value={formData.circunferencia_braco}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3">
      <label className="form-label">Comprimento do pescoço (cm)</label>
      <input 
        type="number"
        name="comprimento_pescoco"
        className="form-control"
        placeholder="Ex: 40"
        min="0"
        value={formData.comprimento_pescoco}
        onChange={handleChange}
      />
    </div>

  </div>


  {/* Linha 3 */}
  <div className="row g-3 mt-2">

    <div className="col-md-3">
      <label className="form-label">Prega cutânea triciptal (mm)</label>
      <input 
        type="number"
        name="pct"
        className="form-control"
        placeholder="Ex: 15"
        min="0"
        value={formData.pct}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3">
      <label className="form-label">Prega cutânea biciptal (mm)</label>
      <input 
        type="number"
        name="pcb"
        className="form-control"
        placeholder="Ex: 12"
        min="0"
        value={formData.pcb}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3">
      <label className="form-label">PCSE (mm)</label>
      <input 
        type="number"
        name="pcse"
        className="form-control"
        placeholder="Ex: 30"
        min="0"
        value={formData.pcse}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3">
      <label className="form-label">PCSI (mm)</label>
      <input 
        type="number"
        name="pcsi"
        className="form-control"
        placeholder="Ex: 18"
        min="0"
        value={formData.pcsi}
        onChange={handleChange}
      />
    </div>

  </div>


  {/* Linha 4 */}
  <div className="row g-3 mt-2">

    <div className="col-md-3">
      <label className="form-label">Circunferência da cintura (cm)</label>
      <input 
        type="number"
        name="circunferencia_cintura"
        className="form-control"
        placeholder="Ex: 100"
        min="0"
        value={formData.circunferencia_cintura}
        onChange={handleChange}
      />
    </div>

    <div className="col-md-3">
      <label className="form-label">Circunferência da panturrilha (cm)</label>
      <input 
        type="number"
        name="circunferencia_panturrilha"
        className="form-control"
        placeholder="Ex: 32"
        min="0"
        value={formData.circunferencia_panturrilha}
        onChange={handleChange}
      />
    </div>

  </div>


    <div className="form-floating mt-5 mb-4">
  <textarea
    className="form-control"
    id="diagnostico_antropometrico"
    name="diagnostico_antropometrico"
    placeholder="Descreva o diagnóstico antropométrico..."
    style={{ height: "150px" }}
    value={formData.diagnostico_antropometrico || ""}
    onChange={handleChange}
    ></textarea>

  <label htmlFor="diagnostico_antropometrico">
    Diagnóstico antropométrico
  </label>
</div>

    </div>
   </>


  )
}

export default AvaliacaoAntropometrica;
