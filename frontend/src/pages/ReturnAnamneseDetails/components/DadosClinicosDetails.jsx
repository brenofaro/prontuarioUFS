import React from 'react'
import { Card } from "react-bootstrap";

const DadosClinicosDetails = ({anamnese}) => {
    const denticaoLabels = {
        ausente: "Ausente",
        em_desenvolvimento: "Em desenvolvimento",
        completa: "Completa",
      };

      const mastigacaoLabels = {
        normal: "Normal",
        comprometida: "Comprometida"
      };

      const ritmoInstestinalLabels = {
        normal: "Normal",
        diarreia: "Diarréia",
        obstipacao: "Obstipação"
      };

      const ritmoUrinarioLabels = {
        oliguria: "Oligúria",
        anuria: "Anúria",
        poliuria: "Poliúria",
        normal: "Normal"
      };

  return (
    <div>
       <Card.Body>
        <Card.Title className='mb-4 border-bottom pb-2' style={{fontFamily:"arial"}}>
            Sinais e sintomas clínicos:
        </Card.Title>

        <div className='row g-3 ps-1'>

        <div>
          <h6 className="text-muted fw-semibold mb-2 small text-uppercase">
            {/* <i className="bi bi-clipboard-check me-2"></i> */}
            Diagnóstico Clínico
          </h6>
          <div className="p-3 bg-light rounded border-start border-success border-3">
            <p className="mb-0 text-dark" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', fontFamily: "arial" }}>
              {anamnese.diagnostico_clinico || <span className="text-muted fst-italic">Não informado</span>}
            </p>
          </div>
        </div>

        {/* História da Doença */}
        <div>
          <h6 className="text-muted fw-semibold mb-2 small text-uppercase">
            {/* <i className="bi bi-journal-medical me-2"></i> */}
            Queixa Principal
          </h6>
          <div className="p-3 bg-light rounded border-start border-success border-3">
            <p className="mb-0 text-dark" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' , fontFamily:"sans-serif"}}>
              {anamnese.queixa_principal || <span className="text-muted fst-italic">Não informado</span>}
            </p>
          </div>
        </div>

        <div>
            <h6 className="text-muted fw-semibold mb-2 small text-uppercase ">
                {/* <i className="bi bi-heart-pulse me-2"></i> */}
                Medicações em uso:

            </h6>
            <div className="p-3 bg-light rounded border-start border-success border-3 mb-3">
                <p className="mb-0 text-dark" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' , fontFamily:"sans-serif"}}>
                    {anamnese.medicacoes_uso || <span className="text-muted fst-italic">Não informado</span>}
                </p>
            </div>
        </div>

        <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Ritmo intestinal:</small>
                    <span className="fw-medium">{ritmoInstestinalLabels[anamnese.ritmo_intestinal] || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Frequência ritmo intestinal:</small>
                    <span className="fw-medium">{anamnese.frequencia_ritmo_intestinal || "-"}</span>
                </div>                            
            </div>

            

            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Consistência ritmo intestinal:</small>
                    <span className="fw-medium">{anamnese.consistencia_ritmo_intestinal || "-"}</span>
                </div>                            
            </div>

             <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Ritmo urinário:</small>
                    <span className="fw-medium">{ritmoUrinarioLabels[anamnese.ritmo_urinario] || "-"}</span>
                </div>                            
            </div>

        <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Ingestão hídrica:</small>
                    <span className="fw-medium">{anamnese.ingestao_hidrica || "-"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Disfagia:</small>
                    <span className="fw-medium">{anamnese.disfagia === true ? "Sim" : (anamnese.disfagia === false ? "Não" : "")}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Odinofagia:</small>
                    <span className="fw-medium">{anamnese.odinofagia  === true ? "Sim" : "Não"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Dispepsia:</small>
                    <span className="fw-medium">{anamnese.dispepsia  === true ? "Sim" : "Não"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Náuseas:</small>
                    <span className="fw-medium">{anamnese.nauseas === true ? "Sim" : "Não"}</span>
                </div>                            
            </div>
            <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Vômitos:</small>
                    <span className="fw-medium">{anamnese.vomitos === true ? "Sim" : "Não"}</span>
                </div>                            
            </div>
               <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Flatulência:</small>
                    <span className="fw-medium">{anamnese.flatulencia === true ? "Sim" : "Não"}</span>
                </div>                            
            </div>
             <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Cefaléia:</small>
                    <span className="fw-medium">{anamnese.cefaleia || "-"}</span>
                </div>                            
            </div>
                    <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Sono:</small>
                    <span className="fw-medium">{anamnese.sono || "-"}</span>
                </div>                            
            </div>

                    <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Horário que dorme:</small>
                    <span className="fw-medium">{anamnese.horario_dorme || "-"}</span>
                </div>                            
            </div>
                    <div className='col-md-3'>
                <div className="flex-grow-1">
                    <small className="text-muted d-block">Horário que acorda:</small>
                    <span className="fw-medium">{anamnese.horario_acorda || "-"}</span>
                </div>                            
            </div>
                   <div>
            <h6 className="text-muted fw-semibold mb-2 small text-uppercase mt-4">
                {/* <i className="bi bi-heart-pulse me-2"></i> */}
                Outros dados clínicos:

            </h6>
            <div className="p-3 bg-light rounded border-start border-info border-3">
                <p className="mb-0 text-dark" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' , fontFamily:"sans-serif"}}>
                    {anamnese.outros_dados_clinicos || <span className="text-muted fst-italic">Não informado</span>}
                </p>
            </div>
        </div>


        </div>
      </Card.Body>
    </div>
  )
}

export default DadosClinicosDetails
