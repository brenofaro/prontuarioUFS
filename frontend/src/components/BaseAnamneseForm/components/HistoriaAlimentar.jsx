const HistoriaAlimentar = ({ formData, setFormData }) => {
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

  return (
    <>
      <div className="mb-4 p-3 border rounded bg-white shadow-sm">
        <div className="mb-3">
          <label className="form-label text-muted small">
            Aversões alimentares:
          </label>

          <div className="d-flex flex-wrap gap-4">
            <div className="form-check d-flex align-items-center gap-2">
              <input
                type="radio"
                className="form-check-input"
                name="possui_aversoes_alimentares"
                id="aversao_sim"
                value="true"
                checked={formData.possui_aversoes_alimentares === true}
                onChange={handleChange}
                onClick={() => toggleField("possui_aversoes_alimentares")}
              />
              <label htmlFor="aversao_sim" className="form-check-label">
                Sim
              </label>
            </div>

            <div className="form-check d-flex align-items-center gap-2">
              <input
                type="radio"
                className="form-check-input"
                name="possui_aversoes_alimentares"
                id="aversao_nao"
                value="false"
                checked={formData.possui_aversoes_alimentares === false}
                onChange={handleChange}
                onClick={() => toggleField("possui_aversoes_alimentares")}
              />
              <label htmlFor="aversao_nao" className="form-check-label">
                Não
              </label>
            </div>

            {formData.possui_aversoes_alimentares === true && (
              <div className="d-flex align-items-center gap-2 ms-3">
                <label className="text-muted small mb-0">Quais:</label>

                <input
                  type="text"
                  name="aversoes_alimentares"
                  className="form-control form-control-sm"
                  style={{ width: "250px" }}
                  value={formData.aversoes_alimentares || ""}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label text-muted small d-block">
            Alergias / Intolerâncias alimentares:
          </label>

          <div className="d-flex flex-wrap gap-4">
            <div className="form-check d-flex align-items-center gap-2">
              <input
                type="radio"
                className="form-check-input"
                name="possui_alergias_alimentares"
                id="alergia_sim"
                value="true"
                checked={formData.possui_alergias_alimentares === true}
                onChange={handleChange}
                onClick={() => toggleField("possui_alergias_alimentares")}
              />
              <label htmlFor="alergia_sim" className="form-check-label">
                Sim
              </label>
            </div>

            <div className="form-check d-flex align-items-center gap-2">
              <input
                type="radio"
                className="form-check-input"
                name="possui_alergias_alimentares"
                id="alergia_nao"
                value="false"
                checked={formData.possui_alergias_alimentares === false}
                onChange={handleChange}
                onClick={() => toggleField("possui_alergias_alimentares")}
              />
              <label htmlFor="alergia_nao" className="form-check-label">
                Não
              </label>
            </div>

            {formData.possui_alergias_alimentares === true && (
              <div className="d-flex align-items-center gap-2 ms-3">
                <label className="text-muted small mb-0">Quais:</label>

                <input
                  type="text"
                  name="alergias_alimentares"
                  className="form-control form-control-sm"
                  style={{ width: "250px" }}
                  value={formData.alergias_alimentares || ""}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label text-muted small">
            Ingestão hídrica:
          </label>
          <input
            type="text"
            className="form-control form-control-sm mt-1"
            name="ingestao_hidrica"
            placeholder="Ex: 2 litros/dia"
            value={formData.ingestao_hidrica || ""}
            onChange={handleChange}
            style={{ width: "250px", height: "40px" }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-muted small d-block">
            Existe algum horário que sente mais fome?
          </label>

          <div className="d-flex flex-wrap gap-4">
            <div className="form-check d-flex align-items-center gap-2">
              <input
                type="radio"
                name="existe_horario_mais_fome"
                className="form-check-input"
                id="fome_sim"
                value="true"
                checked={formData.existe_horario_mais_fome === true}
                onChange={handleChange}
                onClick={() => toggleField("existe_horario_mais_fome")}
              />
              <label htmlFor="fome_sim" className="form-check-label">
                Sim
              </label>
            </div>

            <div className="form-check d-flex align-items-center gap-2">
              <input
                type="radio"
                name="existe_horario_mais_fome"
                className="form-check-input"
                id="fome_nao"
                value="false"
                checked={formData.existe_horario_mais_fome === false}
                onChange={handleChange}
                onClick={() => toggleField("existe_horario_mais_fome")}
              />
              <label htmlFor="fome_nao" className="form-check-label">
                Não
              </label>
            </div>

            {formData.existe_horario_mais_fome === true && (
              <div className="d-flex align-items-center gap-2 ms-3">
                <label className="text-muted small mb-0">Qual horário:</label>

                <input
                  type="text"
                  className="form-control form-control-sm"
                  style={{ width: "250px" }}
                  name="horario_mais_fome"
                  value={formData.horario_mais_fome || ""}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
        </div>

        <div className="mb-3 d-flex flex-column align-items-start">
          <label className="form-label text-muted small d-block">
            Apetite:
          </label>

          <div className="d-flex flex-wrap gap-4 ">
            <div className="d-flex align-items-center gap-2">
              <input
                type="radio"
                name="apetite"
                className="form-check-input"
                id="apetite_normal"
                value="normal"
                checked={formData.apetite === "normal"}
                onChange={handleChange}
                onClick={() => toggleField("apetite")}
              />
              <label htmlFor="apetite_normal">Normal</label>
            </div>

            <div className=" d-flex align-items-center gap-2">
              <input
                type="radio"
                name="apetite"
                className="form-check-input"
                id="apetite_aumentado"
                value="aumentado"
                checked={formData.apetite === "aumentado"}
                onChange={handleChange}
                onClick={() => toggleField("apetite")}
              />
              <label htmlFor="apetite_aumentado">Aumentado</label>
            </div>

            <div className=" d-flex align-items-center gap-2">
              <input
                type="radio"
                name="apetite"
                className="form-check-input"
                id="apetite_diminuido"
                value="diminuido"
                checked={formData.apetite === "diminuido"}
                onChange={handleChange}
                onClick={() => toggleField("apetite")}
              />
              <label htmlFor="apetite_diminuido">Diminuído</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoriaAlimentar;
