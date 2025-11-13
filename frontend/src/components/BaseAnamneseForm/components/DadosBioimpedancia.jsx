import React from 'react'

const DadosBioimpedancia = ({formData, setFormData}) => {
  return (
   <>
    <div className="mb-3">
      <label htmlFor="gordura">Percentual de gordura (%):</label>
      <input
        type="number"
        id="gordura"
        name="gordura"
        step="0.1"   // permite casas decimais (ex: 15.5)
        min="0"
        max="100"
        placeholder="Ex: 15.5"
        value={formData.bioimpedancia.percentual_gordura || ""}
        onChange={(e) =>
          setFormData({ ...formData,
            bioimpedancia: {
              ...formData.bioimpedancia,
              percentual_gordura: e.target.value
            }
            })
        }
      />
      <label htmlFor="">Peso gordura(kg):</label>
      <input 
        type="number" 
        placeholder='Ex: 72.5'
        step="0.1"
        min="0"
        value={formData.bioimpedancia.peso_gordura}
        onChange={(e) =>
          setFormData({ ...formData,
            bioimpedancia: {
              ...formData.bioimpedancia,
              peso_gordura: e.target.value
            }
            })
        }
      />
      <label htmlFor="">Massa magra(kg):</label>
      <input 
        type="number" 
        placeholder='Ex: 12.5'
        step="0.1"
        min="0"
        value={formData.bioimpedancia.massa_magra}
        onChange={(e) =>
          setFormData({ ...formData,
            bioimpedancia: {
              ...formData.bioimpedancia,
              massa_magra: e.target.value
            }
            })
        }
      />

    </div>
    <div className="mb-3">
      <label htmlFor="gordura">Gordura alvo (%):</label>
      <input
        type="number"
        id="gordura"
        name="gordura"
        step="0.1"   // permite casas decimais (ex: 15.5)
        min="0"
        max="100"
        placeholder="Ex: 15.5"
        value={formData.bioimpedancia.gordura_alvo}
        onChange={(e) =>
          setFormData({ ...formData,
            bioimpedancia: {
              ...formData.bioimpedancia,
              gordura_alvo: e.target.value
            }
            })
        }
      />
      <label htmlFor="">Peso alvo(kg):</label>
      <input 
        type="number" 
        placeholder='Ex: 72.5'
        step="0.1"
        min="0"
        value={formData.bioimpedancia.peso_alvo}
        onChange={(e) =>
          setFormData({ ...formData,
            bioimpedancia: {
              ...formData.bioimpedancia,
              peso_alvo: e.target.value
            }
            })
        }
      />
      <label htmlFor="">TMB(kcal):</label>
      <input 
        type="number" 
        placeholder='Ex: 125'

        min="0"
        value={formData.bioimpedancia.tmb}
        onChange={(e) =>
          setFormData({ ...formData,
            bioimpedancia: {
              ...formData.bioimpedancia,
              tmb: e.target.value
            }
            })
        }
      />

    </div>
    <div className="mb-3">
      <label htmlFor="gordura">Percentual de água da massa magra(%):</label>
      <input
        type="number"
        id="gordura"
        name="gordura"
        step="0.1"   // permite casas decimais (ex: 15.5)
        min="0"
        max="100"
        placeholder="Ex: 15.5"
        value={formData.bioimpedancia.percentual_agua_massa_magra}
        onChange={(e) =>
          setFormData({ ...formData,
            bioimpedancia: {
              ...formData.bioimpedancia,
              percentual_agua_massa_magra: e.target.value
            }
            })
        }
      />
      <label htmlFor="">Agua corporal total(l):</label>
      <input 
        type="number" 
        placeholder='Ex: 72.5'
        step="0.1"
        min="0"
        value={formData.bioimpedancia.agua_corporal_total}
        onChange={(e) =>
          setFormData({ ...formData,
            bioimpedancia: {
              ...formData.bioimpedancia,
              agua_corporal_total: parseFloat(e.target.value) || 0

            }
            })
        }
      />
   

    </div>
   </>
  )
}

export default DadosBioimpedancia
