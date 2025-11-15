import React, { useState } from 'react';

const TabelaPatologica = ({ formData, setFormData }) => {
  const [filtro, setFiltro] = useState('');

  const patologias = [
    { id: 'diabetes', label: 'Diabetes', icon: '🩸', categoria: 'Metabólica' },
    { id: 'hipertencao', label: 'Hipertensão', icon: '❤️', categoria: 'Cardiovascular' },
    { id: 'doenca_cardiovascular', label: 'Doença Cardiovascular', icon: '💔', categoria: 'Cardiovascular' },
    { id: 'dislipidemia', label: 'Dislipidemia', icon: '🧬', categoria: 'Metabólica' },
    { id: 'cancer', label: 'Câncer', icon: '🎗️', categoria: 'Oncológica' },
    { id: 'osteoporose', label: 'Osteoporose', icon: '🦴', categoria: 'Óssea' },
    { id: 'depressao', label: 'Depressão / Ansiedade', icon: '🧠', categoria: 'Psiquiátrica' },
    { id: 'sop', label: 'Síndrome dos Ovários Policísticos', icon: '🔬', categoria: 'Endócrina' },
  ];

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleMarcarTodos = (coluna) => {
    const updates = {};
    patologias.forEach(p => {
      updates[`${p.id}_${coluna}`] = true;
    });
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const handleDesmarcarTodos = (coluna) => {
    const updates = {};
    patologias.forEach(p => {
      updates[`${p.id}_${coluna}`] = false;
    });
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const patologiasFiltradas = patologias.filter(p => 
    p.label.toLowerCase().includes(filtro.toLowerCase()) ||
    p.categoria.toLowerCase().includes(filtro.toLowerCase())
  );

  const contarMarcados = (coluna) => {
    return patologias.filter(p => formData[`${p.id}_${coluna}`]).length;
  };

  return (
    <div className="mb-4 p-4 border rounded bg-white shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="text-primary fw-bold mb-0">🏥 História Clínica</h5>
        <input
          type="text"
          className="form-control w-25"
          placeholder="🔍 Filtrar patologia..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-primary">
            <tr>
              <th style={{ width: "50%" }}>
                <div className="d-flex align-items-center">
                  <span className="me-2">Patologia</span>
                  <span className="badge bg-secondary">{patologiasFiltradas.length}</span>
                </div>
              </th>
              <th className="text-center" style={{ width: "25%" }}>
                <div>
                  <div className="fw-bold mb-1">HMA</div>
                  <small className="text-muted d-block">História Mórbida Atual</small>
                  <div className="btn-group btn-group-sm mt-1">
                    <button 
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleMarcarTodos('hma')}
                      title="Marcar todos"
                    >
                      ✓ Todos
                    </button>
                    <button 
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleDesmarcarTodos('hma')}
                      title="Desmarcar todos"
                    >
                      ✕ Limpar
                    </button>
                  </div>
                  <div className="mt-1">
                    <span className="badge bg-info">{contarMarcados('hma')} marcados</span>
                  </div>
                </div>
              </th>
              <th className="text-center" style={{ width: "25%" }}>
                <div>
                  <div className="fw-bold mb-1">HF</div>
                  <small className="text-muted d-block">História Familiar</small>
                  <div className="btn-group btn-group-sm mt-1">
                    <button 
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleMarcarTodos('hf')}
                      title="Marcar todos"
                    >
                      ✓ Todos
                    </button>
                    <button 
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleDesmarcarTodos('hf')}
                      title="Desmarcar todos"
                    >
                      ✕ Limpar
                    </button>
                  </div>
                  <div className="mt-1">
                    <span className="badge bg-info">{contarMarcados('hf')} marcados</span>
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {patologiasFiltradas.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center text-muted py-4">
                  Nenhuma patologia encontrada com "{filtro}"
                </td>
              </tr>
            ) : (
              patologiasFiltradas.map((patologia) => {
                const hmaChecked = formData[`${patologia.id}_hma`];
                const hfChecked = formData[`${patologia.id}_hf`];
                const temMarcacao = hmaChecked || hfChecked;

                return (
                  <tr key={patologia.id} className={temMarcacao ? 'table-active' : ''}>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="me-2" style={{ fontSize: '1.3rem' }}>
                          {patologia.icon}
                        </span>
                        <div>
                          <div className="fw-semibold">{patologia.label}</div>
                          <small className="text-muted">{patologia.categoria}</small>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="form-check form-check-inline d-inline-block">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id={`${patologia.id}_hma`}
                          name={`${patologia.id}_hma`}
                          checked={hmaChecked || false}
                          onChange={handleChange}
                          style={{ 
                            width: '1.3rem', 
                            height: '1.3rem',
                            cursor: 'pointer'
                          }}
                        />
                        <label 
                          className="form-check-label visually-hidden"
                          htmlFor={`${patologia.id}_hma`}
                        >
                          HMA
                        </label>
                      </div>
                      {hmaChecked && (
                        <div className="mt-1">
                          <span className="badge bg-success">✓</span>
                        </div>
                      )}
                    </td>
                    <td className="text-center">
                      <div className="form-check form-check-inline d-inline-block">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id={`${patologia.id}_hf`}
                          name={`${patologia.id}_hf`}
                          checked={hfChecked || false}
                          onChange={handleChange}
                          style={{ 
                            width: '1.3rem', 
                            height: '1.3rem',
                            cursor: 'pointer'
                          }}
                        />
                        <label 
                          className="form-check-label visually-hidden"
                          htmlFor={`${patologia.id}_hf`}
                        >
                          HF
                        </label>
                      </div>
                      {hfChecked && (
                        <div className="mt-1">
                          <span className="badge bg-success">✓</span>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Resumo Visual */}
      <div className="mt-3 p-3 bg-light rounded">
        <div className="row text-center">
          <div className="col-md-6">
            <h6 className="text-primary">📋 História Mórbida Atual (HMA)</h6>
            <div className="d-flex flex-wrap gap-2 justify-content-center mt-2">
              {patologias
                .filter(p => formData[`${p.id}_hma`])
                .map(p => (
                  <span key={p.id} className="badge bg-primary">
                    {p.icon} {p.label}
                  </span>
                ))}
              {contarMarcados('hma') === 0 && (
                <span className="text-muted">Nenhuma patologia atual</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <h6 className="text-info">👨‍👩‍👧‍👦 História Familiar (HF)</h6>
            <div className="d-flex flex-wrap gap-2 justify-content-center mt-2">
              {patologias
                .filter(p => formData[`${p.id}_hf`])
                .map(p => (
                  <span key={p.id} className="badge bg-info">
                    {p.icon} {p.label}
                  </span>
                ))}
              {contarMarcados('hf') === 0 && (
                <span className="text-muted">Nenhum histórico familiar</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Legenda */}
      <div className="mt-3 p-2 border-start border-primary border-3 bg-light">
        <small className="text-muted">
          <strong>HMA:</strong> Patologias que o paciente possui atualmente | 
          <strong className="ms-2">HF:</strong> Patologias presentes em familiares diretos
        </small>
      </div>
    </div>
  );
};

export default TabelaPatologica;