const SocioEconomicosChild = ({ formData, setFormData }) => {
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

  const toggleField = (fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: prev[fieldName] === "true" ? null : "true",
    }));
  };

  const toggleBooleanField = (fieldName, newValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: prev[fieldName] === newValue ? null : newValue,
    }));
  };

  return (
    <>
      <div className="mb-3 p-4 border rounded-3 bg-white ">
        <label className="form-label text-muted small">Escolar?</label>
        <div className="d-flex flex-wrap gap-3 mb-3">
          <div className="form-check d-flex align-items-center gap-2">
            <input
              type="radio"
              className="form-check-input"
              name="escolar"
              id="sim_escolar"
              checked={formData.escolar === true}
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  escolar: prev.escolar === true ? null : true,
                }))
              }
              onChange={() => {}}
            />
            <label htmlFor="sim_escolar">Sim</label>
          </div>

          <div className="form-check d-flex align-items-center gap-2">
            <input
              type="radio"
              className="form-check-input"
              name="escolar"
              id="nao_escolar"
              checked={formData.escolar === false}
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  escolar: prev.escolar === false ? null : false,
                }))
              }
              onChange={() => {}} 
            />
            <label htmlFor="nao_escolar">Não</label>
          </div>

          {formData.escolar === true && (
            <>
              <div className="d-flex align-items-center gap-2 ms-3">
                <label className="text-muted small mb-0">Série:</label>
                <input
                  type="text"
                  name="serie_escolar"
                  className="form-control form-control-sm"
                  style={{ width: "140px" }}
                  placeholder=""
                  value={formData.serie_escolar || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex align-items-center gap-2">
                <label className="text-muted small mb-0">Turno:</label>
                <input
                  type="text"
                  name="turno_escolar"
                  className="form-control form-control-sm"
                  style={{ width: "180px" }}
                  placeholder=""
                  value={formData.turno_escolar || ""}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
        </div>

        <label className="form-label text-muted small">
          Adaptação Escolar:
        </label>
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
              onClick={() => toggleBooleanField("adaptacao_escolar", true)}
            />
            <label className="form-check-label" htmlFor="sim_adaptacao_escolar">
              Sim
            </label>
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
              onClick={() => toggleBooleanField("adaptacao_escolar", false)}
            />
            <label className="form-check-label" htmlFor="nao_adaptacao_escolar">
              Não
            </label>
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
            <label className="form-check-label" htmlFor="sim_merenda_escolar">
              Sim
            </label>
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
            <label className="form-check-label" htmlFor="nao_merenda_escolar">
              Não
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="ocupacao" className="form-label text-muted small">
            Ocupação da responsável:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            name="ocupacao_responsavel"
            style={{ width: "400px" }}
            value={formData.ocupacao_responsavel || ""}
            placeholder=""
            onChange={handleChange}
          />
        </div>

        <label className="form-label text-muted small">
          Estrutura Familiar
        </label>
        <div className="d-flex flex-wrap gap-3 mb-3">
          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="checkbox"
              name="pai_mae"
              id="pai_mae"
              value="true"
              checked={formData.pai_mae === true}
              onChange={handleChange}
              onClick={() => toggleField("pai_mae")}
            />
            <label className="form-check-label" htmlFor="pai_mae">
              Pai/Mãe
            </label>
          </div>

          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="checkbox"
              name="conjuge"
              id="conjuge"
              value="true"
              checked={formData.conjuge === true}
              onChange={handleChange}
              onClick={() => toggleField("conjuge")}
            />
            <label className="form-check-label" htmlFor="conjuge">
              Cônjuge
            </label>
          </div>

          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="checkbox"
              name="filho"
              id="filho"
              value="true"
              checked={formData.filho === true}
              onChange={handleChange}
              onClick={() => toggleField("filho")}
            />
            <label className="form-check-label" htmlFor="filho">
              Filho
            </label>
          </div>

          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="checkbox"
              name="irmao"
              id="irmao"
              value="true"
              checked={formData.irmao === true}
              onChange={handleChange}
              onClick={() => toggleField("irmao")}
            />
            <label className="form-check-label" htmlFor="irmao">
              Irmão
            </label>
          </div>

          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="checkbox"
              name="netos"
              id="netos"
              value="true"
              checked={formData.netos === true}
              onChange={handleChange}
              onClick={() => toggleField("netos")}
            />
            <label className="form-check-label" htmlFor="netos">
              Netos
            </label>
          </div>

          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="checkbox"
              name="sobrinho"
              id="sobrinho"
              value="true"
              checked={formData.sobrinho === true}
              onChange={handleChange}
              onClick={() => toggleField("sobrinho")}
            />
            <label className="form-check-label" htmlFor="sobrinho">
              Sobrinho
            </label>
          </div>
          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="checkbox"
              name="cunhado"
              id="cunhado"
              value="true"
              checked={formData.cunhado === true}
              onChange={handleChange}
              onClick={() => toggleField("cunhado")}
            />
            <label className="form-check-label" htmlFor="cunhado">
              Cunhado
            </label>
          </div>

          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="checkbox"
              name="so"
              id="so"
              value="true"
              checked={formData.so === true}
              onChange={handleChange}
              onClick={() => toggleField("so")}
            />
            <label className="form-check-label" htmlFor="so">
              Só
            </label>
          </div>

          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="checkbox"
              name="amigos"
              id="amigos"
              value="true"
              checked={formData.amigos === true}
              onChange={handleChange}
              onClick={() => toggleField("amigos")}
            />
            <label className="form-check-label" htmlFor="amigos">
              Amigos
            </label>
          </div>
        </div>

        <label htmlFor="ocupacao" className="form-label text-muted small">
          Outras pessoas da estrutura familiar:
        </label>
        <input
          type="text"
          className="form-control form-control-sm mb-3"
          name="outros_da_familia"
          style={{ width: "400px" }}
          value={formData.outros_da_familia || ""}
          placeholder=""
          onChange={handleChange}
        />

        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <label
              htmlFor="renda_pessoal"
              className="form-label text-muted small"
            >
              Renda Pessoal (R$)
            </label>
            <input
              type="text"
              id="renda_pessoal"
              name="renda_pessoal"
              className="form-control"
              value={formData.renda_pessoal || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label
              htmlFor="gastos_alimentacao"
              className="form-label text-muted small"
            >
              Gastos com Alimentação (R$)
            </label>
            <input
              type="text"
              id="gastos_alimentacao"
              name="gastos_alimentacao"
              className="form-control"
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
            <label className="form-check-label" htmlFor="sim_atividade">
              Sim
            </label>
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
            <label className="form-check-label" htmlFor="nao_atividade">
              Não
            </label>
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
            <label className="form-check-label" htmlFor="sim_ja_fez">
              Sim
            </label>
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
            <label className="form-check-label" htmlFor="nao_ja_fez">
              Não
            </label>
          </div>
          {formData.ja_fez_atividade_fisica === true && (
            <div className="d-flex align-items-center gap-2 ms-3">
              <label className="text-muted small mb-0">
                Há quanto tempo parou:
              </label>
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
          <label htmlFor="" className="form-label text-muted small">
            Criança Ativa? (Exemplo: brinca muito, corre):
          </label>
          <input
            type="text"
            className="form-control mb-3"
            name="crianca_ativa"
            style={{ width: "400px" }}
            value={formData.crianca_ativa || ""}
            placeholder=""
            onChange={handleChange}
          />
        </div>

        <div className="d-flex gap-4">
          <div className="">
            <label htmlFor="" className="form-label text-muted small">
              Horário que dorme:
            </label>
            <input
              type="time"
              className="form-control mb-3"
              name="horario_dorme"
              style={{ width: "200px" }}
              value={formData.horario_dorme || ""}
              placeholder=""
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="" className="form-label text-muted small">
              Horário que acorda:
            </label>
            <input
              type="time"
              className="form-control mb-3"
              name="horario_acorda"
              style={{ width: "200px" }}
              value={formData.horario_acorda || ""}
              placeholder=""
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SocioEconomicosChild;
