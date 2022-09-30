import './style.css';
import api from '../../Service/api'
import { useState } from 'react';
import { IMaskInput } from "react-imask";

function Form(props) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [tel, setTel] = useState(null);
  const [ra, setRa] = useState(null);
  const [curso, setCurso] = useState(null);
  const [periodo, setPeriodo] = useState(null);
  const [cpf, setCpf] = useState(null);

  async function createUser(event) {
    event.preventDefault();
    
    try {
      const data = {
        name, email, ra, cpf, curso, periodo, tel
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
      <form>
        <input type="text" placeholder='Nome: ' value={name} onChange={e => setName(e.target.value)} required />
        {props.user == 1 ?
          <IMaskInput
            mask="000000000-0/SP"
            placeholder="RA: "
            value={ra} onChange={e => setRa(e.target.value)}
            required
          /> :
          <IMaskInput
            mask="000.000.000-00"
            placeholder="CPF: "
            value={cpf} onChange={e => setCpf(e.target.value)}
            required
          />}
        {props.user == 1 ? <>
          <input type="text" placeholder='Curso: ' value={curso} onChange={e => setCurso(e.target.value)} required />
          <input type="text" placeholder='Período: ' value={periodo} onChange={e => setPeriodo(e.target.value)} required /> </> : <></>
        }
        <IMaskInput
          mask="(00) 00000-0000"
          placeholder="Telefone:"
          value={tel} onChange={e => setTel(e.target.value)}
          required
        />
        <input type="email" placeholder='Email: ' value={email} onChange={e => setEmail(e.target.value)} required />
        <div className="container-button">
          <button onClick={createUser}>Cadastrar</button>
          <button>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default Form;