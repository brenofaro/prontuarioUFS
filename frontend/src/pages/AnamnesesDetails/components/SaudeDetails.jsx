import { Card } from "react-bootstrap";

const SaudeDetails = ({ anamnese }) => {
  const booleanLabels = {
    true: "Sim",
    false: "Não",
  };
  return (
    <div>
      <Card.Body>
        <Card.Title
          className="mb-4 border-bottom pb-2"
          style={{ fontFamily: "arial" }}
        >
          Dados de Saúde:
        </Card.Title>

        <div className="d-flex flex-column gap-3">
          <div>
            <h6 className="text-muted fw-semibold mb-2 small text-uppercase">
              Objetivo da Consulta
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
                {anamnese.objetivo_consulta || (
                  <span className="text-muted fst-italic">Não informado</span>
                )}
              </p>
            </div>
          </div>

          <div>
            <h6 className="text-muted fw-semibold mb-2 small text-uppercase">
              História da Doença
            </h6>
            <div className="p-3 bg-light rounded border-start border-success border-3">
              <p
                className="mb-0 text-muted"
                style={{
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.6",
                  fontFamily: "sans-serif",
                }}
              >
                {anamnese.historia_doenca || (
                  <span className="text-muted fst-italic">Não informado</span>
                )}
              </p>
            </div>
          </div>
          <div className="mb-2">
            <div className="row g-3 mt-1">
              <div className="mb-2">
                <div className="table-responsive">
                  <table className="table table-bordered table-hover align-middle">
                    <thead className="table-light">
                      <tr>
                        <th style={{ width: "50%" }}>Patologia</th>
                        <th className="text-center">HMA</th>
                        <th className="text-center">HF</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(anamnese.diabetes_hma || anamnese.diabetes_hf) && (
                        <tr>
                          <td>Diabetes</td>
                          <td className="text-center">
                            {anamnese.diabetes_hma ? (
                              <i className="bi bi-check-circle-fill text-success"></i>
                            ) : (
                              <i className="bi bi-dash-circle text-muted"></i>
                            )}
                          </td>
                          <td className="text-center">
                            {anamnese.diabetes_hf ? (
                              <i className="bi bi-check-circle-fill text-success"></i>
                            ) : (
                              <i className="bi bi-dash-circle text-muted"></i>
                            )}
                          </td>
                        </tr>
                      )}

                      {(anamnese.hipertencao_hma ||
                        anamnese.hipertencao_hf) && (
                        <tr>
                          <td>Hipertensão</td>
                          <td className="text-center">
                            {anamnese.hipertencao_hma ? (
                              <i className="bi bi-check-circle-fill text-success"></i>
                            ) : (
                              <i className="bi bi-dash-circle text-muted"></i>
                            )}
                          </td>
                          <td className="text-center">
                            {anamnese.hipertencao_hf ? (
                              <i className="bi bi-check-circle-fill text-success"></i>
                            ) : (
                              <i className="bi bi-dash-circle text-muted"></i>
                            )}
                          </td>
                        </tr>
                      )}

                      {(anamnese.doenca_cardiovascular_hma ||
                        anamnese.doenca_cardiovascular_hf) && (
                        <tr>
                          <td>Doença Cardiovascular</td>
                          <td className="text-center">
                            {anamnese.doenca_cardiovascular_hma ? (
                              <i className="bi bi-check-circle-fill text-success"></i>
                            ) : (
                              <i className="bi bi-dash-circle text-muted"></i>
                            )}
                          </td>
                          <td className="text-center">
                            {anamnese.doenca_cardiovascular_hf ? (
                              <i className="bi bi-check-circle-fill text-success"></i>
                            ) : (
                              <i className="bi bi-dash-circle text-muted"></i>
                            )}
                          </td>
                        </tr>
                      )}

                      {(anamnese.dislipidemia_hma ||
                        anamnese.dislipidemia_hf) && (
                        <tr>
                          <td>Dislipidemia</td>
                          <td className="text-center">
                            {anamnese.dislipidemia_hma ? (
                              <i className="bi bi-check-circle-fill text-success">
                                {" "}
                              </i>
                            ) : (
                              <i className="bi bi-dash-circle text-muted"></i>
                            )}
                          </td>
                          <td className="text-center">
                            {anamnese.dislipidemia_hf ? (
                              <i className="bi bi-check-circle-fill text-success">
                                {" "}
                              </i>
                            ) : (
                              <i className="bi bi-dash-circle text-muted"></i>
                            )}
                          </td>
                        </tr>
                      )}

                      {(anamnese.cancer_hma || anamnese.cancer_hf) && (
                        <tr>
                          <td>Câncer</td>
                          <td className="text-center">
                            {anamnese.cancer_hma ? (
                              <i className="bi bi-check-circle-fill text-success">
                                {" "}
                              </i>
                            ) : (
                              <i className="bi bi-dash-circle text-muted"></i>
                            )}
                          </td>
                          <td className="text-center">
                            {anamnese.cancer_hf ? (
                              <i className="bi bi-check-circle-fill text-success">
                                {" "}
                              </i>
                            ) : (
                              <i className="bi bi-dash-circle text-muted"></i>
                            )}
                          </td>
                        </tr>
                      )}

                      {(anamnese.osteoporose_hma ||
                        anamnese.osteoporose_hf) && (
                        <tr>
                          <td>Osteoporose</td>
                          <td className="text-center">
                            {anamnese.osteoporose_hma ? (
                              <i className="bi bi-check-circle-fill text-success">
                                {" "}
                              </i>
                            ) : (
                              <i className="bi bi-dash-circle text-muted"></i>
                            )}
                          </td>
                          <td className="text-center">
                            {anamnese.osteoporose_hf ? (
                              <i className="bi bi-check-circle-fill text-success">
                                {" "}
                              </i>
                            ) : (
                              <i className="bi bi-dash-circle text-muted"></i>
                            )}
                          </td>
                        </tr>
                      )}
                      {(anamnese.depressao_hma || anamnese.depressao_hf) && (
                        <tr>
                          <td>Depressão</td>
                          <td className="text-center">
                            {anamnese.depressao_hma ? (
                              <i className="bi bi-check-circle-fill text-success">
                                {" "}
                              </i>
                            ) : (
                              <i className="bi bi-dash-circle text-muted"></i>
                            )}
                          </td>
                          <td className="text-center">
                            {anamnese.depressao_hf ? (
                              <i className="bi bi-check-circle-fill text-success">
                                {" "}
                              </i>
                            ) : (
                              <i className="bi bi-dash-circle text-muted"></i>
                            )}
                          </td>
                        </tr>
                      )}
                      {(anamnese.sop_hma || anamnese.sop_hf) && (
                        <tr>
                          <td>Síndrome dos Ovários Policísticos</td>
                          <td className="text-center">
                            {anamnese.sop_hma ? (
                              <i className="bi bi-check-circle-fill text-success">
                                {" "}
                              </i>
                            ) : (
                              <i className="bi bi-dash-circle text-muted"></i>
                            )}
                          </td>
                          <td className="text-center">
                            {anamnese.sop_hf ? (
                              <i className="bi bi-check-circle-fill text-success">
                                {" "}
                              </i>
                            ) : (
                              <i className="bi bi-dash-circle text-muted"></i>
                            )}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {
                  !anamnese.diabetes_hma &&
                  !anamnese.diabetes_hf &&
                  !anamnese.hipertencao_hma &&
                  !anamnese.hipertencao_hf &&
                  !anamnese.doenca_cardiovascular_hma &&
                  !anamnese.doenca_cardiovascular_hf &&
                  !anamnese.dislipidemia_hma &&
                  !anamnese.dislipidemia_hf &&
                  !anamnese.cancer_hma &&
                  !anamnese.cancer_hf &&
                  !anamnese.osteoporose_hma &&
                  !anamnese.osteoporose_hf &&
                  !anamnese.depressao_hma &&
                  !anamnese.depressao_hf &&
                  !anamnese.sop_hma &&
                  !anamnese.sop_hf &&
                  (
                    <div className="alert alert-info">
                      <i className="bi bi-info-circle me-2"></i>
                      Nenhuma patologia registrada
                    </div>
                  )
                }
              </div>
            </div>
          </div>
          <div>
            <h6 className="text-muted fw-semibold mb-2 small text-uppercase">
              Outras Patogias
            </h6>
            <div className="p-3 bg-light rounded border-start border-success border-3">
              <p
                className="mb-0 text-muted"
                style={{
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.6",
                  fontFamily: "sans-serif",
                }}
              >
                {anamnese.outras_patologias || (
                  <span className="text-muted fst-italic">Não informado</span>
                )}
              </p>
            </div>
          </div>

          <div className="col-md-12">
            <h6 className="text-muted fw-semibold text-uppercase small mb-3 pb-2 border-bottom">
              Medicamentos
            </h6>
            <div className="bg-light rounded-3 p-3">
              <div className="d-flex align-items-center mb-3">
                <span className="text-muted me-2">Faz uso Atualmente:</span>
                <span
                  className={`badge ${anamnese.faz_uso_medicamentos ? "bg-success" : "bg-secondary"}`}
                >
                  {booleanLabels[anamnese.faz_uso_medicamentos] ?? "-"}
                </span>
              </div>

              {anamnese.faz_uso_medicamentos === true && (
                <div className="ms-4 border-start border-2 border-success ps-3">
                  <div className="mb-2">
                    <small className="text-muted d-block">Medicamentos:</small>
                    <span className="fw-medium" style={{ fontFamily: "arial" }}>
                      {anamnese.medicamentos || "-"}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card.Body>
    </div>
  );
};

export default SaudeDetails;
