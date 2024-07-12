import React, { useState } from 'react';

const CadastrarProcesso = () => {
  const [numProcesso, setNumProcesso] = useState('');
  const [prazo, setPrazo] = useState('');
  const [audiencia, setAudiencia] = useState('');
  const [status, setStatus] = useState('');
  const [processoRelacionado, setProcessoRelacionado] = useState('');
  const [patrono, setPatrono] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const params = new URLSearchParams();
      params.append('num_processo', numProcesso);
      params.append('prazo', prazo);
      params.append('audiencia', audiencia);
      params.append('status', status);
      params.append('processo_relacionado', processoRelacionado);
      params.append('patrono', patrono);

      const url = 'http://127.0.0.1:5000/processo?' + params.toString();

      const response = await fetch(url, {
        method: 'POST',
      });

      if (response.ok) {
        // Processo cadastrado com sucesso
        alert('Processo cadastrado com sucesso!');
        // Limpar os campos do formulário
        setNumProcesso('');
        setPrazo('');
        setAudiencia('');
        setStatus('');
        setProcessoRelacionado('');
        setPatrono('');
      } else {
        // Erro ao cadastrar o processo
        alert('Erro ao cadastrar o processo!');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao cadastrar o processo!');
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
      <button type="submit">Cadastrar Processo</button>
    </form>
  );
};

export default CadastrarProcesso;
