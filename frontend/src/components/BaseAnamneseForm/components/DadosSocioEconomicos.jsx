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
      <div className="mb-3 p-4 border rounded-3 bg-white">
        <label className="form-label  mb-3 d-block">Estado Civil</label>
        <div className="d-flex flex-wrap gap-3">
          {['solteiro', 'casado', 'viuvo', 'separado'].map((estado) => (
            <div className="form-check" key={estado}>
              <input
                className="form-check-input"
                type="radio"
                name="estado_civil"
                id={estado}
                value={estado}
                checked={formData.estado_civil === estado}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor={estado}>
                {estado.charAt(0).toUpperCase() + estado.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Escolaridade */}
      <div className="mb-3 p-4 border rounded-3 bg-white">
        <label className="form-label fw-semibold mb-3 d-block">Escolaridade</label>
        <div className="d-flex flex-wrap gap-3">
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
            <label className="form-check-label" htmlFor="analfabeto">
              Analfabeto
            </label>
          </div>
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
            <label className="form-check-label" htmlFor="alfabetizado">
              Alfabetizado
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="escolaridade"
              id="fundamental"
              value="fundamental_incompleto_completo"
              checked={formData.escolaridade === "fundamental_incompleto_completo"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="fundamental">
              Fundamental
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="escolaridade"
              id="medio"
              value="medio_incompleto_completo"
              checked={formData.escolaridade === "medio_incompleto_completo"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="medio">
              Médio
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="escolaridade"
              id="superior"
              value="superior_incompleto_completo"
              checked={formData.escolaridade === "superior_incompleto_completo"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="superior">
              Superior
            </label>
          </div>
        </div>
      </div>

      {/* Ocupação */}
      <div className="mb-3 p-4 border rounded-3 bg-white">
        <label htmlFor="ocupacao" className="form-label fw-semibold mb-2">Ocupação</label>
        <input
          type="text"
          className="form-control"
          id="ocupacao"
          name="ocupacao"
          value={formData.ocupacao || ""}
          placeholder="Ex: Professor"
          onChange={handleChange}
        />
      </div>

      {/* Atividade dentro de casa */}
      <div className="mb-3 p-4 border rounded-3 bg-white">
        <label className="form-label fw-semibold mb-3 d-block">
          Exerce alguma atividade dentro de casa?
        </label>
        <div className="d-flex flex-wrap align-items-center gap-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="faz_atividade_dentro_casa"
              id="sim_casa"
              value="true"
              checked={formData.faz_atividade_dentro_casa === true}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="sim_casa">Sim</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="faz_atividade_dentro_casa"
              id="nao_casa"
              value="false"
              checked={formData.faz_atividade_dentro_casa === false}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="nao_casa">Não</label>
          </div>
          {formData.faz_atividade_dentro_casa === true && (
            <div className="d-flex align-items-center gap-2 ms-3">
              <label className="text-muted small mb-0">Qual?</label>
              <input
                type="text"
                className="form-control form-control-sm"
                style={{ width: "220px" }}
                name="atividade_dentro_casa"
                value={formData.atividade_dentro_casa || ""}
                placeholder="Ex: Limpeza, organização"
                onChange={handleChange}
              />
            </div>
          )}
        </div>
      </div>

      {/* Estrutura Familiar */}
      <div className="mb-3 p-4 border rounded-3 bg-white">
        <label className="form-label fw-semibold mb-3 d-block">Estrutura Familiar</label>
        <div className="row g-3">
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
      </div>

      {/* Renda e Gastos */}
      <div className="mb-3 p-4 border rounded-3 bg-white">
        <label className="form-label fw-semibold mb-3 d-block">Renda e Gastos Mensais</label>
        <div className="row g-3">
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
      </div>

      {/* Atividade Física */}
      <div className="mb-3 p-4 border rounded-3 bg-white">
        <label className="form-label fw-semibold mb-3 d-block">Atividade Física</label>
        <div className="d-flex flex-wrap align-items-center gap-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="faz_atividade_fisica"
              id="sim_atividade"
              value="true"
              checked={formData.faz_atividade_fisica === true}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="sim_atividade">Sim</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="faz_atividade_fisica"
              id="nao_atividade"
              value="false"
              checked={formData.faz_atividade_fisica === false}
              onChange={handleChange}
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
                  placeholder="Ex: Caminhada"
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
                  placeholder="Ex: 3x/sem"
                  value={formData.frequencia_atividade_fisica || ""}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Já fez atividade física */}
      <div className="mb-3 p-4 border rounded-3 bg-white">
        <label className="form-label fw-semibold mb-3 d-block">
          Já fez alguma atividade física?
        </label>
        <div className="d-flex flex-wrap align-items-center gap-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="ja_fez_atividade_fisica"
              id="sim_ja_fez"
              value="true"
              checked={formData.ja_fez_atividade_fisica === true}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="sim_ja_fez">Sim</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="ja_fez_atividade_fisica"
              id="nao_ja_fez"
              value="false"
              checked={formData.ja_fez_atividade_fisica === false}
              onChange={handleChange}
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
                placeholder="Ex: 6 meses"
                value={formData.tempo_parado_atividade_fisica || ""}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
      </div>

      {/* Etilismo */}
      <div className="mb-3 p-4 border rounded-3 bg-white">
        <label className="form-label fw-semibold mb-3 d-block">
          Etilismo (consumo de bebidas alcoólicas)
        </label>
        <div className="d-flex flex-wrap align-items-center gap-3">
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
            <label className="form-check-label" htmlFor="sim_etilismo">Sim</label>
          </div>
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
            <label className="form-check-label" htmlFor="nao_etilismo">Não</label>
          </div>
          {formData.tem_etilismo === true && (
            <>
              <div className="d-flex align-items-center gap-2 ms-3">
                <label className="text-muted small mb-0">Tipo:</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  style={{ width: "140px" }}
                  placeholder="Ex: Cerveja"
                  name="tipo_etilismo"
                  value={formData.tipo_etilismo || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex align-items-center gap-2">
                <label className="text-muted small mb-0">Quanto:</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  style={{ width: "140px" }}
                  placeholder="Ex: 2x/sem"
                  name="quanto_etilismo"
                  value={formData.quanto_etilismo || ""}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Já foi etilista */}
      <div className="mb-3 p-4 border rounded-3 bg-white">
        <label className="form-label fw-semibold mb-3 d-block">Já foi etilista?</label>
        <div className="d-flex flex-wrap align-items-center gap-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="ja_foi_etilista"
              id="sim_foi_etilista"
              value="true"
              checked={formData.ja_foi_etilista === true}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="sim_foi_etilista">Sim</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="ja_foi_etilista"
              id="nao_foi_etilista"
              value="false"
              checked={formData.ja_foi_etilista === false}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="nao_foi_etilista">Não</label>
          </div>
          {formData.ja_foi_etilista === true && (
            <div className="d-flex align-items-center gap-2 ms-3">
              <label className="text-muted small mb-0">Há quanto tempo parou:</label>
              <input
                type="text"
                className="form-control form-control-sm"
                style={{ width: "180px" }}
                placeholder="Ex: 1 ano"
                name="tempo_parado_etilismo"
                value={formData.tempo_parado_etilismo || ""}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
      </div>

      {/* Tabagismo */}
      <div className="mb-3 p-4 border rounded-3 bg-white">
        <label className="form-label fw-semibold mb-3 d-block">Tabagismo</label>
        <div className="d-flex flex-wrap align-items-center gap-3">
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
            <label className="form-check-label" htmlFor="sim_tabagismo">Sim</label>
          </div>
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
            <label className="form-check-label" htmlFor="nao_tabagismo">Não</label>
          </div>
          {formData.tem_tabagismo === true && (
            <>
              <div className="d-flex align-items-center gap-2 ms-3">
                <label className="text-muted small mb-0">Tipo:</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  style={{ width: "140px" }}
                  placeholder="Ex: Cigarro"
                  name="tipo_tabagismo"
                  value={formData.tipo_tabagismo || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex align-items-center gap-2">
                <label className="text-muted small mb-0">Quanto:</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  style={{ width: "140px" }}
                  placeholder="Ex: 1 maço/dia"
                  name="quanto_tabagismo"
                  value={formData.quanto_tabagismo || ""}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Já foi tabagista */}
      <div className="mb-3 p-4 border rounded-3 bg-white">
        <label className="form-label fw-semibold mb-3 d-block">Já foi tabagista?</label>
        <div className="d-flex flex-wrap align-items-center gap-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="ja_foi_tabagista"
              id="sim_foi_tabagista"
              value="true"
              checked={formData.ja_foi_tabagista === true}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="sim_foi_tabagista">Sim</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="ja_foi_tabagista"
              id="nao_foi_tabagista"
              value="false"
              checked={formData.ja_foi_tabagista === false}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="nao_foi_tabagista">Não</label>
          </div>
          {formData.ja_foi_tabagista === true && (
            <div className="d-flex align-items-center gap-2 ms-3">
              <label className="text-muted small mb-0">Há quanto tempo parou:</label>
              <input
                type="text"
                className="form-control form-control-sm"
                style={{ width: "180px" }}
                placeholder="Ex: 1 ano"
                name="tempo_parado_tabagismo"
                value={formData.tempo_parado_tabagismo || ""}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default DadosSocioEconomicos;