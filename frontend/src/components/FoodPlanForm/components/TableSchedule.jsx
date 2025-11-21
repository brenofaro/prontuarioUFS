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
       {/* <td className="text-center">
          <textarea 
            name="" 
            className="form-control"

            id=""
            style={{height:"150px"}}
            >

            </textarea>
        </td> */}
        <td>
          <input 
            type="text"
            className="form-control" name="" id="" />
        </td>

        <td className="text-center">
          <textarea 
            name="" 
            className="form-control"

            id=""
            style={{height:"150px"}}
            >

            </textarea>
        </td>
        <td className="text-center">
         <textarea 
            name="" 
            className="form-control"
            id=""
            style={{height:"150px"}}
            >

            </textarea>
        </td>
      </tr>

      <tr>
         <td>
          <input 
            type="text"
            className="form-control" name="" id="" />
        </td>
        <td className="text-center">
          <textarea 
            name="" 
                  className="form-control"

            id=""
            style={{height:"150px"}}
            >

            </textarea>
         
        </td>
        <td className="text-center">
          <textarea 
            name="" 
                  className="form-control"

            id=""
            style={{height:"150px"}}
            >

            </textarea>
        </td>
      </tr>

      <tr>
         <td>
          <input 
            type="text"
            className="form-control" name="" id="" />
        </td>
        <td className="text-center">
          <textarea 
            name="" 
            id=""
                  className="form-control"

            style={{height:"150px"}}
            >

            </textarea>
        </td>
        <td className="text-center">
          <textarea 
            name="" 
                  className="form-control"

            id=""
            style={{height:"150px"}}
            >

            </textarea>
        </td>
      </tr>

      <tr>
         <td>
          <input 
            type="text"
            className="form-control" name="" id="" />
        </td>
        <td className="text-center">
          <textarea 
            name="" 
            id=""
                  className="form-control"

            style={{height:"150px"}}
            >

            </textarea>
        </td>
        <td className="text-center">
          <textarea 
            name="" 
            id=""
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
            className="form-control" name="" id="" />
        </td>
        <td className="text-center">
          <textarea 
            name="" 
                  className="form-control"

            id=""
            style={{height:"150px"}}
            >

            </textarea>
        </td>
        <td className="text-center">
          <textarea 
            name="" 
                  className="form-control"

            id=""
            style={{height:"150px"}}
            >

            </textarea>
        </td>
      </tr>

      <tr>
         <td>
          <input 
            type="text"
            className="form-control" name="" id="" />
        </td>
        <td className="text-center">
          <textarea 
            name="" 
                  className="form-control"

            id=""
            style={{height:"150px"}}
            >

            </textarea>
        </td>
        <td className="text-center">
          <textarea 
            name="" 
                  className="form-control"

            id=""
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
