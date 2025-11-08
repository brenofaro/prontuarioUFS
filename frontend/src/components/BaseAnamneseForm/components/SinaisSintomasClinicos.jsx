import React from 'react'

const SinaisSintomasClinicos = () => {
  return (
   <>
    <div className='d-flex flex-row'>

            <label className="form-check">Dentição:</label>

              <input 
                type="radio"
                name="denticao" 
              
              />
              <label>Natural Completa</label>

          
                <input 
                  type="radio" 
                  name="denticao" 
                />
                <label>Prótese completa</label>

                <input 
                  type="radio" 
                  name="denticao" 
                />
                <label>Natural parcial</label>

                <input 
                  type="radio" 
                  name="denticao" 
                />
                <label>Prótese parcial</label>

                <input 
                  type="radio" 
                  name="denticao" 
                />
                <label>Edêntulo</label>



          </div>

          <div>
            <label htmlFor="">Mastigação:</label>
            <input 
              type="radio" 
              name="mastigação" 
            />
            <label htmlFor="">Comprometida</label>
            <input 
              type="radio" 
              name="mastigação"
            />
            <label htmlFor="">Normal</label>
             <label className='ms-3' htmlFor="">Disfalgia:</label>
            <input 
              type="radio" 
              name="disfalgia" 
            />
            <label htmlFor="">Sim</label>
            <input 
              type="radio" 
              name="disfalgia"
            />
            <label htmlFor="">Nao</label>
             <label className='ms-3' htmlFor="">Odinofalgia:</label>
            <input 
              type="radio" 
              name="odinofalgia" 
            />
            <label htmlFor="">Sim</label>
            <input 
              type="radio" 
              name="odinofalgia"
            />
            <label htmlFor="">Nao</label>
          </div>

          <div>
                 <label className='ms-3' htmlFor="">Dispepsia:</label>
            <input 
              type="radio" 
              name="dispepsia" 
            />
            <label htmlFor="">Sim</label>
            <input 
              type="radio" 
              name="dispepsia"
            />
            <label htmlFor="">Nao</label>
             <label className='ms-3' htmlFor="">Náuseas:</label>
            <input 
              type="radio" 
              name="nauseas" 
            />
            <label htmlFor="">Sim</label>
            <input 
              type="radio" 
              name="nauseas"
            />
            <label htmlFor="">Nao</label>
             <label className='ms-3' htmlFor="">Vomitos:</label>
            <input 
              type="radio" 
              name="vomitos" 
            />
            <label htmlFor="">Sim</label>
            <input 
              type="radio" 
              name="vomitos"
            />
            <label htmlFor="">Nao</label>
          </div>

          <div>
             <label className='ms-3' htmlFor="">Flatulencia:</label>
            <input 
              type="radio" 
              name="flatulencia" 
            />
            <label htmlFor="">Sim</label>
            <input 
              type="radio" 
              name="flatulencia"
            />
            <label htmlFor="">Nao</label>
             <label className='ms-3' htmlFor="">Ritmo intestinal:</label>
            <input 
              type="radio" 
              name="ritmo-intestinal" 
            />
            <label htmlFor="">Normal</label>
            <input 
              type="radio" 
              name="ritmo-intestinal"
            />
            <label htmlFor="">Diarréia</label>
            <input 
              type="radio" 
              name="ritmo-intestinal"
            />
            <label htmlFor="">Obstipação</label>
            <label className='ms-3' htmlFor="">Ritmo Urinário:</label>
            <input 
              type="radio" 
              name="ritmo-urinario" 
            />
            <label htmlFor="">Oligúria</label>
            <input 
              type="radio" 
              name="ritmo-urinario"
            />
            <label htmlFor="">Anúria</label>
            <input 
              type="radio" 
              name="ritmo-urinario"
            />
            <label htmlFor="">Poliúria</label>
             <input 
              type="radio" 
              name="ritmo-urinario"
            />
            <label htmlFor="">Normal</label>


          </div>
          <div d-flex flex-column align-items-start>
            <label htmlFor="">Pele:</label>
            <input type="text" />
            <label htmlFor="">Unhas:</label>
            <input type="text" />
            <label htmlFor="">Cabelo:</label>
            <input type="text" />
          </div>
           <div>
            <label htmlFor="">Mucosas:</label>
            <input type="text" />
            <label htmlFor="">Edemas:</label>
            <input type="text" />
            <label htmlFor="">Abdômen:</label>
            <input type="text" />
          </div>
   </>
  )
}

export default SinaisSintomasClinicos
