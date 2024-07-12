import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Nunes from '../components/Nunes'; // Assuming you have a banner component

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigateToClientes = () => {
    navigate('/clientes'); // Navigate to the Clientes page
  };

  const handleNavigateToProcessos = () => {
    navigate('/processos'); // Navigate to the Processos page
  };

  return (
    <div className="content-home">

      <section className="Home">
        <h1>Bem-vindo ao Law Flow!</h1>
        <p>
          O Law Flow é um sistema completo para gerenciar seus clientes e processos
          jurídicos.
        </p>

        <div id="Botoes">
          <ul>
            <li onClick={handleNavigateToClientes}>Cadastrar e consultar clientes</li> {/* Add onClick to navigate to Clientes */}
            <li onClick={handleNavigateToProcessos}>Cadastrar e consultar processos</li> {/* Add onClick to navigate to Processos */}
            <li>Gerenciar prazos e audiências</li>
            {/* Adicione mais informações sobre o sistema aqui */}
          </ul>
        </div>
      </section>
      <footer></footer>
    </div>
  );
};

export default Home;
