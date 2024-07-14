import React, { useState } from 'react';
import BotaoConsultar from './BotaoConsultar'; // Importe o componente


const ConsultarCliente = () => {
  const [cpf, setCpf] = useState('');
  const [cliente, setCliente] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:5000/cliente?cpf=${cpf}`);
      const data = await response.json();
      setCliente(data);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <button type="submit">Consultar</button>
      </form>

      {cliente && (
        <div>
          <h2>Dados do Cliente</h2>
          <p>CPF: {cliente.cpf}</p>
          <p>Nome: {cliente.nome}</p>
          <p>Telefone: {cliente.telefone}</p>
          {/* ... outros campos */}
        </div>
      )}
    </div>
  );
};

export default ConsultarCliente;
