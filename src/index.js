import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from "react-cookie";
import { HelmetProvider } from "react-helmet-async";
// import { hydrate, render } from "react-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <HelmetProvider>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </HelmetProvider>
  // </React.StrictMode>
);

// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(<App />, rootElement);
// } else {
//   render(<App />, rootElement);
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
