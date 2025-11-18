import React from 'react'
import { Card } from "react-bootstrap";


const AntropometricaDetails = ({anamnese}) => {
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
                    <span className="fw-medium">{anamnese.peso_atual || "-"} Kg</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Peso Usual:</small>
                    <span className="fw-medium">{anamnese.peso_usual || "-"} Kg</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">AJ:</small>
                    <span className="fw-medium">{anamnese.aj || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Altura real:</small>
                    <span className="fw-medium">{anamnese.altura_real || "-"} m</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Altura Estimada:</small>
                    <span className="fw-medium">{anamnese.altura_estimada || "-"} m</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">IMC:</small>
                    <span className="fw-medium">{anamnese.imc || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Circunferência do braço:</small>
                    <span className="fw-medium">{anamnese.circunferencia_braco || "-"} cm</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Circunferência do pescoço:</small>
                    <span className="fw-medium">{anamnese.circunferencia_pescoco || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Prega cutânea triciptal:</small>
                    <span className="fw-medium">{anamnese.pct || "-"} mm</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Prega cutânea briciptal:</small>
                    <span className="fw-medium">{anamnese.pcb || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">PCSE:</small>
                    <span className="fw-medium">{anamnese.pcse || "-"} mm</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">PCSI:</small>
                    <span className="fw-medium">{anamnese.pcsi || "-"} mm</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Circunferência de cintura:</small>
                    <span className="fw-medium">{anamnese.circunferencia_cintura || "-"} cm</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Circunferência da panturrilha:</small>
                    <span className="fw-medium">{anamnese.circunferencia_panturrilha || "-"} cm</span>
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

export default AntropometricaDetails
