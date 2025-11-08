import React from 'react'

const DadosSocioEconomicos = ({formData, setFormData}) => {
  return (
    <>
       
          <div className="mb-3">
            <label className="form-label d-block">Estado civil</label>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="estado_civil"
                id="solteiro"
                value="solteiro"
                checked={formData.socioeconomico.estado_civil === "solteiro"}
                onChange={(e) =>
                  setFormData({ ...formData, 
                    socioeconomico: {
                      ...formData.socioeconomico,
                      estado_civil: e.target.value
                    }
                    })
                }
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
                checked={formData.socioeconomico.estado_civil === "casado"}
                onChange={(e) =>
                  setFormData({ ...formData, 
                    socioeconomico: {
                      ...formData.socioeconomico,
                      estado_civil: e.target.value
                    }
                    })
                }
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
                checked={formData.socioeconomico.estado_civil === "viuvo"}
                onChange={(e) =>
                  setFormData({ ...formData, 
                    socioeconomico: {
                      ...formData.socioeconomico,
                      estado_civil : e.target.value
                    }
                    })
                }
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
                checked={formData.socioeconomico.estado_civil === "separado"}
                onChange={(e) =>
                  setFormData({ ...formData, 
                    socioeconomico: {
                      ...formData.socioeconomico,
                      estado_civil : e.target.value
                    }
                    })
                }
              />
              <label className="form-check-label" htmlFor="separado">Separado</label>
            </div>
          </div>

          <div>

            <label className="form-check d-block">Escolaridade</label>

            <div className="form-check form-check-inline">
              <input 
                type="radio"
                name="escolaridade" 
                id="analfabeto"
                value="analfabeto"
                checked={formData.socioeconomico.escolaridade === "analfabeto"}
                onChange={(e) =>
                  setFormData({ ...formData, 
                    socioeconomico: {
                      ...formData.socioeconomico,
                      escolaridade : e.target.value
                    }
                    })  
                }
              />
              <label htmlFor="analfabeto">Analfabeto</label>

            </div>

              <div className="form-check form-check-inline">
                <input 
                  type="radio" 
                  name="escolaridade"
                  id='alfabetizado' 
                  value='alfabetizado'
                  checked={formData.socioeconomico.escolaridade === "alfabetizado"}
                  onChange={(e) =>
                    setFormData({ ...formData, 
                      socioeconomico: {
                        ...formData.socioeconomico,
                        escolaridade : e.target.value
                      }
                      })  
                  } 
                />
                <label htmlFor="alfabetizado">Afabetizado</label>
              </div>

              <div className="form-check form-check-inline">
                <input 
                  type="radio" 
                  name="escolaridade" 
                  id='fundamental_incompleto_completo'
                  value='fundamental_incompleto_completo'
                  checked={formData.socioeconomico.escolaridade === "fundamental_incompleto_completo"}
                  onChange={(e) =>
                    setFormData({ ...formData,      
                      socioeconomico: {
                        ...formData.socioeconomico,
                        escolaridade : e.target.value
                        }
                      })  
                  } 
                />
                <label htmlFor='fundamental_incompleto_completo'>Ensino Fundamental completo/incompleto</label>
              </div>

            <div className="form-check form-check-inline">
                <input 
                  type="radio" 
                  name="escolaridade" 
                  id='medio_incompleto_completo'
                  value='medio_incompleto_completo'
                  checked={formData.socioeconomico.escolaridade === "medio_incompleto_completo"}
                  onChange={(e) =>
                    setFormData({ ...formData, 
                      socioeconomico: {
                        ...formData.socioeconomico,
                        escolaridade : e.target.value
                        }
                      })  
                    }
                />
                <label htmlFor='medio_incompleto_completo'>Ensino Médio completo/imcompleto</label>
              </div>

            <div className="form-check form-check-inline">
                <input 
                  type="radio" 
                  name="escolaridade" 
                  id='superior_incompleto_completo'
                  value='superior_incompleto_completo'
                  checked={formData.socioeconomico.escolaridade === "superior_incompleto_completo"}
                  onChange={(e) => 
                    setFormData({ ...formData,
                      socioeconomico: {
                        ...formData.socioeconomico,
                        escolaridade: e.target.value
                      }
                    })
                  }
                />
                <label htmlFor='superior_incompleto_completo'>Ensino Superior completo/incompleto</label>
              </div>



          </div>

          <label>Ocupação</label>
          <input 
            type="text" 
            className='form-control w-25'
            name="ocupacao"
            value={formData.socioeconomico.ocupacao}
            placeholder='Ex: Professor'
            onChange={(e) =>
              setFormData({ ...formData
                , socioeconomico: {
                  ...formData.socioeconomico,
                  ocupacao: e.target.value
                }
              })
            }
            
          />
        <div>

          <label>Exerce alguma atividade dentro de casa?</label>
          <input 
            type="radio" 
            name="exercicio_casa"
            value="true"
            id='sim'
            checked={formData.socioeconomico.faz_atividade_dentro_casa === true}
            onChange={(e) =>
              setFormData({ ...formData,
                socioeconomico: {
                  ...formData.socioeconomico,
                  faz_atividade_dentro_casa: true
                }
              })
            }
          />
          <label htmlFor='sim'>Sim</label>
          <input 
            type="radio" 
            name="exercicio_casa"
            id='nao'
            value="false"
            checked={formData.socioeconomico.faz_atividade_dentro_casa === false}
            onChange={(e) =>
              setFormData({ ...formData,
                socioeconomico: {
                  ...formData.socioeconomico,
                  faz_atividade_dentro_casa: false
                }

              })
            }
          />
          <label className='form-check-label' htmlFor='nao'>Não</label>
          <label className="ms-3">Qual</label>
          <input 
            type="text" 
            className='form-control d-inline-block w-auto ms-2'
            name="atividade_casa"
            value={formData.socioeconomico.atividade_dentro_casa}
            placeholder='Ex: Abdominais'
            onChange={(e) =>
              setFormData({ ...formData,
                socioeconomico: {
                  ...formData.socioeconomico,
                  atividade_dentro_casa: e.target.value
                }
              })
            }
          />

        </div>

        

        <div>
            <label>Estrutura Familiar:</label>
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura-familiar" 
                    value="pai_mae"
                    checked={formData.socioeconomico.estrutura_familia.includes("pai_mae")}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      const updatedChecked = isChecked
                        ? [...formData.socioeconomico.estrutura_familia, e.target.value]
                        : formData.socioeconomico.estrutura_familia.filter(
                          (value) => value !== e.target.value
                        );
                      setFormData({
                        ...formData,
                        socioeconomico: {
                          ...formData.socioeconomico,
                          estrutura_familia: updatedChecked,
                        },
                      });
                    }}
                    />
                <label>Pai/Mãe</label>

            </div>
  
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura-familiar" 
                    value="conjuge"
                    checked={formData.socioeconomico.estrutura_familia.includes("conjuge")}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      const updatedChecked = isChecked
                        ? [...formData.socioeconomico.estrutura_familia, e.target.value]
                        : formData.socioeconomico.estrutura_familia.filter(
                          (value) => value !== e.target.value
                        );
                      setFormData({
                        ...formData,
                        socioeconomico: {
                          ...formData.socioeconomico,
                          estrutura_familia: updatedChecked,
                        },
                      });
                    }}
                    />
                <label>Cônjuge</label>

            </div>
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura-familiar"
                    value="filho"
                    checked={formData.socioeconomico.estrutura_familia.includes("filho")}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      const updatedChecked = isChecked
                        ? [...formData.socioeconomico.estrutura_familia, e.target.value]
                        : formData.socioeconomico.estrutura_familia.filter(
                          (value) => value !== e.target.value
                        );
                      setFormData({
                        ...formData,
                        socioeconomico: {
                          ...formData.socioeconomico,
                          estrutura_familia: updatedChecked,
                        },
                      });
                    }} 
                    />
                <label>Filho</label>

            </div><div>
                <input 
                    type="checkbox" 
                    name="estrutura-familiar" 
                    value="irmao"
                    checked={formData.socioeconomico.estrutura_familia.includes("irmao")}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      const updatedChecked = isChecked
                        ? [...formData.socioeconomico.estrutura_familia, e.target.value]
                        : formData.socioeconomico.estrutura_familia.filter(
                          (value) => value !== e.target.value
                        );
                      setFormData({
                        ...formData,
                        socioeconomico: {
                          ...formData.socioeconomico,
                          estrutura_familia: updatedChecked,
                        },
                      });
                    }}
                    />
                <label>Irmão</label>

            </div>
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura-familiar"
                    value="netos"
                    checked={formData.socioeconomico.estrutura_familia.includes("netos")}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      const updatedChecked = isChecked
                        ? [...formData.socioeconomico.estrutura_familia, e.target.value]
                        : formData.socioeconomico.estrutura_familia.filter(
                          (value) => value !== e.target.value
                        );
                      setFormData({
                        ...formData,
                        socioeconomico: {
                          ...formData.socioeconomico,
                          estrutura_familia: updatedChecked,
                        },
                      });
                    }} 
                    />
                <label>Netos</label>

            </div>
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura-familiar" 
                    value="sobrinho"
                    checked={formData.socioeconomico.estrutura_familia.includes("sobrinho")}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      const updatedChecked = isChecked
                        ? [...formData.socioeconomico.estrutura_familia, e.target.value]
                        : formData.socioeconomico.estrutura_familia.filter(
                          (value) => value !== e.target.value
                        );
                      setFormData({
                        ...formData,
                        socioeconomico: {
                          ...formData.socioeconomico,
                          estrutura_familia: updatedChecked,
                        },
                      });
                    }} 
                    />
                <label>Sobrinho</label>

            </div>
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura-familiar" 
                    value="cunhado"
                    checked={formData.socioeconomico.estrutura_familia.includes("cunhado")}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      const updatedChecked = isChecked
                        ? [...formData.socioeconomico.estrutura_familia, e.target.value]
                        : formData.socioeconomico.estrutura_familia.filter(
                          (value) => value !== e.target.value
                        );
                      setFormData({
                        ...formData,
                        socioeconomico: {
                          ...formData.socioeconomico,
                          estrutura_familia: updatedChecked,
                        },
                      });
                    }} 
                    />
                <label>Cunhado</label>

            </div>
            <div>
                <input 
                    type="checkbox" 
                    name="estrutura-familiar" 
                    value="so"
                    checked={formData.socioeconomico.estrutura_familia.includes("so")}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      const updatedChecked = isChecked
                        ? [...formData.socioeconomico.estrutura_familia, e.target.value]
                        : formData.socioeconomico.estrutura_familia.filter(
                          (value) => value !== e.target.value
                        );
                      setFormData({
                        ...formData,
                        socioeconomico: {
                          ...formData.socioeconomico,
                          estrutura_familia: updatedChecked,
                        },
                      });
                    }} 
                    />
                <label>Só</label>

            </div>
            <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="outros"
              name="estrutura-familiar"
              value="outros"
              checked={formData.socioeconomico.estrutura_familia.includes("outros")}
              onChange={(e) => {
                const checked = e.target.checked;
                const value = e.target.value;
                const updated = checked
                  ? [...formData.socioeconomico.estrutura_familia, value]
                  : formData.socioeconomico.estrutura_familia.filter((v) => v !== value);

                setFormData({
                  ...formData,
                  socioeconomico: {
                    ...formData.socioeconomico,
                    estrutura_familia: updated,
                  },
                });
              }}
            />
            <label className="form-check-label" htmlFor="outros">Outros</label>
          </div>

          {/* Campo de texto só aparece se o "outros" estiver marcado */}
          {formData.socioeconomico.estrutura_familia.includes("outros") && (
            <input
              type="text"
              className="form-control w-50 mt-2"
              placeholder="Especifique..."
              value={formData.socioeconomico.outros_estrutura_familia || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  socioeconomico: {
                    ...formData.socioeconomico,
                    outros_estrutura_familia: e.target.value,
                  },
                })
              }
            />
          )}


        </div>
        <div className='mt-3'>
            <label>Renda Pessoal:</label>
            <input 
                type="number" 
                value={formData.socioeconomico.renda_pessoal}
                onChange={(e) =>
                  setFormData({ ...formData,
                    socioeconomico: {
                      ...formData.socioeconomico,
                      renda_pessoal: e.target.value
                    }
                    })
                }
            />
            <label>Gastos com a alimentação</label>
            <input 
                type="number" 
                value={formData.socioeconomico.renda_pessoal}
                onChange={(e) =>
                  setFormData({ ...formData,
                    socioeconomico: {
                      ...formData.socioeconomico,
                      gastos_alimentacao: e.target.value
                    }
                    })
                }
            />


        </div>

        <div className='d-flex align-items-center m-2'>
            <label>Atividade Física:</label>
            <input 
                type="radio" 
                name="atividade-fisica" 
                value="true"
                id="sim_atividade_fisica"
                checked={formData.socioeconomico.faz_atividade_fisica === true}
                onChange={() =>
                  setFormData({ ...formData,
                    socioeconomico: {
                      ...formData.socioeconomico,
                      faz_atividade_fisica: true
                    }
                    })
                }
            />
            <label htmlFor="sim_atividade_fisica">Sim</label>
            <input 
                type="radio" 
                name="atividade-fisica" 
                value="false"
                id="nao_atividade_fisica"
                checked={formData.socioeconomico.faz_atividade_fisica === false}
                onChange={() =>
                  setFormData({ ...formData,
                    socioeconomico: {
                      ...formData.socioeconomico,
                      faz_atividade_fisica: false
                    }
                    })
                }
            />
            <label htmlFor="nao_atividade_fisica">Não</label>

            <label>Qual:</label>
            <input 
              type="text" 
              value={formData.socioeconomico.qual_atividade_fisica}
              onChange={(e) => 
                setFormData({
                  ...formData,
                  socioeconomico: {
                    ...formData.socioeconomico,
                    qual_atividade_fisica: e.target.value,
                  },
                })
              }
            />

            <label htmlFor="">Frequência</label>
            <input 
              type="text"
              value={formData.socioeconomico.frequencia_atividade_fisica}
              onChange={(e) => 
                setFormData({
                  ...formData,
                  socioeconomico: {
                    ...formData.socioeconomico,
                    frequencia_atividade_fisica: e.target.value,
                  },
                })
              }
            /> 

        </div>
        
        <div>
            <label>Já fez alguma atividade física:</label>
            <input 
                type="radio" 
                name="ja-fez-atividade" 
                value="true"
                id="sim_ja_fez_atividade"
                checked={formData.socioeconomico.ja_fez_atividade_fisica === true}
                onChange={() =>
                  setFormData({ ...formData,
                    socioeconomico: {
                      ...formData.socioeconomico,
                      ja_fez_atividade_fisica: true
                    }
                    })
                }
            />
            <label htmlFor="sim_ja_fez_atividade">Sim</label>
            <input 
                type="radio" 
                name="ja-fez-atividade"
                value="false"
                id="nao_ja_fez_atividade"
                checked={formData.socioeconomico.ja_fez_atividade_fisica === false}
                onChange={() =>
                  setFormData({ ...formData,
                    socioeconomico: {
                      ...formData.socioeconomico,
                      ja_fez_atividade_fisica: false
                    }
                    })
                }
            />
            <label htmlFor="nao_ja_fez_atividade">Não</label>

            <label>Há quanto tempo parou:</label>
            <input 
                type="text" 
                value={formData.socioeconomico.tempo_parado_atividade_fisica}
                onChange={() => 
                  setFormData({
                    ...formData,
                    socioeconomico: {
                      ...formData.socioeconomico,
                      tempo_parado_atividade_fisica: e.target.value,
                    },
                  })
                }
            />

        </div>
        <div className='mt-3'>
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
        
     
    
    </>
  )
}

export default DadosSocioEconomicos;
