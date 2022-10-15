import './style.css';
import api from '../../Service/api'
import { useState } from 'react';
import { IMaskInput } from "react-imask";
import { Link, useNavigate } from 'react-router-dom';

function Form(props) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [tel, setTel] = useState(null);
  const [ra, setRa] = useState(null);
  const [curso, setCurso] = useState(null);
  const [periodo, setPeriodo] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [btnName, setBtnName] = useState('Cadastrar');
  const [isDisabled, setIsDisabled] = useState(false);

  const navigate = useNavigate();

  async function createUser(event) {
    event.preventDefault();
    
    try {
      const data = {
        name, email, ra, cpf, curso, periodo, tel
      }

      if(btnName === 'Acessar') {
        navigate("/visita-palestra");
      } else {
        await api.post('/user', data);

        alert(`Usuário ${name} cadastrado com sucesso!`);
  
        setCpf('');
        setName('');
        setTel('');
        setEmail('');
      }
    }
    catch (err) {
      alert(`Houve um erro: ${err}`)
    }
  }

  async function getVisitorInfo() {
    const { data } = await api.get(`/user/${cpf}`);
    if(data) {
      setName(data[0].nome);
      setTel(data[0].telefone);
      setEmail(data[0].email);
      setBtnName('Acessar');
      setIsDisabled(true);
    }
  }

  async function getStudentInfo() {
    const { data } = await api.get(`/student/${ra}`);
    if(data) {
      setName(data[0].nome);
      setTel(data[0].telefone);
      setEmail(data[0].email);
      setCurso(data[0].descricao);
      setPeriodo(data[0].semestre);
      setBtnName('Acessar');
      setIsDisabled(true);
    }
  }

  return (
    <div className="container-form">
      <form>
        
        {props.user == 1 ?
          <IMaskInput
            mask="0000000000000"
            placeholder="RA: "
            value={ra} onChange={e => setRa(e.target.value)}
            required
            onBlur={getStudentInfo}
          /> :
          <IMaskInput
            mask="000.000.000-00"
            placeholder="CPF: "
            value={cpf} onChange={e => setCpf(e.target.value)}
            required
            onBlur={getVisitorInfo}

          />}
        <input type="text" placeholder='Nome: ' value={name} onChange={e => setName(e.target.value)} required disabled={isDisabled} />
        {props.user == 1 ? <>
          <input type="text" placeholder='Curso: ' value={curso} onChange={e => setCurso(e.target.value)} required disabled={isDisabled}/>
          <input type="text" placeholder='Período: ' value={periodo} onChange={e => setPeriodo(e.target.value)} required disabled={isDisabled}/> </> : <></>
        }
        <IMaskInput
          mask="(00) 00000-0000"
          placeholder="Telefone:"
          value={tel} onChange={e => setTel(e.target.value)}
          required
          disabled={isDisabled}
        />
        <input type="email" placeholder='Email: ' value={email} onChange={e => setEmail(e.target.value)} required disabled={isDisabled}/>
        <div className="container-button">
          <button onClick={createUser}>{btnName}</button>
          <Link to='/'><button>Cancelar</button></Link>
        </div>
      </form>
    </div>
  );
}

export default Form;