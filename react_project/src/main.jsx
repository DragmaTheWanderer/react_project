import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './OrigApp/App.jsx'
import BaseBackground from './BaseBackground/BaseBackground.jsx'

//import '/Scripts/bootstrap.js';
import '/Content/bootstrap.css';
import '/Content/bootstrap-grid.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container">
        <BaseBackground />
    </div>
  </StrictMode>,
)
