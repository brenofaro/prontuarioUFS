import SearchPanel from "../../components/SearchPanel/SearchPanel";
import CadastratePatienteButton from "../../components/CadastratePatienteButton/CadastratePatienteButton";

const InitialPage = () => {
  return (
    <div className="container mt-4 border rounded p-4 bg-light">
      <SearchPanel />
      <CadastratePatienteButton />
    </div>
  );
};

export default InitialPage;
