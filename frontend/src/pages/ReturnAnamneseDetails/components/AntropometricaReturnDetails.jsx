import { Card } from "react-bootstrap";

const AntropometricaReturnDetails = ({ anamnese }) => {
  return (
    <div>
      <Card.Body>
        <Card.Title
          className="mb-4 border-bottom pb-2"
          style={{ fontFamily: "arial" }}
        >
          Avaliação Antropométrica:
        </Card.Title>
        <div className="row g-3 mb-4 ps-1">
          <div className="col-md-3">
            <div className="flex-grow-1">
              <small className="text-muted d-block">Peso:</small>
              <span className="fw-medium">{anamnese.peso || "-"}</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="flex-grow-1">
              <small className="text-muted d-block">Altura:</small>
              <span className="fw-medium">{anamnese.altura || "-"}</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="flex-grow-1">
              <small className="text-muted d-block">IMC/I:</small>
              <span className="fw-medium">{anamnese.imc_i || "-"}</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="flex-grow-1">
              <small className="text-muted d-block">E/I:</small>
              <span className="fw-medium">{anamnese.e_i || "-"}</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="flex-grow-1">
              <small className="text-muted d-block">
                Circunferência da cabeça:
              </small>
              <span className="fw-medium">
                {anamnese.circunferencia_cabeca || "-"}
              </span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="flex-grow-1">
              <small className="text-muted d-block">
                Circunferência da coxa:
              </small>
              <span className="fw-medium">
                {anamnese.circunferencia_coxa || "-"}
              </span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="flex-grow-1">
              <small className="text-muted d-block">
                Prega cutânea triciptal:
              </small>
              <span className="fw-medium">{anamnese.pct || "-"}</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="flex-grow-1">
              <small className="text-muted d-block">
                Circunferência do braço:
              </small>
              <span className="fw-medium">
                {anamnese.circunferencia_braco || "-"}
              </span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="flex-grow-1">
              <small className="text-muted d-block">IMC:</small>
              <span className="fw-medium">{anamnese.imc || "-"}</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="flex-grow-1">
              <small className="text-muted d-block">Grau do IMC:</small>
              <span className="fw-medium">{anamnese.grau_imc || "-"}</span>
            </div>
          </div>
        </div>
      </Card.Body>
    </div>
  );
};

export default AntropometricaReturnDetails;
