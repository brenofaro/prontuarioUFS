import { Card } from "react-bootstrap";

const SocioEconomicosChildDetails = ({ anamnese }) => {
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
          Dados Sócio-econômicos:
        </Card.Title>

        <div className="mb-5">
          <div className="row g-3">
            <div className="col-md-4">
              <div className="bg-white rounded-3 p-3">
                <div className="d-flex align-items-center mb-3">
                  <span className="text-muted me-2">Escolar:</span>
                  <span
                    className={`badge ${anamnese.escolar ? "bg-success" : "bg-secondary"}`}
                  >
                    {booleanLabels[anamnese.escolar] ?? "-"}
                  </span>
                </div>

                {anamnese.escolar === true && (
                  <div className="ms-4 border-start border-2 border-success ps-3">
                    <div className="mb-2">
                      <small className="text-muted d-block">Série</small>
                      <span className="fw-medium">
                        {anamnese.serie_escolar || "-"}
                      </span>
                    </div>
                    <div>
                      <small className="text-muted d-block">Turno</small>
                      <span className="fw-medium">
                        {anamnese.turno_escolar || "-"}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="col-md-4">
              <div className="d-flex align-items-start">
                <div className="flex-grow-1">
                  <small className="text-muted d-block">
                    Adaptação Escolar
                  </small>
                  <span className="fw-medium">
                    {booleanLabels[anamnese.adaptacao_escolar] || "-"}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-start">
                <div className="flex-grow-1">
                  <small className="text-muted d-block">Merenda Escolar</small>
                  <span className="fw-medium">
                    {booleanLabels[anamnese.merenda_escolar] || "-"}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="d-flex align-items-start">
                <div className="flex-grow-1">
                  <small className="text-muted d-block">Criança Ativa?</small>
                  <span className="fw-medium">
                    {anamnese.crianca_ativa || "-"}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-start">
                <div className="flex-grow-1">
                  <small className="text-muted d-block">
                    Horário que dorme
                  </small>
                  <span className="fw-medium">
                    {anamnese.horario_dorme || "-"}h
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-start">
                <div className="flex-grow-1">
                  <small className="text-muted d-block">
                    Horário que acorda
                  </small>
                  <span className="fw-medium">
                    {anamnese.horario_acorda || "-"}h
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <div className="bg-white rounded-3 p-3">
              <div className="d-flex align-items-center mb-3">
                <span className="text-muted me-2">
                  Pratica Atividade Física?
                </span>
                <span
                  className={`badge ${anamnese.faz_atividade_fisica ? "bg-success" : "bg-secondary"}`}
                >
                  {booleanLabels[anamnese.faz_atividade_fisica] ?? "-"}
                </span>
              </div>

              {anamnese.faz_atividade_fisica === true && (
                <div className="ms-4 border-start border-2 border-success ps-3">
                  <div className="mb-2">
                    <small className="text-muted d-block">Atividade</small>
                    <span className="fw-medium">
                      {anamnese.qual_atividade_fisica || "-"}
                    </span>
                  </div>
                  <div>
                    <small className="text-muted d-block">Frequência</small>
                    <span className="fw-medium">
                      {anamnese.frequencia_atividade_fisica || "-"}
                    </span>
                  </div>
                </div>
              )}

              <div className="d-flex align-items-center mt-3">
                <span className="text-muted me-2">Já praticou antes:</span>
                <span
                  className={`badge ${anamnese.ja_fez_atividade_fisica ? "bg-success" : "bg-secondary"}`}
                >
                  {booleanLabels[anamnese.ja_fez_atividade_fisica] ?? "-"}
                </span>
              </div>

              {anamnese.ja_fez_atividade_fisica === true && (
                <div className="ms-4 border-start border-2 border-success ps-3 mt-2">
                  <small className="text-muted d-block">Tempo parado</small>
                  <span className="fw-medium">
                    {anamnese.tempo_parado_atividade_fisica || "-"}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <small className="text-muted d-block mb-2">
              Estrutura Familiar
            </small>
            <div className="p-3 bg-white rounded border-start border-success border-3">
              <ul className="list-unstyled mb-0">
                {anamnese.pai_mae && <li className="mb-2">Pai e Mãe</li>}
                {anamnese.conjuge && <li className="mb-2">Cônjuge</li>}
                {anamnese.filho && <li className="mb-2">Filho</li>}
                {anamnese.irmao && <li className="mb-2">Irmão</li>}
                {anamnese.netos && <li className="mb-2">Netos</li>}
                {anamnese.sobrinho && <li className="mb-2">Sobrinho</li>}
                {anamnese.cunhado && <li className="mb-2">Cunhado</li>}
                {anamnese.so && <li className="mb-2">Sozinho</li>}
                {anamnese.amigos && <li className="mb-2">Amigos</li>}
              </ul>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <small className="text-muted d-block mb-2">
              Outras pessoas da estrutura familiar
            </small>
            <div className="p-3 bg-white rounded border-start border-success border-3">
              {anamnese.outros_da_familia}
            </div>
          </div>
        </div>
        <div className="">
              <div className="row">
                <div className="col-md-4">
                  <div className="d-flex align-items-start">
                    <div className="flex-grow-1">
                      <small className="text-muted d-block">
                        Ocupação da responsável
                      </small>
                      <span className="fw-medium">
                        {anamnese.ocupacao_responsavel || "-"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="d-flex align-items-start">
                    <div className="flex-grow-1">
                      <small className="text-muted d-block">
                        Renda Pessoal
                      </small>
                      <span className="fw-medium">
                        {anamnese.renda_pessoal || "-"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-items-start">
                    <div className="flex-grow-1">
                      <small className="text-muted d-block">
                        Gastos com Alimentação
                      </small>
                      <span className="fw-medium">
                        {anamnese.gastos_alimentacao || "-"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </Card.Body>
    </div>
  );
};

export default SocioEconomicosChildDetails;
