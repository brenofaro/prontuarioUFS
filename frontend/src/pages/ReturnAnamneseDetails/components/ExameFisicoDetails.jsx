import React from 'react'
import { Card } from "react-bootstrap";


const ExameFisicoDetails = ({anamnese}) => {
  return (
    <div>
      <Card.Body>
        <Card.Title className='mb-4 border-bottom pb-2' style={{fontFamily:"arial"}}>
                    Exame Físico:
                </Card.Title>
                <div className='row g-3 mb-4 ps-1'>
      <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Cabelo:</small>
                    <span className="fw-medium">{anamnese.cabelo || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Mucosas:</small>
                    <span className="fw-medium">{anamnese.mucosas || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Dentição:</small>
                    <span className="fw-medium">{anamnese.denticao || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Lábios:</small>
                    <span className="fw-medium">{anamnese.labios || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Língua:</small>
                    <span className="fw-medium">{anamnese.lingua || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Gengiva:</small>
                    <span className="fw-medium">{anamnese.gengiva || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Pele:</small>
                    <span className="fw-medium">{anamnese.pele || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Unhas:</small>
                    <span className="fw-medium">{anamnese.unhas || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Abdômen:</small>
                    <span className="fw-medium">{anamnese.abdomen || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Edemas:</small>
                    <span className="fw-medium">{anamnese.edema || "-"}</span>
                </div>                            
            </div>
            </div>
            </Card.Body>
    </div>
  )
}

export default ExameFisicoDetails
