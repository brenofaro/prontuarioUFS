import React from "react";
import { useNavigate } from "react-router-dom";
import SearchPanel from "../../components/SearchPanel/SearchPanel";
import CadastratePatienteButton from "../../components/CadastratePatienteButton/CadastratePatienteButton";
import "./InitialPage.css";

const InitialPage = () => {
  return (
    <div className="container mt-4 border rounded p-4 bg-light">
      <SearchPanel />
      <CadastratePatienteButton />
    </div>
  );
};

export default InitialPage;
