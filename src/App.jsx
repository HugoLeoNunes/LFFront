import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clientes from './pages/Clientes'; // Importe a página Clientes
import Processos from './pages/Processos'; // Importe a página Processos
import Home from './pages/Home'; // Importe a página Home
import Nunes from './assets/Nunes.png'; // Importe a imagem do banner

const App = () => {
  const [activeTab, setActiveTab] = useState('clientes');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <BrowserRouter> 
      <div>
        {/* Renderização da imagem do banner */}
        <h1><img src={Nunes} alt="Banner Law Flow" /></h1>

        <Routes>
          <Route path="/" element={<Home />} /> {/* Rota para a página Home */}
          <Route path="/clientes" element={<Clientes />} /> {/* Rota para a página Clientes */}
          <Route path="/processos" element={<Processos />} /> {/* Rota para a página Processos */}
        </Routes> 
      </div>
    </BrowserRouter>
  );
};

export default App;

