import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import './index.css';
import App from './App.jsx';
//import "bootstrap/dist/css/bootstrap.min.css";
import Container from './component/container';
import './project.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container />
  </StrictMode>,
)
