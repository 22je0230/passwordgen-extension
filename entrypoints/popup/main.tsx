import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { MemoryRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <MemoryRouter> {/* Use MemoryRouter in extensions */}
    <App />
  </MemoryRouter>
</React.StrictMode>,
);
