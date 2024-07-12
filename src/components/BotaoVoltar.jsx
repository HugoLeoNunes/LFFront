import React from 'react';
import { Link } from 'react-router-dom';

const BotaoVoltar = () => {
  return (
    <Link to="/">
      <button>Voltar para Home</button>
    </Link>
  );
};

export default BotaoVoltar;
