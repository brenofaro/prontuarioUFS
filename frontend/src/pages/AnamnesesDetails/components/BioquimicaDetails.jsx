import React from "react";
import { Card } from "react-bootstrap";

const BioquimicaDetails = ({ anamnese }) => {
  const formatarData = (data) => {
    if (!data) return "-";
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  };
  return (
    <div>
      <Card.Body>
        <Card.Title
          className="mb-4 border-bottom pb-2"
          style={{ fontFamily: "arial" }}
        >
          Avaliação Bioquímica:
        </Card.Title>

        <div className="flex-grow-1 mb-3 ps-1">
          <small className="text-muted d-block">
            Data da Avaliação Bioquímica:
          </small>
          <span className="">{formatarData(anamnese.data_ab) || "-"}</span>
        </div>
        <div>
          <div className="p-3 bg-light rounded border-start border-success border-3">
            <p
              className="mb-0 text-muted fst-italic"
              style={{
                whiteSpace: "pre-wrap",
                lineHeight: "1.6",
                fontFamily: "sans-serif",
              }}
            >
              {anamnese.avaliacao_bioquimica || (
                <span className="text-muted fst-italic">Não informado</span>
              )}
            </p>
          </div>
        </div>
      </Card.Body>
    </div>
  );
};

export default BioquimicaDetails;
