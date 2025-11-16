import React from 'react'
import { Card } from "react-bootstrap";

const SaudeDetails = ({anamnese}) => {
  return (
    <div>
        <Card.Body>
            <Card.Title className='mb-4 d-flex align-items-center' style={{fontFamily:"arial"}}>
                <span className="bg-success bg-opacity-10 text-success rounded-circle p-2 me-2">
                    <i className="bi bi-people-fill"></i>
                    </span>
                Dados de Saúde
            </Card.Title>
            {anamnese.objetivo_consulta}<br/>
            {anamnese.historia_doenca}

        </Card.Body>
    </div>
  )
}

export default SaudeDetails
