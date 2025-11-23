const DiagnosticoConclusivoChild = ({ formData, setFormData }) => {
  return (
    <div className="mb-4 p-3 border rounded bg-white shadow-sm">
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Descreva o diagnóstico final..."
          id="diagnostico_conclusivo"
          name="diagnostico_conclusivo"
          style={{ height: "150px" }}
          value={formData.diagnostico_conclusivo || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              diagnostico_conclusivo: e.target.value,
            })
          }
        ></textarea>

        <label htmlFor="diagnostico_conclusivo">
          Diagnóstico nutricional conclusivo
        </label>
      </div>
    </div>
  );
};

export default DiagnosticoConclusivoChild;
