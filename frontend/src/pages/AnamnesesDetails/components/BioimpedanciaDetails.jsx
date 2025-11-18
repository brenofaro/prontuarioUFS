import React from 'react'
import { Card } from "react-bootstrap";



const BioimpedanciaDetails = ({anamnese}) => {
  return (
    <div>
      <Card.Body>
        <Card.Title className='mb-4 border-bottom pb-2' style={{fontFamily:"arial"}}>
            Dados da Bioimpedância:
        </Card.Title>

        <div className='row g-3 mb-4 ps-1'>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Percentual de gordura:</small>
                    <span className="fw-medium">{anamnese.percentual_gordura || "-"}%</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Peso gordura:</small>
                    <span className="fw-medium">{anamnese.peso_gordura || "-"}Kg</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Massa magra:</small>
                    <span className="fw-medium">{anamnese.massa_magra || "-"}Kg</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Gordura alvo:</small>
                    <span className="fw-medium">{anamnese.gordura_alvo || "-"}%</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Peso alvo:</small>
                    <span className="fw-medium">{anamnese.peso_alvo || "-"}Kg</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">TMB:</small>
                    <span className="fw-medium">{anamnese.tmb || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Percentual de água da massa magra:</small>
                    <span className="fw-medium">{anamnese.percentual_agua_massa_magra || "-"}%</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Água corporal total:</small>
                    <span className="fw-medium">{anamnese.agua_corporal_total || "-"}</span>
                </div>                            
            </div>
        </div>
      </Card.Body>
    </div>
  )
}

export default BioimpedanciaDetails
