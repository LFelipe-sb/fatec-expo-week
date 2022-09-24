import './style.css';
import api from '../../Service/api'
import { useState } from 'react';

function Form(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [ra, setRa] = useState('');
  const [curso, setCurso] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [cpf, setCpf] = useState('');

  async function createUser() {
    try {
      const data = {
        name, email, ra, cpf, curso, periodo
      }

      await api.post('/user', data);

      alert(`Usuário ${name} cadastrado com sucesso!`)

    }
    catch (err) {
      alert(`Houve um erro: ${err}`)
    }
  }
  return (
    <div className="container-form">
      <form action="post">
        <input type="text" placeholder='Nome: ' value={name} onChange={e => setName(e.target.value)} />
        {props.user == 1 ?
          <input type="text" placeholder='RA: ' value={ra} onChange={e => setRa(e.target.value)} /> :
          <input type="text" placeholder='CPF: ' value={cpf} onChange={e => setCpf(e.target.value)} />}
        {props.user == 1 ? <>
          <input type="text" placeholder='Curso: ' value={curso} onChange={e => setCurso(e.target.value)} />
          <input type="text" placeholder='Período: ' /> </> : <></>
        }
        <input type="tel" placeholder='Telefone: ' value={tel} onChange={e => setTel(e.target.value)} />
        <input type="mail" placeholder='Email: ' value={email} onChange={e => setEmail(e.target.value)} />
        <div className="container-button">
          <button>Cadastrar</button>
          <button>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default Form;