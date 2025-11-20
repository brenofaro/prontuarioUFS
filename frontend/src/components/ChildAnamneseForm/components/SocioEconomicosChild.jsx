import React from 'react'

const SocioEconomicosChild = ({formData, setFormData}) => {
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

    const toggleField = (fieldName) => {
  setFormData((prev) => ({
    ...prev,
    [fieldName]: prev[fieldName] === "true" ? null : "true",
  }));
};

  const handleCheckboxList = (e) => {
    const { name, checked, value } = e.target;

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

        
      {/* Estado Civil */}
      <div className="mb-3 p-4 border rounded-3 bg-white ">
        <label className="form-label text-muted small">Escolar?</label>
        <div className="d-flex flex-wrap gap-3 mb-3">
          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="radio"
              name="escolar"
              id="sim_escolar"
              value="true"
              checked={formData.escolar === true}
              onChange={handleChange}
              onClick={() => toggleField("escolar")}
            />
            <label className="form-check-label" htmlFor="sim_escolar">Sim</label>
          </div>
          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="radio"
              name="escolar"
              id="nao_escolar"
              value="false"
              checked={formData.escolar === false}
              onChange={handleChange}
              onClick={() => toggleField("escolar")}
            />
            <label className="form-check-label" htmlFor="nao_escolar">Não</label>
          </div>
          {formData.escolar === true && (
            <>
              <div className="d-flex align-items-center gap-2 ms-3">
                <label className="text-muted small mb-0">Série:</label>
                <input
                  type="text"
                  name="qual_serie_escolar"
                  className="form-control form-control-sm"
                  style={{ width: "140px" }}
                  placeholder=""
                  value={formData.qual_serie_escolar || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex align-items-center gap-2">
                <label className="text-muted small mb-0">Turno:</label>
                <input
                  type="text"
                  name="qual_turno_escolar"
                  className="form-control form-control-sm"
                  style={{ width: "180px" }}
                  placeholder=""
                  value={formData.qual_turno_escolar || ""}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
        </div>

        <label className="form-label text-muted small">Adaptação Escolar:</label>
        <div className="d-flex flex-wrap gap-3 mb-3">
          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="radio"
              name="adaptacao_escolar"
              id="sim_adaptacao_escolar"
              value="true"
              checked={formData.adaptacao_escolar === true}
              onChange={handleChange}
              onClick={() => toggleField("adaptacao_escolar")}
            />
            <label className="form-check-label" htmlFor="sim_adaptacao_escolar">Sim</label>
          </div>
          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="radio"
              name="adaptacao_escolar"
              id="nao_adaptacao_escolar"
              value="false"
              checked={formData.adaptacao_escolar === false}
              onChange={handleChange}
              onClick={() => toggleField("adaptacao_escolar")}
            />
            <label className="form-check-label" htmlFor="nao_adaptacao_escolar">Não</label>
          </div>
          </div>

           <label className="form-label text-muted small">Merenda Escolar:</label>
        <div className="d-flex flex-wrap gap-3 mb-3">
          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="radio"
              name="merenda_escolar"
              id="sim_merenda_escolar"
              value="true"
              checked={formData.merenda_escolar === true}
              onChange={handleChange}
              onClick={() => toggleField("merenda_escolar")}
            />
            <label className="form-check-label" htmlFor="sim_merenda_escolar">Sim</label>
          </div>
          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="radio"
              name="merenda_escolar"
              id="nao_merenda_escolar"
              value="false"
              checked={formData.merenda_escolar === false}
              onChange={handleChange}
              onClick={() => toggleField("merenda_escolar")}
            />
            <label className="form-check-label" htmlFor="nao_merenda_escolar">Não</label>
          </div>
          </div>

      

  

          <div>

        <label htmlFor="ocupacao" className="form-label text-muted small">Ocupação da responsável:</label>
        <input
          type="text"
          className="form-control mb-3"
          name="ocupacao_responsavel"
          style={{width:"400px"}}
          value={formData.ocupacao_responsavel || ""}
          placeholder=""
          onChange={handleChange}
        />
          </div>

       

        {/* <label className="form-label text-muted small">Estrutura Familiar</label>
        <div className="row g-3 mb-3">
          {[
            { value: "pai e mãe, ", label: "Pai/Mãe", id: "pai_mae" },
            { value: "cônjuge, ", label: "Cônjuge", id: "conjuge" },
            { value: "filho, ", label: "Filho", id: "filho" },
            { value: "irmão, ", label: "Irmão", id: "irmao" },
            { value: "netos, ", label: "Netos", id: "netos" },
            { value: "sobrinho, ", label: "Sobrinho", id: "sobrinho" },
            { value: "cunhado, ", label: "Cunhado", id: "cunhado" },
            { value: "só.", label: "Só", id: "so" },
            { value: "outros", label: "Outros", id: "outros" }
          ].map(item => (
            <div className="col-md-3" key={item.id}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="estrutura_familia"
                  value={item.value}
                  id={item.id}
                  checked={formData.estrutura_familia?.includes(item.value)}
                  onChange={handleCheckboxList}
                />
                <label className="form-check-label" htmlFor={item.id}>
                  {item.label}
                </label>
              </div>
            </div>
          ))}
        </div>
        {formData.estrutura_familia?.includes("outros") && (
          <input
            type="text"
            className="form-control mt-3"
            placeholder="Especifique..."
            name="outros_estrutura_familia"
            value={formData.outros_estrutura_familia || ""}
            onChange={handleChange}
          />
        )}
     */}
        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <label htmlFor="renda_pessoal" className="form-label text-muted small">
              Renda Pessoal (R$)
            </label>
            <input
              type="number"
              id="renda_pessoal"
              name="renda_pessoal"
              className="form-control"
              placeholder="Ex: 1200"
              min="0"
              value={formData.renda_pessoal || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="gastos_alimentacao" className="form-label text-muted small">
              Gastos com Alimentação (R$)
            </label>
            <input
              type="number"
              id="gastos_alimentacao"
              name="gastos_alimentacao"
              className="form-control"
              placeholder="Ex: 300"
              min="0"
              value={formData.gastos_alimentacao || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <label className="form-label text-muted small">Atividade Física</label>
        <div className="d-flex flex-wrap gap-3 mb-3">
          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="radio"
              name="faz_atividade_fisica"
              id="sim_atividade"
              value="true"
              checked={formData.faz_atividade_fisica === true}
              onChange={handleChange}
              onClick={() => toggleField("faz_atividade_fisica")}
            />
            <label className="form-check-label" htmlFor="sim_atividade">Sim</label>
          </div>
          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="radio"
              name="faz_atividade_fisica"
              id="nao_atividade"
              value="false"
              checked={formData.faz_atividade_fisica === false}
              onChange={handleChange}
              onClick={() => toggleField("faz_atividade_fisica")}
            />
            <label className="form-check-label" htmlFor="nao_atividade">Não</label>
          </div>
          {formData.faz_atividade_fisica === true && (
            <>
              <div className="d-flex align-items-center gap-2 ms-3">
                <label className="text-muted small mb-0">Qual:</label>
                <input
                  type="text"
                  name="qual_atividade_fisica"
                  className="form-control form-control-sm"
                  style={{ width: "180px" }}
                  placeholder=""
                  value={formData.qual_atividade_fisica || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex align-items-center gap-2">
                <label className="text-muted small mb-0">Frequência:</label>
                <input
                  type="text"
                  name="frequencia_atividade_fisica"
                  className="form-control form-control-sm"
                  style={{ width: "140px" }}
                  placeholder=""
                  value={formData.frequencia_atividade_fisica || ""}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
        </div>

        <label className="form-label text-muted small">
          Já fez alguma atividade física?
        </label>
        <div className="d-flex flex-wrap gap-3 mb-3">
          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="radio"
              name="ja_fez_atividade_fisica"
              id="sim_ja_fez"
              value="true"
              checked={formData.ja_fez_atividade_fisica === true}
              onChange={handleChange}
              onClick={() => toggleField("ja_fez_atividade_fisica")}
            />
            <label className="form-check-label" htmlFor="sim_ja_fez">Sim</label>
          </div>
          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="radio"
              name="ja_fez_atividade_fisica"
              id="nao_ja_fez"
              value="false"
              checked={formData.ja_fez_atividade_fisica === false}
              onChange={handleChange}
              onClick={() => toggleField("ja_fez_atividade_fisica")}
            />
            <label className="form-check-label" htmlFor="nao_ja_fez">Não</label>
          </div>
          {formData.ja_fez_atividade_fisica === true && (
            <div className="d-flex align-items-center gap-2 ms-3">
              <label className="text-muted small mb-0">Há quanto tempo parou:</label>
              <input
                type="text"
                className="form-control form-control-sm"
                style={{ width: "180px" }}
                name="tempo_parado_atividade_fisica"
                placeholder=""
                value={formData.tempo_parado_atividade_fisica || ""}
                onChange={handleChange}
              />
            </div>
          )}
        </div>

             <div>

        <label htmlFor="ocupacao" className="form-label text-muted small">Criança Ativa? (Exemplo: brinca muito, corre):</label>
        <input
          type="text"
          className="form-control mb-3"
          name="crianca_ativa"
          style={{width:"400px"}}
          value={formData.crianca_Ativa || ""}
          placeholder=""
          onChange={handleChange}
        />
          </div>

           <div className="d-flex gap-4">
            <div className=''>
                    <label htmlFor="ocupacao" className="form-label text-muted small">Horário que dorme:</label>
                    <input
                    type="time"
                    className="form-control mb-3"
                    name="horario_dorme"
                    style={{width:"200px"}}
                    value={formData.horario_dorme || ""}
                    placeholder=""
                    onChange={handleChange}
                    />
            </div>
                
            <div>

                    <label htmlFor="ocupacao" className="form-label text-muted small">Horário que acorda:</label>
                    <input
                    type="time"
                    className="form-control mb-3"
                    name="horario_acorda"
                    style={{width:"200px"}}
                    value={formData.horario_acorda || ""}
                    placeholder=""
                    onChange={handleChange}
                    />
            </div>
          </div>
       

       

       
      </div>
    </>
  )
}

export default SocioEconomicosChild
