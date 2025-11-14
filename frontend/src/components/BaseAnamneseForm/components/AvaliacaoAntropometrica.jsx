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
    <div className=''>
        <label className="form-label" htmlFor="">Peso atual(Kg):</label>
        <input 
          type="number" 
          placeholder='Ex: 72.5'
          step="0.1"
          min="0"
          className="w-15"
          name="peso_atual"
          value={formData.peso_atual}
          onChange={handleChange}

        />
        <label htmlFor=""> Peso usual(Kg):</label>
        <input 
          type="number" 
          placeholder='Ex: 72.5'
          step="0.1"
          min="0"
          className="w-15"
          name="peso_usual"
          value={formData.peso_usual}
          onChange={handleChange}

        />
        <label htmlFor="">AJ(cm):</label>
        <input 
          type="number" 
          placeholder='Ex: 120'
          min="0"
          className="w-15"
          name="aj"
          value={formData.aj}
          onChange={handleChange}
        />
        <label htmlFor="">Altura real(m):</label>
        <input 
          type="number" 
          placeholder='Ex: 1.75'
          step="0.01"
          min="0"
          className="w-15"
          name="altura_real"
          value={formData.altura_real}
          onChange={handleChange}

        />

    </div>
    <div className=''>
        <label className="form-label" htmlFor="">Altura estimada(m):</label>
        <input 
          type="number" 
          placeholder='Ex: 1.75'
          step="0.01"
          min="0"
          style={{ width: "10%" }}
          name="altura_estimada"
          value={formData.altura_estimada}
          onChange={handleChange}

        />
        <label htmlFor=""> IMC(kg/m²):</label>
        <input 
          type="number" 
          placeholder='Ex: 72.5'
          step="0.1"
          min="0"
          className="w-15"
          name="imc"
          value={formData.imc}
          onChange={handleChange}

        />
        <label htmlFor="">Circunferência do braço(cm):</label>
        <input 
          type="number" 
          placeholder='Ex: 30'
          min="0"
          className="w-15"
          name="circunferencia_braco"
          value={formData.circunferencia_braco}
          onChange={handleChange}
        />
        <label htmlFor="">Comprimento do pescoço(cm):</label>
        <input 
          type="number" 
          placeholder='Ex: 40'
          min="0"
          className="w-15"
          name="comprimento_pescoco"
          value={formData.comprimento_pescoco}
          onChange={handleChange}
        />

    </div>
    <div className=''>
        <label className="form-label" htmlFor="">Prega cutânea triciptal(mm):</label>
        <input 
          type="number" 
          placeholder='Ex: 15'
          min="0"
          style={{ width: "10%" }}
          name="pct"
          value={formData.pct}
          onChange={handleChange}

        />
        <label htmlFor="">Prega cutânea biciptal(mm):</label>
        <input 
          type="number" 
          placeholder='Ex: 15'
          min="0"
          name="pcb"
          value={formData.pcb}
          onChange={handleChange}

        />
        <label htmlFor="">PCSE(mm):</label>
        <input 
          type="number" 
          placeholder='Ex: 30'
          min="0"
          className="w-15"
          name="pcse"
          value={formData.pcse}
          onChange={handleChange}
        />


    </div>
    <div>
      <label className="form-label" htmlFor="">PCSI(mm):</label>
        <input 
          type="number" 
          placeholder='Ex: 15'
          min="0"
          style={{ width: "10%" }}
          name="pcsi"
          value={formData.pcsi}
          onChange={handleChange}

        />
        <label htmlFor="">Circunferencia da cintura(cm):</label>
        <input 
          type="number" 
          placeholder='Ex: 100'
          min="0"
          style={{ width: "10%" }}
          name="circunferencia_cintura"
          value={formData.circunferencia_cintura}
          onChange={handleChange}
        />
        <label htmlFor="">Circunferencia da panturrilha(mm):</label>
        <input 
          type="number" 
          placeholder='Ex: 30'
          min="0"
          style={{ width: "10%" }}   
          name="circunferencia_panturrilha"
          value={formData.circunferencia_panturrilha}
          onChange={handleChange}     
          />

    </div>
    <div className="d-flex flex-column align-items-start">
      <label className="" htmlFor="">Diagnostico antropometrico</label>
      <textarea
        name="diagnostico_antropometrico"
        value={formData.diagnostico_antropometrico}
        onChange={handleChange}
      >

      </textarea>
    </div>
   </>


  )
}

export default AvaliacaoAntropometrica;
