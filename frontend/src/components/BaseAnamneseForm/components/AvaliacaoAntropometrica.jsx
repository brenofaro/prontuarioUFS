import React, { useEffect } from 'react';

const AvaliacaoAntropometrica = ({ formData, setFormData }) => {
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

  // 🔥 Cálculo automático do IMC
  useEffect(() => {
    const { peso_atual, altura_real, altura_estimada } = formData;
    const altura = altura_real || altura_estimada;
    
    if (peso_atual && altura && altura > 0) {
      const imcCalculado = (peso_atual / (altura * altura)).toFixed(1);
      if (formData.imc !== parseFloat(imcCalculado)) {
        setFormData(prev => ({
          ...prev,
          imc: parseFloat(imcCalculado)
        }));
      }
    }
  }, [formData.peso_atual, formData.altura_real, formData.altura_estimada]);

  // 🔥 Classificação do IMC
  const getClassificacaoIMC = (imc) => {
    if (!imc) return { texto: '', cor: '' };
    if (imc < 18.5) return { texto: 'Baixo peso', cor: 'text-info' };
    if (imc < 25) return { texto: 'Peso normal', cor: 'text-success' };
    if (imc < 30) return { texto: 'Sobrepeso', cor: 'text-warning' };
    if (imc < 35) return { texto: 'Obesidade grau I', cor: 'text-danger' };
    if (imc < 40) return { texto: 'Obesidade grau II', cor: 'text-danger' };
    return { texto: 'Obesidade grau III', cor: 'text-danger' };
  };

  // 🔥 Cálculo da altura pela fórmula de Chumlea (AJ)
  const calcularAlturaPorAJ = () => {
    const { aj } = formData;
    if (!aj) return;
    
    // Fórmula simplificada (ajustar conforme protocolo usado)
    const alturaEstimada = (aj * 1.73).toFixed(2);
    setFormData(prev => ({
      ...prev,
      altura_estimada: parseFloat(alturaEstimada)
    }));
  };

  const classificacaoIMC = getClassificacaoIMC(formData.imc);

  return (
    <div className="mb-4 p-4 border rounded bg-white shadow-sm">

      {/* SEÇÃO 1: Peso e Altura */}
      <div className="mb-4">
        {/* <h6 className="text-secondary mb-3">Peso e Altura</h6> */}
        <div className="row g-3">
          <div className="col-md-3">
            <label className="form-label text-muted small">
              Peso atual (kg) <span className="text-danger">*</span>
            </label>
            <input 
              type="number"
              name="peso_atual"
              className="form-control"
              placeholder="Ex: 72.5"
              step="0.1"
              min="0"
              value={formData.peso_atual || ''}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">Peso usual (kg)</label>
            <input 
              type="number"
              name="peso_usual"
              className="form-control"
              placeholder="Ex: 70.0"
              step="0.1"
              min="0"
              value={formData.peso_usual || ''}
              onChange={handleChange}
            />
            {formData.peso_atual && formData.peso_usual && (
              <small className="text-muted">
                Variação: {((formData.peso_atual - formData.peso_usual) / formData.peso_usual * 100).toFixed(1)}%
              </small>
            )}
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">
              Altura real (m) <span className="text-danger">*</span>
            </label>
            <input 
              type="number"
              name="altura_real"
              className="form-control"
              placeholder="Ex: 1.75"
              step="0.01"
              min="0"
              value={formData.altura_real || ''}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">Altura da joelho (cm)</label>
            <div className="input-group">
              <input 
                type="number"
                name="aj"
                className="form-control"
                placeholder="Ex: 52"
                min="0"
                value={formData.aj || ''}
                onChange={handleChange}
              />
              {/* <button 
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={calcularAlturaPorAJ}
                disabled={!formData.aj}
              >
                Calcular
              </button> */}
            </div>
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">Altura estimada (m)</label>
            <input 
              type="number"
              name="altura_estimada"
              className="form-control"
              placeholder="Ex: 1.70"
              step="0.01"
              min="0"
              value={formData.altura_estimada || ''}
              onChange={handleChange}
            />
            {/* <small className="text-info">Calculada por AJ ou manual</small> */}
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">IMC (kg/m²)</label>
            <input 
              type="number"
              name="imc"
              className="form-control bg-light"
              placeholder="Automático"
              step="0.1"
              min="0"
              value={formData.imc || ''}
              readOnly
            />
            {classificacaoIMC.texto && (
              <small className={`fw-bold ${classificacaoIMC.cor}`}>
                {classificacaoIMC.texto}
              </small>
            )}
          </div>
        </div>
      </div>

      {/* SEÇÃO 2: Circunferências */}
      <div className="mb-4">
        {/* <h6 className="text-secondary mb-3">Circunferências (cm)</h6> */}
        <div className="row g-3">
          <div className="col-md-3">
            <label className="form-label text-muted small">Braço</label>
            <input 
              type="number"
              name="circunferencia_braco"
              className="form-control"
              placeholder="Ex: 30"
              step="0.1"
              min="0"
              value={formData.circunferencia_braco || ''}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">Cintura</label>
            <input 
              type="number"
              name="circunferencia_cintura"
              className="form-control"
              placeholder="Ex: 85"
              step="0.1"
              min="0"
              value={formData.circunferencia_cintura || ''}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">Panturrilha</label>
            <input 
              type="number"
              name="circunferencia_panturrilha"
              className="form-control"
              placeholder="Ex: 35"
              step="0.1"
              min="0"
              value={formData.circunferencia_panturrilha || ''}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">Pescoço</label>
            <input 
              type="number"
              name="comprimento_pescoco"
              className="form-control"
              placeholder="Ex: 38"
              step="0.1"
              min="0"
              value={formData.comprimento_pescoco || ''}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* SEÇÃO 3: Pregas Cutâneas */}
      <div className="mb-4">
        {/* <h6 className="text-secondary mb-3">Pregas Cutâneas (mm)</h6> */}
        <div className="row g-3">
          <div className="col-md-3">
            <label className="form-label text-muted small">Tricipital (PCT)</label>
            <input 
              type="number"
              name="pct"
              className="form-control"
              placeholder="Ex: 15"
              step="0.1"
              min="0"
              value={formData.pct || ''}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">Bicipital (PCB)</label>
            <input 
              type="number"
              name="pcb"
              className="form-control"
              placeholder="Ex: 12"
              step="0.1"
              min="0"
              value={formData.pcb || ''}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">Subescapular (PCSE)</label>
            <input 
              type="number"
              name="pcse"
              className="form-control"
              placeholder="Ex: 20"
              step="0.1"
              min="0"
              value={formData.pcse || ''}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small">Suprailíaca (PCSI)</label>
            <input 
              type="number"
              name="pcsi"
              className="form-control"
              placeholder="Ex: 18"
              step="0.1"
              min="0"
              value={formData.pcsi || ''}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* SEÇÃO 4: Diagnóstico */}
      <div className="mb-3">
        <label htmlFor="diagnostico_antropometrico" className="form-label text-muted small">
          Diagnóstico Antropométrico
        </label>
        <textarea
          className="form-control"
          id="diagnostico_antropometrico"
          name="diagnostico_antropometrico"
          placeholder="Descreva a avaliação dos dados antropométricos, classificações e observações relevantes..."
          rows="5"
          value={formData.diagnostico_antropometrico || ""}
          onChange={handleChange}
        />
       
      </div>

      {/* Indicadores Visuais */}
      {formData.imc && (
        <div className="alert alert-info mt-3">
          <strong>Resumo:</strong> IMC {formData.imc} kg/m² - {classificacaoIMC.texto}
          {formData.circunferencia_cintura && (
            <span className="ms-3">
              | Cintura: {formData.circunferencia_cintura} cm
              {formData.circunferencia_cintura > 102 ? ' (Alto risco - H)' : 
               formData.circunferencia_cintura > 88 ? ' (Alto risco - M)' : ' (Normal)'}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default AvaliacaoAntropometrica;