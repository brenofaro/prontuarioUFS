import React from 'react'

const DadosBioimpedancia = () => {
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
      />
      <label htmlFor="">Peso gordura(kg):</label>
      <input 
        type="number" 
        placeholder='Ex: 72.5'
        step="0.1"
        min="0"
      />
      <label htmlFor="">Massa magra(kg):</label>
      <input 
        type="number" 
        placeholder='Ex: 12.5'
        step="0.1"
        min="0"
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
      />
      <label htmlFor="">Peso alvo(kg):</label>
      <input 
        type="number" 
        placeholder='Ex: 72.5'
        step="0.1"
        min="0"
      />
      <label htmlFor="">TMB(kcal):</label>
      <input 
        type="number" 
        placeholder='Ex: 125'

        min="0"
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
      />
      <label htmlFor="">Agua corporal total(l):</label>
      <input 
        type="number" 
        placeholder='Ex: 72.5'
        step="0.1"
        min="0"
      />
   

    </div>
   </>
  )
}

export default DadosBioimpedancia
