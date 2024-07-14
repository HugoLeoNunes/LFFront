import React, { useState, useEffect } from 'react';

const ListarProcessos = () => {
  const [processos, setProcessos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/processos');
        const data = await response.json();
        setProcessos(data.processos);
        console.log(data);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchData();
  }, []); // A dependência vazia [] faz com que o efeito seja executado apenas uma vez, na montagem do componente

  const handleDelete = async (numProcesso) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/processo?num_processo=${numProcesso}`, {
        method: 'DELETE',
      });

      if (response.status === 200) {
        alert('Processo removido!');
        // Atualizar a lista de processos
        setProcessos(processos.filter((process) => process.Num_processo !== numProcesso));
      } else {
        alert('Erro ao remover processo.');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  // Adicione um novo useEffect para atualizar a lista após a exclusão
  useEffect(() => {
    // Faça uma nova requisição à API para obter a lista atualizada de processos
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/processos');
        const data = await response.json();
        setProcessos(data.processos);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchData();
  }, [processos]); // Adicione 'processos' como dependência para que o efeito seja executado sempre que a lista de processos mudar

  return (
    <table>
      <thead>
        <tr>
          <th>Número do Processo</th>
          <th>Prazo</th>
          <th>Audiência</th>
          <th>Status</th>
          <th>Processo Relacionado</th>
          <th>Patrono</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {processos.map((process) => (
          <tr key={process.Num_processo}>
            <td>{process.Num_processo}</td>
            <td>{process.prazo}</td>
            <td>{process.audiencia}</td>
            <td>{process.status}</td>
            <td>{process.processo_relacionado}</td>
            <td>{process.patrono}</td>
            <td>
              <button onClick={() => handleDelete(process.Num_processo)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListarProcessos;
