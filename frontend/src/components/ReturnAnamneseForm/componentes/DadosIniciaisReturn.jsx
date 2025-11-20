import React from 'react'

const DadosIniciaisReturn = ({formData, setFormData}) => {
    return (
    <div className="p-4 rounded-3 bg-white border">

      <div className="row g-3">
        {/* Data da consulta */}
        <div className="col-md-4">
          <label htmlFor="data_consulta" className="form-label text-muted small">
            Data da Consulta *
          </label>
          <input
            type="date"
            className="form-control"
            id="data_consulta"
            value={formData.data_consulta}
            onChange={(e) =>
              setFormData({
                ...formData,
                data_consulta: e.target.value,
              })
            }
            required
          />
        </div>

        {/* Número do prontuário */}
        <div className="col-md-4">
          <label htmlFor="numero_prontuario" className="form-label text-muted small">
            Número do Prontuário 
          </label>
          <input
            type="text"
            className="form-control"
            id="numero_prontuario"
            value={formData.numero_prontuario}
            onChange={(e) =>
              setFormData({
                ...formData,
                numero_prontuario: e.target.value,
              })
            }
            
          />
        </div>


      </div>
    </div>
  );
}

export default DadosIniciaisReturn
