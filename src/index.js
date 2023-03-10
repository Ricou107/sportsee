import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header/Header';
import MainContent from "./components/MainContent/MainContent";
import { useState } from "react";


function App() {
const [userId, updateUserId] = useState(12);

  return (
    <React.StrictMode>
      <Header updateUserId={updateUserId} />
      <MainContent userId={userId} />
    </React.StrictMode>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

