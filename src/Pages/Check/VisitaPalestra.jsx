import React from 'react'
import Tabela from '../../Components/Table/index.jsx';
import './style.css';

function VisitaPalestra() {
    return (
        <div>
            <p>Bem vindo(a): <b>{sessionStorage.getItem("userName")}</b></p>

            <h3>Quais seus interesses?</h3>
            <Tabela colum2='Código' colum3='Descrição' />
        </div>
    )
}

export default VisitaPalestra