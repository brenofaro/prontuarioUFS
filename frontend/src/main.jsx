import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import InitialPage from './pages/InitialPage/InitialPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InitialPage />
  </StrictMode>,
)
