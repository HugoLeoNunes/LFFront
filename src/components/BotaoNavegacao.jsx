import React from 'react';
import { Link } from 'react-router-dom';

const BotaoNavegacao = ({ to, label }) => {
  return (
    <Link to={to}>
      <button>{label}</button>
    </Link>
  );
};

export default BotaoNavegacao;
