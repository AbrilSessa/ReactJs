/*--Modulos/Dependencias--*/

import React from 'react';
import ReactDOM from 'react-dom/client';

/*--Componentes--*/
import './index.css';
import App from './App';

/*--Web Vitals--*/
import reportWebVitals from './reportWebVitals';

/*--Selector base de JS--*/
const root = ReactDOM.createRoot(document.getElementById('root'));

/*--Aca se Reinderiza--*/
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();