import React from 'react'
import { Card } from "react-bootstrap";


const AntropometricaChildDetails = ({anamnese}) => {
  return (
    <div>
      <Card.Body>
         <Card.Title className='mb-4 border-bottom pb-2' style={{fontFamily:"arial"}}>
            Avaliação Antropométrica
        </Card.Title>

        <div className='row g-3 mb-4 ps-1'>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Peso Atual:</small>
                    <span className="fw-medium">{anamnese.peso_atual || "-"} </span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Peso ao nascer:</small>
                    <span className="fw-medium">{anamnese.peso_ao_nascer || "-"} </span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Comprimento ao nascer:</small>
                    <span className="fw-medium">{anamnese.comprimento_ao_nascer || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Altura:</small>
                    <span className="fw-medium">{anamnese.altura || "-"} </span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">E/I:</small>
                    <span className="fw-medium">{anamnese.e_i || "-"} </span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">P/I:</small>
                    <span className="fw-medium">{anamnese.p_i || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Peso para comprimento:</small>
                    <span className="fw-medium">{anamnese.peso_para_comprimento || "-"} </span>
                </div>                            
            </div>
        </div>

        <div>
            <h6 className="text-muted fw-semibold mb-2 ms-1 small text-uppercase">
                Diagnóstico Antropométrico:
            </h6>
            <div className="p-3 bg-light rounded border-start border-success border-3">
                <p className="mb-0 text-muted fst-italic" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' , fontFamily:"sans-serif"}}>
                {anamnese.diagnostico_antropometrico || <span className="text-muted fst-italic">Não informado</span>}
                </p>
            </div>
        </div>
      </Card.Body>
    </div>
  )
}

export default AntropometricaChildDetails
