import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Identidade "Noite de revista": fontes servidas pelo próprio site (Fontsource)
import '@fontsource-variable/familjen-grotesk/wght.css'
import '@fontsource-variable/instrument-sans/wght.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
