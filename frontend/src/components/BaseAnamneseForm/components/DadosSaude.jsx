import React from 'react'

const DadosSaude = ({formData, setFormData}) => {

    const handleChange = (e) => {
    let { name, value, type, checked } = e.target;

    if (type === "checkbox" && !Array.isArray(formData[name])) {
      return setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    }

    if (type === "radio" && (value === "true" || value === "false")) {
      return setFormData((prev) => ({
        ...prev,
        [name]: value === "true",
      }));
    }

    if (type === "number") {
  const numericValue = value === "" ? null : Number(value);
  return setFormData((prev) => ({
    ...prev,
    [name]: numericValue,
  }));
}

    if (type === "date") {
      return setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
    <div>
        <div>

        <label htmlFor="">Queixa principal/ Objetivo da consulta</label>
        </div>
      
            <textarea 
            name="objetivo_consulta" 
            id=""
            value={formData.objetivo_consulta}
            onChange={handleChange}
            >  
            </textarea>
       
        
    </div>
    <div>
        <label htmlFor="">História da Doença(Queixa) Atual: </label>
        <div>
            <textarea 
                name="historia_doenca" 
                id=""
                value={formData.historia_doenca}
                onChange={handleChange} 
            >
                
            </textarea>
        </div>
    </div>
     <div>
        <table className='table-bordered'>
            <thead className='table-light'>
                <tr>
                    <th>Patologias</th>
                    <th>História da Moléstia Atual</th>
                    <th>História Familiar</th>
                </tr>

            </thead>
            <tbody>

                <tr>
                    <td>Diabetes</td>
                    <td>
                        <input 
                            type="checkbox" 
                            name="diabetes_hma"
                            checked={formData.diabetes_hma}
                            onChange={handleChange}

                        />
                    </td>
                    <td>
                        <input 
                            type="checkbox" 
                            name="diabetes_hf"
                            checked={formData.diabetes_hf}
                            onChange={handleChange}
                        />
                    </td>
                </tr>
                <tr>
                    <td>Hipertensão</td>
                    <td>
                        <input 
                            type="checkbox" 
                            name="hipertencao_hma"
                            checked={formData.hipertencao_hma}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <input 
                            type="checkbox" 
                            name="hipertencao_hf"
                            checked={formData.hipertencao_hf}
                            onChange={handleChange} 
                        />
                    </td>
                </tr>
                <tr>
                    <td>Doença Cardiovacular</td>
                    <td>
                        <input 
                            type="checkbox" 
                            name="doenca_cardiovascular_hma"
                            checked={formData.doenca_cardiovascular_hma}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <input 
                            type="checkbox" 
                            name="doenca_cardiovascular_hf"
                            checked={formData.doenca_cardiovascular_hf}
                            onChange={handleChange}
                        />
                    </td>
                </tr>
                <tr>
                    <td>Dislipidemia</td>
                    <td>
                        <input 
                            type="checkbox" 
                            name="dislipidemia_hma"
                            checked={formData.dislipidemia_hma}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <input 
                            type="checkbox" 
                            name="dislipidemia_hf"
                            checked={formData.dislipidemia_hf}
                            onChange={handleChange}
                        />
                    </td>
                </tr>
                <tr>
                    <td>Câncer</td>
                    <td>
                        <input 
                            type="checkbox" 
                            name="cancer_hma"
                            checked={formData.cancer_hma}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <input 
                            type="checkbox" 
                            name="cancer_hf"
                            checked={formData.cancer_hf}
                            onChange={handleChange} 
                        />
                    </td>
                </tr>
                <tr>
                    <td>Osteoporose</td>
                    <td>
                        <input 
                            type="checkbox" 
                            name="osteoporose_hma"
                            checked={formData.osteoporose_hma}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <input 
                            type="checkbox" 
                            name="osteoporose_hf"
                            checked={formData.osteoporose_hf}
                            onChange={handleChange } 
                        />
                    </td>
                </tr>
                <tr>
                    <td>Depressão/Ansiedade</td>
                    <td>
                        <input 
                            type="checkbox" 
                            name="depressao_hma"
                            checked={formData.depressao_hma}
                            onChange={handleChange} 
                        />
                    </td>
                    <td>
                        <input 
                            type="checkbox" 
                            name="depressao_hf"
                            checked={formData.depressao_hf}
                            onChange={handleChange} 
                        />
                    </td>
                </tr>
                <tr>
                    <td>Síndrome dos ovários policísticos</td>
                    <td>
                        <input 
                            type="checkbox" 
                            name="sop_hma"
                            checked={formData.sop_hma}
                            onChange={handleChange} 
                        />
                    </td>
                    <td>
                        <input 
                            type="checkbox" 
                            name="sop_hf"
                            checked={formData.sop_hf}
                            onChange={handleChange} 
                        />
                    </td>
                </tr>
                
                
            </tbody>

        </table>

    </div>
     <div className='d-flex flex-column align-items-start '>
        <label htmlFor="">Outras patologias:</label>
        <textarea 
            name="outras_patologias"
            value={formData.outras_patologias}
            onChange={handleChange}
        >
            
        </textarea>
    </div>
    <div>
        <label htmlFor="">Faz uso de medicamentos?</label>
        <input 
            type="radio" 
            name="faz_uso_medicamentos" 
            value="true"
            id="uso_medicamentos" 
            checked={formData.faz_uso_medicamentos === true}
            onChange={handleChange}
        />
        <label htmlFor="uso_medicamentos">Sim</label>

        <input 
            type="radio" 
            name="faz_uso_medicamentos"
            value="false"
            id="nao_uso_medicamentos" 
            checked={formData.faz_uso_medicamentos === false}
            onChange={handleChange}
        />
        <label htmlFor="nao_uso_medicamentos">Não</label>

        <label htmlFor="">Quais:</label>

        <input 
            type="text" 
            name="medicamentos"
            value={formData.medicamentos}
            placeholder='Ex: Fluoexetina'
            onChange={handleChange}
        />
    </div>


 
    
    </>
  )
}

export default DadosSaude
