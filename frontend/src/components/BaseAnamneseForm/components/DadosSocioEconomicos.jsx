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
       
       <div className="mb-4 p-3 border rounded bg-white shadow-sm">

  <label className="form-label fw-semibold mb-2 d-block">
    Estado Civil
  </label>

  <div className="d-flex flex-wrap gap-3">

    {/* Solteiro */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="estado_civil"
        id="solteiro"
        value="solteiro"
        checked={formData.estado_civil === "solteiro"}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="solteiro">
        Solteiro
      </label>
    </div>

    {/* Casado */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="estado_civil"
        id="casado"
        value="casado"
        checked={formData.estado_civil === "casado"}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="casado">
        Casado
      </label>
    </div>

    {/* Viúvo */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="estado_civil"
        id="viuvo"
        value="viuvo"
        checked={formData.estado_civil === "viuvo"}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="viuvo">
        Viúvo
      </label>
    </div>

    {/* Separado */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="estado_civil"
        id="separado"
        value="separado"
        checked={formData.estado_civil === "separado"}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="separado">
        Separado
      </label>
    </div>

  </div>

</div>


         <div className="mb-4 p-3 border rounded bg-white shadow-sm">

  <label className="form-label fw-semibold mb-2 d-block">
    Escolaridade
  </label>

  <div className="d-flex flex-wrap gap-3">

    {/* Analfabeto */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="escolaridade"
        id="analfabeto"
        value="analfabeto"
        checked={formData.escolaridade === "analfabeto"}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="analfabeto">
        Analfabeto
      </label>
    </div>

    {/* Alfabetizado */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="escolaridade"
        id="alfabetizado"
        value="alfabetizado"
        checked={formData.escolaridade === "alfabetizado"}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="alfabetizado">
        Alfabetizado
      </label>
    </div>

    {/* Fundamental */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="escolaridade"
        id="fundamental_incompleto_completo"
        value="fundamental_incompleto_completo"
        checked={formData.escolaridade === "fundamental_incompleto_completo"}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="fundamental_incompleto_completo">
        Ensino Fundamental (completo/incompleto)
      </label>
    </div>

    {/* Médio */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="escolaridade"
        id="medio_incompleto_completo"
        value="medio_incompleto_completo"
        checked={formData.escolaridade === "medio_incompleto_completo"}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="medio_incompleto_completo">
        Ensino Médio (completo/incompleto)
      </label>
    </div>

    {/* Superior */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="escolaridade"
        id="superior_incompleto_completo"
        value="superior_incompleto_completo"
        checked={formData.escolaridade === "superior_incompleto_completo"}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="superior_incompleto_completo">
        Ensino Superior (completo/incompleto)
      </label>
    </div>

  </div>

</div>

            <div className="mb-4 p-3 border rounded bg-white shadow-sm">

  <label className="form-label fw-semibold mb-2">Ocupação</label>

  <input
    type="text"
    className="form-control w-50"
    name="ocupacao"
    value={formData.ocupacao || ""}
    placeholder="Ex: Professor"
    onChange={handleChange}
  />
  
</div>

          <div className="mb-4 p-3 border rounded bg-white shadow-sm">

  <label className="form-label fw-semibold mb-2 d-block">
    Exerce alguma atividade dentro de casa?
  </label>

  <div className="d-flex flex-wrap align-items-center gap-4">

    {/* SIM */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="faz_atividade_dentro_casa"
        id="sim_exercicio_casa"
        value="true"
        checked={formData.faz_atividade_dentro_casa === true}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="sim_exercicio_casa">
        Sim
      </label>
    </div>

    {/* NÃO */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="faz_atividade_dentro_casa"
        id="nao_exercicio_casa"
        value="false"
        checked={formData.faz_atividade_dentro_casa === false}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="nao_exercicio_casa">
        Não
      </label>
    </div>

    {/* CAMPO CONDICIONAL */}
    {formData.faz_atividade_dentro_casa === true && (
      <div className="d-flex align-items-center ms-2">

        <label className="me-2">Qual?</label>

        <input
          type="text"
          className="form-control"
          style={{ width: "250px" }}
          name="atividade_dentro_casa"
          value={formData.atividade_dentro_casa || ""}
          placeholder="Ex: Limpeza, organização..."
          onChange={handleChange}
        />
      </div>
    )}

  </div>

</div>


          
        <div className="mb-4 p-3 border rounded bg-white shadow-sm">

  <label className="form-label fw-semibold mb-3 d-block">
    Estrutura Familiar
  </label>

  <div className="row g-2">

    {/* Pai/Mãe */}
    <div className="col-md-3">
      <div className="form-check">
        <input 
          className="form-check-input"
          type="checkbox"
          name="estrutura_familia"
          value="pai e mãe, "
          id="pai_mae"
          checked={formData.estrutura_familia.includes("pai e mãe, ")}
          onChange={handleCheckboxList}
        />
        <label className="form-check-label" htmlFor="pai_mae">
          Pai/Mãe
        </label>
      </div>
    </div>

    {/* Cônjuge */}
    <div className="col-md-3">
      <div className="form-check">
        <input 
          className="form-check-input"
          type="checkbox"
          name="estrutura_familia"
          value="cônjuge, "
          id="cônjuge, "
          checked={formData.estrutura_familia.includes("cônjuge, ")}
          onChange={handleCheckboxList}
        />
        <label className="form-check-label" htmlFor="conjuge">
          Cônjuge
        </label>
      </div>
    </div>

    {/* Filho */}
    <div className="col-md-3">
      <div className="form-check">
        <input 
          className="form-check-input"
          type="checkbox"
          name="estrutura_familia"
          value="filho, "
          id="filho"
          checked={formData.estrutura_familia.includes("filho, ")}
          onChange={handleCheckboxList}
        />
        <label className="form-check-label" htmlFor="filho">
          Filho
        </label>
      </div>
    </div>

    {/* Irmão */}
    <div className="col-md-3">
      <div className="form-check">
        <input 
          className="form-check-input"
          type="checkbox"
          name="estrutura_familia"
          value="irmão, "
          id="irmao"
          checked={formData.estrutura_familia.includes("irmão, ")}
          onChange={handleCheckboxList}
        />
        <label className="form-check-label" htmlFor="irmao">
          Irmão
        </label>
      </div>
    </div>

    {/* Netos */}
    <div className="col-md-3">
      <div className="form-check">
        <input 
          className="form-check-input"
          type="checkbox"
          name="estrutura_familia"
          value="netos, "
          id="netos"
          checked={formData.estrutura_familia.includes("netos, ")}
          onChange={handleCheckboxList}
        />
        <label className="form-check-label" htmlFor="netos">
          Netos
        </label>
      </div>
    </div>

    {/* Sobrinho */}
    <div className="col-md-3">
      <div className="form-check">
        <input 
          className="form-check-input"
          type="checkbox"
          name="estrutura_familia"
          value="sobrinho, "
          id="sobrinho"
          checked={formData.estrutura_familia.includes("sobrinho, ")}
          onChange={handleCheckboxList}
        />
        <label className="form-check-label" htmlFor="sobrinho">
          Sobrinho
        </label>
      </div>
    </div>

    {/* Cunhado */}
    <div className="col-md-3">
      <div className="form-check">
        <input 
          className="form-check-input"
          type="checkbox"
          name="estrutura_familia"
          value="cunhado, "
          id="cunhado"
          checked={formData.estrutura_familia.includes("cunhado, ")}
          onChange={handleCheckboxList}
        />
        <label className="form-check-label" htmlFor="cunhado">
          Cunhado
        </label>
      </div>
    </div>

    {/* Só */}
    <div className="col-md-3">
      <div className="form-check">
        <input 
          className="form-check-input"
          type="checkbox"
          name="estrutura_familia"
          value="só."
          id="so"
          checked={formData.estrutura_familia.includes("só.")}
          onChange={handleCheckboxList}
        />
        <label className="form-check-label" htmlFor="so">
          Só
        </label>
      </div>
    </div>

    {/* Outros */}
    <div className="col-md-3">
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
        <label className="form-check-label" htmlFor="outros">
          Outros
        </label>
      </div>
    </div>

  </div>

  {/* Campo de texto condicional */}
  {formData.estrutura_familia.includes("outros") && (
    <input
      type="text"
      className="form-control w-50 mt-3"
      placeholder="Especifique..."
      name="outros_estrutura_familia"
      value={formData.outros_estrutura_familia || ""}
      onChange={handleChange}
    />
  )}

</div>

         <div className="mb-4 p-3 border rounded bg-white shadow-sm">

  <label className="form-label fw-semibold mb-3 d-block">
    Renda e Gastos Mensais
  </label>

  <div className="row g-3">

    {/* Renda pessoal */}
    <div className="col-md-6">
      <label className="form-label">Renda Pessoal (R$)</label>
      <input
        type="number"
        name="renda_pessoal"
        className="form-control"
        placeholder="Ex: 1200"
        min="0"
        value={formData.renda_pessoal || ""}
        onChange={handleChange}
      />
    </div>

    {/* Gastos com alimentação */}
    <div className="col-md-6">
      <label className="form-label">Gastos com Alimentação (R$)</label>
      <input
        type="number"
        name="gastos_alimentacao"
        className="form-control"
        placeholder="Ex: 300"
        min="0"
        value={formData.gastos_alimentacao || ""}
        onChange={handleChange}
      />
    </div>

  </div>

</div>
<div className="mb-4 p-3 border rounded bg-white shadow-sm">

  <label className="form-label fw-semibold mb-3 d-block">
    Atividade Física
  </label>

  <div className="d-flex flex-wrap align-items-center gap-4">

    {/* SIM */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="faz_atividade_fisica"
        id="sim_atividade_fisica"
        value="true"
        checked={formData.faz_atividade_fisica === true}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="sim_atividade_fisica">
        Sim
      </label>
    </div>

    {/* NÃO */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="faz_atividade_fisica"
        id="nao_atividade_fisica"
        value="false"
        checked={formData.faz_atividade_fisica === false}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="nao_atividade_fisica">
        Não
      </label>
    </div>

    {/* CAMPOS EXTRAS – alinhados ao lado */}
    {formData.faz_atividade_fisica === true && (
      <>
        {/* QUAL */}
        <label className="ms-3 mb-0">Qual:</label>
        <input
          type="text"
          name="qual_atividade_fisica"
          className="form-control d-inline-block"
          style={{ width: "250px" }}
          placeholder="Ex: Caminhada"
          value={formData.qual_atividade_fisica || ""}
          onChange={handleChange}
        />

        {/* FREQUÊNCIA */}
        <label className="ms-3 mb-0">Frequência:</label>
        <input
          type="text"
          name="frequencia_atividade_fisica"
          className="form-control d-inline-block"
          style={{ width: "180px" }}
          placeholder="Ex: 3x/sem"
          value={formData.frequencia_atividade_fisica || ""}
          onChange={handleChange}
        />
      </>
    )}

  </div>

</div>


         <div className="mb-4 p-3 border rounded bg-white shadow-sm">

  <label className="form-label fw-semibold mb-3 d-block">
    Já fez alguma atividade física?
  </label>

  <div className="d-flex flex-wrap align-items-center gap-4">

    {/* SIM */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="ja_fez_atividade_fisica"
        id="ja_fez_atividade"
        value="true"
        checked={formData.ja_fez_atividade_fisica === true}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="ja_fez_atividade">
        Sim
      </label>
    </div>

    {/* NÃO */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="ja_fez_atividade_fisica"
        id="nao_fez_atividade"
        value="false"
        checked={formData.ja_fez_atividade_fisica === false}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="nao_fez_atividade">
        Não
      </label>
    </div>

    {/* CAMPO CONDICIONAL */}
    {formData.ja_fez_atividade_fisica === true && (
      <>
        <label className="ms-3 mb-0">Há quanto tempo parou:</label>
        <input
          type="text"
          className="form-control d-inline-block"
          name="tempo_parado_atividade_fisica"
          style={{ width: "200px" }}
          placeholder="Ex: 6 meses"
          value={formData.tempo_parado_atividade_fisica || ""}
          onChange={handleChange}
        />
      </>
    )}

  </div>

</div>

       

     <div className="mb-4 p-3 border rounded bg-white shadow-sm">

  <label className="form-label fw-semibold mb-3 d-block">
    Etilismo (consumo de bebidas alcoólicas)
  </label>

  <div className="d-flex flex-wrap align-items-center gap-4">

    {/* SIM */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="tem_etilismo"
        id="sim_etilismo"
        value="true"
        checked={formData.tem_etilismo === true}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="sim_etilismo">
        Sim
      </label>
    </div>

    {/* NÃO */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="tem_etilismo"
        id="nao_etilismo"
        value="false"
        checked={formData.tem_etilismo === false}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="nao_etilismo">
        Não
      </label>
    </div>

    {/* CAMPOS EXTRAS – só aparecem se SIM */}
    {formData.tem_etilismo === true && (
      <div className="d-flex flex-wrap align-items-center gap-3 ms-2">

        {/* Tipo */}
        <>
          <label className="ms-3 mb-0">Tipo:</label>
          <input
            type="text"
            className="form-control d-inline-block"
            style={{ width: "160px" }}
            placeholder="Ex: Cerveja"
            name="tipo_etilismo"
            value={formData.tipo_etilismo || ""}
            onChange={handleChange}
          />
        </>

        {/* Quanto */}
        <>
          <label className="ms-3 mb-0">Quanto:</label>
          <input
            type="text"
            className="form-control d-inline-block"
            style={{ width: "160px" }}
            placeholder="Ex: 2x/sem"
            name="quanto_etilismo"
            value={formData.quanto_etilismo || ""}
            onChange={handleChange}
          />
        </>

      </div>
    )}

  </div>

</div>


        <div className="mb-4 p-3 border rounded bg-white shadow-sm">

  <label className="form-label fw-semibold mb-3 d-block">
    Já foi etilista?
  </label>

  <div className="d-flex flex-wrap align-items-center gap-4">

    {/* SIM */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="ja_foi_etilista"
        id="sim_ja_foi_etilista"
        value="true"
        checked={formData.ja_foi_etilista === true}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="sim_ja_foi_etilista">
        Sim
      </label>
    </div>

    {/* NÃO */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="ja_foi_etilista"
        id="nao_ja_foi_etilista"
        value="false"
        checked={formData.ja_foi_etilista === false}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="nao_ja_foi_etilista">
        Não
      </label>
    </div>

    {/* CAMPO EXTRA – só aparece se SIM */}
    {formData.ja_foi_etilista === true && (
      <>
        <label className="ms-3 mb-0">Há quanto tempo parou:</label>

        <input
          type="text"
          className="form-control d-inline-block"
          style={{ width: "200px" }}
          name="tempo_parado_etilismo"
          placeholder="Ex: 1 ano"
          value={formData.tempo_parado_etilismo || ""}
          onChange={handleChange}
        />
      </>
    )}

  </div>

</div>

<div className="mb-4 p-3 border rounded bg-white shadow-sm">

  <label className="form-label fw-semibold mb-3 d-block">
    Tabagismo
  </label>

  <div className="d-flex flex-wrap align-items-center gap-4">

    {/* SIM */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="tem_tabagismo"
        id="sim_tabagismo"
        value="true"
        checked={formData.tem_tabagismo === true}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="sim_tabagismo">
        Sim
      </label>
    </div>

    {/* NÃO */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="tem_tabagismo"
        id="nao_tabagismo"
        value="false"
        checked={formData.tem_tabagismo === false}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="nao_tabagismo">
        Não
      </label>
    </div>

    {/* CAMPOS CONDICIONAIS */}
    {formData.tem_tabagismo === true && (
      <div className="d-flex flex-wrap align-items-center gap-3 ms-2">

        {/* Tipo */}
        <>
          <label className="ms-3 mb-0">Tipo:</label>
          <input
            type="text"
            className="form-control d-inline-block"
            style={{ width: "160px" }}
            placeholder="Ex: cigarro"
            name="tipo_tabagismo"
            value={formData.tipo_tabagismo || ""}
            onChange={handleChange}
          />
        </>

        {/* Quanto */}
        <>
          <label className="ms-3 mb-0">Quanto:</label>
          <input
            type="text"
            className="form-control d-inline-block"
            style={{ width: "160px" }}
            placeholder="Ex: 1 maço/dia"
            name="quanto_tabagismo"
            value={formData.quanto_tabagismo || ""}
            onChange={handleChange}
          />
        </>

      </div>
    )}

  </div>

</div>

   <div className="mb-4 p-3 border rounded bg-white shadow-sm">

  <label className="form-label fw-semibold mb-3 d-block">
    Já foi tabagista?
  </label>

  <div className="d-flex flex-wrap align-items-center gap-4">

    {/* SIM */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="ja_foi_tabagista"
        id="sim_ja_foi_tabagista"
        value="true"
        checked={formData.ja_foi_tabagista === true}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="sim_ja_foi_tabagista">
        Sim
      </label>
    </div>

    {/* NÃO */}
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="ja_foi_tabagista"
        id="nao_ja_foi_tabagista"
        value="false"
        checked={formData.ja_foi_tabagista === false}
        onChange={handleChange}
      />
      <label className="form-check-label ms-1" htmlFor="nao_ja_foi_tabagista">
        Não
      </label>
    </div>

    {/* CAMPO CONDICIONAL */}
    {formData.ja_foi_tabagista === true && (
      <>
        <label className="ms-3 mb-0">Há quanto tempo parou:</label>

        <input
          type="text"
          className="form-control d-inline-block"
          style={{ width: "200px" }}
          placeholder="Ex: 1 ano"
          name="tempo_parado_tabagismo"
          value={formData.tempo_parado_tabagismo || ""}
          onChange={handleChange}
        />
      </>
    )}

  </div>

</div>

        
    </>
  )
}

export default DadosSocioEconomicos;
