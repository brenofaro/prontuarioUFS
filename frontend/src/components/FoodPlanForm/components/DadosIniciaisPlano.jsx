import React from 'react'

const DadosIniciaisPlano = ({ formData, setFormData }) => {
return (
    <div className="p-4 rounded-3 bg-white border">

      <div className="row g-3">
        {/* Data da consulta */}
        <div className="col-md-4">
          <label htmlFor="data_consulta" className="form-label text-muted small">
            Data *
          </label>
          <input
            type="date"
            className="form-control"
            id="data_consulta"
            value={formData.data_plano_alimentar}
            onChange={(e) =>
              setFormData({
                ...formData,
                data_consulta: e.target.value,
              })
            }
            required
          />
        </div>

        {/* Nutricionista */}
        <div className="col-md-4">
          <label htmlFor="nutricionista_responsavel" className="form-label text-muted small">
            Nutricionista Responsável *
          </label>
          <input
            type="text"
            className="form-control"
            id="nutricionista_responsavel"
            placeholder="Nome completo"
            value={formData.nutricionista_responsavel}
            onChange={(e) =>
              setFormData({
                ...formData,
                nutricionista_responsavel: e.target.value,
              })
            }
            required
          />
        </div>
      </div>
    </div>
  );
};

export default DadosIniciaisPlano
