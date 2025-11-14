import React from "react";

const DadosIniciais = ({ formData, setFormData }) => {
  return (
    <div className="p-3 rounded shadow-sm bg-white border">



      <div className="row">

        {/* Data da consulta */}
        <div className="col-md-4 mb-3">
          <label className="form-label">Data da Consulta *</label>
          <input
            type="date"
            className="form-control"
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
        <div className="col-md-4 mb-3">
          <label className="form-label">Número do Prontuário *</label>
          <input
            type="text"
            className="form-control"
            value={formData.numero_prontuario}
            onChange={(e) =>
              setFormData({
                ...formData,
                numero_prontuario: e.target.value,
              })
            }
            required
          />
        </div>

        {/* Nutricionista */}
        <div className="col-md-4 mb-3">
          <label className="form-label">Nutricionista Responsável *</label>
          <input
            type="text"
            className="form-control"
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

export default DadosIniciais;
