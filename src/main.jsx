import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.scss';
import { BrowserRouter } from 'react-router-dom';
import "react-loading-skeleton/dist/skeleton.css";
import QueryProvider from '@/providers/queryProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <QueryProvider>
          <App />
    </QueryProvider>
    </BrowserRouter>
  </StrictMode>
)
