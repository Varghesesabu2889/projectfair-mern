import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import ContextShare from './context/ContextShare';
import TokenAuth from './context/TokenAuth';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextShare>
    <BrowserRouter>
    <TokenAuth>
    <App />
    </TokenAuth>

</BrowserRouter>
    </ContextShare>

     </React.StrictMode>
);


