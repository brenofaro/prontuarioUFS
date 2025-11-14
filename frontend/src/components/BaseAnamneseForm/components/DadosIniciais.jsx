import React from "react";

const DadosIniciais = ({ formData, setFormData }) => {
  return (
    <div className="p-3 rounded shadow-sm bg-white border">

      <h5 className="mb-3 text-primary fw-bold">Dados Iniciais</h5>

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
            placeholder="Ex: 2025-00123"
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
