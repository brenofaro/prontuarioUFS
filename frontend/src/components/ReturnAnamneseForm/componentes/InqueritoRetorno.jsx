const InqueritoRetorno = ({ formData, setFormData }) => {
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
    <div className="mb-3 p-4 border rounded-3 bg-white ">
      <div className="mb-4">
        <label
          htmlFor="diagnostico_antropometrico"
          className="form-label text-muted small"
        >
          Quais foram as maiores dificuldades na realização do plano anterior?
        </label>
        <textarea
          className="form-control"
          placeholder=""
          name="dificuldades_plano_anterior"
          style={{ height: "70px" }}
          value={formData.dificuldades_plano_anterior || ""}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          htmlFor="diagnostico_antropometrico"
          className="form-label text-muted small"
        >
          O que você sentiu falta ou queria modificar na sua dieta?
        </label>
        <textarea
          className="form-control"
          placeholder=""
          name="falta_dieta"
          style={{ height: "70px" }}
          value={formData.falta_dieta || ""}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          htmlFor="diagnostico_antropometrico"
          className="form-label text-muted small"
        >
          Como está a sua rotina de exercícios? (horários, modalidade,
          frequência, intensidade)?
        </label>
        <textarea
          className="form-control"
          placeholder=""
          name="rotina_exercicios"
          style={{ height: "70px" }}
          value={formData.rotina_exercicios || ""}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          htmlFor="diagnostico_antropometrico"
          className="form-label text-muted small"
        >
          Tem alguma alteração/modificação em relação a exames/problemas de
          saúde/medicamentos apresentados na última consulta?
        </label>
        <textarea
          className="form-control"
          placeholder=""
          name="modificacao_exames"
          style={{ height: "70px" }}
          value={formData.modificacao_exames || ""}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          htmlFor="diagnostico_antropometrico"
          className="form-label text-muted small"
        >
          Como foi a alimentação nos fins de semana?
        </label>
        <textarea
          className="form-control"
          placeholder=""
          name="alimentacao_fds"
          style={{ height: "70px" }}
          value={formData.alimentacao_fds || ""}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          htmlFor="diagnostico_antropometrico"
          className="form-label text-muted small"
        >
          Como está em relação ao nível de estresse/ansiedade?
        </label>
        <textarea
          className="form-control"
          placeholder=""
          name="nivel_estresse"
          style={{ height: "70px" }}
          value={formData.nivel_estresse || ""}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          htmlFor="diagnostico_antropometrico"
          className="form-label text-muted small"
        >
          O que melhorou com as mudanças alimentares realizadas no último plano
          alimentar? (peso, medidas, intestino, disposição.. O que achar
          importante).
        </label>
        <textarea
          className="form-control"
          placeholder=""
          name="melhorou_mudancas"
          style={{ height: "70px" }}
          value={formData.melhorou_mudancas || ""}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          htmlFor="diagnostico_antropometrico"
          className="form-label text-muted small"
        >
          O que você acha que ainda precisa melhorar em suas atitudes e
          comportamentos alimentares?
        </label>
        <textarea
          className="form-control"
          placeholder=""
          name="precisa_melhorar"
          style={{ height: "70px" }}
          value={formData.precisa_melhorar || ""}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          htmlFor="diagnostico_antropometrico"
          className="form-label text-muted small"
        >
          Em relação aos resultados do último plano alimentar, como você se
          sente:
        </label>
        <textarea
          className="form-control"
          placeholder=""
          name="como_se_sente"
          style={{ height: "70px" }}
          value={formData.como_se_sente || ""}
          onChange={handleChange}
        ></textarea>
      </div>

      <label className="form-label text-muted small mb-2 d-block">
        Qual sua satisfação?
      </label>

      <div className="d-flex flex-wrap gap-3 mb-4">
        <div className="form-check d-flex align-items-center gap-1">
          <input
            className="form-check-input"
            type="radio"
            name="satisfacao_plano"
            id="insatisfeito"
            value="insatisfeito"
            checked={formData.satisfacao_plano === "insatisfeito"}
            onChange={handleChange}
            onClick={() => toggleBooleanField("satisfacao_plano", "insatisfeito")}
          />
          <label className="form-check-label ms-1" htmlFor="insatisfeito">
            Insatisfeito(a))
          </label>
        </div>

        <div className="form-check d-flex align-items-center gap-1">
          <input
            className="form-check-input"
            type="radio"
            name="satisfacao_plano"
            id="pouco_satisfeito"
            value="pouco_satisfeito"
            checked={formData.satisfacao_plano === "pouco_satisfeito"}
            onChange={handleChange}
            onClick={() => toggleBooleanField("satisfacao_plano", "pouco_satisfeito")}
          />
          <label className="form-check-label ms-1" htmlFor="pouco_satisfeito">
            Pouco satisfeito(a)
          </label>
        </div>

        <div className="form-check d-flex align-items-center gap-1">
          <input
            className="form-check-input"
            type="radio"
            name="satisfacao_plano"
            id="satisfeito"
            value="satisfeito"
            checked={formData.satisfacao_plano === "satisfeito"}
            onChange={handleChange}
            onClick={() => toggleBooleanField("satisfacao_plano", "satisfeito")}
          />
          <label className="form-check-label ms-1" htmlFor="satisfeito">
            Satisfeito(a)
          </label>
        </div>

        <div className="form-check d-flex align-items-center gap-1">
          <input
            className="form-check-input"
            type="radio"
            name="satisfacao_plano"
            id="muito_satisfeito"
            value="muito_satisfeito"
            checked={formData.satisfacao_plano === "muito_satisfeito"}
            onChange={handleChange}
            onClick={() => toggleBooleanField("satisfacao_plano", "muito_satisfeito")}
          />
          <label className="form-check-label ms-1" htmlFor="muito_satisfeito">
            Muito satisfeito(a)
          </label>
        </div>
      </div>
    </div>
  );
};

export default InqueritoRetorno;
