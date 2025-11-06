import React from 'react'

const DadosSocioEconomicos = () => {
  return (
    <>
      <form action="">
       
          <div className="mb-3">
            <label className="form-label d-block">Estado civil</label>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="estado_civil"
                id="solteiro"
                value="solteiro"
                //checked={formData.estado_civil === "solteiro"}
                //onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="solteiro">Solteiro</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="estado_civil"
                id="casado"
                value="casado"
                //checked={formData.estado_civil === "casado"}
                //onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="casado">Casado</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="estado_civil"
                id="viuvo"
                value="viuvo"
                //checked={formData.estado_civil === "viuvo"}
                //onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="viuvo">Viúvo</label>
            </div>

              <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="estado_civil"
                id="separado"
                value="separado"
                //checked={formData.estado_civil === "separado"}
                //onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="viuvo">Separado</label>
            </div>
          </div>

          <div>

            <label className="form-check d-block">Escolaridade</label>

            <div className="form-check form-check-inline">
              <input 
                type="radio"
                name="escolaridade" 
              
              />
              <label>Analfabeto</label>

            </div>

              <div className="form-check form-check-inline">
                <input 
                  type="radio" 
                  name="escolaridade" 
                />
                <label>Afalbetizado</label>
              </div>

              <div className="form-check form-check-inline">
                <input 
                  type="radio" 
                  name="escolaridade" 
                />
                <label>Ensino Fundamental completo/incompleto</label>
              </div>

            <div className="form-check form-check-inline">
                <input 
                  type="radio" 
                  name="escolaridade" 
                />
                <label>Ensino Médio completo/imcompleto</label>
              </div>

            <div className="form-check form-check-inline">
                <input 
                  type="radio" 
                  name="escolaridade" 
                />
                <label>Ensino Superior completo/incompleto</label>
              </div>



          </div>

          <label>Ocupação</label>
          <input 
            type="text" 

          />
        <div>

          <label>Exerce alguma atividade dentro de casa?</label>
          <input 
            type="radio" 
            name="exercicio_casa"
            value=""
          />
          <label>Sim</label>
          <input 
            type="radio" 
            name="exercicio_casa"
          />
          <label>Não</label>
          <label className="ms-3">Qual</label>
          <input 
            type="text" 
          />

        </div>

        

        <div>
            <label>Estrutura Familiar:</label>
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura-familiar" 
                    />
                <label>Pai/Mãe</label>

            </div>
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura-familiar" 
                    />
                <label>Pai/Mãe</label>

            </div>
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura-familiar" 
                    />
                <label>Cônjuge</label>

            </div>
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura-familiar" 
                    />
                <label>Filho</label>

            </div><div>
                <input 
                    type="checkbox" 
                    name="estrutura-familiar" 
                    />
                <label>Irmão</label>

            </div>
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura-familiar" 
                    />
                <label>Netos</label>

            </div>
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura-familiar" 
                    />
                <label>Sobrinho</label>

            </div>
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura-familiar" 
                    />
                <label>Cunhado</label>

            </div>
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura-familiar" 
                    />
                <label>Só</label>

            </div>
            <div>
                <input 
                    type="text" 
                    name="estrutura-familiar" 
                    />
                <label>Outros</label>

            </div>

        </div>
        <div>
            <label>Renda Pessoal:</label>
            <input 
                type="number" 
                step="0.01"
            />
            <label>Gastos com a alimentação</label>
            <input 
                type="number" 
                step="0.01"
            />


        </div>

        <div>
            <label>Atividade Física:</label>
            <input 
                type="radio" 
                name="atividade-fisica" 
            />
            <label>Sim</label>
            <input 
                type="radio" 
                name="atividade-fisica" 
            />
            <label>Não</label>

            <label>Qual:</label>
            <input 
                type="text" 
            />
            <label htmlFor="">Frequência</label>
            <input type="text" />

        </div>
        
        <div>
            <label>Já fez alguma atividade física:</label>
            <input 
                type="radio" 
                name="ja-fez-atividade" 
            />
            <label>Sim</label>
            <input 
                type="radio" 
                name="ja-fez-atividade" 
            />
            <label>Não</label>

            <label>Há quanto tempo parou:</label>
            <input 
                type="text" 
            />

        </div>
        <div>
            <label>Etilismo:</label>
            <input 
                type="radio" 
                name="Etilismo" 
            />
            <label>Sim</label>
            <input 
                type="radio" 
                name="Etilismo" 
            />
            <label>Não</label>

            <label>Tipo:</label>
            <input 
                type="text" 
            />
            <label>Quanto:</label>
            <input 
                type="text" 
            />

        </div>
     <div>
            <label>Já foi etilista:</label>
            <input 
                type="radio" 
                name="ja-foi-etilista" 
            />
            <label>Sim</label>
            <input 
                type="radio" 
                name="ja-foi-etilista" 
            />
            <label>Não</label>

            <label>Há quanto tempo parou:</label>
            <input 
                type="text" 
            />

        </div>

          <div>
            <label>Tabagismo:</label>
            <input 
                type="radio" 
                name="tabagismo" 
            />
            <label>Sim</label>
            <input 
                type="radio" 
                name="tabagismo" 
            />
            <label>Não</label>

            <label>Tipo:</label>
            <input 
                type="text" 
            />
            <label>Quanto:</label>
            <input 
                type="text" 
            />

        </div>
     <div>
            <label>Já foi tabagista:</label>
            <input 
                type="radio" 
                name="ja-foi-tabagista" 
            />
            <label>Sim</label>
            <input 
                type="radio" 
                name="ja-foi-tabagista" 
            />
            <label>Não</label>

            <label>Há quanto tempo parou:</label>
            <input 
                type="text" 
            />

        </div>
        
      </form>
     
    
    </>
  )
}

export default DadosSocioEconomicos;
