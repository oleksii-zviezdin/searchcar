import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './styled/index.css';
import './styled/reset.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter basename="/searchcar"> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
