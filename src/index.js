import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactModal from "react-modal";

import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import ModalsProvider from './components/modal/ModalsProvider.jsx';

ReactModal.setAppElement("#root");
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ModalsProvider>
      <App>
        
      </App> 
    </ModalsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
