import { Card } from "react-bootstrap";

const tableDetails = ({ anamnese }) => {
  return (
    <div>
      <Card.Body>
        <Card.Title
          className="mb-4 border-bottom pb-2"
          style={{ fontFamily: "arial" }}
        >
          Tabela de Planejamento Alimentar:
        </Card.Title>

        <div className="table-responsive">
          <table
            className="table align-middle mb-4"
            style={{ borderCollapse: "separate", borderSpacing: "0 8px" }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    width: "30%",
                    fontSize: "12px",
                    letterSpacing: "0.5px",
                    fontWeight: "600",
                    color: "#6c757d",
                    paddingBottom: "16px",
                    border: "none",
                  }}
                >
                  REFEIÇÃO/HORÁRIO
                </th>
                <th
                  style={{
                    width: "35%",
                    fontSize: "12px",
                    letterSpacing: "0.5px",
                    fontWeight: "600",
                    color: "#6c757d",
                    paddingBottom: "16px",
                    border: "none",
                  }}
                >
                  ALIMENTOS - QUANTIDADE/MEDIDA CASEIRA
                </th>
                <th
                  style={{
                    width: "35%",
                    fontSize: "12px",
                    letterSpacing: "0.5px",
                    fontWeight: "600",
                    color: "#6c757d",
                    paddingBottom: "16px",
                    border: "none",
                  }}
                >
                  SUBSTITUIÇÕES/OBSERVAÇÕES
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  refeicao: anamnese.refeicao_um,
                  alimentos: anamnese.alimentos_um,
                  substituicoes: anamnese.substituicoes_um,
                },
                {
                  refeicao: anamnese.refeicao_dois,
                  alimentos: anamnese.alimentos_dois,
                  substituicoes: anamnese.substituicoes_dois,
                },
                {
                  refeicao: anamnese.refeicao_tres,
                  alimentos: anamnese.alimentos_tres,
                  substituicoes: anamnese.substituicoes_tres,
                },
                {
                  refeicao: anamnese.refeicao_quatro,
                  alimentos: anamnese.alimentos_quatro,
                  substituicoes: anamnese.substituicoes_quatro,
                },
                {
                  refeicao: anamnese.refeicao_cinco,
                  alimentos: anamnese.alimentos_cinco,
                  substituicoes: anamnese.substituicoes_cinco,
                },
                {
                  refeicao: anamnese.refeicao_seis,
                  alimentos: anamnese.alimentos_seis,
                  substituicoes: anamnese.substituicoes_seis,
                },
              ].map((item, index) =>
                item.refeicao || item.alimentos || item.substituicoes ? (
                  <tr
                    key={index}
                    style={{
                      background: "white",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                    }}
                  >
                    <td
                      style={{
                        padding: "16px",
                        verticalAlign: "top",
                        borderLeft: "3px solid #0d6efd",
                        borderTop: "1px solid #e9ecef",
                        borderBottom: "1px solid #e9ecef",
                        borderTopLeftRadius: "8px",
                        borderBottomLeftRadius: "8px",
                      }}
                    >
                      <div
                        style={{
                          fontWeight: "600",
                          color: "#2c3e50",
                          fontSize: "14px",
                        }}
                      >
                        {item.refeicao || (
                          <span className="text-muted fst-italic">-</span>
                        )}
                      </div>
                    </td>

                    <td
                      style={{
                        padding: "16px",
                        verticalAlign: "top",
                        borderTop: "1px solid #e9ecef",
                        borderBottom: "1px solid #e9ecef",
                      }}
                    >
                      <div
                        style={{
                          whiteSpace: "pre-wrap",
                          lineHeight: "1.6",
                          color: "#495057",
                          fontSize: "14px",
                        }}
                      >
                        {item.alimentos || (
                          <span className="text-muted fst-italic">-</span>
                        )}
                      </div>
                    </td>

                    <td
                      style={{
                        padding: "16px",
                        verticalAlign: "top",
                        borderRight: "1px solid #e9ecef",
                        borderTop: "1px solid #e9ecef",
                        borderBottom: "1px solid #e9ecef",
                        borderTopRightRadius: "8px",
                        borderBottomRightRadius: "8px",
                      }}
                    >
                      <div
                        style={{
                          whiteSpace: "pre-wrap",
                          lineHeight: "1.6",
                          color: "#495057",
                          fontSize: "14px",
                        }}
                      >
                        {item.substituicoes || (
                          <span className="text-muted fst-italic">-</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ) : null,
              )}
            </tbody>
          </table>
        </div>

        <div className="ps-2 mt-4">
          <h6 className="text-muted fw-semibold mb-2 small text-uppercase">
            Observações:
          </h6>
          <div className="p-3 bg-light rounded border-start border-secondary border-3">
            <p
              className="mb-0 text-dark"
              style={{
                whiteSpace: "pre-wrap",
                lineHeight: "1.6",
                fontFamily: "arial",
              }}
            >
              {anamnese.observacoes_plano_alimentar || (
                <span className="text-muted fst-italic">Não informado</span>
              )}
            </p>
          </div>
        </div>
      </Card.Body>
    </div>
  );
};

export default tableDetails;
