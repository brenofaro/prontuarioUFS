import { Card } from "react-bootstrap";

const InqueritoRetornoDetails = ({ anamnese }) => {
  const satisfacaoLabels = {
    insatisfeito: "Insatisfeito",
    pouco_satisfeito: "Pouco Satisfeito",
    satisfeito: "Satisfeito",
    muito_satisfeito: "Muito Satisfeito",
  };

  return (
    <div>
      <Card.Body>
        <Card.Title
          className="mb-4 border-bottom pb-2"
          style={{ fontFamily: "arial" }}
        >
          Inquérito de Retorno:
        </Card.Title>

        <div className="row g-3 ps-1">
          <div>
            <h6 className="text-muted fw-semibold mb-2 small text-uppercase">
              Quais foram as maiores dificuldades na realização do plano
              anterior?
            </h6>
            <div className="p-3 bg-light rounded border-start border-success border-3">
              <p
                className="mb-0 text-dark"
                style={{
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.6",
                  fontFamily: "arial",
                }}
              >
                {anamnese.dificuldades_plano_anterior || (
                  <span className="text-muted fst-italic">Não informado</span>
                )}
              </p>
            </div>
          </div>

          <div>
            <h6 className="text-muted fw-semibold mb-2 small text-uppercase">
              O que você sentiu falta ou queria modificar na sua dieta?
            </h6>
            <div className="p-3 bg-light rounded border-start border-success border-3">
              <p
                className="mb-0 text-dark"
                style={{
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.6",
                  fontFamily: "sans-serif",
                }}
              >
                {anamnese.falta_dieta || (
                  <span className="text-muted fst-italic">Não informado</span>
                )}
              </p>
            </div>
          </div>

          <div>
            <h6 className="text-muted fw-semibold mb-2 small text-uppercase ">
              Como está sua rotina de exercícios? (horários, modalidade,
              frequência, intensidade)
            </h6>
            <div className="p-3 bg-light rounded border-start border-success border-3 ">
              <p
                className="mb-0 text-dark"
                style={{
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.6",
                  fontFamily: "sans-serif",
                }}
              >
                {anamnese.rotina_exercicios || (
                  <span className="text-muted fst-italic">Não informado</span>
                )}
              </p>
            </div>
          </div>

          <div>
            <h6 className="text-muted fw-semibold mb-2 small text-uppercase ">
              Tem alguma alteração/modificação em relação a exames/problemas de
              saúde/medicamentos apresentados na última consulta?
            </h6>
            <div className="p-3 bg-light rounded border-start border-success border-3 ">
              <p
                className="mb-0 text-dark"
                style={{
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.6",
                  fontFamily: "sans-serif",
                }}
              >
                {anamnese.modificacao_exames || (
                  <span className="text-muted fst-italic">Não informado</span>
                )}
              </p>
            </div>
          </div>
          <div>
            <h6 className="text-muted fw-semibold mb-2 small text-uppercase ">
              Como foi a alimentação nos fins de semana?
            </h6>
            <div className="p-3 bg-light rounded border-start border-success border-3">
              <p
                className="mb-0 text-dark"
                style={{
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.6",
                  fontFamily: "sans-serif",
                }}
              >
                {anamnese.alimentacao_fds || (
                  <span className="text-muted fst-italic">Não informado</span>
                )}
              </p>
            </div>
          </div>
          <div>
            <h6 className="text-muted fw-semibold mb-2 small text-uppercase ">
              Como está em relação ao nível de estresse/ansiedade?
            </h6>
            <div className="p-3 bg-light rounded border-start border-success border-3">
              <p
                className="mb-0 text-dark"
                style={{
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.6",
                  fontFamily: "sans-serif",
                }}
              >
                {anamnese.nivel_estresse || (
                  <span className="text-muted fst-italic">Não informado</span>
                )}
              </p>
            </div>
          </div>
          <div>
            <h6 className="text-muted fw-semibold mb-2 small text-uppercase ">
              com as mudanças alimentares realizadas no último plano alimentar?
              (peso, medidas, intestino, disposição... o que achar importante).
            </h6>
            <div className="p-3 bg-light rounded border-start border-success border-3">
              <p
                className="mb-0 text-dark"
                style={{
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.6",
                  fontFamily: "sans-serif",
                }}
              >
                {anamnese.melhorou_mudancas || (
                  <span className="text-muted fst-italic">Não informado</span>
                )}
              </p>
            </div>
          </div>
          <div>
            <h6 className="text-muted fw-semibold mb-2 small text-uppercase ">
              que ainda precisa melhorar em suas atitudes e comportamentos
              alimentares?
            </h6>
            <div className="p-3 bg-light rounded border-start border-success border-3">
              <p
                className="mb-0 text-dark"
                style={{
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.6",
                  fontFamily: "sans-serif",
                }}
              >
                {anamnese.precisa_melhorar || (
                  <span className="text-muted fst-italic">Não informado</span>
                )}
              </p>
            </div>
          </div>
          <div>
            <h6 className="text-muted fw-semibold mb-2 small text-uppercase ">
              Em relação aos resultados do último plano alimentar, como você se
              sente?
            </h6>
            <div className="p-3 bg-light rounded border-start border-success border-3">
              <p
                className="mb-0 text-dark"
                style={{
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.6",
                  fontFamily: "sans-serif",
                }}
              >
                {anamnese.como_se_sente || (
                  <span className="text-muted fst-italic">Não informado</span>
                )}
              </p>
            </div>
          </div>
          <div>
            <small>Satisfação do paciente:</small>
            <div className="fw-medium">
              {satisfacaoLabels[anamnese.satisfacao_plano] || "-"}
            </div>
          </div>
        </div>
      </Card.Body>
    </div>
  );
};

export default InqueritoRetornoDetails;
