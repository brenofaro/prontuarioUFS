import { Card } from "react-bootstrap";

const booleanLabels = {
  true: "Sim",
  false: "Não",
};

const apetiteLabels = {
  normal: "Normal",
  aumentado: "Aumentado",
  diminuido: "Diminuido",
};

const HistoriaAlimentarDetails = ({ anamnese }) => {
  return (
    <div>
      <Card.Body>
        <Card.Title
          className="mb-4 border-bottom pb-2"
          style={{ fontFamily: "arial" }}
        >
          História Alimentar
        </Card.Title>
        <div className="row mb-4 ps-1">
          <div className="col-md-3">
            <small className="text-muted d-block">Ingestão hídrica:</small>
            <span className="fw-medium">
              {anamnese.ingestao_hidrica || "-"}
            </span>
          </div>
          <div className="col-md-3">
            <small className="text-muted d-block">Apetite:</small>
            <span className="fw-medium">
              {apetiteLabels[anamnese.apetite] || "-"}
            </span>
          </div>
        </div>

        <div className="row g-3 mb-4 ps-1">
          <div className="col-md-4">
            <h6 className="text-muted fw-semibold mb-3 small text-uppercase border-bottom pb-2">
              Aversões alimentares
            </h6>
            <div className="bg-light rounded-3 p-3">
              <div className="d-flex align-items-center mb-3">
                <span className="text-muted me-2">Possui:</span>
                <span
                  className={`badge ${anamnese.possui_aversoes_alimentares ? "bg-success" : "bg-secondary"}`}
                >
                  {booleanLabels[anamnese.possui_aversoes_alimentares] ?? "-"}
                </span>
              </div>

              {anamnese.possui_aversoes_alimentares === true && (
                <div className="ms-4 border-start border-2 border-success ps-3">
                  <div className="mb-2">
                    <small className="text-muted d-block">Quais:</small>
                    <span className="fw-medium">
                      {anamnese.aversoes_alimentares || "-"}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="col-md-4">
            <h6 className="text-muted fw-semibold mb-3 small text-uppercase border-bottom pb-2">
              Alergias/Intolerâncias alimentares
            </h6>
            <div className="bg-light rounded-3 p-3">
              <div className="d-flex align-items-center mb-3">
                <span className="text-muted me-2">Possui:</span>
                <span
                  className={`badge ${anamnese.possui_alergias_alimentares ? "bg-success" : "bg-secondary"}`}
                >
                  {booleanLabels[anamnese.possui_alergias_alimentares] ?? "-"}
                </span>
              </div>

              {anamnese.possui_alergias_alimentares === true && (
                <div className="ms-4 border-start border-2 border-success ps-3">
                  <div className="mb-2">
                    <small className="text-muted d-block">Quais:</small>
                    <span className="fw-medium">
                      {anamnese.alergias_alimentares || "-"}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-4">
            <h6 className="text-muted fw-semibold mb-3 small text-uppercase border-bottom pb-2">
              Horário que sente mais fome
            </h6>
            <div className="bg-light rounded-3 p-3">
              <div className="d-flex align-items-center mb-3">
                <span className="text-muted me-2">Existe:</span>
                <span
                  className={`badge ${anamnese.existe_horario_mais_fome ? "bg-success" : "bg-secondary"}`}
                >
                  {booleanLabels[anamnese.existe_horario_mais_fome] ?? "-"}
                </span>
              </div>

              {anamnese.existe_horario_mais_fome === true && (
                <div className="ms-4 border-start border-2 border-success ps-3">
                  <div className="mb-2">
                    <small className="text-muted d-block">Quais:</small>
                    <span className="fw-medium">
                      {anamnese.horario_mais_fome || "-"}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="ps-2">
          <h6 className="text-muted fw-semibold mb-2 small text-uppercase">
            Diagnóstico nutricional conclusivo:
          </h6>
          <div className="p-3 bg-light rounded border-start border-success border-3">
            <p
              className="mb-0 text-muted"
              style={{
                whiteSpace: "pre-wrap",
                lineHeight: "1.6",
                fontFamily: "arial",
              }}
            >
              {anamnese.diagnostico_conclusivo || (
                <span className="text-muted fst-italic">Não informado</span>
              )}
            </p>
          </div>
        </div>
      </Card.Body>
    </div>
  );
};

export default HistoriaAlimentarDetails;
