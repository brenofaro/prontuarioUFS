import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CadastrateAnamneseButton from "../../components/CadastrateAnamneseButton/CadastrateAnamneseButton";
import AnamneseList from "./AnamneseList";

const PatientePage = () => {
  const { id } = useParams(); // pega o ID da URL
  const [paciente, setPaciente] = useState(null);

  useEffect(() => {
    const fetchPatiente = async () => {
      try {
        const response = await fetch(`http://localhost:8080/pacientes/${id}`);
        const data = await response.json();
        setPaciente(data);
      } catch (error) {
        console.error("Erro ao buscar paciente:", error);
      }
    };

    fetchPatiente();
  }, [id]);

  if (!paciente) {
    return <p className="text-center mt-4">Carregando informações do paciente...</p>;
  }

  return (
    <div className="container mt-4">
      <h3 className="fw-semibold text-primary mb-3">{paciente.nome}</h3>
      <p><strong>CPF:</strong> {paciente.cpf}</p>
      <p><strong>Endereço:</strong> {paciente.endereco}</p>
      <p><strong>Data de nascimento:</strong> {paciente.dataNascimento}</p>

      <hr />

      <CadastrateAnamneseButton pacienteId={paciente.id} />
       {/* 📋 Lista de anamneses */}
      <AnamneseList/>

    </div>

    
  );
};

export default PatientePage;
