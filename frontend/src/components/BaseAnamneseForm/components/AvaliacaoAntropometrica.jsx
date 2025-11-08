import React from 'react'

const AvaliacaoAntropometrica = () => {
  return (
   <>
    <div className=''>
        <label className="form-label" htmlFor="">Peso atual(Kg):</label>
        <input 
          type="number" 
          placeholder='Ex: 72.5'
          step="0.1"
          min="0"
          className="w-15"

        />
        <label htmlFor=""> Peso usua(Kg):</label>
        <input 
          type="number" 
          placeholder='Ex: 72.5'
          step="0.1"
          min="0"
          className="w-15"

        />
        <label htmlFor="">AJ(cm):</label>
        <input 
          type="number" 
          placeholder='Ex: 120'
          min="0"
          className="w-15"
        />
        <label htmlFor="">Altura real(m):</label>
        <input 
          type="number" 
          placeholder='Ex: 1.75'
          step="0.10"
          min="0"
          className="w-15"

        />

    </div>
    <div className=''>
        <label className="form-label" htmlFor="">Altura estimada(m):</label>
        <input 
          type="number" 
          placeholder='Ex: 1.75'
          step="0.10"
          min="0"
          style={{ width: "10%" }}

        />
        <label htmlFor=""> IMC(kg/m²):</label>
        <input 
          type="number" 
          placeholder='Ex: 72.5'
          step="0.1"
          min="0"
          className="w-15"

        />
        <label htmlFor="">Circunferência do braço(cm):</label>
        <input 
          type="number" 
          placeholder='Ex: 30'
          min="0"
          className="w-15"
        />
        <label htmlFor="">Comprimento do pescoço(cm):</label>
        <input 
          type="number" 
          placeholder='Ex: 40'
          min="0"
          className="w-15"

        />

    </div>
    <div className=''>
        <label className="form-label" htmlFor="">Prega cutânea triciptal(mm):</label>
        <input 
          type="number" 
          placeholder='Ex: 15'
          min="0"
          style={{ width: "10%" }}

        />
        <label htmlFor="">Prega cutânea biciptal(mm):</label>
        <input 
          type="number" 
          placeholder='Ex: 15'
          min="0"

        />
        <label htmlFor="">PCSE(mm):</label>
        <input 
          type="number" 
          placeholder='Ex: 30'
          min="0"
          className="w-15"
        />


    </div>
    <div>
      <label className="form-label" htmlFor="">PCSI(mm):</label>
        <input 
          type="number" 
          placeholder='Ex: 15'
          min="0"
          style={{ width: "10%" }}

        />
        <label htmlFor="">Circunferencia da cintura(cm):</label>
        <input 
          type="number" 
          placeholder='Ex: 100'
          min="0"
          style={{ width: "10%" }}

        />
        <label htmlFor="">Circunferencia da panturrilha(mm):</label>
        <input 
          type="number" 
          placeholder='Ex: 30'
          min="0"
          style={{ width: "10%" }}        
          />

    </div>
    <div className="d-flex flex-column align-items-start">
      <label className="" htmlFor="">Diagnostico antropometrico</label>
      <textarea>

      </textarea>
    </div>
   </>


  )
}

export default AvaliacaoAntropometrica;
