import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ListaClientes = () => {
  const [clientes, setClientes] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/clientes');
        const data = await response.json();
        setClientes(data.clientes);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (cpf) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/cliente?cpf=${cpf}`, {
        method: 'DELETE',
      });

      if (response.status === 200) {
        alert('Cliente removido!');
        // Atualizar a lista de clientes
        setClientes(clientes.filter((client) => client.cpf !== cpf));
      } else {
        alert('Erro ao remover cliente.');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  const handleClientClick = (cpf) => {
    // Navigate to the client details page with the CPF as a parameter
    navigate(`/cliente/${cpf}`); 
  };

  return (
    <table>
      <thead>
        <tr>
          <th>CPF</th>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((client) => (
          <tr key={client.cpf} onClick={() => handleClientClick(client.cpf)}> 
            <td>{client.cpf}</td>
            <td>{client.nome}</td>
            <td>{client.telefone}</td>
            <td>
              <button onClick={() => handleDelete(client.cpf)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListaClientes;
