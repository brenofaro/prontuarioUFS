const ExameFisico = ({ formData, setFormData }) => {
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
      <div className="d-flex flex-wrap gap-4">
        <div className="d-flex flex-column">
          <label className="form-label text-muted small">Cabelo:</label>
          <input
            type="text"
            name="cabelo"
            className="form-control"
            style={{ width: "300px" }}
            placeholder=""
            value={formData.cabelo || ""}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex flex-column">
          <label className="form-label text-muted small">Mucosas:</label>
          <input
            type="text"
            name="mucosas"
            className="form-control"
            placeholder=""
            style={{ width: "300px" }}
            value={formData.mucosas || ""}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex flex-column">
          <label className="form-label text-muted small">Dentição:</label>
          <input
            type="text"
            name="denticao"
            className="form-control"
            placeholder=""
            style={{ width: "300px" }}
            value={formData.denticao || ""}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="d-flex flex-wrap gap-4 mt-3">
        <div className="d-flex flex-column">
          <label className="form-label text-muted small">Lábios:</label>
          <input
            type="text"
            name="labios"
            style={{ width: "300px" }}
            className="form-control"
            placeholder=""
            value={formData.labios || ""}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex flex-column">
          <label className="form-label text-muted small">Língua:</label>
          <input
            type="text"
            name="lingua"
            className="form-control"
            style={{ width: "300px" }}
            placeholder=""
            value={formData.lingua || ""}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex flex-column">
          <label className="form-label text-muted small">Gengiva:</label>
          <input
            type="text"
            name="gengiva"
            className="form-control"
            style={{ width: "300px" }}
            placeholder=""
            value={formData.gengiva || ""}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex flex-column">
          <label className="form-label text-muted small">Pele:</label>
          <input
            type="text"
            name="pele"
            className="form-control"
            style={{ width: "300px" }}
            placeholder=""
            value={formData.pele || ""}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex flex-column">
          <label className="form-label text-muted small">Unhas:</label>
          <input
            type="text"
            name="unhas"
            className="form-control"
            style={{ width: "300px" }}
            placeholder=""
            value={formData.unhas || ""}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex flex-column">
          <label className="form-label text-muted small">Abdômen:</label>
          <input
            type="text"
            name="abdomen"
            className="form-control"
            style={{ width: "300px" }}
            placeholder=""
            value={formData.abdomen || ""}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex flex-column">
          <label className="form-label text-muted small">Edema:</label>
          <input
            type="text"
            name="edema"
            className="form-control"
            style={{ width: "300px" }}
            placeholder=""
            value={formData.edema || ""}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ExameFisico;
