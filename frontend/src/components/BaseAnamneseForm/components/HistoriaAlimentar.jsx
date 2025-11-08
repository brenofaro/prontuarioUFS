import React from 'react'

const HistoriaAlimentar = () => {
  return (
    <>
        <div>
            <label htmlFor="">Aversões alimentares:</label>
            <input type="radio" name='aversoes' />
            <label htmlFor="">Sim</label>
            <input type="radio" name='aversoes' />
            <label htmlFor="">Não</label>
            <label htmlFor="">Quais:</label>
            <input type="text" />

             <label htmlFor="">Alergias/intolerancias alimentares:</label>
            <input type="radio" name='intolerancia' />
            <label htmlFor="">Sim</label>
            <input type="radio" name='intolerancia' />
            <label htmlFor="">Não</label>
            <label htmlFor="">Quais:</label>
            <input type="text" />
        </div>
            <div>
            <label htmlFor="">Ingestão hídrica</label>
            <input type="text" />

            </div>
        <div>

            <label htmlFor="">Existe algum horário que sente mais fome:</label>
            <input type="radio" name='horario-fome' />
            <label htmlFor="">Sim</label>
            <input type="radio" name='horario-fome' />
            <label htmlFor="">Não</label>
            <label htmlFor="">Quais:</label>
            <input type="text" />

            <label htmlFor="">Apetite:</label>
            <input type="radio" name='apetite' />
            <label htmlFor="">Normal</label>
            <input type="radio" name='apetite' />
            <label htmlFor="">Aumentado</label>
            <input type="radio" name='apetite' />
            <label htmlFor="">Diminuido</label>
        </div>
        <div>
            <label htmlFor="">Diagnóstico nutricional conclusivo:</label>
            <textarea name="" id=""></textarea>
        </div>
    </>
  )
}

export default HistoriaAlimentar
