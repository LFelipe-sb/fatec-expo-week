import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Main() {
  return (
    <div className="container-main" >
      <Link to='/cadastro-aluno' className='card'>Aluno</Link>
      <Link to='/cadastro-visitante' className='card'>Visitante</Link>
    </div>
  );
}

export default Main;
