import React from 'react'
import { Card } from "react-bootstrap";

const BioquimicoReturnDetails = ({anamnese}) => {
    const formatarData = (data) => {
        if (!data) return "-";
        const [ano, mes, dia] = data.split("-");
        return `${dia}/${mes}/${ano}`;
      };
  return (
    <div>
     <Card.Body>
        <Card.Title className='mb-4 border-bottom pb-2' style={{fontFamily:"arial"}}>
                    Exame Bioquímico:
                </Card.Title>
                <div className='row g-3 mb-4 ps-1'>
      <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Data:</small>
                    <span className="fw-medium">{formatarData(anamnese.data_eb) || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Vitamina A:</small>
                    <span className="fw-medium">{anamnese.vitamina_a || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Vitamina B12:</small>
                    <span className="fw-medium">{anamnese.vitamina_bdoze || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Fosfatase ácida prostática:</small>
                    <span className="fw-medium">{anamnese.fosfatase_prostatica || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Circunferência da cabeça:</small>
                    <span className="fw-medium">{anamnese.circunferencia_cabeca || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Vitamina D:</small>
                    <span className="fw-medium">{anamnese.vitamina_d || "-"}</span>
                </div>                            
            </div>
           
            </div>
            </Card.Body>
    </div>
  )
}

export default BioquimicoReturnDetails
