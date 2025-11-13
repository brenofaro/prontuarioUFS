import React from 'react'

const DadosIniciais = ({formData, setFormData}) => {
  return (
    <div>
      <label htmlFor="">Data Consulta</label>
        <input 
          type="date" 
          value={formData.data_consulta}
          onChange={(e) =>
            setFormData({
                ...formData,
                data_consulta: e.target.value
            })
            }
          
          
        />
        <label htmlFor="">Número Prontuário</label>
        <input 
          type="text" 
          value={formData.numero_prontuario}
          onChange={(e) =>
                setFormData({
                    ...formData,
                    numero_prontuario: e.target.value
                })
                }
          
        />
        <label htmlFor="">Nutricionista Responsável</label>
        <input 
          type="text" 
          value={formData.nutricionista_responsavel}
                    onChange={(e) =>
            setFormData({
                ...formData,
                nutricionista_responsavel: e.target.value
            })
            }
        />
    </div>
  )
}

export default DadosIniciais
