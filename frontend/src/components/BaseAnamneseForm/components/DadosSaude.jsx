import React from 'react'

const DadosSaude = () => {
  return (
    <>
    <div>
        <div>

        <label htmlFor="">Queixa principal/ Objetivo da consulta</label>
        </div>
      
            <textarea 
            name="" 
            id="">  
            
            </textarea>
       
        
    </div>

    <div>
        <label htmlFor="">História da Doença(Queixa) Atual: </label>
        <div>
            <textarea name="" id=""></textarea>
            </div>
    </div>

    <div>
        <table className='table-bordered'>
            <thead className='table-light'>
                <tr>
                    <th>Patologias</th>
                    <th>História da Moléstia Atual</th>
                    <th>História Familiar</th>
                </tr>

            </thead>
            <tbody>

                <tr>
                    <td>Diabetes</td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                </tr>
                <tr>
                    <td>Hipertensão</td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                </tr>
                <tr>
                    <td>Doença Cardiovacular</td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                </tr>
                <tr>
                    <td>Dislipidemia</td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                </tr>
                <tr>
                    <td>Câncer</td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                </tr>
                <tr>
                    <td>Osteoporose</td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                </tr>
                <tr>
                    <td>Depressão/Ansiedade</td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                </tr>
                <tr>
                    <td>Síndrome dos ovários policísticos</td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                </tr>
                
                
            </tbody>

        </table>

    </div>

    <div className='d-flex flex-column align-items-start '>
        <label htmlFor="">Outras patologias:</label>
        <textarea 
            name="" id="">

        </textarea>
    </div>
    <div>
        <label htmlFor="">Faz uso de medicamentos?</label>
        <input type="radio" name="medicamentos" id="" />
        <label htmlFor="">Sim</label>
        <input type="radio" name="medicamentos"/>
        <label htmlFor="">Não</label>
        <label htmlFor="">Quais:</label>
        <input type="text" />
    </div>
    <div>
        

    </div>
    
    </>
  )
}

export default DadosSaude
