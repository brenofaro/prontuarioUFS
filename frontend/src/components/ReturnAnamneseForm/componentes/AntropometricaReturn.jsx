import React from 'react'
import { useEffect } from 'react';


const AntropometricaReturn = ({formData, setFormData}) => {
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
    <div className="mb-4 p-4 border rounded bg-white shadow-sm">

      {/* SEÇÃO 1: Peso e Altura */}
      <div className="mb-4">
        {/* <h6 className="text-secondary mb-3">Peso e Altura</h6> */}
        <div className="row g-3">
          <div className="col-md-3">
            <label className="form-label text-muted small">
              Peso (kg): 
            </label>
            <input 
              type="text"
              name="peso"
              className="form-control"
              value={formData.peso || ''}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">Altura (m):</label>
            <input 
              type="text"
              name="altura"
              className="form-control"
              value={formData.altura || ''}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">
              IMC/I:
            </label>
            <input 
              type="text"
              name="imc_i"
              className="form-control"
              value={formData.imc_i || ''}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">E/I:</label>
            <div className="input-group">
              <input 
                type="text"
                name="e_i"
                className="form-control"
                value={formData.e_i || ''}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">Circunferência da cabeça (cm):</label>
            <input 
              type="text"
              name="circunferencia_cabeca"
              className="form-control"
              value={formData.circunferencia_cabeca || ''}
              onChange={handleChange}
            />
            {/* <small className="text-info">Calculada por AJ ou manual</small> */}
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">Circunferência da coxa (cm):</label>
            <input 
              type="text"
              name="circunferencia_coxa"
              className="form-control"
              value={formData.circunferencia_coxa || ''}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">Prega cutânea triciptal (mm):</label>
            <input 
              type="text"
              name="pct"
              className="form-control"
              value={formData.pct || ''}
              onChange={handleChange}
            />
            {/* <small className="text-info">Calculada por AJ ou manual</small> */}
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">Circunferência do braço (cm):</label>
            <input 
              type="text"
              name="circunferencia_braco"
              className="form-control"
              value={formData.circunferencia_braco || ''}
              onChange={handleChange}
            />
            {/* <small className="text-info">Calculada por AJ ou manual</small> */}
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">IMC:</label>
            <input 
              type="text"
              name="imc"
              className="form-control"
              value={formData.imc || ''}
              onChange={handleChange}
            />
            {/* <small className="text-info">Calculada por AJ ou manual</small> */}
          </div>

            <div className="d-flex flex-wrap gap-3 mt-4">

              <div className="form-check d-flex align-items-center gap-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="grau_imc"
                  id="desnutricao_grau_i"
                  value="desnutricao_grau_i"
                  checked={formData.grau_imc === "desnutricao_grau_i"}
                  onChange={handleChange}
                  onClick={() => toggleField("grau_imc")}
                />
                <label className="form-check-label text-muted small " htmlFor="desnutricao_grau_i">Desnutrição Grau 1</label>
              </div>

              <div className="form-check d-flex align-items-center gap-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="grau_imc"
                  id="desnutricao_grau_ii"
                  value="desnutricao_grau_ii"
                  checked={formData.grau_imc === "desnutricao_grau_ii"}
                  onChange={handleChange}
                  onClick={() => toggleField("grau_imc")}
                />
                <label className="form-check-label text-muted small" htmlFor="desnutricao_grau_ii">Desnutrição Grau 2</label>
              </div>

              <div className="form-check d-flex align-items-center gap-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="grau_imc"
                  id="desnutricao_grau_iii"
                  value="desnutricao_grau_iii"
                  checked={formData.grau_imc === "desnutricao_grau_iii"}
                  onChange={handleChange}
                  onClick={() => toggleField("grau_imc")}
                />
                <label className="form-check-label text-muted small" htmlFor="desnutricao_grau_iii">Desnutrição Grau 3</label>
              </div>

              {/* Anúria */}
              <div className="form-check d-flex align-items-center gap-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="grau_imc"
                  id="eutrofia"
                  value="eutrofia"
                  checked={formData.grau_imc === "eutrofia"}
                  onChange={handleChange}
                  onClick={() => toggleField("grau_imc")}
                />
                <label className="form-check-label text-muted small" htmlFor="eutrofia">Eutrofia</label>
              </div>

              {/* Poliúria */}
              <div className="form-check d-flex align-items-center gap-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="grau_imc"
                  id="sobrepeso"
                  value="sobrepeso"
                  checked={formData.grau_imc === "sobrepeso"}
                  onChange={handleChange}
                  onClick={() => toggleField("grau_imc")}
                />
                <label className="form-check-label text-muted small " htmlFor="sobrepeso">Sobrepeso</label>
              </div>

              {/* Normal */}
              <div className="form-check d-flex align-items-center gap-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="grau_imc"
                  id="obesidade_grau_i"
                  value="obesidade_grau_i"
                  checked={formData.grau_imc === "obesidade_grau_i"}
                  onChange={handleChange}
                  onClick={() => toggleField("grau_imc")}
                />
                <label className="form-check-label text-muted small" htmlFor="obesidade_grau_i">Obesidade Grau 1</label>
              </div>

               <div className="form-check d-flex align-items-center gap-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="grau_imc"
                  id="obesidade_grau_ii"
                  value="obesidade_grau_ii"
                  checked={formData.grau_imc === "obesidade_grau_ii"}
                  onChange={handleChange}
                  onClick={() => toggleField("grau_imc")}
                />
                <label className="form-check-label text-muted small " htmlFor="obesidade_grau_ii">Obesidade Grau 2</label>
              </div>

               <div className="form-check d-flex align-items-center gap-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="grau_imc"
                  id="obesidade_grau_iii"
                  value="obesidade_grau_iii"
                  checked={formData.grau_imc === "obesidade_grau_iii"}
                  onChange={handleChange}
                  onClick={() => toggleField("grau_imc")}
                />
                <label className="form-check-label text-muted small" htmlFor="obesidade_grau_iii">Obesidade Grau 3</label>
              </div>

              

              

            </div>  
        </div>
      </div>

    </div>
  );
};


export default AntropometricaReturn
