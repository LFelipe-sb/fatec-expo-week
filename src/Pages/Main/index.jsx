import React, {useState} from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './style.css';

import LogoFatec from '../../Images/logo-fatec.jpg';
import LogoEtecEmbu from '../../Images/logo-etec.jpg';

function Main() {

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  const styleModal = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      border: "2px solid #000",
      width: "45%",
      textAlign: "center",
      maxHeight: "90%",
      overflowY: "scroll",
    }
  }

  return (
    <>
      <div className="container-main" >
        <Link to='/cadastro-aluno' className='card'>Aluno</Link>
        <Link to='/cadastro-visitante' className='card'>Visitante</Link>
        <p 
          onClick={() => {
            setIsOpen(true);
        }}>* Créditos</p>
      </div>
      <div className='all-modal'>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={styleModal}
        >
          <div>
              <h1 className='title-thanks'>Agradecimentos</h1>
              <p>Sistema desenvolvido para uso durante a Fatec Expo Week em conjunto com alunos e professores da Etec de Embu e Fatec Osasco.</p>
              
              <p>
                <b>Fábio Brussolo</b> <br />
                <i>Professor e Coordenador na Fatec Osasco. (Redes de Computadores).</i>
              </p>

              <p> 
                <b>Gabriel Müller</b> <br />
                <i>Aluno na Etec de Embu. (Desenvolvimento de Sistemas).</i>
              </p> 

              <p> 
                <b>Gustavo Augusto Wustemberg</b> <br />
                <i>Aluno na Etec de Embu. (Desenvolvimento de Sistemas).</i>
              </p>

              <p>
                <b>Laiza Sena</b> <br />
                <i>Aluna na Etec de Embu. (Desenvolvimento de Sistemas).</i>
              </p>

              <p>
                <b>Luís Felipe Santos</b> <br />
                <i>Professor na Etec de Embu. (Desenvolvimento de Sistemas).</i>
              </p>

              <p>
                <b>Marcos Costa</b> <br />
                <i>Professor e Coordenador na Etec de Embu e Professor na Fatec Osasco. (Desenvolvimento de Sistemas e Redes de Computadores).</i>
              </p>

              <p>
                <b>Stephanie</b> <br />
                <i>Auxiliar de Docente na Fatec Osasco.</i>
              </p>

              <p>
                <b>Wesley de Sousa Batista</b> <br />
                <i>Aluno na Fatec Osasco. (Redes de Computadores).</i>
              </p>       
          </div>
          <div className='logos-modal'>
            <img src={LogoFatec} alt="Logo da faculdade Fatec Osasco" />
            <img src={LogoEtecEmbu} alt="logo da escola Técnica Etec Embu" />
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Main;
