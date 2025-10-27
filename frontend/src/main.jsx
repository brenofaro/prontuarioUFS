import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Initial_page from './pages/Initial_page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Initial_page />
  </StrictMode>,
)
