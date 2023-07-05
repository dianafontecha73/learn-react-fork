import React from 'react';
import ReactDOM from 'react-dom/client';

// React Router DOM
import { BrowserRouter } from "react-router-dom";
// Clerk
import { ClerkProvider } from "@clerk/clerk-react";

import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("No se ha encontrado la contraseña de Clerk. Revisa el .env")
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* TODO: Añadir localización esES -> guía: https://clerk.com/docs/nextjs/localization */}
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
