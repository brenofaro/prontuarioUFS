import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const AnamnesesDetails = () => {
  const { id } = useParams();
  const [anamnese, setAnamneses] = useState([]);
  const [loading, setLoading] = useState(true);  
  const escolaridadeLabels = {
      analfabeto: "Analfabeto",
      alfabetizado: "Alfabetizado",
      fundamental_incompleto_completo: "Ensino Fundamental (completo/incompleto)",
      medio_incompleto_completo: "Ensino Médio (completo/incompleto)",
      superior_incompleto_completo: "Ensino Superior (completo/incompleto)",
  };
  const booleanLabels = {
      true: "Sim",
      false: "Não",
  };

  useEffect(() => {
      const fetchAnamneses = async () => {
        try {
          const response = await fetch(`http://localhost:8080/base-anamneses/${id}`);
          if (!response.ok) {
            throw new Error("Erro ao buscar anamneses");
          }
          const data = await response.json();
          console.log(data);
          setAnamneses(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchAnamneses();
    }, [id]);

  if (loading) return <p>Carregando detalhes...</p>;

  return (
    <div className="container mt-4">
      <h3 className="fw-semibold text-primary mb-3">Detalhes da Anamnese</h3>
      
        <Card className="mb-3" key={anamnese.id}>
          <Card.Body>
            <Card.Title>Informações Gerais</Card.Title>
            <Card.Text>
              <strong>Data da consulta:</strong> {anamnese.data_consulta} <br />
              <strong>Número prontuário:</strong> {anamnese.numero_prontuario || "-"} <br />
              <strong>Nutricionista Responsável:</strong> {anamnese.nutricionista_responsavel || "-"} <br />
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Title>Dados SocioEconomicos</Card.Title>
            <Card.Text>
              <strong>Estado civil:</strong> {anamnese.estado_civil || "-"} <br />
              <strong>Escolaridade:</strong> {escolaridadeLabels[anamnese.escolaridade] || "-"} <br />
              <strong>Ocupação:</strong> {anamnese.ocupacao || "-"} <br />
              <strong>Exerce alguma atividade dentro de casa:</strong> {anamnese.faz_atividade_dentro_casa} <br />
              <strong>Estrutura Familiar:</strong> {anamnese.estrutura_familia || "-"} <br />
              <strong>Renda pessoal:</strong> R${anamnese.renda_pessoal || "-"} <br />
              <strong>Gastos de alimentação:</strong> R${anamnese.gastos_alimentacao || "-"} <br />
              <strong>Exerce alguma atividade física:</strong> {booleanLabels[anamnese.faz_atividade_fisica] ?? "-"}<br />
              {anamnese.faz_atividade_fisica === true && (
                <>
                  <strong>Qual atividade física:</strong> {anamnese.qual_atividade_fisica || "-"} <br />
                  <strong>Frequência de atividade física:</strong> {anamnese.frequencia_atividade_fisica || "-"} <br />
                </>
              )}
              <strong>Já fez atividade física:</strong> {booleanLabels[anamnese.ja_fez_atividade_fisica] ?? "-"} <br />
              {anamnese.ja_fez_atividade_fisica === true && (
                <>
                  <strong>Tempo parado de atividade física:</strong> {anamnese.tempo_parado_atividade_fisica || "-"} <br />
                </>
              )
              }
              <strong>Tem etilismo:</strong> {booleanLabels[anamnese.tem_etilismo] ?? "-"} <br />
              {anamnese.tem_etilismo === true && (
                <>
                  <strong>Tipo de etilismo:</strong> {anamnese.tipo_etilismo || "-"} <br />
                  <strong>Quanto etilismo:</strong> {anamnese.quanto_etilismo || "-"} <br />
                </>
              )}
              <strong>Já foi etilista:</strong> {booleanLabels[anamnese.ja_foi_etilista] ?? "-"} <br />
              {anamnese.ja_foi_etilista === true && (
                <>
                  <strong>Tempo parado de etilista:</strong> {anamnese.tempo_parado_etilismo || "-"} <br />
                </>
              ) 
              }
              <strong>Tem tabagismo:</strong> {booleanLabels[anamnese.tem_tabagismo] ?? "-"} <br />
              {anamnese.tem_tabagismo === true && (
                <>  
                  <strong>Tipo de tabagismo:</strong> {anamnese.tipo_tabagismo || "-"} <br />
                  <strong>Quanto tabagismo:</strong> {anamnese.quanto_tabagismo || "-"} <br />
                </>
              )
              }
              <strong>Já foi tabagista:</strong> {booleanLabels[anamnese.ja_foi_tabagista] ?? "-"} <br />
              {anamnese.ja_foi_tabagista === true && (
                <>
                  <strong>Tempo parado de tabagista:</strong> {anamnese.tempo_parado_tabagismo || "-"} <br /> 
                </>
              ) 
              }


            </Card.Text>
          </Card.Body>
        </Card>
      
    </div>
  );
};

export default AnamnesesDetails;

