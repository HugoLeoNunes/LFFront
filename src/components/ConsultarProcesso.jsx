import React, { useState } from 'react';

const ConsultarProcesso = () => {
  const [numProcesso, setNumProcesso] = useState('');
  const [processo, setProcesso] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:5000/processo?num_processo=${numProcesso}`);
      const data = await response.json();
      setProcesso(data);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div>
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
        <button type="submit">Consultar</button>
      </form>

      {processo && (
        <div>
          <h2>Dados do Processo</h2>
          <p>Número do Processo: {processo.num_processo}</p>
          <p>Prazo: {processo.prazo}</p>
          <p>Audiência: {processo.audiencia}</p>
          {/* ... outros campos */}
        </div>
      )}
    </div>
  );
};

export default ConsultarProcesso;
