import { Routes, Route } from "react-router-dom";
import InitialPage from "./pages/InitialPage/InitialPage.jsx";
import RegisterPatientePage from "./pages/RegisterPatientePage/RegisterPatientePage.jsx";
import PatientePage from "./pages/PatientePage/PatientePage.jsx";
import BaseAnamneseForm from "./components/BaseAnamneseForm/BaseAnamneseForm.jsx";
import ChildAnamneseForm from "./components/ChildAnamneseForm/ChildAnamneseForm.jsx";
import ReturnAnameseForm from "./components/ReturnAnamneseForm/ReturnAnameseForm.jsx";
import AnamnesesDetails from "./pages/AnamnesesDetails/AnamnesesDetails.jsx";
import FoodPlanForm from "./components/FoodPlanForm/FoodPlanForm.jsx";
import RecordatoryForm from "./components/RecordatoryForm/RecordatoryForm.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/cadastrar-paciente" element={<RegisterPatientePage />} />
      <Route path= "/pagina-paciente/:id" element={<PatientePage />} />
      <Route path="/anamnese-padrao/:pacienteId" element={<BaseAnamneseForm/>}/>
      <Route path="/anamnese-infantil/:pacienteId" element={<ChildAnamneseForm/>}/>
      <Route path="/anamnese-retorno/:pacienteId" element={<ReturnAnameseForm/>}/>
      <Route path="/anamnese-plano-alimentar/:pacienteId" element={<FoodPlanForm/>}/>
      <Route path="/anamnese-ficha-recordatorio/:pacienteId" element={<RecordatoryForm/>}/>
      <Route path="/detalhes-anamnese/:id" element={<AnamnesesDetails/>}/>
      <Route path="/base-anamnese/editar/:pacienteId/:anamneseId" element={<BaseAnamneseForm />} />

    </Routes>
  );
}

export default App;
