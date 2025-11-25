const ConsumoMensal = ({formData, setFormData}) => {
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
    <div>
      <div className="mb-3 p-4 border rounded-3 bg-white ">
        <div className="d-flex justify-content-start align-items-center gap-4">
            <div className="d-flex align-items-center gap-2">
            <label className="form-label text-muted small">Quantidade de pessoas:</label>
            <input
                type="text"
                name="quantidade_pessoas"
                className="form-control form-control-sm"
                style={{ width: "150px" }}
                placeholder=""
                value={formData.quantidade_pessoas || ""}
                onChange={handleChange}
            />
            </div>

            <div className="d-flex align-items-center gap-2">
            <label className="form-label text-muted small">Açucar:</label>
            <input
                type="text"
                name="acucar"
                className="form-control form-control-sm"
                placeholder=""
                style={{ width: "150px" }}
                value={formData.acucar || ""}
                onChange={handleChange}
            />
            </div>

            <div className="d-flex align-items-center gap-2">
            <label className="form-label text-muted small">Óleo:</label>
            <input
                type="text"
                name="oleo"
                className="form-control form-control-sm"
                placeholder=""
                style={{ width: "150px" }}
                value={formData.oleo || ""}
                onChange={handleChange}
            />
            </div>
            </div>

            <div className="d-flex justify-content-start align-items-center gap-4 mt-3">
            <div className="d-flex align-items-center gap-2">
            <label className="form-label text-muted small">Margarina:</label>
            <input
                type="text"
                name="margarina"
                style={{ width: "150px" }}
                className="form-control form-control-sm"
                placeholder=""
                value={formData.margarina || ""}
                onChange={handleChange}
            />
            </div>

            <div className="d-flex align-items-center gap-2">
            <label className="form-label text-muted small">Sal:</label>
            <input
                type="text"
                name="sal"
                className="form-control form-control-sm"
                style={{ width: "150px" }}
                placeholder=""
                value={formData.sal || ""}
                onChange={handleChange}
            />
            </div>

            <div className="d-flex align-items-center gap-2">
            <label className="form-label text-muted small">Temperos prontos:</label>
            <input
                type="text"
                name="temperos_prontos"
                className="form-control form-control-sm"
                style={{ width: "150px" }}
                placeholder=""
                value={formData.temperos_prontos || ""}
                onChange={handleChange}
            />
            </div>
        </div>
        </div>
    </div>
  )
}

export default ConsumoMensal
