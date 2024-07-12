import React, { useState } from 'react';

const CadastroProcesso = () => {
  const [numProcesso, setNumProcesso] = useState('');
  const [prazo, setPrazo] = useState('');
  const [audiencia, setAudiencia] = useState('');
  const [status, setStatus] = useState('');
  const [processoRelacionado, setProcessoRelacionado] = useState('');
  const [patrono, setPatrono] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/processo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          numProcesso,
          prazo,
          audiencia,
          status,
          processoRelacionado,
          patrono
        }),
      });

      if (response.status === 200) {
        alert('Processo adicionado!');
        // Limpar os campos do formulário
        setNumProcesso('');
        setPrazo('');
        setAudiencia('');
        setStatus('');
        setProcessoRelacionado('');
        setPatrono('');
        setCliente(''); // Limpe o campo do cliente
      } else {
        alert('Erro ao adicionar processo.');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="numProcesso">Número do Processo:</label>
        <input
          type="text"
          id="numProcesso"
          value={numProcesso}
          onChange={(e) => setNumProcesso(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="prazo">Prazo:</label>
        <input
          type="text"
          id="prazo"
          value={prazo}
          onChange={(e) => setPrazo(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="audiencia">Audiência:</label>
        <input
          type="text"
          id="audiencia"
          value={audiencia}
          onChange={(e) => setAudiencia(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor="processoRelacionado">Processo Relacionado:</label>
        <input
          type="text"
          id="processoRelacionado"
          value={processoRelacionado}
          onChange={(e) => setProcessoRelacionado(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="patrono">Patrono:</label>
        <input
          type="text"
          id="patrono"
          value={patrono}
          onChange={(e) => setPatrono(e.target.value)}
        />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default CadastroProcesso;
