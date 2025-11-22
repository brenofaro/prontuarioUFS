import React from 'react'

const TableSchedule = ({formData, setFormData}) => {
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
       <table className="table table-hover align-middle mb-4">

    <thead className="table-secondary">
      <tr>
        <th style={{ width: "30%" }} className="text-center text-muted small text-uppercase">Refeição/Horário</th>
        <th style={{ width: "35%" }} className="text-center text-muted small text-uppercase">Alimentos - Quantidade/medida caseira</th>
        <th style={{ width: "35%" }} className="text-center text-muted small text-uppercase">Substituições/Observações</th>
      </tr>
    </thead>

    <tbody>

      <tr>
        <td>
          <input 
            type="text"
            className="form-control" 
            name="refeicao_um" 
            value={formData.refeicao_um || ""}
            onChange={handleChange}
            />
        </td>

        <td className="text-center">
          <textarea 
            name="alimentos_um" 
            className="form-control"
            value={formData.alimentos_um || ""}
            onChange={handleChange}
            style={{height:"150px"}}
            >
          </textarea>
        </td>
        <td className="text-center">
         <textarea 
            name="substituicoes_um" 
            className="form-control"
            value={formData.substituicoes_um || ""}
            onChange={handleChange}
            style={{height:"150px"}}
            >
          </textarea>
        </td>
      </tr>

      <tr>
         <td>
          <input 
            type="text"
            className="form-control" 
            name="refeicao_dois" 
            value={formData.refeicao_dois || ""}
            onChange={handleChange}
            />
        </td>
        <td className="text-center">
          <textarea 
            name="alimentos_dois" 
            className="form-control"
            value={formData.alimentos_dois || ""}
            onChange={handleChange}
            style={{height:"150px"}}
            >
          </textarea>
         
        </td>
        <td className="text-center">
          <textarea 
            name="substituicoes_dois" 
            className="form-control"
            value={formData.substituicoes_dois || ""}
            onChange={handleChange}
            style={{height:"150px"}}
            >

            </textarea>
        </td>
      </tr>

      <tr>
         <td>
          <input 
            type="text"
            className="form-control" 
            name="refeicao_tres" 
            value={formData.refeicao_tres || ""}
            onChange={handleChange}
            />
        </td>
        <td className="text-center">
          <textarea 
            name="alimentos_tres" 
            value={formData.alimentos_tres || ""}
            onChange={handleChange}
            className="form-control"
            style={{height:"150px"}}
            >

            </textarea>
        </td>
        <td className="text-center">
          <textarea 
            name="substituicoes_tres" 
            className="form-control"
            value={formData.substituicoes_tres || ""}
            onChange={handleChange}
            style={{height:"150px"}}
            >

            </textarea>
        </td>
      </tr>

      <tr>
         <td>
          <input 
            type="text"
            className="form-control" 
            name="refeicao_quatro" 
            value={formData.refeicao_quatro || ""}
            onChange={handleChange}
          />
        </td>
        <td className="text-center">
          <textarea 
            name="alimentos_quatro" 
            value={formData.alimentos_quatro || ""}
            onChange={handleChange}
            className="form-control"
            style={{height:"150px"}}
            >

            </textarea>
        </td>
        <td className="text-center">
          <textarea 
            name="substituicoes_quatro"
            value={formData.substituicoes_quatro || ""}
            onChange={handleChange}
            className="form-control"
            style={{height:"150px"}}
            >

            </textarea>
        </td>
      </tr>

      <tr>
         <td>
          <input 
            type="text"
            className="form-control" 
            name="refeicao_cinco"
            value={formData.refeicao_cinco || ""}
            onChange={handleChange}
            />
        </td>
        <td className="text-center">
          <textarea 
            name="alimentos_cinco" 
            value={formData.alimentos_cinco || ""}
            onChange={handleChange}
            className="form-control"
            style={{height:"150px"}}
            >

            </textarea>
        </td>
        <td className="text-center">
          <textarea 
            name="substituicoes_cinco" 
            value={formData.substituicoes_cinco || ""}
            onChange={handleChange}
            className="form-control"
            style={{height:"150px"}}
            >

            </textarea>
        </td>
      </tr>

      <tr>
         <td>
          <input 
            type="text"
            className="form-control" 
            name="refeicao_seis" 
            value={formData.refeicao_seis || ""}
            onChange={handleChange}
          />
        </td>
        <td className="text-center">
          <textarea 
            name="alimentos_seis" 
            value={formData.alimentos_seis || ""}
            onChange={handleChange}
            className="form-control"
            style={{height:"150px"}}
            >

            </textarea>
        </td>
        <td className="text-center">
          <textarea 
            name="substituicoes_seis" 
            value={formData.substituicoes_seis || ""}
            onChange={handleChange}
            className="form-control"
            style={{height:"150px"}}
            >

            </textarea>
        </td>
      </tr>

      

    </tbody>
  </table>

  <div className=" mb-3">
    <label htmlFor="diagnostico_antropometrico" className="form-label text-muted small">
          Orientações/Observações:
        </label>
    <textarea
      className="form-control"
      placeholder=""
      id="observacoes_plano_alimentar"
      name="observacoes_plano_alimentar"
      style={{ height: "150px" }}
      value={formData.observacoes_plano_alimentar || ""}
      onChange={handleChange}
    ></textarea>

   
  </div>
    </div>
  )
}

export default TableSchedule
