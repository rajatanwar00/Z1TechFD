import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FileUpload from './assets/components/FileUpload.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FileUpload />
  </StrictMode>,
)
