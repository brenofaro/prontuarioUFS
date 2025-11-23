const ExameBioquimico = ({ formData, setFormData }) => {
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
    <div className="mb-3 p-4 border rounded-3 bg-white ">
      <div className="d-flex flex-column mb-3" style={{ maxWidth: "250px" }}>
        <label className="form-label text-muted small" htmlFor="data_eb">
          Data:
        </label>
        <input
          type="date"
          id="data_eb"
          name="data_eb"
          className="form-control text-muted"
          value={formData.data_eb || ""}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <div className="row g-3">
          <div className="col-md-3">
            <label className="form-label text-muted small">Vitamina A:</label>
            <input
              type="text"
              name="vitamina_a"
              className="form-control"
              value={formData.vitamina_a || ""}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">Vitamina B12:</label>
            <input
              type="text"
              name="vitamina_bdoze"
              className="form-control"
              value={formData.vitamina_bdoze || ""}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">
              Fosfatase ácida prostática:
            </label>
            <input
              type="text"
              name="fosfatase_prostatica"
              className="form-control"
              value={formData.fosfatase_prostatica || ""}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">Vitamina D:</label>
            <div className="input-group">
              <input
                type="text"
                name="vitamina_d"
                className="form-control"
                value={formData.vitamina_d || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExameBioquimico;
