const AvaliacaoAntropometrica = ({formData, setFormData}) => {
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
          value={formData.antropometrica.peso_atual}
          onChange={(e) =>
                  setFormData({ ...formData, 
                    antropometrica: {
                      ...formData.antropometrica,
                      peso_atual: e.target.value
                    }
                    })
            }

        />
        <label htmlFor=""> Peso usual(Kg):</label>
        <input 
          type="number" 
          placeholder='Ex: 72.5'
          step="0.1"
          min="0"
          className="w-15"
          value={formData.antropometrica.peso_usual}
          onChange={(e) =>
                  setFormData({ ...formData, 
                    antropometrica: {
                      ...formData.antropometrica,
                      peso_usual: e.target.value
                    }
                    })
            }

        />
        <label htmlFor="">AJ(cm):</label>
        <input 
          type="number" 
          placeholder='Ex: 120'
          min="0"
          className="w-15"
          value={formData.antropometrica.aj}
          onChange={(e) =>
                  setFormData({ ...formData, 
                    antropometrica: {
                      ...formData.antropometrica,
                      aj: e.target.value
                    }
                    })
            }
        />
        <label htmlFor="">Altura real(m):</label>
        <input 
          type="number" 
          placeholder='Ex: 1.75'
          step="0.10"
          min="0"
          className="w-15"
          value={formData.antropometrica.altura_real}
          onChange={(e) =>
                  setFormData({ ...formData, 
                    antropometrica: {
                      ...formData.antropometrica,
                      altura_real: e.target.value
                    }
                    })
            }

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
          value={formData.antropometrica.altura_estimada}
          onChange={(e) =>
                  setFormData({ ...formData, 
                    antropometrica: {
                      ...formData.antropometrica,
                      altura_estimada: e.target.value
                    }
                    })
            }

        />
        <label htmlFor=""> IMC(kg/m²):</label>
        <input 
          type="number" 
          placeholder='Ex: 72.5'
          step="0.1"
          min="0"
          className="w-15"
          value={formData.antropometrica.imc}
          onChange={(e) =>
                  setFormData({ ...formData, 
                    antropometrica: {
                      ...formData.antropometrica,
                      imc: e.target.value
                    }
                    })
            }

        />
        <label htmlFor="">Circunferência do braço(cm):</label>
        <input 
          type="number" 
          placeholder='Ex: 30'
          min="0"
          className="w-15"
          value={formData.antropometrica.circunferencia_braco}
          onChange={(e) =>
                  setFormData({ ...formData, 
                    antropometrica: {
                      ...formData.antropometrica,
                      circunferencia_braco: e.target.value
                    }
                    })
            }
        />
        <label htmlFor="">Comprimento do pescoço(cm):</label>
        <input 
          type="number" 
          placeholder='Ex: 40'
          min="0"
          className="w-15"
          value={formData.antropometrica.comprimento_cotovelo}
          onChange={(e) =>
                  setFormData({ ...formData, 
                    antropometrica: {
                      ...formData.antropometrica,
                      comprimento_cotovelo: e.target.value
                    }
                    })
            }
        />

    </div>
    <div className=''>
        <label className="form-label" htmlFor="">Prega cutânea triciptal(mm):</label>
        <input 
          type="number" 
          placeholder='Ex: 15'
          min="0"
          style={{ width: "10%" }}
          value={formData.antropometrica.pct}
          onChange={(e) =>
                  setFormData({ ...formData, 
                    antropometrica: {
                      ...formData.antropometrica,
                      pct: e.target.value
                    }
                    })
            }

        />
        <label htmlFor="">Prega cutânea biciptal(mm):</label>
        <input 
          type="number" 
          placeholder='Ex: 15'
          min="0"
          value={formData.antropometrica.pcb}
          onChange={(e) =>
                  setFormData({ ...formData, 
                    antropometrica: {
                      ...formData.antropometrica,
                      pcb: e.target.value
                    }
                    })
            }

        />
        <label htmlFor="">PCSE(mm):</label>
        <input 
          type="number" 
          placeholder='Ex: 30'
          min="0"
          className="w-15"
          value={formData.antropometrica.pcse}
          onChange={(e) =>
                  setFormData({ ...formData, 
                    antropometrica: {
                      ...formData.antropometrica,
                      pcse: e.target.value
                    }
                    })
            }
        />


    </div>
    <div>
      <label className="form-label" htmlFor="">PCSI(mm):</label>
        <input 
          type="number" 
          placeholder='Ex: 15'
          min="0"
          style={{ width: "10%" }}
          value={formData.antropometrica.pcsis}
          onChange={(e) =>
                  setFormData({ ...formData, 
                    antropometrica: {
                      ...formData.antropometrica,
                      pcsis: e.target.value
                    }
                    })
            }

        />
        <label htmlFor="">Circunferencia da cintura(cm):</label>
        <input 
          type="number" 
          placeholder='Ex: 100'
          min="0"
          style={{ width: "10%" }}
          value={formData.antropometrica.circunferencia_cintura}
          onChange={(e) =>
                  setFormData({ ...formData, 
                    antropometrica: {
                      ...formData.antropometrica,
                      circunferencia_cintura: e.target.value
                    }
                    })
            }
        />
        <label htmlFor="">Circunferencia da panturrilha(mm):</label>
        <input 
          type="number" 
          placeholder='Ex: 30'
          min="0"
          style={{ width: "10%" }}   
          value={formData.antropometrica.circunferencia_panturrilha}
          onChange={(e) =>
                  setFormData({ ...formData, 
                    antropometrica: {
                      ...formData.antropometrica,
                      circunferencia_panturrilha: e.target.value
                    }
                    })
            }     
          />

    </div>
    <div className="d-flex flex-column align-items-start">
      <label className="" htmlFor="">Diagnostico antropometrico</label>
      <textarea
        value={formData.antropometrica.diagnostico_antropometrico}
        onChange={(e) =>
                  setFormData({ ...formData, 
                    antropometrica: {
                      ...formData.antropometrica,
                      diagnostico_antropometrico: e.target.value
                    }
                    })
            }
      >

      </textarea>
    </div>
   </>


  )
}

export default AvaliacaoAntropometrica;
