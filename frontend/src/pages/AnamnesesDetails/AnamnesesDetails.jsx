import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const AnamnesesDetails = () => {
  const { id } = useParams();
  const [anamnese, setAnamnese] = useState(null);

  useEffect(() => {
    const fetchAnamnese = async () => {
      try {
        const response = await fetch(`http://localhost:8080/base-anamneses/paciente/${id}`);
        if (!response.ok) throw new Error("Erro ao buscar anamnese");
        const data = await response.json();
        setAnamnese(data);
      } catch (error) {
        console.error("Erro ao buscar anamnese:", error);
      }
    };
    fetchAnamnese();
  }, [id]);

  if (!anamnese) return <p>Carregando detalhes...</p>;

  return (
    <div className="container mt-4">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>
            {anamnese.tipo === "padrao" && "🩺 Anamnese Padrão"}
            {anamnese.tipo === "infantil" && "🧒 Anamnese Infantil"}
            {anamnese.tipo === "retorno" && "🔁 Anamnese de Retorno"}
          </Card.Title>
          <hr />
          <p><strong>Queixa principal:</strong> {anamnese.queixa_principal}</p>
          <p><strong>Histórico da doença:</strong> {anamnese.historico_doenca}</p>
          <p><strong>Hábitos:</strong> {anamnese.habitos}</p>
          <p><strong>Observações:</strong> {anamnese.observacoes}</p>
          {/* <p><strong>Data da consulta:</strong> {new Date(anamnese.data_consulta).toLocaleDateString("pt-BR")}</p> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default AnamnesesDetails;
