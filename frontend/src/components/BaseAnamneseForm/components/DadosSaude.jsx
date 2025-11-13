import React from 'react'

const DadosSaude = ({formData, setFormData}) => {
  return (
    <>
    <div>
        <div>

        <label htmlFor="">Queixa principal/ Objetivo da consulta</label>
        </div>
      
            <textarea 
            name="" 
            id=""
            value={formData.saude.objetivo_consulta}
            onChange={(e) =>
                  setFormData({ ...formData, 
                    saude: {
                      ...formData.saude,
                      objetivo_consulta: e.target.value
                    }
                    })
            }
            >  
            </textarea>
       
        
    </div>

    <div>
        <label htmlFor="">História da Doença(Queixa) Atual: </label>
        <div>
            <textarea 
                name="" 
                id=""
                value={formData.saude.historia_doenca}
                onChange={(e) =>
                  setFormData({ ...formData, 
                    saude: {
                      ...formData.saude,
                      historia_doenca: e.target.value
                    }
                    })
            } 
            >
                
            </textarea>
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
                    <td>
                        <input 
                            type="checkbox" 
                            checked={formData.saude.diabetes_hma}
                            onChange={(e) => 
                                setFormData({
                                    ...formData,
                                    saude: {
                                        ...formData.saude,
                                        diabetes_hma:e.target.checked
                                    }
                                })
                            }

                        />
                    </td>
                    <td>
                        <input 
                            type="checkbox" 
                            checked={formData.saude.diabetes_hf}
                            onChange={(e) => 
                                setFormData({
                                    ...formData,
                                    saude: {
                                        ...formData.saude,
                                        diabetes_hf:e.target.checked
                                    }
                                })
                            }
                        />
                    </td>
                </tr>
                <tr>
                    <td>Hipertensão</td>
                    <td>
                        <input 
                            type="checkbox" 
                            checked={formData.saude.hipertencao_hma}
                            onChange={(e) => 
                                setFormData({
                                    ...formData,
                                    saude: {
                                        ...formData.saude,
                                        hipertencao_hma:e.target.checked
                                    }
                                })
                            }
                        />
                    </td>
                    <td>
                        <input 
                            type="checkbox" 
                            checked={formData.saude.hipertencao_hf}
                            onChange={(e) => 
                                setFormData({
                                    ...formData,
                                    saude: {
                                        ...formData.saude,
                                        hipertencao_hf:e.target.checked
                                    }
                                })
                            } 
                        />
                    </td>
                </tr>
                <tr>
                    <td>Doença Cardiovacular</td>
                    <td>
                        <input 
                            type="checkbox" 
                            checked={formData.saude.doenca_cardiovascular_hma}
                            onChange={(e) => 
                                setFormData({
                                    ...formData,
                                    saude: {
                                        ...formData.saude,
                                        doenca_cardiovascular_hma:e.target.checked
                                    }
                                })
                            }
                        />
                    </td>
                    <td>
                        <input 
                            type="checkbox" 
                            checked={formData.saude.doenca_cardiovascular_hf}
                            onChange={(e) => 
                                setFormData({
                                    ...formData,
                                    saude: {
                                        ...formData.saude,
                                        doenca_cardiovascular_hf:e.target.checked
                                    }
                                })
                            }
                        />
                    </td>
                </tr>
                <tr>
                    <td>Dislipidemia</td>
                    <td>
                        <input 
                            type="checkbox" 
                            checked={formData.saude.dislipidemia_hma}
                            onChange={(e) => 
                                setFormData({
                                    ...formData,
                                    saude: {
                                        ...formData.saude,
                                        dislipidemia_hma:e.target.checked
                                    }
                                })
                            }
                        />
                    </td>
                    <td>
                        <input 
                            type="checkbox" 
                            checked={formData.saude.dislipidemia_hf}
                            onChange={(e) => 
                                setFormData({
                                    ...formData,
                                    saude: {
                                        ...formData.saude,
                                        dislipidemia_hf:e.target.checked
                                    }
                                })
                            }
                        />
                    </td>
                </tr>
                <tr>
                    <td>Câncer</td>
                    <td>
                        <input 
                            type="checkbox" 
                            checked={formData.saude.cancer_hma}
                            onChange={(e) => 
                                setFormData({
                                    ...formData,
                                    saude: {
                                        ...formData.saude,
                                        cancer_hma:e.target.checked
                                    }
                                })
                            }
                        />
                    </td>
                    <td>
                        <input 
                            type="checkbox" 
                            checked={formData.saude.cancer_hf}
                            onChange={(e) => 
                                setFormData({
                                    ...formData,
                                    saude: {
                                        ...formData.saude,
                                        cancer_hf:e.target.checked
                                    }
                                })
                            } 
                        />
                    </td>
                </tr>
                <tr>
                    <td>Osteoporose</td>
                    <td>
                        <input 
                            type="checkbox" 
                            checked={formData.saude.osteoporose_hma}
                            onChange={(e) => 
                                setFormData({
                                    ...formData,
                                    saude: {
                                        ...formData.saude,
                                        osteoporose_hma:e.target.checked
                                    }
                                })
                            }
                        />
                    </td>
                    <td>
                        <input 
                            type="checkbox" 
                            checked={formData.saude.osteoporose_hf}
                            onChange={(e) => 
                                setFormData({
                                    ...formData,
                                    saude: {
                                        ...formData.saude,
                                        osteoporose_hf:e.target.checked
                                    }
                                })
                            } 
                        />
                    </td>
                </tr>
                <tr>
                    <td>Depressão/Ansiedade</td>
                    <td>
                        <input 
                            type="checkbox" 
                            checked={formData.saude.depressao_hma}
                            onChange={(e) => 
                                setFormData({
                                    ...formData,
                                    saude: {
                                        ...formData.saude,
                                        depressao_hma:e.target.checked
                                    }
                                })
                            } 
                        />
                    </td>
                    <td>
                        <input 
                            type="checkbox" 
                            checked={formData.saude.depressao_hf}
                            onChange={(e) => 
                                setFormData({
                                    ...formData,
                                    saude: {
                                        ...formData.saude,
                                        depressao_hf:e.target.checked
                                    }
                                })
                            } 
                        />
                    </td>
                </tr>
                <tr>
                    <td>Síndrome dos ovários policísticos</td>
                    <td>
                        <input 
                            type="checkbox" 
                            checked={formData.saude.sop_hma}
                            onChange={(e) => 
                                setFormData({
                                    ...formData,
                                    saude: {
                                        ...formData.saude,
                                        sop_hma:e.target.checked
                                    }
                                })
                            } 
                        />
                    </td>
                    <td>
                        <input 
                            type="checkbox" 
                            checked={formData.saude.sop_hf}
                            onChange={(e) => 
                                setFormData({
                                    ...formData,
                                    saude: {
                                        ...formData.saude,
                                        sop_hf:e.target.checked
                                    }
                                })
                            } 
                        />
                    </td>
                </tr>
                
                
            </tbody>

        </table>

    </div>

    <div className='d-flex flex-column align-items-start '>
        <label htmlFor="">Outras patologias:</label>
        <textarea 
            value={formData.saude.outras_patologias}
            onChange={(e) =>
                  setFormData({ ...formData, 
                    saude: {
                      ...formData.saude,
                      outras_patologias: e.target.value
                    }
                    })
            }>
            
        </textarea>
    </div>
    <div>
        <label htmlFor="">Faz uso de medicamentos?</label>
        <input 
            type="radio" 
            name="medicamentos" 
            id="uso_medicamentos" 
            checked={formData.saude.faz_uso_medicamentos === true}
            onChange={(e) =>
                  setFormData({ ...formData,
                    saude: {
                      ...formData.saude,
                      faz_uso_medicamentos: true
                    }
                  })
                }
        />
        <label htmlFor="uso_medicamentos">Sim</label>

        <input 
            type="radio" 
            name="medicamentos"
            id="nao_uso_medicamentos" 
            checked={formData.saude.faz_uso_medicamentos === false}
            onChange={(e) =>
                  setFormData({ ...formData,
                    saude: {
                      ...formData.saude,
                      faz_uso_medicamentos: false
                    }
                  })
                }
        />
        <label htmlFor="nao_uso_medicamentos">Não</label>

        <label htmlFor="">Quais:</label>

        <input 
            type="text" 
            value={formData.saude.medicamentos}
            placeholder='Ex: Fluoexetina'
            onChange={(e) =>
                setFormData({ ...formData,
                    saude: {
                      ...formData.saude,
                      medicamentos: e.target.value
                    }
                  })
                }
        />
    </div>
    <div>
        

    </div>
    
    </>
  )
}

export default DadosSaude
