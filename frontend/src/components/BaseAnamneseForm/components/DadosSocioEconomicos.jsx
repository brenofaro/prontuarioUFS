import React from 'react'

const DadosSocioEconomicos = ({ formData, setFormData }) => {
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

 const handleCheckboxList = (e) => {
  const { name, checked, value } = e.target; // name = "estrutura_familia"

  setFormData((prev) => {
    const list = prev[name] || [];

    const updatedList = checked
      ? [...list, value]
      : list.filter((item) => item !== value);

    return {
      ...prev,
      [name]: updatedList,
    };
  });
};

  return (
    <>
       
          <div className="mb-3">
            <label className="form-label d-block">Estado civil</label>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input "
                type="radio"
                name="estado_civil"
                id="solteiro"
                value="solteiro"
                checked={formData.estado_civil === "solteiro"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="solteiro">Solteiro</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="estado_civil"
                id="casado"
                value="casado"
                checked={formData.estado_civil === "casado"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="casado">Casado</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="estado_civil"
                id="viuvo"
                value="viuvo"
                checked={formData.estado_civil === "viuvo"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="viuvo">Viúvo</label>
            </div>

              <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="estado_civil"
                id="separado"
                value="separado"
                checked={formData.estado_civil === "separado"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="separado">Separado</label>
            </div>
          </div>

          <div>

            <label className="form-check d-block">Escolaridade</label>

            <div className="form-check form-check-inline">
              <input 
                type="radio"
                name="escolaridade" 
                id="analfabeto"
                value="analfabeto"
                checked={formData.escolaridade === "analfabeto"}
                onChange={handleChange}
              />
              <label htmlFor="analfabeto">Analfabeto</label>

            </div>

              <div className="form-check form-check-inline">
                <input 
                  type="radio" 
                  name="escolaridade"
                  id='alfabetizado' 
                  value='alfabetizado'
                  checked={formData.escolaridade === "alfabetizado"}
                  onChange={handleChange} 
                />
                <label htmlFor="alfabetizado">Afabetizado</label>
              </div>

              <div className="form-check form-check-inline">
                <input 
                  type="radio" 
                  name="escolaridade" 
                  id='fundamental_incompleto_completo'
                  value='fundamental_incompleto_completo'
                  checked={formData.escolaridade === "fundamental_incompleto_completo"}
                  onChange={handleChange} 
                />
                <label htmlFor='fundamental_incompleto_completo'>Ensino Fundamental completo/incompleto</label>
              </div>

            <div className="form-check form-check-inline">
                <input 
                  type="radio" 
                  name="escolaridade" 
                  id='medio_incompleto_completo'
                  value='medio_incompleto_completo'
                  checked={formData.escolaridade === "medio_incompleto_completo"}
                  onChange={handleChange}
                />
                <label htmlFor='medio_incompleto_completo'>Ensino Médio completo/imcompleto</label>
              </div>

            <div className="form-check form-check-inline">
                <input 
                  type="radio" 
                  name="escolaridade" 
                  id='superior_incompleto_completo'
                  value='superior_incompleto_completo'
                  checked={formData.escolaridade === "superior_incompleto_completo"}
                  onChange={handleChange}
                />
                <label htmlFor='superior_incompleto_completo'>Ensino Superior completo/incompleto</label>
              </div>



            </div>
            <div>
              <label>Ocupação</label>
              <input 
                type="text" 
                className='form-control w-25'
                name="ocupacao"
                value={formData.ocupacao}
                placeholder='Ex: Professor'
                onChange={handleChange}
                
              />
            </div>

            <div>

              <label>Exerce alguma atividade dentro de casa?</label>
              <input 
                type="radio" 
                name="faz_atividade_dentro_casa"
                value="true"
                id='sim_exercicio_casa'
                checked={formData.faz_atividade_dentro_casa === true}
                onChange={handleChange}
              />
              <label htmlFor='sim_exercicio_casa'>Sim</label>
              <input 
                type="radio" 
                name="faz_atividade_dentro_casa"
                id='nao_exercicio_casa'
                value="false"
                checked={formData.faz_atividade_dentro_casa === false}
                onChange={handleChange}
              />
              <label className='form-check-label' htmlFor='nao_exercicio_casa'>Não</label>
             {formData.faz_atividade_dentro_casa === true && (
                <>
                  <label className="ms-3">Qual</label>
                  <input 
                    type="text"
                    className="form-control d-inline-block w-auto ms-2"
                    name="atividade_dentro_casa"
                    value={formData.atividade_dentro_casa}
                    onChange={handleChange}
                  />
                </>
              )}

          </div>

          
        <div>
            <label>Estrutura Familiar:</label>
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura_familia" 
                    value="pai_mae"
                    checked={formData.estrutura_familia.includes("pai_mae")}
                    onChange={handleCheckboxList}
                    />
                <label>Pai/Mãe</label>

            </div>
  
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura_familia" 
                    value="conjuge"
                    checked={formData.estrutura_familia.includes("conjuge")}
                    onChange={handleCheckboxList}
                    />
                <label>Cônjuge</label>

            </div>
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura_familia"
                    value="filho"
                    checked={formData.estrutura_familia.includes("filho")}
                    onChange={handleCheckboxList} 
                    />
                <label>Filho</label>

            </div><div>
                <input 
                    type="checkbox" 
                    name="estrutura_familia" 
                    value="irmao"
                    checked={formData.estrutura_familia.includes("irmao")}
                    onChange={handleCheckboxList}
                    />
                <label>Irmão</label>

            </div>
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura_familia"
                    value="netos"
                    checked={formData.estrutura_familia.includes("netos")}
                    onChange={handleCheckboxList} 
                    />
                <label>Netos</label>

            </div>
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura_familia" 
                    value="sobrinho"
                    checked={formData.estrutura_familia.includes("sobrinho")}
                    onChange={handleCheckboxList} 
                    />
                <label>Sobrinho</label>

            </div>
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura_familia" 
                    value="cunhado"
                    checked={formData.estrutura_familia.includes("cunhado")}
                    onChange={handleCheckboxList} 
                    />
                <label>Cunhado</label>

            </div>
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura_familia" 
                    value="so"
                    checked={formData.estrutura_familia.includes("so")}
                    onChange={handleCheckboxList} 
                    />
                <label>Só</label>

            </div>
            <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="outros"
              name="estrutura_familia"
              value="outros"
              checked={formData.estrutura_familia.includes("outros")}
              onChange={handleCheckboxList}
            />
            <label className="form-check-label" htmlFor="outros">Outros</label>
          </div>

          {/* Campo de texto só aparece se o "outros" estiver marcado */}
          {formData.estrutura_familia.includes("outros") && (
            <input
              type="text"
              className="form-control w-50 mt-2"
              placeholder="Especifique..."
              value={formData.outros_estrutura_familia || ""}
              onChange={handleChange}
            />
          )}


        </div>
          <div className='mt-3'>
            <label>Renda Pessoal:</label>
            <input 
                type="number" 
                name="renda_pessoal"
                className="form-control w-25"
                value={formData.renda_pessoal}
                onChange={handleChange}
            />
            <label>Gastos com a alimentação</label>
            <input 
                type="number" 
                name="gastos_alimentacao"
                value={formData.gastos_alimentacao}
                onChange={handleChange}
            />


        </div>

        <div className='d-flex align-items-center m-2'>
            <label>Atividade Física:</label>
            <input 
                type="radio" 
                name="faz_atividade_fisica" 
                value="true"
                id="sim_atividade_fisica"
                checked={formData.faz_atividade_fisica === true}
                onChange={handleChange}
            />
            <label htmlFor="sim_atividade_fisica">Sim</label>
            <input 
                type="radio" 
                name="faz_atividade_fisica" 
                value="false"
                id="nao_atividade_fisica"
                checked={formData.faz_atividade_fisica === false}
                onChange={handleChange}
            />
            <label htmlFor="nao_atividade_fisica">Não</label>

            <label>Qual:</label>
            <input 
              type="text" 
              name="qual_atividade_fisica"
              value={formData.qual_atividade_fisica}
              onChange={handleChange}
            />

            <label htmlFor="">Frequência</label>
            <input 
              type="text"
              name="frequencia_atividade_fisica"
              value={formData.frequencia_atividade_fisica}
              onChange={handleChange}
            /> 

        </div>

          <div>
            <label>Já fez alguma atividade física:</label>
            <input 
                type="radio" 
                name="ja_fez_atividade_fisica" 
                value="true"
                id="ja_fez_atividade"
                checked={formData.ja_fez_atividade_fisica === true}
                onChange={handleChange}
            />
            <label htmlFor="ja_fez_atividade">Sim</label>
            <input 
                type="radio" 
                name="ja_fez_atividade_fisica"
                value="false"
                id="nao_fez_atividade"
                checked={formData.ja_fez_atividade_fisica === false}
                onChange={handleChange}
            />
            <label htmlFor="nao_fez_atividade">Não</label>

            <label>Há quanto tempo parou:</label>
            <input 
                type="text" 
                name="tempo_parado_atividade_fisica"
                value={formData.tempo_parado_atividade_fisica}
                onChange={handleChange}
            />

        </div>
       

        <div className='mt-3'>
            <label>Etilismo:</label>
            <input 
                type="radio" 
                name="tem_etilismo" 
                value="true"
                id="sim_etilismo"
                checked={formData.tem_etilismo === true}
                onChange={handleChange}
            />
            <label htmlFor="sim_etilismo">Sim</label>
            <input 
                type="radio" 
                name="tem_etilismo" 
                value="false"
                id="nao_etilismo"
                checked={formData.tem_etilismo === false}
                onChange={handleChange}
            />
            <label htmlFor="nao_etilismo">Não</label>

            <label>Tipo:</label>
            <input 
                type="text" 
                name="tipo_etilismo"
                value={formData.tipo_etilismo}
                onChange={handleChange}
            />
            <label>Quanto:</label>
            <input 
                type="text" 
                name="quanto_etilismo"
                value={formData.quanto_etilismo}
                onChange={handleChange}
            />

        </div>

        <div>
            <label>Já foi etilista:</label>
            <input 
                type="radio" 
                name="ja_foi_etilista" 
                value="true"
                id="sim_ja_foi_etilista"
                checked={formData.ja_foi_etilista === true}
                onChange={handleChange}
            />
            
            <label htmlFor="sim_ja_foi_etilista">Sim</label>
            <input 
                type="radio" 
                name="ja_foi_etilista" 
                value="false"
                id="nao_ja_foi_etilista"
                checked={formData.ja_foi_etilista ===false}
                onChange={handleChange }
            />
            <label htmlFor="nao_ja_foi_etilista">Não</label>

            <label>Há quanto tempo parou:</label>
            <input 
                type="text" 
                name="tempo_parado_etilismo"
                value={formData.tempo_parado_etilismo}
                onChange={handleChange }
            />

        </div>

          <div>
            <label>Tabagismo:</label>
            <input 
                type="radio" 
                name="tem_tabagismo" 
                value="true"
                id="sim_tabagismo"
                checked={formData.tem_tabagismo === true}
                onChange={handleChange}
            />
            <label htmlFor="sim_tabagismo">Sim</label>
            <input 
                type="radio" 
                name="tem_tabagismo" 
                value="false"
                id="nao_tabagismo"
                checked={formData.tem_tabagismo === false}
                onChange={handleChange}

            />
            <label htmlFor="nao_tabagismo">Não</label>

            <label>Tipo:</label>
            <input 
                type="text" 
                name="tipo_tabagismo"
                value={formData.tipo_tabagismo}
                onChange={handleChange}
            />
            <label>Quanto:</label>
            <input 
                type="text" 
                name="quanto_tabagismo"
                value={formData.quanto_tabagismo}
                onChange={handleChange }
            />

        </div>
     <div>
            <label>Já foi tabagista:</label>
            <input 
                type="radio" 
                name="ja_foi_tabagista" 
                value="true"
                id="sim_ja_foi_tabagista"
                checked={formData.ja_foi_tabagista === true}
                onChange={handleChange}
            />
            <label htmlFor="sim_ja_foi_tabagista">Sim</label>
            <input 
                type="radio" 
                name="ja_foi_tabagista" 
                value="false"
                id="nao_ja_foi_tabagista"
                checked={formData.ja_foi_tabagista === false}
                onChange={handleChange } 
            />
            <label htmlFor="nao_ja_foi_tabagista">Não</label>

            <label>Há quanto tempo parou:</label>
            <input 
                type="text" 
                name="tempo_parado_tabagismo"
                value={formData.tempo_parado_tabagismo}
                onChange={handleChange}
            />
        </div>
        
        
    </>
  )
}

export default DadosSocioEconomicos;
